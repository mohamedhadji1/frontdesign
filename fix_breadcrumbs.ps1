
# Fix breadcrumbs: start from parent category, NOT from "services"
# Pattern: GRC > Virtual CISO/DPO   (NOT: Services > GRC > Virtual CISO/DPO)
# For top-level service pages: Services > Red Team

$srcRoot = "c:\Users\LENOVO\Documents\GitHub\frontdesign\src\app"

$labels = @{
  "services"                                      = "Services"
  "solutions"                                     = "Solutions"
  "red-team"                                      = "Red Team"
  "offensive-security"                            = "Offensive Security"
  "defensive-security"                            = "Defensive Security"
  "governance-risk-compliance"                    = "GRC"
  "security-assessment"                           = "Security Assessment"
  "assessments-risk-assessment"                   = "Risk Assessment"
  "awareness"                                     = "Awareness"
  "ctf-competition-organization"                  = "CTF"
  "cyber-attack-simulation"                       = "Cyber Attack Simulation"
  "cyber-exercise"                                = "Cyber Exercise"
  "cybersecurity-strategy-consulting"             = "Strategy Consulting"
  "strategy-governance"                           = "Strategy & Governance"
  "ai-cybersecurity"                              = "AI Cybersecurity"
  "training"                                      = "Training"
  "web-mobile-application-assessment"             = "Web & Mobile Assessment"
  "external-internal-penetration-testing"         = "Penetration Testing"
  "hardware-testing-reverse-engineering"          = "Hardware Testing"
  "offensive-assessments"                         = "Offensive Assessments"
  "physical-intrusion-test"                       = "Physical Intrusion"
  "social-engineering"                            = "Social Engineering"
  "incident-management"                           = "Incident Management"
  "anti-phishing"                                 = "Anti-Phishing"
  "digital-forensics"                             = "Digital Forensics"
  "threat-intelligence"                           = "Threat Intelligence"
  "vulnerability-watch"                           = "Vulnerability Watch"
  "incident-response"                             = "Incident Response"
  "threat-hunting"                                = "Threat Hunting"
  "malware-analysis"                              = "Malware Analysis"
  "Implementation-cert"                           = "Certification Implementation"
  "virtual-ciso-dpo"                              = "Virtual CISO/DPO"
  "vulnerability-scanning"                        = "Vulnerability Scanning"
  "dark-web-monitoring"                           = "Dark Web Monitoring"
  "blue-team"                                     = "Blue Team"
  "soc-management"                                = "SOC Management"
  "access-rights-assessment"                      = "Access Rights"
  "bcp-drp-development"                           = "BCP & DRP"
  "compliance-alignment"                          = "Compliance"
  "international-standards"                       = "International Standards"
  "legal"                                         = "Legal"
  "data-classification"                           = "Data Classification"
  "governance-risk-management-support"            = "Risk Management"
  "information-system-security-assessment"        = "IS Security Assessment"
  "regulatory"                                    = "Regulatory"
  "standards"                                     = "Standards"
  "iso-22301-certification-support"               = "ISO 22301"
  "iso-27001-certification-support"               = "ISO 27001"
  "iso-27701-certification-support"               = "ISO 27701"
  "iso-42001-certification-support"               = "ISO 42001"
  "personal-data-protection"                      = "Personal Data Protection"
  "risk-assessment"                               = "Risk Assessment"
  "security-policy-development"                   = "Security Policy"
  "swift-csp-compliance-support"                  = "SWIFT CSP"
  "active-directory-assessment"                   = "Active Directory"
  "application-security-support"                  = "Application Security"
  "architecture-assessment"                       = "Architecture"
  "cloud-environment-assessment"                  = "Cloud Assessment"
  "core-internet-banking-system-assessment"       = "Core Banking"
  "devsecops"                                     = "DevSecOps"
  "hardening-guides"                              = "Hardening Guides"
  "industrial-system-assessment"                  = "Industrial Systems"
  "infrastructure-assessment"                     = "Infrastructure"
  "network-security-architecture"                 = "Network Security"
  "system-hardening"                              = "System Hardening"
  "technical-assessment"                          = "Technical Assessment"
  "technical-assistance"                          = "Technical Assistance"
  "capacity-and-maturity-assessment"              = "Maturity Assessment"
  "cert-implementation"                           = "CERT Implementation"
  "critical-infrastructure-protection"            = "CIP"
  "cyber-crisis-management-framework"             = "Crisis Management"
  "cyber-resilience-framework"                    = "Resilience Framework"
  "development-of-national-and-sectoral-cybersecurity-strategy" = "National Strategy"
  "soc-implementation"                            = "SOC Implementation"
  "business-continuity-management-resilience-and-recovery" = "BCM & Resilience"
  "cybersecurity-and-investigation"               = "Cybersecurity & Investigation"
  "governance-risk-compliance-exercise"           = "GRC Exercise"
  "cip-platform"                                  = "CIP Platform"
  "dns-filtering"                                 = "DNS Filtering"
  "keystone-arena"                                = "Keystone Arena"
  "keystone-dlp"                                  = "Keystone DLP"
  "soc-subscription"                              = "SOC Subscription"
  "slug"                                          = $null  # dynamic segments - skip
}

