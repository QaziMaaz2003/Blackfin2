/*
 * ALL SITE COPY LIVES HERE.
 * Content source: https://blackfingov.com (WordPress + Divi) and the headline/blurb wording of the
 * bolt redesign. On WordPress, each exported block below is the text you paste into the matching Divi
 * module (see docs/DIVI-MAPPING.md).
 */

const unsplash = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const brand = {
  name: 'Blackfin Cloud Government',
  company: 'Blackfin Cloud Services, LLC',
  tagline: 'Software for the Way Government Works',
  phone: '(530) 551-0155',
  phoneHref: 'tel:+15305510155',
  email: 'contracts@blackfincloud.com',
  address: ['2055 Pine Street', 'Redding, CA 96001'],
  /** Every call-to-action button opens this booking link. */
  schedule: 'https://calendly.com/blackfincloud/30min?back=1',
  linkedin: 'https://www.linkedin.com/in/owenbscott',
  mainSite: 'https://blackfincloud.com',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'How Low-Code Works', href: '/how-low-code-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export const images = {
  hero: unsplash('1529107386315-e1a2ed48a620', 2000),
  team: unsplash('1522071820081-009f0129c71c', 1200),
  workshop: unsplash('1531973576160-7125cd663d86', 1200),
  dashboard: unsplash('1551288049-bebda4e38f71', 1200),
  code: unsplash('1498050108023-c5249f4df085', 1200),
  planning: unsplash('1553028826-f4804a6dba3b', 1200),
  city: unsplash('1477959858617-67f85cf4f1df', 1600),
  meeting: unsplash('1521737604893-d14cc237f11d', 1200),
  office: unsplash('1554224155-6726b3ff858f', 1200),
  desk: unsplash('1517245386807-bb43f82c33c4', 1200),
  handshake: unsplash('1573167243872-43c6433b9d40', 1200),
  community: unsplash('1559027615-cd4628902d4a', 1200),
}

/* ------------------------------------------------------------------ HOME */

export const hero = {
  badge: 'CMAS Contract Holder — Procurement Simplified',
  title: 'Software Made for the Way You Work.',
  accent: 'the Way You Work',
  lead: 'Local government agencies deserve enterprise-grade tools — without the enterprise price tag.',
  text: "You run a complex, service-critical operation — and off-the-shelf software never quite fits. We use low-code platforms to build custom solutions at a fraction of the cost, deployed in weeks, not months or years. And because we hold the California Multiple Award Schedule (CMAS) contract, getting started is easier than you think.",
  primary: { label: 'Schedule a Call', href: brand.schedule },
  secondary: { label: 'Learn More', href: '/how-low-code-works' },
  points: ['Deployed in weeks, not months', 'You own the software — always'],
}

export const problem = {
  eyebrow: 'The Problem',
  title: "You Shouldn't Have to Settle — And You Shouldn't Have to Wait",
  intro: [
    "Off-the-shelf software is built for the average organization. But your agency isn't average — it has specific workflows, compliance requirements, and operational complexity that generic tools simply weren't designed to handle.",
    'And then there\'s procurement. Even when you find a solution that might work, the process of acquiring it can take months — RFPs, bid cycles, board approvals, vendor negotiations. By the time the contract is signed, the problem has gotten worse.',
  ],
  choicesTitle: "So you've been left with bad choices:",
  choices: [
    { icon: 'sync', title: 'Work around it', text: 'Force your team to work around software that doesn\'t fit — losing time and efficiency every single day.' },
    { icon: 'dollar', title: 'Pay for custom', text: 'Commission fully custom software — and spend six figures and eighteen months waiting for it.' },
    { icon: 'doc', title: 'Stay manual', text: 'Keep doing things manually — spreadsheets, workarounds, and duct tape holding everything together.' },
    { icon: 'clock', title: 'Wait on procurement', text: 'Get stuck in a procurement cycle that outlasts the urgency of the problem you were trying to solve.' },
  ],
  closing: [
    "And underneath all of that is something that just isn't right: the powerful, flexible software tools that solve these problems exist — they're just priced and contracted for large agencies with billion-dollar budgets, not organizations like yours.",
    'Your community deserves better than that. So does your team.',
  ],
}

