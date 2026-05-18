"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  UsersRound,
  ShieldAlert,
  Activity,
  Search,
  AlertCircle,
  Shield,
  Eye,
  MailWarning,
  Flame,
  Binary,
  Target,
  FileText,
  ChevronRight,
  ArrowRight,
  Info,
  Clock,
  CheckCircle2,
  Lock,
  Network
} from "lucide-react";
import { CyberSectionDivider } from "@/components/ui/CyberSectionDivider";
import { HeroTypeLine } from "@/components/ui/HeroTypeLine";
import { ContactCTASection } from "@/components/home/ContactCTASection";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";

// Managed Services Benefits (First Column Content)
const benefits = [
  {
    title: "Specialized Expertise",
    desc: "Outsourcing IT security to a team of experts at Keystone means benefiting from sharp expertise and skills in cybersecurity. This ensures constant monitoring and rapid response to threats, with deep knowledge and mastery covering the most recent security technologies."
  },
  {
    title: "Focus on Core Business",
    desc: "By entrusting security to Keystone's experts, businesses can focus on their core business. This allows internal resources to be allocated to strategic tasks rather than dealing with security monitoring and management."
  },
  {
    title: "Risk Reduction",
    desc: "Keystone's managed security team helps minimize the risks of data loss, downtime, and financial impact associated with cyberattacks. Continuous monitoring enables rapid detection and immediate response, thus reducing potential consequences."
  },
  {
    title: "Cost-Effectiveness",
    desc: "Outsourcing security services can be more cost-effective than maintaining a dedicated internal team. This avoids costs related to recruitment, training, and staff management. Furthermore, by choosing a solution tailored to your needs, you control your expenses."
  },
  {
    title: "Adaptability and Scalability",
    desc: "Managed security solutions offer great flexibility to adapt to the changing needs of businesses. They can be scaled as the business evolves or as new risks emerge in the digital landscape."
  },
  {
    title: "Compliance and Standards",
    desc: "By relying on a specialized team, businesses can better comply with security standards and regulations. Keystone ensures continuous compliance with current regulatory requirements."
  }
];

