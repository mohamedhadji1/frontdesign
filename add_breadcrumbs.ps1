
# This script adds the Breadcrumbs import and component to all pages that are missing it.
# It infers breadcrumb items from the file path.

$srcRoot = "c:\Users\LENOVO\Documents\GitHub\frontdesign\src\app"

# Map of route segment -> display label
$labels = @{
  "services"                                      = "Services"
  "solutions"                                     = "Solutions"
  "about"                                         = "About"
  "sectors"                                       = "Sectors"
  "careers"                                       = "Careers"
  "contact"                                       = "Contact"
  "certifications"                                = "Certifications"
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
  "access-rights-assessment"                      = "Access Rights Assessment"
  "bcp-drp-development"                           = "BCP & DRP Development"
  "compliance-alignment"                          = "Compliance Alignment"
  "international-standards"                       = "International Standards"
  "legal"                                         = "Legal"
  "data-classification"                           = "Data Classification"
  "governance-risk-management-support"            = "Risk Management Support"
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
  "architecture-assessment"                       = "Architecture Assessment"
  "cloud-environment-assessment"                  = "Cloud Assessment"
  "core-internet-banking-system-assessment"       = "Core Banking Assessment"
  "devsecops"                                     = "DevSecOps"
  "hardening-guides"                              = "Hardening Guides"
  "industrial-system-assessment"                  = "Industrial Systems"
  "infrastructure-assessment"                     = "Infrastructure Assessment"
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
}

# Parent hrefs
$hrefs = @{
  "services"                           = "/services"
  "solutions"                          = "/solutions"
  "red-team"                           = "/services/red-team"
  "offensive-security"                 = "/services/offensive-security"
  "defensive-security"                 = "/services/defensive-security"
  "governance-risk-compliance"         = "/services/governance-risk-compliance"
  "security-assessment"                = "/services/security-assessment"
  "cyber-exercise"                     = "/services/cyber-exercise"
  "cybersecurity-strategy-consulting"  = "/services/cybersecurity-strategy-consulting"
  "information-system-security-assessment" = "/services/governance-risk-compliance/information-system-security-assessment"
  "compliance-alignment"               = "/services/governance-risk-compliance/compliance-alignment"
}

$pages = Get-ChildItem -Path $srcRoot -Recurse -Filter "page.tsx" | 
  Where-Object { (Get-Content $_.FullName | Select-String "Breadcrumb") -eq $null }

$count = 0

foreach ($page in $pages) {
    $relPath = $page.FullName.Replace($srcRoot + "\", "").Replace("\page.tsx", "")
    $segments = $relPath.Split("\")
    
    # Skip root page (home)
    if ($segments.Count -eq 0 -or ($segments.Count -eq 1 -and $segments[0] -eq "")) {
        continue
    }
    
    # Build breadcrumb items array as JS string
    $breadcrumbItems = ""
    $cumulativePath = ""
    
    for ($i = 0; $i -lt $segments.Count; $i++) {
        $seg = $segments[$i]
        $isLast = ($i -eq $segments.Count - 1)
        $label = if ($labels.ContainsKey($seg)) { $labels[$seg] } else { 
            # title-case the segment
            ($seg -replace "-", " ") | ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) }
        }
        $cumulativePath = $cumulativePath + "/" + $seg
        
        if ($isLast) {
            $breadcrumbItems += "              { label: `"$label`" },"
        } else {
            $breadcrumbItems += "              { label: `"$label`", href: `"$cumulativePath`" },"
        }
        $breadcrumbItems += "`n"
    }
    
    $content = Get-Content $page.FullName -Encoding UTF8
    $contentStr = $content -join "`n"
    
    # Check if import already exists (double-check)
    if ($contentStr -match "Breadcrumb") {
        Write-Host "SKIP (already has Breadcrumb): $($page.FullName)"
        continue
    }
    
    # Add import after last import line
    # Find the last import line
    $importLine = -1
    for ($i = 0; $i -lt $content.Length; $i++) {
        if ($content[$i] -match "^import ") {
            $importLine = $i
        }
    }
    
    if ($importLine -eq -1) {
        Write-Host "SKIP (no imports found): $($page.FullName)"
        continue
    }
    
    # Insert import
    $newImport = 'import { Breadcrumbs } from "@/components/ui/Breadcrumbs";'
    $newContent = @()
    for ($i = 0; $i -le $importLine; $i++) {
        $newContent += $content[$i]
    }
    $newContent += $newImport
    for ($i = $importLine + 1; $i -lt $content.Length; $i++) {
        $newContent += $content[$i]
    }
    
    # Now inject the <Breadcrumbs> component before the first <motion.h1 or <motion.h2 in the JSX
    $breadcrumbJsx = "          <Breadcrumbs`n            items={[`n$breadcrumbItems            ]}`n          />"
    
    $injected = $false
    $finalContent = @()
    for ($i = 0; $i -lt $newContent.Length; $i++) {
        $line = $newContent[$i]
        # Inject before the first motion.h1 or motion.h2 that is in a hero/header context
        if (-not $injected -and ($line -match "<motion\.h[12]" -or $line -match "<h[12] ") -and $i -gt $importLine) {
            $finalContent += $breadcrumbJsx
            $injected = $true
        }
        $finalContent += $line
    }
    
    if (-not $injected) {
        Write-Host "WARN (could not inject): $($page.FullName)"
        continue
    }
    
    # Write back
    $finalContent | Set-Content $page.FullName -Encoding UTF8
    $count++
    Write-Host "DONE: $($page.FullName)"
}

Write-Host "`n=== Added breadcrumbs to $count pages ==="
