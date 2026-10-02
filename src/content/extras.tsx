/*
 * ADDITIONAL COPY (second pass): extra sections for every page.
 * Same rule as site.tsx — each block here is text for a Divi module.
 * Items marked "illustrative" are examples of what the platforms can do, not client claims.
 */
import { brand, images } from './site'

const unsplash = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const extraImages = {
  gallery1: unsplash('1522202176988-66273c2fd55f', 900),
  gallery2: unsplash('1519389950473-47ba0277781c', 900),
  gallery3: unsplash('1556761175-b413da4baf72', 900),
  skyline: unsplash('1477959858617-67f85cf4f1df', 1600),
  dashboard2: unsplash('1460925895917-afdab827c52f', 1200),
  notes: unsplash('1517842645767-c639042777db', 1200),
  forms: unsplash('1450101499163-c8848c66ca85', 1200),
  workspace: unsplash('1497366811353-6870744d04b2', 1200),
  chamber: unsplash('1529107386315-e1a2ed48a620', 1200),
  glass: unsplash('1554469384-e58fac16e23a', 1200),
  stickies: unsplash('1552664730-d307ca884978', 1200),
  analytics: unsplash('1526628953301-3e589a6a8b74', 1200),
}

/* ------------------------------------------------------------------ HOME */

export const heroChips = ['CMAS contract holder', 'LA County MSA', 'Cal-Card friendly', 'You own the software']

export const heroMock = {
  title: 'Procurement requests',
  badge: 'Illustrative',
  rows: [
    { label: 'New vendor request', status: 'Approved', tone: 'good' },
    { label: 'Budget check', status: 'In review', tone: 'warn' },
    { label: 'Contract renewal', status: 'Scheduled', tone: 'info' },
  ],
  bars: [38, 62, 48, 80, 66, 92],
  foot: ['Live in weeks', 'Owned by your agency'],
}

export const partnerChips = [
  { icon: 'shield', label: 'CMAS contract holder' },
  { icon: 'lock', label: 'You own the software' },
]

export const serve = {
  eyebrow: 'Who We Serve',
  title: 'Built for the Teams That Keep Your Community Running',
  text: 'Every department has its own workflows. Here are examples of the kinds of tools local agencies ask us to build or configure.',
  note: 'Examples are illustrative — if your workflow is not listed, we can still build it.',
  items: [
    { icon: 'layers', title: 'Finance & Procurement', text: 'Purchase requests, vendor coordination, approvals and spend tracking in one audit-ready place.' },
    { icon: 'users', title: 'HR & Labor Relations', text: 'Negotiation cycles, bargaining units, MOU tracking, meeting agendas and article actions.' },
    { icon: 'heart', title: 'Housing & Community Services', text: 'Outreach, referrals, encampment tracking, cleanup logistics and inter-agency response.' },
    { icon: 'building', title: 'Public Works & Field Teams', text: 'Work requests, task templates, auto-assignments and reminders for crews on the move.' },
    { icon: 'doc', title: 'Clerk, Boards & Legal', text: 'Agenda items, approvals, document routing and records your auditors can follow.' },
    { icon: 'grid', title: 'IT & Project Offices', text: 'Project tracking, dependencies and role-based coordination across departments.' },
  ],
}

export const journey = {
  eyebrow: 'Your Timeline',
  title: 'From First Call to Software You Own',
  text: 'A clear path with no surprises — here is what the first weeks look like.',
  items: [
    { icon: 'phone', label: 'Day 1', title: 'Free 30-minute session', text: 'We listen to your challenges. No pitch.' },
    { icon: 'doc', label: 'Within 48 hours', title: 'Custom road map', text: 'Scope, timeline and exact cost in plain English.' },
    { icon: 'check', label: 'Under 2 weeks', title: 'Approved proposal', text: 'Contract through CMAS or another vehicle.' },
    { icon: 'bolt', label: 'In weeks', title: 'First release live', text: 'Your team starts using it and shapes it.' },
    { icon: 'lock', label: 'Always', title: 'You own it', text: 'No lock-in. The software belongs to your agency.' },
  ],
}

/* ----------------------------------------------------------------- ABOUT */

export const aboutFacts = [
  { text: 'CMAS', label: 'California Multiple Award Schedule contract holder' },
  { text: 'Local gov', label: 'Built for the way local agencies work' },
  { text: '100%', label: 'Of what we build belongs to your agency' },
  { text: 'Plain English', label: 'No tech jargon, no smoke and mirrors' },
]