function Get-Label($seg) {
  if ($labels.ContainsKey($seg)) { return $labels[$seg] }
  # fallback: title-case
  $words = $seg -replace "-", " "
  return (Get-Culture).TextInfo.ToTitleCase($words)
}

$pages = Get-ChildItem -Path $srcRoot -Recurse -Filter "page.tsx" | 
  Where-Object { (Select-String -Path $_.FullName -Pattern "Breadcrumbs" -Quiet) -eq $true }

$count = 0

foreach ($page in $pages) {
    $relPath = $page.FullName.Replace($srcRoot + "\", "").Replace("\page.tsx", "")
    $segments = $relPath.Split("\")
    
    # Skip dynamic [slug] pages
    if ($segments | Where-Object { $_ -match "^\[" }) {
        Write-Host "SKIP (dynamic): $($page.FullName)"
        continue
    }
    
    # Determine the root namespace (services, solutions, etc.)
    $root = $segments[0]   # "services", "solutions", etc.
    
    # Build items:
    # Rule: Skip "services" as a segment - start from the category
    # BUT if the page IS the top-level service category (e.g. /services/red-team), show Services > RedTeam
    # If deeper (e.g. /services/grc/virtual-ciso), show GRC > Virtual CISO/DPO
    
    $items = @()
    
    if ($root -eq "services") {
        if ($segments.Count -eq 1) {
            # /services itself - just "Services"
            $items += "{ label: `"Services`" }"
        } elseif ($segments.Count -eq 2) {
            # /services/<category>  => Services > Category
            $catLabel = Get-Label $segments[1]
            $items += "{ label: `"Services`", href: `"/services`" }"
            $items += "{ label: `"$catLabel`" }"
        } else {
            # /services/<category>/<page>  => Category > Page  (skip "services")
            $catSeg = $segments[1]
            $catLabel = Get-Label $catSeg
            $catHref = "/services/$catSeg"
            $items += "{ label: `"$catLabel`", href: `"$catHref`" }"
            
            # For 4+ deep pages, add intermediate
            for ($i = 2; $i -lt ($segments.Count - 1); $i++) {
                $midLabel = Get-Label $segments[$i]
                $midHref = "/" + ($segments[0..$i] -join "/")
                $items += "{ label: `"$midLabel`", href: `"$midHref`" }"
            }
            
            # Last segment (current page)
            $lastLabel = Get-Label $segments[$segments.Count - 1]
            $items += "{ label: `"$lastLabel`" }"
        }
    } elseif ($root -eq "solutions") {
        if ($segments.Count -eq 1) {
            $items += "{ label: `"Solutions`" }"
        } else {
            $pageLabel = Get-Label $segments[$segments.Count - 1]
            $items += "{ label: `"Solutions`", href: `"/solutions`" }"
            $items += "{ label: `"$pageLabel`" }"
        }
    } else {
        # Other roots (sectors, about, etc.)
        foreach ($i in 0..($segments.Count - 1)) {
            $seg = $segments[$i]
            $label = Get-Label $seg
            if ($null -eq $label) { continue }
            $isLast = ($i -eq $segments.Count - 1)
            $href = "/" + ($segments[0..$i] -join "/")
            if ($isLast) {
                $items += "{ label: `"$label`" }"
            } else {
                $items += "{ label: `"$label`", href: `"$href`" }"
            }
        }
    }
    
    # Build the JSX items string
    $itemsJsx = ($items | ForEach-Object { "              $_," }) -join "`n"
    $newBreadcrumb = "          <Breadcrumbs`n            items={[`n$itemsJsx`n            ]}`n          />"
    
    # Read file content
    $content = Get-Content $page.FullName -Encoding UTF8
    $contentStr = $content -join "`n"
    
    # Replace the old <Breadcrumbs ... /> block with the new one
    # Match multi-line Breadcrumbs block
    $pattern = '(?s)<Breadcrumbs\s+items=\{[^}]*?\]\}\s*/>'
    $newContentStr = [regex]::Replace($contentStr, $pattern, $newBreadcrumb)
    
    if ($newContentStr -eq $contentStr) {
        Write-Host "UNCHANGED (regex no match): $($page.FullName)"
        continue
    }
    
    $newContentStr | Set-Content $page.FullName -Encoding UTF8 -NoNewline
    $count++
    Write-Host "FIXED: $relPath"
}

Write-Host "`n=== Fixed $count pages ==="
