
# Properly fix all breadcrumbs - replace the broken Breadcrumbs block with correct one
# Pattern:
#   /services/<category>       => Services > Category
#   /services/<cat>/<page>     => Category > Page  (e.g. GRC > Virtual CISO/DPO)
#   /services/<cat>/<mid>/<pg> => Category > Mid > Page
#   /solutions/<page>          => Solutions > Page

$srcRoot = "c:\Users\LENOVO\Documents\GitHub\frontdesign\src\app"

$labels = @{
  "services"                                      = "Services"
  "solutions"                                     = "Solutions"
  "red-team"                                      = "Red Team"
  "offensive-security"                            = "Offensive Security"
  "defensive-security"                            = "Defensive Security"
  "governance-risk-compliance"                    = "GRC"
  "security-assessment"                           = "Security Assessment"
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
  "cip-platform"                                  = "CIP Platform"
  "dns-filtering"                                 = "DNS Filtering"
  "keystone-arena"                                = "Keystone Arena"
  "keystone-dlp"                                  = "Keystone DLP"
  "soc-subscription"                              = "SOC Subscription"
}

function Get-Label($seg) {
  if ($labels.ContainsKey($seg)) { return $labels[$seg] }
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
        Write-Host "SKIP (dynamic): $relPath"
        continue
    }

    $root = $segments[0]

    # Build correct items array
    $items = @()

    if ($root -eq "services") {
        if ($segments.Count -eq 1) {
            # /services - just label
            $items += '{ label: "Services" }'
        } elseif ($segments.Count -eq 2) {
            # /services/<category>  => Services > Category
            $catLabel = Get-Label $segments[1]
            $items += '{ label: "Services", href: "/services" }'
            $items += "{ label: `"$catLabel`" }"
        } else {
            # /services/<cat>/... => cat > ... > page  (skip "services")
            $catSeg = $segments[1]
            $catLabel = Get-Label $catSeg
            $catHref = "/services/$catSeg"
            $items += "{ label: `"$catLabel`", href: `"$catHref`" }"

            # Intermediate segments
            for ($i = 2; $i -lt ($segments.Count - 1); $i++) {
                $midLabel = Get-Label $segments[$i]
                $midPath = "/services/" + ($segments[1..$i] -join "/")
                $items += "{ label: `"$midLabel`", href: `"$midPath`" }"
            }

            # Last (current) page
            $lastLabel = Get-Label $segments[$segments.Count - 1]
            $items += "{ label: `"$lastLabel`" }"
        }
    } elseif ($root -eq "solutions") {
        if ($segments.Count -eq 1) {
            $items += '{ label: "Solutions" }'
        } else {
            $pageLabel = Get-Label $segments[$segments.Count - 1]
            $items += '{ label: "Solutions", href: "/solutions" }'
            $items += "{ label: `"$pageLabel`" }"
        }
    } else {
        # Other (sectors etc.)
        for ($i = 0; $i -lt $segments.Count; $i++) {
            $seg = $segments[$i]
            $label = Get-Label $seg
            $isLast = ($i -eq $segments.Count - 1)
            $href = "/" + ($segments[0..$i] -join "/")
            if ($isLast) {
                $items += "{ label: `"$label`" }"
            } else {
                $items += "{ label: `"$label`", href: `"$href`" }"
            }
        }
    }

    # Build the replacement JSX block
    $indentedItems = ($items | ForEach-Object { "              $_," }) -join "`n"
    $newBreadcrumb = "          <Breadcrumbs`n            items={[`n$indentedItems`n            ]}`n          />"

    # Read raw file content as a single string
    $raw = [System.IO.File]::ReadAllText($page.FullName, [System.Text.Encoding]::UTF8)

    # Match the entire <Breadcrumbs ... /> block (could span many lines)
    # Use a greedy pattern between <Breadcrumbs and />
    $pattern = '(?s)<Breadcrumbs[\s\S]*?/>'
    
    # Count matches
    $matches = [regex]::Matches($raw, $pattern)
    if ($matches.Count -eq 0) {
        Write-Host "WARN (no Breadcrumbs tag found): $relPath"
        continue
    }

    $replaced = [regex]::Replace($raw, $pattern, $newBreadcrumb, [System.Text.RegularExpressions.RegexOptions]::Singleline)

    if ($replaced -eq $raw) {
        Write-Host "UNCHANGED: $relPath"
        continue
    }

    [System.IO.File]::WriteAllText($page.FullName, $replaced, [System.Text.Encoding]::UTF8)
    $count++
    Write-Host "FIXED: $relPath   =>   items: $($items -join ' | ')"
}

Write-Host "`n=== Fixed $count pages ==="