export const approach = {
  eyebrow: 'How We Work',
  title: 'A Straightforward Way of Working',
  text: 'Most consultants profit from complexity and long timelines. Our approach is built to do the opposite.',
  items: [
    { icon: 'search', title: 'Listen first', text: 'We start by understanding your workflows, compliance needs and constraints — in a conversation, not a sales deck.' },
    { icon: 'doc', title: 'Put it in writing', text: 'Within 48 hours you get scope, timeline and exact cost. No vague estimates, no 40-page documents.' },
    { icon: 'users', title: 'Build alongside you', text: 'No black-box development. Your staff help shape the tools, so they are tools people actually use.' },
    { icon: 'sync', title: 'Hand it over', text: 'The software is yours, vendor-independent and flexible enough to evolve with your operation.' },
  ],
}

export const gallery = {
  eyebrow: 'In Practice',
  title: 'Working With Your Team, Not Around Them',
  items: [
    { image: extraImages.gallery1, caption: 'Listening to your challenges' },
    { image: extraImages.gallery2, caption: 'Designing with the people who use it' },
    { image: extraImages.gallery3, caption: 'Launching in weeks, not months' },
  ],
}

/* ------------------------------------------------------------- PLATFORMS */

export const productExtras: Record<string, { forTeams: string; outcomes: string[]; chips: { icon: string; label: string }[] }> = {
  procurement: {
    forTeams: 'Purchasing, finance, department heads',
    outcomes: ['One transparent request trail', 'Faster approvals', 'Audit-ready records'],
    chips: [{ icon: 'check', label: 'Request approved' }, { icon: 'chart', label: 'Spend tracked' }],
  },
  'labor-relations': {
    forTeams: 'HR, labor relations, negotiation teams',
    outcomes: ['Every MOU and article in one view', 'Shared agendas and updates', 'Clear action ownership'],
    chips: [{ icon: 'calendar', label: 'Meeting scheduled' }, { icon: 'doc', label: 'MOU updated' }],
  },
  'housing-outreach': {
    forTeams: 'Outreach teams, housing, inter-agency partners',
    outcomes: ['Case and referral tracking', 'Coordinated cleanups', 'Automated communications'],
    chips: [{ icon: 'pin', label: 'Referral logged' }, { icon: 'users', label: 'Team notified' }],
  },
  'project-management': {
    forTeams: 'Project offices, operations, cross-department teams',
    outcomes: ['Templates for repeatable work', 'Auto-assigned tasks', 'Reminders and dependencies'],
    chips: [{ icon: 'bolt', label: 'Task assigned' }, { icon: 'clock', label: 'Reminder sent' }],
  },
}

export const everyProduct = {
  eyebrow: 'Included in Every Product',
  title: 'The Basics Are Already Handled',
  items: [
    { icon: 'check', title: 'Approval workflows', text: 'Route requests to the right people with a clear trail.' },
    { icon: 'lock', title: 'Role-based access', text: 'People see what they should, and nothing more.' },
    { icon: 'chart', title: 'Reporting & analytics', text: 'Dashboards and reports built around your questions.' },
    { icon: 'doc', title: 'Audit-ready records', text: 'History you can show to auditors and boards.' },
    { icon: 'mail', title: 'Automated communication', text: 'Notifications and reminders without manual chasing.' },
    { icon: 'shield', title: 'You own it', text: 'Vendor-independent platforms and no lock-in.' },
  ],
}

export const preVsCustom = {
  eyebrow: 'Two Ways to Start',
  title: 'Pre-Built Product or Custom Build?',
  options: [
    {
      icon: 'bolt',
      title: 'Start with a product',
      tag: 'Fastest to launch',
      points: ['Already configured for government operations', 'Adjusted to your forms and approvals', 'A great fit when your need matches one of the four above'],
    },
    {
      icon: 'grid',
      title: 'Build something custom',
      tag: 'Exactly your workflow',
      points: ['Designed around your process and compliance rules', 'Built in weeks with your team', 'Ideal when nothing off the shelf fits'],
    },
  ],
}

/* ------------------------------------------------------- HOW LOW-CODE WORKS */

export const speed = {
  eyebrow: 'Time to Value',
  title: 'Why Low-Code Gets You There Sooner',
  text: 'Building from proven components replaces months of hand-coding. The bars below illustrate the contrast between the three paths: months of procurement, around eighteen months for fully custom code, and weeks with low-code.',
  note: 'Illustrative — actual timelines depend on scope and are confirmed in your road map.',
  bars: [
    { label: 'Off-the-shelf', value: 'Months of procurement', width: 78, tone: 'muted' },
    { label: 'Fully custom code', value: 'About eighteen months', width: 100, tone: 'muted' },
    { label: 'Low-code with Blackfin', value: 'Weeks', width: 14, tone: 'accent' },
  ],
}