export const partner = {
  eyebrow: 'Why Blackfin',
  title: (
    <>
      You Need a Partner Who Understands How Government <em>Actually</em> Works
    </>
  ),
}

export const partnerCopy = {
  text: [
    "Most technology consultants make more money when your project is more complex, takes longer, and requires more of their hours. They're also not set up to work with government agencies — which means even if you find the right solution, procurement becomes another obstacle.",
    'We built Blackfin Cloud Services differently.',
  ],
  trustTitle: 'Why government agencies trust us',
  trust: [
    'We speak plain English — no tech jargon, no smoke and mirrors',
    'We hold the California Multiple Award Schedule (CMAS) contract — so California agencies can contract with us directly, quickly, and compliantly',
    'We offer additional contract vehicles that simplify procurement for agencies outside California',
    'Fair, transparent pricing — because our tools let us work efficiently and we pass that to you',
    'The software we build belongs to your agency — not us, not a vendor',
    "We've worked with local government agencies across California and beyond",
  ],
}

export const stats = [
  { value: 2, prefix: '<', suffix: ' wks', label: 'From first call to approved proposal' },
  { value: 48, suffix: ' hrs', label: 'To receive your custom road map' },
  { value: 30, suffix: ' min', label: 'Free, no-pressure working session' },
  { value: 100, suffix: '%', label: 'Of the software belongs to your agency' },
]

export const steps = {
  eyebrow: 'How It Works',
  title: 'Getting Started Is Easier Than You Think',
  text: 'We move fast. Most clients go from initial call to approved proposal in under two weeks — so you can stop waiting and start building.',
  items: [
    {
      number: 'STEP 1',
      title: "Learn What's Possible",
      text: 'Spend a few minutes learning how low-code software can solve complex problems — fast and affordably. Most of our local agency customers are surprised by what\'s achievable without a huge budget.',
      cta: { label: 'See how low-code works', href: '/how-low-code-works' },
    },
    {
      number: 'STEP 2',
      title: 'Schedule Your Free 30-Minute Session',
      text: "This is a no-pressure conversation — not a sales pitch. In 30 minutes, we'll listen to your challenges, share what we've seen work for organizations similar to yours, and give you an honest sense of what's possible. You'll leave with clarity, not a contract.",
      cta: { label: 'Book your session', href: brand.schedule },
    },
    {
      number: 'STEP 3',
      title: 'Get Your Custom Road Map',
      text: "Within 48 hours of your session, we will send you a clear analysis and proposal — what we'll build for you, the timeline for it, and the exact cost. No vague estimates, no hidden fees, and no 40-page documents you need an attorney to read. Just a straightforward plan you can act on immediately.",
      cta: { label: 'Get started', href: brand.schedule },
    },
  ],
}

export const midCta = {
  title: 'Ready to Stop Settling for Software That Almost Works?',
  text: "You've seen what's possible. The next step takes 30 minutes and costs you nothing.",
  button: { label: 'Schedule Your Free Session', href: brand.schedule },
  note: ['No pressure. No jargon.', 'Just a straight conversation about what you need.'],
}

export const cost = {
  eyebrow: 'The Cost of Waiting',
  title: 'The Cost of the Wrong Software Partner',
  text: "When a technology project goes wrong, it doesn't just waste money — it wastes months, burns out your team, and leaves your operation no better than when you started.",
  items: [
    "You pay for a solution that doesn't fit how you actually work.",
    'You blow your technology budget with nothing to show for it.',
    'Your team works around the software instead of with it.',
    "You're locked into a vendor who charges more every time you need a change.",
    "You're back to spreadsheets, workarounds and manual processes.",
    'The project drags on for months — or never finishes at all.',
  ],
}