// Interactive Sub-Services Data (Second Column & Nested Content)
const pillars = {
  soc: {
    title: "Managed SOC",
    subtitle: "Surveillance and Proactive Response",
    intro: "Keystone offers a managed SOC to ensure continuous monitoring and a proactive response to security threats.",
    features: [
      { name: "24/7 Monitoring", desc: "Constant monitoring of security-related activities and events to detect anomalies and potential threats." },
      { name: "Threat Detection", desc: "Early identification of emerging threats through advanced detection tools and technologies." },
      { name: "Analysis and Response", desc: "In-depth analysis of security incidents and immediate response to contain threats and limit damage." },
      { name: "Vulnerability Management", desc: "Continuous assessment of vulnerabilities and potential risks for proactive protection." },
      { name: "Reports and Analysis", desc: "Provision of detailed reports on SOC activities, detected threats, and actions taken." }
    ],
    closing: "Keystone ensures constant monitoring and proactive threat response through its managed SOC. Contact us to strengthen the security of your systems.",
    items: [
      {
        id: "blue-team",
        name: "Blue Team",
        title: "Blue Team Service: Active Hardening and Monitoring",
        desc: "Keystone's Blue Team service is dedicated to strengthening your company's security by offering proactive monitoring, advanced management of SIEM (Security Information and Event Management) solutions, and the implementation of endpoint detection and response (EDR/XDR) solutions.",
        details: [
          {
            label: "24/7 Monitoring",
            text: "24/7 monitoring is the continuous surveillance of your IT systems, networks, and applications to detect suspicious or abnormal activities. This involves using advanced tools to monitor security events, traffic anomalies in real-time, and to identify unusual behaviors that could indicate malicious activity."
          },
          {
            label: "SIEM Solutions Management and Optimization",
            text: "Management and optimization of SIEM solutions encompass the complete handling of your SIEM system, from configuration to optimization. Keystone provides expert management of your SIEM platform, including use case and alert management, custom dashboard creation, and event correlation to ensure effective threat detection."
          },
          {
            label: "Implementation of Managed EDR/XDR/SIEM Solutions",
            text: "Keystone offers the implementation and management of advanced Endpoint Detection and Response (EDR/XDR) as well as SIEM solutions. These solutions provide deep visibility into network and endpoint activities, enabling early detection and rapid threat response."
          },
          {
            label: "Use Case Development",
            text: "Use case development involves creating specific scenarios based on behavior models or malicious activity patterns. These scenarios help identify abnormal behaviors or suspicious activities, enabling proactive threat detection."
          },
          {
            label: "Log Management",
            text: "Log management consists of collecting, storing, analyzing, and interpreting log data from various sources. Keystone effectively manages these logs to detect anomalies, identify suspicious activities, and improve visibility for rapid response to security incidents."
          }
        ],
        conclusion: "Keystone offers a comprehensive range of Blue Team services for proactive monitoring, optimal security solution management, and effective response to threats. We work in close collaboration with your company to ensure enhanced protection against cyber threats."
      },
      {
        id: "vuln-scan",
        name: "Vulnerability Scanning",
        title: "Keystone: Your Partner in Proactive Security",
        desc: "Keystone offers comprehensive vulnerability scanning services, ranging from detecting flaws and potential risks to proactive vulnerability management and regulatory compliance. Our proactive approach aims to strengthen your company's security against emerging threats.",
        details: [
          {
            label: "Vulnerability Management",
            text: "Vulnerability management consists of identifying, assessing, and prioritizing vulnerabilities within your IT infrastructure. Keystone conducts deep analyses to detect potential weaknesses and security risks, and proposes corrective actions to mitigate these vulnerabilities."
          },
          {
            label: "External Scan",
            text: "External scans are security assessments performed from outside your network to detect vulnerabilities accessible from the internet. Keystone uses specialized tools to examine open ports, exposed services, and identify vulnerabilities accessible from the outside, thereby minimizing the risks of external attacks."
          },
          {
            label: "Technical Compliance Management",
            text: "Technical compliance management involves verifying that your systems comply with security standards and best practices recommended by current regulations. Keystone ensures compliance with security standards (such as ISO, NIST, etc.) by conducting Assessments, assessments, and implementing corrective measures to guarantee compliance with regulatory requirements."
          }
        ],
        conclusion: ""
      },
      {
        id: "incidents",
        name: "Incident Management",
        title: "Keystone: Your Trusted Partner in Reactive Security",
        desc: "Incident management is crucial to minimize the impacts of security threats. Here are the key aspects of the incident management service offered by Keystone:",
        details: [
          {
            label: "Detection and Assessment",
            text: "Keystone ensures early detection of security incidents. This includes proactive monitoring of networks and systems to spot suspicious activities, followed by an in-depth assessment to determine the nature and scope of the incidents."
          },
          {
            label: "Classification and Prioritization",
            text: "Once detected, incidents are classified and prioritized according to their severity. Keystone establishes priority levels for rapid and effective intervention, focusing on the most critical or urgent incidents."
          },
          {
            label: "Response and Containment",
            text: "Keystone implements response plans to contain incidents and limit their spread. This involves an immediate response to isolate threats, restore operational normalcy, and prevent any recurrence."
          },
          {
            label: "Post-Incident Analysis and Continuous Improvement",
            text: "After resolution, a post-incident analysis is conducted to understand root causes, evaluate response strategies, and implement continuous improvement measures aimed at strengthening resilience against future attacks."
          },
          {
            label: "Reporting and Documentation",
            text: "Keystone provides detailed reports on occurred incidents, their impacts, measures taken, and recommendations to avoid similar future incidents. This documentation is crucial for better preparation and long-term risk management."
          }
        ],
        conclusion: "Keystone is committed to proactive and reactive incident management to minimize impacts on your activities. We offer advanced expertise to effectively manage security incidents and reduce risks for your business."
      },
      {
        id: "threat-intel",
        name: "Threat Intelligence",
        title: "Keystone: Your Reliable Source of Threat Intelligence",
        desc: "Keystone's Threat Intelligence service offers in-depth analysis of threats and trends in the field of IT security. Here is an overview of the underlying services:",
        details: [
          {
            label: "Threat Watch",
            text: "Keystone conducts a constant watch on emerging threats, collecting information from multiple sources to identify new attacks, malware, and tactics used by cybercriminals."
          },
          {
            label: "Trend Analysis",
            text: "In-depth analysis of trends helps understand the evolution of attacks, attackers' motivations, and techniques used. This helps forecast future threats and take preventive measures."
          },
          {
            label: "Data Collection",
            text: "Keystone collects and analyzes a variety of data, including indicators of compromise (IOCs), threat actor information, vulnerabilities, incident reports, etc., for a comprehensive risk assessment."
          },
          {
            label: "Reporting and Information Sharing",
            text: "We provide detailed reports on detected threats, major vulnerabilities, and recommendations to strengthen security. We also encourage information sharing within the community for enhanced collective security."
          },
          {
            label: "Integration into Security Strategies",
            text: "Threat information is used to develop effective security strategies, including creating detection rules, updating security policies, and training teams on the latest threats."
          }
        ],
        conclusion: "Keystone provides up-to-date and relevant threat intelligence to strengthen your security posture. Contact us for an in-depth threat analysis and recommendations to protect your business against cyber threats."
      },
      {
        id: "dark-web",
        name: "Dark Web Monitoring",
        title: "Keystone offers dark web monitoring to help identify compromised data and potential threats to security.",
        desc: "Keystone offers comprehensive coverage for dark web monitoring, helping businesses detect, understand, and respond to potential threats and data leaks that could impact their security.",
        details: [
          {
            label: "Compromised Information Monitoring",
            text: "Identification of Sensitive Data: Keystone monitors the dark web to detect any mention of sensitive information such as credentials, credit card numbers, access details, etc., associated with your organization.\n\nReal-time Alerts: The service sends immediate alerts as soon as it detects compromised data or mentions of your company on dark web forums or marketplaces."
          },
          {
            label: "Threat Watch",
            text: "Proactive Search: Keystone explores dark web forums, markets, and channels to detect discussions and activities related to potential threats against your company.\n\nAnalysis of Potential Risks: By identifying threats in advance, Keystone helps anticipate cyberattacks or data leaks, facilitating early response to strengthen security."
          },
          {
            label: "Reporting and Analysis",
            text: "Detailed Reports: Keystone provides regular reports on detected activities, compromised data, and trends observed on the dark web regarding your organization.\n\nContextual Analysis: Information is presented with relevant context, making it easier to understand the scale and nature of threats to take appropriate measures."
          },
          {
            label: "Support and Corrective Actions",
            text: "Incident Response Assistance: In case of compromised data or detected threats, Keystone can provide recommendations for an adequate response, such as changing passwords, implementing additional security measures, etc.\n\nContinuous Tracking and Monitoring: The service ensures continuous monitoring to track the evolution of threats and compromised data, enabling proactive risk management."
          }
        ],
        conclusion: ""
      },
      {
        id: "antiphishing",
        name: "Anti-Phishing",
        title: "Keystone: Your Complete Anti-Phishing Shield",
        desc: "Keystone's Anti-Phishing service focuses specifically on detecting and neutralizing phishing attacks that exploit the web, social networks, and mobile applications to target your organization.",
        details: [
          {
            label: "Advanced Web and Social Media Monitoring",
            text: "Keystone uses advanced web and social media monitoring tools to detect suspicious activities related to phishing. This includes proactively searching for fake profiles, misleading posts, or malicious links."
          },
          {
            label: "Deep Mobile Application Analysis",
            text: "Mobile applications are also scrutinized to identify phishing attempts. Keystone analyzes applications for malicious behaviors or unauthorized requests for sensitive information."
          },
          {
            label: "Early Threat Detection",
            text: "By combining proactive monitoring with advanced behavioral analysis, Keystone rapidly detects potential warning signals. This allows early intervention before phishing attacks can cause damage."
          },
          {
            label: "Rapid Threat Neutralization",
            text: "Upon detection, Keystone takes immediate action to neutralize threats. This may include blocking malicious URLs, removing fraudulent content, and actions to prevent the spread of the attack."
          },
          {
            label: "Specialized Awareness and Training",
            text: "In parallel, Keystone offers specific awareness on phishing risks related to social networks and mobile applications. Targeted training programs are designed to educate employees on safe practices and recognizing phishing attempts through these channels."
          }
        ],
        conclusion: "Keystone deploys an exhaustive strategy to detect, neutralize, and raise awareness against phishing attacks using the web, social networks, and mobile applications. Contact us for a proactive defense against these emerging threats."
      },
      {
        id: "vuln-watch",
        name: "Vulnerability Watch",
        title: "Keystone: Your Real-time Watchkeeper",
        desc: "Keystone's vulnerability watch service ensures continuous and proactive monitoring of security flaws that could threaten your business. Here is in detail how this service works:",
        details: [
          {
            label: "Real-time Monitoring",
            text: "Keystone constantly monitors vulnerability databases, security publications, specialized forums, and vendor announcements to quickly spot new vulnerabilities as soon as they are published."
          },
          {
            label: "In-depth Vulnerability Analysis",
            text: "Once detected, vulnerabilities are thoroughly analyzed to assess their potential impact on your systems and applications. This detailed analysis guides the actions to be taken to mitigate these risks."
          },
          {
            label: "Vulnerability Classification and Prioritization",
            text: "Each vulnerability is classified according to its criticality and exploitation potential. Keystone prioritizes the most critical vulnerabilities for immediate action, thereby minimizing risks for your business."
          },
          {
            label: "Notification and Reporting",
            text: "Notifications are sent as soon as new critical vulnerabilities are discovered, accompanied by detailed reports explaining the nature of the flaw, its implications, and recommendations for remediation."
          },
          {
            label: "System Updates and Patches",
            text: "Keystone assists you in applying recommended patches and workarounds to resolve vulnerabilities. This ensures the continuous protection of your systems against potential attacks."
          }
        ],
        conclusion: "Keystone provides continuous and proactive vulnerability monitoring, enabling you to take preventive measures to protect your business against threats. Contact us for effective and proactive vulnerability monitoring."
      }
    ]
  },
  cert: {
    title: "CERT (CSIRT.tn)",
    subtitle: "CSIRT.tn: Your Guarantee of Critical Threat Response",
    intro: "Keystone's CSIRT.tn, your dedicated CERT, ensures a rapid and effective response to the most critical security incidents. Our team, equipped with high-level technical expertise, has been effective in managing attacks emanating from the most formidable hacker groups in the world.",
    features: [
      { name: "Active Member of FIRST and AfricaCERT", desc: "As a recognized member of FIRST and AfricaCERT, our CERT benefits from collaboration and information sharing with other CERT teams. This cooperation strengthens our ability to respond to threats globally and in a coordinated manner." },
      { name: "High-Level Technical Expertise", desc: "Composed of highly qualified IT security experts, our team has deep technical expertise. This skill allows us to manage complex security incidents with efficiency and speed." },
      { name: "Effective Response to Critical Threats", desc: "In the face of attacks from the most dangerous hacker groups, our team has demonstrated its ability to react rapidly and in a coordinated manner. This responsiveness has limited impacts, countered attacks, and restored the security of the affected systems." },
      { name: "On-Site Direct Intervention", desc: "For urgent cases, our CSIRT.tn team travels directly on-site. This physical presence guarantees an in-depth evaluation of the situation and immediate intervention to counter threats and restore security." },
      { name: "Real-time Remote Handling", desc: "When necessary, our CSIRT.tn is also capable of providing real-time remote assistance. This flexibility allows us to react quickly to threats, even at a distance, by taking immediate measures to counter attacks." },
      { name: "Global Expertise and Collaboration", desc: "As a recognized member of FIRST and AfricaCERT, our CSIRT.tn benefits from close collaboration with other CERT teams, enabling instantaneous information sharing and global expertise to respond to threats in a coordinated manner." }
    ],
    closing: "Keystone is committed to providing a rapid and specialized threat response, thanks to our highly qualified and mobile CSIRT.tn team. Contact us for proactive protection against the most critical threats.",
    items: [
      {
        id: "incident-response",
        name: "Incident Response",
        title: "Keystone: Your Fast and Expert Response",
        desc: "Keystone's incident response service is designed to provide a rapid and effective reaction in the event of cyberattacks or security incidents. Here is how this service is structured:",
        details: [
          {
            label: "Early Threat Detection",
            text: "Keystone ensures early detection of threats through proactive monitoring of suspicious activities on networks and systems. This vigilance helps quickly identify signs of potential attacks."
          },
          {
            label: "Immediate Intervention",
            text: "In case of a proven security incident, our team reacts immediately to assess the situation. A rapid response is provided to limit damage, isolate security flaws, and restore the security of the affected systems."
          },
          {
            label: "Incident Analysis and Management",
            text: "An in-depth analysis is conducted to understand the scope of the incident, identify the entry points of the attackers, and determine the corrective measures to be implemented. Complete management of the incident is ensured to minimize its impacts."
          },
          {
            label: "Coordination with Concerned Parties",
            text: "Keystone ensures transparent communication with your internal team, competent authorities, and, if necessary, external parties. This coordination promotes a collective response and effective resolution of the incident."
          },
          {
            label: "Post-Incident Reporting and Continuous Improvement",
            text: "Detailed reports are provided after incident resolution, including actions taken, lessons learned, and recommendations to strengthen resilience against future attacks."
          },
          {
            label: "Technical Crisis Management",
            text: "In the event of a major incident, Keystone ensures effective technical crisis management. This includes immediate interventions to contain the incident, identify flaws, and restore the security of systems in the shortest possible time."
          },
          {
            label: "Crisis Communication",
            text: "Clear and effective communication is maintained throughout the incident. Keystone ensures transparent communication with internal and external stakeholders to report on the state of the situation, actions taken, and measures implemented to remedy the incident."
          },
          {
            label: "Legal Assistance",
            text: "Keystone offers legal assistance to help understand the legal implications of the incident. We offer advice on the steps to take for legal procedures."
          }
        ],
        conclusion: "Keystone guarantees a fast and professional response to security incidents. Contact us for proactive incident management and enhanced protection of your infrastructure against threats."
      },
      {
        id: "digital-forensics",
        name: "Digital Forensics",
        title: "Keystone: Your Digital Forensics Partner",
        desc: "Keystone's digital forensics service specializes in the in-depth analysis and investigation of IT security incidents. Here is an overview of our capabilities in this field:",
        details: [
          {
            label: "In-depth Forensic Analysis",
            text: "Keystone performs in-depth forensic analyses to collect, preserve, and analyze digital evidence. This includes extracting and examining data to understand the origin and impact of incidents."
          },
          {
            label: "Identification of Attacks and Compromises",
            text: "Our experts identify attack vectors, intrusion patterns, and compromise points. This precise identification helps understand attackers' tactics and prevent future intrusions."
          },
          {
            label: "Reconstruction of Events (Timeline)",
            text: "We reconstruct timelines of events to understand how and why the incident occurred. This detailed reconstruction is essential to determine the reach and scope of the damage."
          },
          {
            label: "Evidence Collection and Analysis",
            text: "Keystone collects and analyzes digital evidence, such as logs, metadata, files, etc., to establish a chronology of events and support legal or regulatory actions."
          },
          {
            label: "Investigation Reports and Expert Testimony",
            text: "We provide detailed reports on our findings, clear technical explanations, and expert testimony to support necessary legal or internal procedures."
          }
        ],
        conclusion: "Keystone offers a comprehensive and methodical digital forensics investigation to identify, analyze, and document security incidents. Contact us for digital forensics expertise to protect your business against threats."
      },
      {
        id: "threat-hunting",
        name: "Threat Hunting",
        title: "Keystone: Your Partner in Threat Hunting",
        desc: "Keystone's Threat Hunting service aims to proactively detect potential threats that might escape traditional security tools. Here is how this service works:",
        details: [
          {
            label: "Proactive Threat Hunting",
            text: "Keystone conducts an active hunt for threats using advanced data and behavior analysis techniques. The goal is to spot subtle indicators and abnormal activities that could indicate the presence of a threat."
          },
          {
            label: "Identification of Suspicious Activities",
            text: "We identify unusual or malicious activity patterns on your networks and systems, searching for signs of compromise or lateral movements of attackers that might escape automated detection."
          },
          {
            label: "Contextual Data Analysis",
            text: "Keystone uses in-depth contextual analyses to assess the real risk of detected activities. This helps distinguish between harmless events and potentially malicious behaviors."
          },
          {
            label: "Targeted Investigations",
            text: "We conduct deep investigations into potential threats detected, following specific leads to confirm, understand, and neutralize any identified suspicious activity."
          },
          {
            label: "Analysis Reports and Recommendations",
            text: "Detailed reports are provided on the results of threat hunting, including recommendations to strengthen defenses, improve detection tools, and prevent future attacks."
          }
        ],
        conclusion: "Keystone deploys proactive threat hunting to detect and counter malicious activities not detected by conventional security tools. Contact us for a proactive approach in protecting your business against threats."
      },
      {
        id: "malware-analysis",
        name: "Malware Analysis",
        title: "Keystone: Your Malware Analysis Expert",
        desc: "Keystone's malware analysis service aims to identify, study, and neutralize malicious software. Here is an overview of our approach in this field:",
        details: [
          {
            label: "Malware Detection and Identification",
            text: "Keystone uses advanced techniques to detect and identify various types of malicious software, including viruses, worms, Trojans, ransomware, etc."
          },
          {
            label: "Deep Analysis of Malicious Behaviors",
            text: "We conduct a detailed analysis of the malware's behavior to understand its actions, its propagation method, and its impact on systems and data."
          },
          {
            label: "Disassembly and Analysis of Malicious Code",
            text: "Our expert team performs code disassembly to deeply examine the internal working of the malware. This allows us to understand its logic and determine its malicious actions."
          },
          {
            label: "Isolation and Neutralization",
            text: "Once the analysis is complete, we work on ways to neutralize the malware to prevent its spread and limit its potential damage."
          },
          {
            label: "Analysis Reports and Recommendations",
            text: "We provide detailed reports on the malware's characteristics, behaviors, as well as recommendations to strengthen defenses and prevent future infections."
          }
        ],
        conclusion: "Keystone offers advanced expertise in malware analysis to effectively identify, study, and neutralize malicious software. Contact us for proactive protection against malware threats."
      }
    ]
  }
};