export const stack = {
  eyebrow: 'Under the Hood',
  title: 'How a Low-Code Solution Comes Together',
  layers: [
    { icon: 'target', title: 'Your workflows', text: 'Forms, approvals, rules and reports, as your team describes them.' },
    { icon: 'layers', title: 'Proven building blocks', text: 'Configured on open, vendor-independent low-code platforms.' },
    { icon: 'shield', title: 'Security & access', text: 'Role-based access and audit-ready records built in.' },
    { icon: 'building', title: 'Software your agency owns', text: 'Delivered to you — no lock-in, no surprise licensing fees.' },
  ],
}

export const canBuild = {
  eyebrow: 'What You Can Build',
  title: 'Common Workflows We Turn Into Software',
  note: 'Illustrative examples.',
  items: [
    { icon: 'doc', text: 'Request and approval workflows' },
    { icon: 'users', text: 'Case and referral tracking' },
    { icon: 'calendar', text: 'Meeting agendas and action items' },
    { icon: 'chart', text: 'Dashboards and management reports' },
    { icon: 'bolt', text: 'Task templates and auto-assignment' },
    { icon: 'mail', text: 'Automated notifications' },
    { icon: 'lock', text: 'Role-based team coordination' },
    { icon: 'sync', text: 'Replacing spreadsheet workarounds' },
  ],
}

export const myths = {
  eyebrow: 'Myths vs Reality',
  title: 'What People Get Wrong About Low-Code',
  items: [
    { myth: '"Low-code means limited."', reality: 'It means faster. Proven building blocks handle the basics so we can spend our time on what is unique to your agency.' },
    { myth: '"We will be locked in."', reality: 'The opposite. We build on open, vendor-independent platforms and the software belongs to your agency.' },
    { myth: '"It only works for big agencies."', reality: 'It is how smaller agencies get enterprise-grade tools without a billion-dollar budget.' },
  ],
}

/* ------------------------------------------------------------------ BLOG */

export const blogTopics = ['All', 'Low-Code', 'Procurement', 'Software', 'Local Government', 'Case Studies']

export const blogFeatured = {
  title: 'Software Made for the Way You Work: A Plain-English Guide for Local Agencies',
  excerpt: 'What to ask before buying software, how low-code changes the cost equation, and how to avoid the six-figure, eighteen-month trap.',
  category: 'Guide',
  date: 'May 2026',
  image: images.city,
}

export const blogMore = [
  { title: 'Cal-Card Purchases: Starting Small With Big Impact', date: 'May 2026', category: 'Procurement', image: extraImages.notes, excerpt: 'How smaller initiatives can launch quickly within existing Cal-Card limits.' },
  { title: 'Spreadsheets to Systems: Retiring the Workarounds', date: 'May 2026', category: 'Software', image: extraImages.analytics, excerpt: 'Signs your team has outgrown spreadsheets — and what to replace them with.' },
  { title: 'Owning Your Software: Why It Matters for Public Agencies', date: 'May 2026', category: 'Local Government', image: extraImages.glass, excerpt: 'No vendor lock-in and no surprise licensing fees: what ownership means in practice.' },
]

export const subscribe = {
  title: 'Get new posts in your inbox',
  text: 'Occasional, practical writing for local government technology teams. No spam.',
  button: 'Email us to subscribe',
  href: `mailto:${brand.email}?subject=Subscribe%20to%20Blackfin%20updates`,
}

/* --------------------------------------------------------------- CONTACT */

export const afterContact = {
  eyebrow: 'What Happens Next',
  title: 'What to Expect After You Reach Out',
  items: [
    { icon: 'mail', title: 'We reply quickly', text: 'We will confirm a time that works for your team.' },
    { icon: 'phone', title: 'A 30-minute conversation', text: 'You describe the challenge; we share what has worked for similar agencies.' },
    { icon: 'doc', title: 'A road map in 48 hours', text: 'Scope, timeline and exact cost — in plain English.' },
  ],
}

export const prepare = {
  title: 'Helpful to Have in Mind',
  text: 'You do not need to prepare anything formal, but these help us make the 30 minutes count.',
  items: [
    'The process or workflow that is causing the most friction',
    'Who uses it today, and what they use (spreadsheets, email, a legacy tool)',
    'Any compliance or reporting requirements that apply',
    'Your agency’s preferred procurement route, if you know it',
  ],
}

export const vehicleChips = ['California Multiple Award Schedule (CMAS)', 'Los Angeles County MSA', 'Cal-Card purchases']