export const benefits = {
  eyebrow: 'The Right Partner',
  title: (
    <>
      But When It Works — It <em>Really</em> Works.
    </>
  ),
  text: 'Government technology should empower your team — not hold it back. The right partner makes all the difference.',
  items: [
    'You know exactly what you are paying — and exactly what you are getting.',
    'Your team works faster and happier with tools they themselves had a hand in building.',
    'You look like a leader who has finally solved the problem everyone has lived with.',
    'Your "Minimum Viable Product" is up in weeks, not six months.',
    'With low-code, you take ownership and maintenance and are vendor-independent.',
    'Your solution is flexible enough to evolve along with your operation.',
  ],
}

export const contracting = {
  eyebrow: 'Procurement',
  title: 'Contracting With Us Is Part of the Solution',
  text: "We know that for government agencies, procurement isn't a formality — it's often the biggest obstacle between you and a solution. We've done the work to remove that obstacle.",
  vehicles: [
    {
      icon: 'shield',
      title: 'California Multiple Award Schedule (CMAS)',
      text: "Blackfin Cloud Services is a certified CMAS contract holder. California state and local government agencies can contract with us directly — no competitive bid required, fully compliant, and fast. If you're a California agency, this is the fastest path to getting started.",
    },
    {
      icon: 'building',
      title: 'Los Angeles County Master Services Agreement',
      text: 'A streamlined procurement path for Los Angeles County agencies and those who piggyback on county agreements.',
    },
    {
      icon: 'dollar',
      title: 'Cal-Card Purchases',
      text: 'Our programs fall well within most limits on the Cal-Card Program, making smaller initiatives easy to start.',
    },
  ],
  note: 'Not sure which vehicle applies to your agency? We can discuss options.',
  cta: { label: 'Schedule your free session', href: brand.schedule },
}

/* ------------------------------------------------------------- PLATFORMS */

export const products = {
  eyebrow: 'Pre-Configured Products',
  title: 'Hit the Ground Running With Solutions Built for Government',
  text: "Custom software is powerful — but sometimes you need something that's already built, already configured for government operations, and ready to deploy. We've developed a suite of pre-configured products designed specifically for local government agencies, built on the same low-code platforms we use for custom work — which means they're flexible, affordable, and yours to own.",
  note: 'All products are built on open, vendor-independent platforms. Your agency owns what we build — always.',
  items: [
    {
      slug: 'procurement',
      icon: 'layers',
      image: images.office,
      title: 'Procurement & Vendor Management',
      summary: 'Centralize procurement requests, vendor coordination, approvals, spend tracking, and reporting in one transparent system built for local government.',
      features: ['Request intake and catalog management', 'Approval workflows and budget visibility', 'Reporting, spend analytics, and audit-ready records'],
    },
    {
      slug: 'labor-relations',
      icon: 'users',
      image: images.meeting,
      title: 'Labor Relations & Negotiation Management',
      summary: 'Manage the full labor negotiation lifecycle, from preparation and bargaining units to meetings, MOU tracking, article actions, and team collaboration.',
      features: ['Negotiation cycle and MOU tracking', 'Meeting agendas and progress updates', 'Article actions, summaries, and team coordination'],
    },
    {
      slug: 'housing-outreach',
      icon: 'heart',
      image: images.community,
      title: 'Housing Outreach & Community Engagement',
      summary: 'Coordinate outreach, housing support, encampment tracking, referrals, cleanup logistics, and inter-agency response through one connected platform.',
      features: ['Mobile outreach and engagement tools', 'Encampment, case, and referral tracking', 'Cleanup coordination and automated communications'],
    },
    {
      slug: 'project-management',
      icon: 'bolt',
      image: images.planning,
      title: 'Project Management & Task Automation',
      summary: 'Launch project workflows faster with task templates, automatic assignments, reminders, dependencies, and role-based team coordination.',
      features: ['Task templates and auto-assignment', 'Project tracking, reminders, and dependencies', 'Team coordination and automated communication'],
    },
  ],
  cta: {
    title: "Let's Build Something That Actually Works",
    text: "Whether you need a full custom solution or want to deploy one of our pre-built tools, we're ready to help your agency move forward fast.",
    button: { label: 'Schedule your free consultation', href: brand.schedule },
  },
}

