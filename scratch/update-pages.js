const fs = require('fs');
const path = require('path');

const data = {
  "critical-infrastructure-protection": {
    "methodologies": `[
    {
      title: "Development of National Frameworks",
      description: "We work closely with authorities to develop national frameworks that specifically meet the protection needs of critical infrastructures.",
      icon: CloudCog,
    },
    {
      title: "In-depth Infrastructure Audit",
      description: "We conduct detailed audits to assess the security of these infrastructures, identifying gaps and recommending appropriate solutions.",
      icon: ShieldCheck,
    },
    {
      title: "Security Support",
      description: "We provide expert support to secure these infrastructures, implementing solutions adapted to each domain.",
      icon: AlertTriangle,
    },
    {
      title: "Compliance Frameworks",
      description: "We help establish compliance frameworks in accordance with national and international regulatory and security requirements.",
      icon: FileText,
    },
    {
      title: "Training and Awareness",
      description: "We offer training programs to raise awareness among stakeholders involved in the security and management of critical infrastructures.",
      icon: Activity,
    },
  ]`,
    "h1": `Critical Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Protection</span>`,
    "heroDesc": `Keystone offers specialized expertise in developing national frameworks for the protection of critical infrastructures. We support governments and relevant entities in establishing standards, audits, and compliance frameworks adapted to these vital infrastructures.`
  },
  "cyber-crisis-management-framework": {
    "methodologies": `[
    {
      title: "Development of National Directives",
      description: "We collaborate with national authorities to define directives and cyber-crisis management protocols adapted to the specific needs of the country.",
      icon: FileText,
    },
    {
      title: "Prevention and Response Strategies",
      description: "We design comprehensive strategies including preventive measures and detailed response plans to deal with cyber incidents.",
      icon: ShieldCheck,
    },
    {
      title: "Inter-Agency Coordination",
      description: "We promote collaboration between government agencies and key stakeholders for a coherent and coordinated management of cyber crises.",
      icon: Activity,
    },
    {
      title: "National Simulations and Exercises",
      description: "We organize national-scale simulations to test the effectiveness of plans and train stakeholders to react in the event of a crisis.",
      icon: AlertTriangle,
    },
    {
      title: "Post-Crisis Analysis and Continuous Improvements",
      description: "After each incident, we conduct in-depth analyses to identify gaps and continuously improve cyber-crisis management protocols.",
      icon: CloudCog,
    },
  ]`,
    "h1": `Cyber-Crisis Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Framework</span>`,
    "heroDesc": `Keystone proposes its expertise to develop a national cyber-crisis management framework, an essential setup to anticipate and manage cyber incidents on a national scale. We work with governments to develop harmonized response strategies and plans to ensure national resilience and security.`
  },
  "cert-implementation": {
    "methodologies": `[
    {
      title: "CERT Infrastructure Design",
      description: "We design the architecture and processes necessary to create a CERT, tailored to the specific needs of the organization.",
      icon: ServerCog,
    },
    {
      title: "Definition of Responsibilities and Procedures",
      description: "We define the roles, responsibilities, and operational procedures to ensure effective management of security incidents.",
      icon: FileCheck,
    },
    {
      title: "Training and Recruitment",
      description: "We offer training programs and recommendations to recruit and train experts capable of handling incidents effectively.",
      icon: Users,
    },
    {
      title: "Simulation and Practical Exercises",
      description: "We organize practical exercises to test the CERT's responsiveness and improve its ability to respond to real incidents.",
      icon: Gamepad2,
    },
    {
      title: "Integration with Relevant Stakeholders",
      description: "We facilitate the CERT's integration with other entities, promoting effective cooperation during the management of major incidents.",
      icon: Network,
    },
  ]`,
    "h1": `CERT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Implementation</span>`,
    "heroDesc": `Keystone offers its expertise in the implementation of CERTs (Computer Emergency Response Teams), teams dedicated to managing IT security incidents. We collaborate with organizations to establish CERTs capable of detecting, analyzing, and responding quickly to cyber threats.`
  },
  "soc-implementation": {
    "methodologies": `[
    {
      title: "SOC Design and Implementation",
      description: "We design the SOC architecture and guide its implementation to ensure continuous monitoring of security activities.",
      icon: ServerCog,
    },
    {
      title: "Tool and Technology Selection",
      description: "We recommend tools and technologies suited for proactive detection and rapid response to security incidents.",
      icon: Network,
    },
    {
      title: "Development of Operational Processes",
      description: "We define clear operational processes for the SOC, integrating surveillance, detection, and incident response.",
      icon: FileCheck,
    },
    {
      title: "Training and Recruitment",
      description: "We offer training programs for SOC personnel and provide advice on recruiting the appropriate talents.",
      icon: Users,
    },
    {
      title: "Simulation and Training Exercises",
      description: "We organize simulations to test the SOC's responsiveness and improve its capabilities to manage real incidents.",
      icon: Gamepad2,
    },
  ]`,
    "h1": `SOC <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Implementation</span>`,
    "heroDesc": `Keystone proposes its expertise for the creation of SOCs (Security Operations Centers), charged with monitoring, detecting, and responding to IT security threats. We work with organizations to establish effective SOCs capable of guaranteeing continuous protection against cyber-threats.`
  },
  "capacity-and-maturity-assessment": {
    "methodologies": `[
    {
      title: "Comprehensive Infrastructure Assessment",
      description: "We conduct an in-depth analysis of national infrastructures and security systems to identify strengths and weaknesses.",
      icon: Network,
    },
    {
      title: "Analysis of Policies and Regulatory Frameworks",
      description: "We evaluate compliance with current policies and regulatory frameworks, identifying gaps and proposing recommendations.",
      icon: FileCheck,
    },
    {
      title: "Highlighting Operational Capabilities",
      description: "We highlight existing operational capabilities in terms of detection, response, and prevention of cyber-threats.",
      icon: Users,
    },
    {
      title: "Strategic Recommendations",
      description: "Based on our assessments, we formulate strategic recommendations to improve overall cybersecurity maturity.",
      icon: ServerCog,
    },
    {
      title: "Support for Continuous Improvement",
      description: "We offer support for implementing recommendations and progressively strengthening cybersecurity maturity.",
      icon: Gamepad2,
    },
  ]`,
    "h1": `Capacity and Maturity <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Assessment</span>`,
    "heroDesc": `Keystone proposes its expertise to assess a country's national capabilities and cybersecurity maturity. We work with governments to establish a comprehensive and accurate assessment of cybersecurity infrastructures, policies, and operational capabilities.`
  },
  "cyber-resilience-framework": {
    "methodologies": `[
    {
      title: "In-depth Risk Analysis",
      description: "We conduct an exhaustive risk analysis to understand the potential threats facing your organization.",
      icon: Network,
    },
    {
      title: "Development of Resilience Strategies",
      description: "We design proactive strategies to strengthen your organization's ability to resist attacks and maintain critical activities.",
      icon: FileCheck,
    },
    {
      title: "Business Continuity Planning",
      description: "We develop detailed business continuity plans to ensure rapid recovery after a cyberattack, thereby minimizing impacts.",
      icon: ServerCog,
    },
    {
      title: "Integration of Detection Mechanisms",
      description: "We implement advanced detection mechanisms to identify and respond rapidly to security incidents.",
      icon: Users,
    },
    {
      title: "Training and Awareness",
      description: "We offer training programs to raise awareness among your staff regarding cyber resilience and incident response.",
      icon: Gamepad2,
    },
  ]`,
    "h1": `Cyber Resilience <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Framework</span>`,
    "heroDesc": `Keystone offers its expertise in the development and implementation of cyber resilience frameworks. We work with organizations to develop robust strategies to prevent, detect, and respond to cyber incidents, while ensuring near-immediate recovery after an attack.`
  }
};

const DIRS = Object.keys(data);
const BASE = path.join('src', 'app', 'services', 'cybersecurity-strategy-consulting');

for (const dir of DIRS) {
  const p = path.join(BASE, dir, 'page.tsx');
  if (!fs.existsSync(p)) continue;
  let code = fs.readFileSync(p, 'utf-8');
  
  // Replace methodologies
  code = code.replace(/const methodologies = \\[[\\s\\S]*?\\];/g, 'const methodologies = ' + data[dir].methodologies + ';');
  
  // Replace h1
  code = code.replace(/<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">[\\s\\S]*?<\\/h1>/g, 
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">\\n                ' + data[dir].h1 + '\\n              </h1>');

  // Replace text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl
  code = code.replace(/<p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">[\\s\\S]*?<\\/p>/g,
  '<p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">\\n                ' + data[dir].heroDesc + '\\n              </p>');

  fs.writeFileSync(p, code);
  console.log('Updated ' + dir);
}
