/*
 * CAPABILITY STATEMENT CONTENT
 * Source: Blackfin Cloud Services Capability Statement (CMAS Contract 3-24-05-2024)
 * Updated per requirements:
 * - Location: Redding, CA 96001 (changed from Foothill Ranch 92610)
 * - Phone: (530) 478-0901 (area code changed from 949 to 530)
 */

export interface CodeItem {
  code: string
  title: string
}

export interface PastPerformanceItem {
  name: string
  sector: 'Government' | 'Commercial'
  badge: string
  description?: string
}

export const capabilityContent = {
  documentTitle: 'Capability Statement',
  companyName: 'Blackfin Cloud Services',
  legalName: 'Blackfin Cloud Services, LLC',
  tagline: 'Software for the Way Government Works',
  cmasContract: 'CMAS 3-24-05-2024',
  cmasExpiration: 'California Multiple Award Schedule',
  certifications: [
    'California Multiple Award Schedule (CMAS) Holder',
    'California Small Business Certified (SB)',
  ],

  // Executive summary banner from the PDF
  summary: {
    badge: 'CMAS Contract Holder • CA Small Business Certified',
    lead: 'Blackfin Cloud Services is a holder of the CA Multiple Award Schedule (CMAS), and a CA Small Business Certified organization expert in low-code software solutions.',
    body: 'Specializing in the Microsoft Power Platform, we have delivered customized and highly functional software solutions for a wide variety of state and local governments across the United States.',
    conclusion:
      'What differentiates us are our programs such as “Built By You”, “Built With You” and “Rapid Delivery”, all designed with agency independence and ultimate ownership in mind from the beginning of every engagement.',
    programs: [
      { name: 'Built By You', desc: 'Guided enablement where our architects train and empower your internal team to build.' },
      { name: 'Built With You', desc: 'Collaborative co-delivery where our engineers work side-by-side with your staff.' },
      { name: 'Rapid Delivery', desc: 'Accelerated turnkey deployment delivering working MVPs in weeks, not months.' },
    ],
  },

  // Company Overview section
  companyOverview: {
    eyebrow: 'Company Overview',
    title: 'Transforming Public-Sector Software Acquisition',
    location: 'Redding, CA 96001',
    p1: 'After 20 years of using low-code platforms to deliver excellent software systems for state and local governments, our mission has evolved to our current focus:',
    missionQuote: 'We aim to change the way government buys software systems and technical services.',
    p2: 'Blackfin Cloud Services provides a way for you and your team to have the systems you need quickly and easily, with vendor independence and in-house ownership the goal all along.',
    examplesLead: 'Examples include solutions for:',
    examples: [
      { name: 'Procurement', desc: 'Streamlined purchase requests, catalogs, and budget tracking' },
      { name: 'Labor Negotiations', desc: 'Bargaining unit workflows, article tracking, and MOU records' },
      { name: 'Process Automation', desc: 'Replacing manual bottlenecks with automated digital flows' },
      { name: 'Managed Communications', desc: 'Automated inter-agency notices and stakeholder updates' },
      { name: 'Program Management', desc: 'Real-time project tracking, dependencies, and milestones' },
      { name: 'Routing & Approvals', desc: 'Multi-stage sign-offs with full audit-ready trails' },
      { name: 'Contract Management', desc: 'Lifecycle agreements, renewal alerts, and compliance logs' },
    ],
  },

  // Primary Contact
  primaryContact: {
    eyebrow: 'Primary Contact',
    name: 'Owen Scott',
    role: 'Principal / Government Contracting Lead',
    phone: '(530) 478-0901',
    phoneHref: 'tel:+15304780901',
    email: 'contracts@blackfincloud.com',
    emailHref: 'mailto:contracts@blackfincloud.com',
    website: 'www.blackfincloud.com',
    websiteHref: 'https://blackfincloud.com',
    location: 'Redding, CA 96001',
    fullAddress: '2055 Pine Street, Redding, CA 96001',
  },

  // Company Data / Procurement Identifiers
  companyData: {
    eyebrow: 'Company Data',
    title: 'Government Procurement Identifiers',
    cmas: '3-24-05-2024',
    duns: '08-135-7555',
    cage: '8CP18',
    eui: 'NMH9P3BXNZF5',
    businessType: 'Small Business Certified (SB)',
    naics: [
      { code: '541511', title: 'Custom Computer Programming Services' },
      { code: '541512', title: 'Computer Systems Design Services' },
      { code: '51320', title: 'Software Publishers' },
      { code: '541519', title: 'Other Computer Related Services' },
      { code: '51820', title: 'Data Processing, Hosting, and Related Services' },
      { code: '519290', title: 'Web Search Portals and All Other Information Services' },
      { code: '541690', title: 'Other Scientific and Technical Consulting Services' },
      { code: '541990', title: 'All Other Professional, Scientific, and Technical Services' },
    ] as CodeItem[],
    unspsc: [
      { code: '43232303', title: 'Data Management and Query Software' },
      { code: '81111508', title: 'Application Implementation Services' },
      { code: '43233701', title: 'System Management Software' },
      { code: '43232804', title: 'Network Applications Software' },
      { code: '43232403', title: 'Development Software' },
      { code: '81112212', title: 'Software Maintenance and Support' },
      { code: '81112210', title: 'Maintenance or Support Fees' },
    ] as CodeItem[],
  },

  // Past Performance
  pastPerformance: {
    eyebrow: 'Past Performance',
    title: 'Proven Delivery for Government & Commercial Leaders',
    intro: 'Trusted by major municipal bodies, school districts, state utilities, and prominent enterprise organizations.',
    government: [
      { name: 'Los Angeles Unified School District', sector: 'Government', badge: 'K-12 Education', description: 'Enterprise workflow and departmental process systems' },
      { name: 'Los Angeles County', sector: 'Government', badge: 'County Government', description: 'Multi-department operational support and service automation' },
      { name: 'New York Power Authority', sector: 'Government', badge: 'State Public Power', description: 'Utility workflow automation and integration solutions' },
      { name: 'Chicago Board of Elections', sector: 'Government', badge: 'Elections Agency', description: 'Mission-critical election operations and tracking software' },
      { name: 'NYC Planning Department', sector: 'Government', badge: 'Municipal Planning', description: 'Urban planning coordination and digital approval workflows' },
    ] as PastPerformanceItem[],
    commercial: [
      { name: 'Rose & Company', sector: 'Commercial', badge: 'Capital Markets', description: 'Financial consulting workflows and executive dashboards' },
      { name: 'Ball Aerospace', sector: 'Commercial', badge: 'Aerospace & Defense', description: 'Specialized systems design and program management integration' },
      { name: 'Walton International', sector: 'Commercial', badge: 'Asset Management', description: 'Global real estate data systems and process automation' },
      { name: 'Warner Bros', sector: 'Commercial', badge: 'Media & Entertainment', description: 'Studio workflow solutions and multi-platform automation' },
      { name: 'Paramount Pictures', sector: 'Commercial', badge: 'Media & Entertainment', description: 'Production coordination and asset approval pipelines' },
    ] as PastPerformanceItem[],
  },

  // Core Competencies
  coreCompetencies: {
    eyebrow: 'Core Competencies',
    title: 'Specialized Capabilities & Technology Stack',
    services: [
      { title: 'Computer System Design Services', desc: 'Architecture, design, and deployment of scalable, resilient enterprise systems.', icon: 'grid' },
      { title: 'Cloud-Based Application Development', desc: 'Rapid development of secure, modern public-sector cloud solutions.', icon: 'layers' },
      { title: 'Process Analysis and Process Mining Using AI Tools', desc: 'AI-assisted analysis to identify operational bottlenecks and optimize municipal workflows.', icon: 'chart' },
      { title: 'Data Analysis and Integration', desc: 'Unifying fragmented databases, data cleansing, and central reporting pipelines.', icon: 'trend' },
      { title: 'Systems Integration', desc: 'Connecting legacy on-prem systems with modern cloud APIs and real-time feeds.', icon: 'sync' },
      { title: 'Design and Deployment of Microsoft Dynamics 365 and the Power Platform', desc: 'Full-lifecycle implementation, customized forms, business logic, and security roles.', icon: 'bolt' },
    ],
    platformsEyebrow: 'Specific Platforms',
    platforms: [
      { name: 'Microsoft Azure', badge: 'Cloud Infrastructure', desc: 'GovCloud-compliant hosting, enterprise identity, and API security.' },
      { name: 'Microsoft Power Apps', badge: 'Low-Code Apps', desc: 'Custom canvas and model-driven applications tailored for agency workflows.' },
      { name: 'Microsoft Power Automate', badge: 'Automated Workflows', desc: 'End-to-end routing, approval workflows, and multi-system automation.' },
      { name: 'Microsoft Power BI', badge: 'Business Intelligence', desc: 'Interactive dashboards, compliance reporting, and executive metrics.' },
      { name: 'Microsoft Dynamics 365', badge: 'CRM & Case Management', desc: 'Constituent management, casework routing, and ERP integration.' },
    ],
  },

  // Differentiators
  differentiators: {
    eyebrow: 'Differentiators',
    title: 'Why Agencies Choose Blackfin Cloud Services',
    items: [
      {
        title: 'Structuralized Application Development',
        text: 'Working in concert with your team every step of the way, ensuring real user adoption and zero black-box surprises.',
        icon: 'users',
      },
      {
        title: 'Fraction of Presumed Cost',
        text: 'Rapid analysis, design, and deployment delivered for a fraction of what traditional custom software costs.',
        icon: 'dollar',
      },
      {
        title: 'Custom Programs Available',
        text: 'Structured engagement models including “Built-by-You”, “Built-with-You”, and “Rapid Delivery” for complete flexibility.',
        icon: 'bolt',
      },
      {
        title: 'Support in All Formats',
        text: 'Comprehensive documentation and training: written manuals, live coaching, video libraries, and LMS integration.',
        icon: 'doc',
      },
      {
        title: 'Completely Customized Plans With Guarantees',
        text: 'Tailored deployment plans engineered specifically for your department’s needs, backed by solid delivery guarantees.',
        icon: 'shield',
      },
    ],
  },
}