export const customBuild = {
  eyebrow: 'Custom Solutions',
  title: "Don't See Your Workflow? We'll Build It.",
  text: 'The products above are a head start, not a limit. The same low-code platforms let us build a solution around your agency\'s exact forms, approvals, reports and compliance requirements — typically in weeks.',
  items: [
    { icon: 'grid', title: 'Built around your process', text: 'We map how your team really works first, then configure the software to match — not the other way around.' },
    { icon: 'users', title: 'Built with your team', text: 'No black-box development. We work alongside your staff throughout, so the tools fit the people using them.' },
    { icon: 'lock', title: 'Owned by your agency', text: 'No vendor lock-in and no surprise licensing fees. The software belongs to your agency.' },
  ],
}

/* ----------------------------------------------------------------- ABOUT */

export const mission = {
  eyebrow: 'Our Mission',
  /** The name links to LinkedIn (Divi: a link inside the H2 of the Text module). */
  title: (
    <>
      <a className="bf-namelink" href={brand.linkedin} target="_blank" rel="noreferrer">
        Owen Scott
      </a>
      ’s Mission Statement
    </>
  ),
  lead: 'At Blackfin, we believe every local government agency — regardless of size or budget — deserves access to powerful, custom software that actually fits the way they work.',
  text: "We built our practice on three convictions: that enterprise-grade tools should be accessible to everyone, that the software we build belongs to you and no one else, and that every efficiency we gain through modern technology gets passed directly to our clients — not hoarded to pad our margins. The consulting industry has exploited the technology gap between vendors and local government agencies for too long. We're done with that model.",
}

export const convictions = [
  { icon: 'users', title: 'Access for everyone', text: 'Every agency — regardless of size or budget — deserves powerful software that fits how they work.' },
  { icon: 'lock', title: 'You own what we build', text: 'Your software solution belongs to your agency. Not us, not a vendor. No lock-in.' },
  { icon: 'trend', title: 'Savings passed to you', text: 'Every efficiency we gain through modern technology goes to our clients — not our margins.' },
]

export const differences = {
  eyebrow: 'What Sets Us Apart',
  title: 'Built Differently, On Purpose',
  items: [
    { icon: 'bolt', title: 'Speed', text: 'Your solution is live while other vendors are still writing the RFP.' },
    { icon: 'dollar', title: 'Fair pricing', text: 'Custom solutions at a fraction of traditional cost — without sacrificing capability.' },
    { icon: 'users', title: 'Transparency', text: 'No black-box development. We work alongside your team throughout.' },
    { icon: 'shield', title: 'Ownership', text: 'No vendor lock-in. No surprise licensing fees. The software is yours.' },
  ],
}

export const aboutBand = {
  title: 'Enterprise Power Without the Enterprise Price',
  text: 'Low-code platforms let us build powerful, custom software in a fraction of the time and cost. Your agency gets exactly what it needs.',
}

/* ------------------------------------------------------- HOW LOW-CODE WORKS */

export const lowCode = {
  eyebrow: 'Low-Code, Explained',
  title: 'How Low-Code Works',
  lead: "Low-code platforms let us assemble powerful software from proven building blocks — forms, workflows, dashboards, reports — instead of writing every line from scratch.",
  text: "That's why we can deliver in weeks what traditionally takes a year or more, and why your own team can maintain and evolve the result without calling a developer every time something changes.",
  points: [
    { icon: 'layers', title: 'Proven building blocks', text: 'Forms, approvals, workflows, role-based security, dashboards and reporting come ready to configure.' },
    { icon: 'bolt', title: 'Built in weeks', text: 'Configuration replaces custom coding, so a working first version is in front of your team quickly.' },
    { icon: 'sync', title: 'Easy to evolve', text: 'When your process changes, the software changes with it — without a new project.' },
    { icon: 'users', title: 'Built with your staff', text: 'People who live the workflow help shape it, so adoption is natural.' },
  ],
}