export default function ManagedServicesPage() {
  const [activePillar, setActivePillar] = useState<"soc" | "cert">("soc");
  const [expandedItem, setExpandedItem] = useState<string | null>("blue-team");

  const currentPillarData = pillars[activePillar];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* 1. Deep Cyber Hero Section */}
      <section className="relative flex min-h-[90svh] h-[100vh] items-center overflow-hidden bg-zinc-950 px-6 pb-20 pt-36 lg:px-16 lg:pb-32 lg:pt-48">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/vids/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 sm:bg-linear-to-r sm:from-black/85 sm:via-black/45 sm:to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center flex-wrap gap-2 text-red-400 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
                  <span className="text-red-500/30 flex flex-nowrap shrink-0">/</span>
                  <span className="text-white/90">Managed Services</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-black tracking-tight leading-[1] mb-6 uppercase"
              >
                Managed Services
              </motion.h1>

              <HeroTypeLine
                items={[
                  "Active 24/7/365 Security Monitoring",
                  "Expert CERT & Incident Response Capabilities",
                  "Advanced EDR/XDR & SIEM Orchestration",
                  "Continuous Regulatory Compliance Alignment"
                ]}
                className="mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
              >
                Benefit from continuous monitoring, proactive detection, and ultra-fast technical response driven by our world-class cybersecurity experts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#explore-catalog" className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 uppercase tracking-widest text-xs">
                  Explore Catalogue
                </a>
                <Link href="/contact" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 uppercase tracking-widest text-xs">
                  Request an Assessment
                </Link>
              </motion.div>
            </div>

            <div className="w-full lg:w-2/5 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-blue-500/10 blur-3xl rounded-full" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40 backdrop-blur-md p-4 w-full max-w-md aspect-square flex flex-col justify-center items-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Shield className="w-24 h-24 text-red-500 mb-6 drop-shadow-[0_0_20px_rgba(220,38,38,0.3)] animate-pulse" />
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">CSIRT & SOC</h3>
                <p className="text-sm text-zinc-400 text-center max-w-xs px-4">Centralized 24/7 monitoring and real-time incident response based on international standards.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CyberSectionDivider theme="red" />

      {/* 2. Main Section: 3-Column Premium Layout */}
      <section id="explore-catalog" className="py-24 bg-white text-zinc-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/50 via-white to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="flex flex-col gap-20">

            {/* COLUMN 1: Services Managés - Capital Importance (Horizontal Full-Width) */}
            <div className="flex flex-col w-full">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-600">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                  Keystone Cyber Defence
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 uppercase leading-[1.05] mb-6"
                >
                  Managed Services
                </motion.h2>

                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-8 font-medium">
                  Outsourcing managed security services with Keystone is of vital importance for businesses, offering a series of notable benefits:
                </p>

                {/* Benefits List (Expertise, Concentration, etc.) - Horizontal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="group p-5 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider mb-1.5">
                          {benefit.title}
                        </h4>
                        <p className="text-zinc-600 text-xs leading-relaxed font-medium">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-red-50/50 rounded-2xl border border-red-100/50">
                  <p className="text-zinc-700 text-xs italic leading-relaxed font-medium">
                    Outsourcing security to Keystone&apos;s managed service allows businesses to benefit from specialized expertise, focus on their growth, reduce risks, and maintain a reliable level of security while remaining agile in the face of technological developments and emerging threats.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2 & 3: Interactive SOC & CERT Workspace (Horizontal Full-Width) */}
            <div className="flex flex-col gap-8 w-full">

              {/* Pillars Interactive Tab Toggler */}
              <div className="grid grid-cols-2 p-1.5 bg-zinc-100 rounded-full border border-zinc-200">
                <button
                  onClick={() => {
                    setActivePillar("soc");
                    setExpandedItem("blue-team");
                  }}
                  className={`py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activePillar === "soc"
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-500 hover:text-zinc-900"
                    }`}
                >
                  Managed SOC
                </button>
                <button
                  onClick={() => {
                    setActivePillar("cert");
                    setExpandedItem("incident-response");
                  }}
                  className={`py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activePillar === "cert"
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-500 hover:text-zinc-900"
                    }`}
                >
                  CERT (CSIRT.tn)
                </button>
              </div>

              {/* Dynamic Workspace Container */}
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-red-500/5 rounded-full blur-2xl" />

                {/* Pillar Slogan Header Card */}
                <div className="mb-8 pb-6 border-b border-zinc-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-1 block">
                    {currentPillarData.subtitle}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-zinc-900 uppercase mb-4">
                    {currentPillarData.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-medium">
                    {currentPillarData.intro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPillarData.features.map((feat, fidx) => (
                      <div key={fidx} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider">
                            {feat.name}
                          </h5>
                          <p className="text-[10px] text-zinc-500 leading-snug">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-zinc-500 text-[11px] italic mt-6 leading-relaxed border-t border-zinc-200/40 pt-4">
                    {currentPillarData.closing}
                  </p>
                </div>

                {/* Sub-Items Accordion */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">
                    UNDERLYING SERVICES (CLICK FOR DETAILS)
                  </h4>

                  <div className="space-y-4">
                    {currentPillarData.items.map((item) => {
                      const isExpanded = expandedItem === item.id;

                      return (
                        <div
                          key={item.id}
                          className={`rounded-2xl border transition-all duration-300 ${isExpanded
                              ? "bg-white border-red-200 shadow-md"
                              : "bg-zinc-100/50 hover:bg-white border-zinc-200/50"
                            }`}
                        >
                          {/* Accordion Trigger */}
                          <button
                            onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                            className="w-full text-left p-5 flex items-center justify-between font-bold text-sm text-zinc-800 uppercase tracking-wider"
                          >
                            <span className="flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full transition-transform ${isExpanded ? "bg-red-600 scale-125" : "bg-zinc-400"}`} />
                              {item.name}
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 text-zinc-400 transition-transform ${isExpanded ? "rotate-90 text-red-600" : ""
                                }`}
                            />
                          </button>

                          {/* Accordion Content */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden border-t border-zinc-100"
                              >
                                <div className="p-6 space-y-6">
                                  <h4 className="text-lg font-bold text-zinc-950 leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-zinc-600 text-xs leading-relaxed font-medium">
                                    {item.desc}
                                  </p>

                                  <div className="space-y-4">
                                    {item.details.map((detail, detIdx) => (
                                      <div
                                        key={detIdx}
                                        className="p-4 bg-zinc-50 rounded-xl border border-zinc-100/80"
                                      >
                                        <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                          {detail.label}
                                        </h5>
                                        <p className="text-zinc-600 text-[11px] leading-relaxed whitespace-pre-line font-medium">
                                          {detail.text}
                                        </p>
                                      </div>
                                    ))}
                                  </div>

                                  {item.conclusion && (
                                    <p className="text-zinc-500 text-[10px] italic leading-relaxed pt-4 border-t border-zinc-100">
                                      {item.conclusion}
                                    </p>
                                  )}

                                  <div className="pt-2 flex justify-end">
                                    <Link
                                      href={`/contact?service=${activePillar}&sub=${item.id}`}
                                      className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest hover:gap-3 transition-all"
                                    >
                                      Request this service <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </section>

      <CyberSectionDivider theme="red" />

      {/* 3. Static VISION and Partner CTA Section */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/background/vector/cyber-matrix.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 block">
                TRUSTED PARTNERSHIP & AGILITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1] uppercase">
                Guarantee Your Digital Resilience
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed font-medium border-l-4 border-red-600 pl-6">
                By entrusting your defense posture to Keystone, you benefit from a globally recognized SOC and CERT ecosystem, combining state-of-the-art tools and elite certified engineers.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Active and proactive protection 24/7/365",
                  "Immediate CERT response during an incident crisis",
                  "Continuous alignment with security compliance standards (ISO, NIST, etc.)"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-zinc-300 text-sm font-semibold uppercase tracking-wider">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-zinc-900/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-lg w-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[60px]" />

                <h4 className="text-xl font-bold uppercase tracking-tight italic mb-4">
                  Need a Managed SOC or a CERT?
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium">
                  Consult our security architects to design the ideal defense architecture tailored to your size and regulatory compliance objectives.
                </p>

                <div className="pt-6 border-t border-white/10 flex justify-start">
                  <Link
                    href="/contact?service=managed-services"
                    className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                  >
                    Contact Our Experts <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CyberSectionDivider theme="red" />

      {/* 4. Contact CTA Section */}
      <ContactCTASection />

      <Footer />
    </main>
  );
}