export const compare = {
  title: 'Three Ways to Get Software. Only One Fits.',
  columns: ['', 'Off-the-shelf', 'Fully custom code', 'Low-code with Blackfin'],
  rows: [
    ['Fit to your workflows', 'Generic', 'Exact', 'Exact'],
    ['Time to first release', 'Months of procurement', 'About eighteen months', 'Weeks'],
    ['Cost', 'Licenses that grow', 'Six figures and up', 'A fraction of custom'],
    ['Who owns it', 'The vendor', 'Varies', 'Your agency'],
    ['Changing it later', 'Vendor roadmap', 'New project', 'Straightforward'],
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common Questions',
  items: [
    { q: 'What is low-code, in plain English?', a: 'It is a way of building software by configuring proven components instead of hand-writing everything. You get a custom result, faster and at lower cost, that your team can maintain.' },
    { q: 'Who owns the software you build?', a: 'Your agency does — not us, not a vendor. There is no lock-in and no surprise licensing fee for the solution we build.' },
    { q: 'How quickly can we get started?', a: 'Most clients go from initial call to approved proposal in under two weeks. Within 48 hours of your free session you receive a road map with scope, timeline and exact cost.' },
    { q: 'How does procurement work?', a: 'California agencies can contract with us directly through our CMAS contract, with no competitive bid required. We also offer other contract vehicles and can discuss which applies to your agency.' },
    { q: 'Is the first call a sales pitch?', a: 'No. It is a 30-minute conversation where we listen, share what we have seen work for similar organizations, and give you an honest sense of what is possible.' },
  ],
}

/* ------------------------------------------------------------------ BLOG */

export const blog = {
  eyebrow: 'Blog',
  title: 'Insights for Local Government Technology',
  text: 'Practical writing on low-code, procurement and getting more from public-sector software.',
  note: 'Sample layout — posts are managed in WordPress (Divi Blog module) after migration.',
  posts: [
    { title: 'Why Off-the-Shelf Software Rarely Fits a Local Agency', date: 'May 2026', category: 'Software', image: images.desk, excerpt: 'Generic tools are built for the average organization. Here is what to do when your workflows are anything but average.' },
    { title: 'CMAS Explained: The Fastest Path to a Compliant Contract', date: 'May 2026', category: 'Procurement', image: images.handshake, excerpt: 'How the California Multiple Award Schedule lets agencies contract directly, without a competitive bid.' },
    { title: 'Low-Code in Weeks: What a First Release Looks Like', date: 'May 2026', category: 'Low-Code', image: images.code, excerpt: 'A walk through how a working first version gets in front of your team in weeks instead of quarters.' },
  ],
}

/* --------------------------------------------------------------- CONTACT */

export const contact = {
  eyebrow: "Let's Talk",
  title: 'Schedule Your Free Session',
  text: 'The next step takes 30 minutes and costs nothing. No pressure. No jargon. Just a straight conversation about what you need.',
  cards: [
    { icon: 'phone', label: "Let's Talk", value: brand.phone, href: brand.phoneHref },
    { icon: 'mail', label: 'Email Us', value: brand.email, href: `mailto:${brand.email}` },
    { icon: 'pin', label: 'Write or Visit', value: brand.address.join(', '), href: undefined },
  ],
  form: {
    title: 'Send us a message',
    fields: ['Name', 'Agency', 'Email', 'Phone'],
    messageLabel: 'How can we help?',
    submit: 'Send Message',
  },
}

export const footer = {
  blurb: 'Software for the way government works. Custom low-code solutions deployed in weeks, not months. You own what we build.',
  quick: nav,
  copyright: `© 2026 ${brand.company}. All Rights Reserved.`,
}
