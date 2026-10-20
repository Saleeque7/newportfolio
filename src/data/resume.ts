// Default portfolio content, taken from Saleeque's resume. Each section uses
// this only until matching content is saved in the Payload admin.

export const PROFILE = {
  role: 'Software Engineer',
  typedRoles: ['Software Engineer', 'Full-Stack Developer', 'MERN Stack Developer'],
}

export const BIO = [
  "I'm a software engineer and full-stack developer working with MongoDB, Express, React, Node.js, Next.js and TypeScript. I care about quality code, creative problem solving and web experiences that feel effortless to use.",
  "I began my career at Techsa Solutions in September 2025, where my training period added Laravel to my toolkit and I built the Ayurveda Wellness Centre booking platform. Since January 2026 I've been a Software Engineer at Auxio Technologies, a product-based company. There I contribute to TaDa Tap, a tap-to-collect digital loyalty card platform for UK businesses, and have contributed to OhMyTicket, a ticketing and events platform, and member apps used by clubs and organisations across the UK.",
  'Before that I built full products end to end: QuickWork, a gig platform with real-time chat, video calls and Razorpay/Stripe payments, and Tiktik, an e-commerce store with its own admin panel and sales reports.',
]

export const HIGHLIGHTS = [
  { icon: 'bi-briefcase', label: 'Since Jan 2026', value: 'Auxio Technologies' },
  { icon: 'bi-code-slash', label: 'Full-stack', value: 'MERN · Next.js · Laravel' },
  { icon: 'bi-cloud-check', label: 'Ship & scale', value: 'AWS · Nginx · CI/CD' },
]

export const SOCIALS = [
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/saleeque-486b22199/' },
  { platform: 'github', url: 'https://github.com/Saleeque7' },
]

export type ServiceFeature = { icon: string; label: string; value: string }

export type ServiceCard = {
  icon: string
  title: string
  tagline?: string
  features?: ServiceFeature[]
  points?: string[]
  note?: string
}

export const SERVICES: ServiceCard[] = [
  {
    icon: 'bi-window-stack',
    title: 'Full-Stack Web Apps',
    tagline: 'From idea to launch',
    features: [
      { icon: 'bi-layers', label: 'Front-end', value: 'React · Next.js' },
      { icon: 'bi-server', label: 'Back-end', value: 'Node · Laravel' },
    ],
    points: ['UI, database and API design', 'Responsive single-page apps', 'Admin dashboards and reports', 'Deployed and production-ready'],
    note: 'For startups, products and internal tools.',
  },
  {
    icon: 'bi-hdd-network',
    title: 'APIs & Back-End',
    tagline: 'Secure, structured, scalable',
    features: [
      { icon: 'bi-diagram-3', label: 'Architecture', value: 'MVC · REST' },
      { icon: 'bi-shield-lock', label: 'Auth', value: 'JWT · OAuth' },
    ],
    points: ['RESTful APIs with clear contracts', 'Google and GitHub sign-in', 'MongoDB and Mongoose data models', 'Third-party API integrations'],
    note: 'Built to power web and mobile front-ends.',
  },
  {
    icon: 'bi-credit-card',
    title: 'Payments & Wallets',
    tagline: 'Checkout that just works',
    features: [
      { icon: 'bi-credit-card-2-front', label: 'Gateways', value: 'Razorpay · Stripe' },
      { icon: 'bi-wallet2', label: 'Wallets', value: 'Credits · Refunds' },
    ],
    points: ['Secure checkout flows', 'In-app wallet and transactions', 'Coupons and referral systems', 'Subscriptions and revenue tracking'],
    note: 'For marketplaces, stores and subscriptions.',
  },
  {
    icon: 'bi-chat-dots',
    title: 'Real-Time Features',
    tagline: 'Live, instant, connected',
    features: [
      { icon: 'bi-lightning-charge', label: 'Messaging', value: 'Socket.IO' },
      { icon: 'bi-camera-video', label: 'Video calls', value: 'ZEGOCLOUD' },
    ],
    points: ['Live chat with typing indicators', 'Text, audio and video sharing', 'Notifications and unread counts', 'Video calls and meetings'],
    note: 'For marketplaces, communities and teams.',
  },
  {
    icon: 'bi-phone',
    title: 'Responsive Interfaces',
    tagline: 'Polished on every screen',
    features: [
      { icon: 'bi-palette', label: 'Design', value: 'Figma to code' },
      { icon: 'bi-phone', label: 'Layout', value: 'Mobile first' },
    ],
    points: ['Redux state management', 'Tailwind CSS component systems', 'Pagination, filters and sorting', 'Smooth, lightweight animations'],
    note: 'For products that look as good as they work.',
  },
  {
    icon: 'bi-cloud-arrow-up',
    title: 'Deployment & Cloud',
    tagline: 'Shipped and scaled',
    features: [
      { icon: 'bi-cloud', label: 'Cloud', value: 'AWS EC2 · S3' },
      { icon: 'bi-arrow-repeat', label: 'Delivery', value: 'CI/CD' },
    ],
    points: ['Nginx and server setup', 'File storage in S3 buckets', 'Vercel, Render and Hostinger', 'Domain management'],
    note: 'Hosting that keeps up as you grow.',
  },
]

export const SKILL_GROUPS = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { title: 'Front-end', items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'Axios'] },
  { title: 'Back-end', items: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'JWT', 'WebSockets'] },
  { title: 'Databases', items: ['MongoDB', 'Mongoose'] },
  { title: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'Nginx', 'CI/CD', 'ZEGOCLOUD'] },
  { title: 'Tools', items: ['Git', 'Postman', 'Figma', 'VS Code', 'Vite', 'Webpack'] },
]

// `logo` is a site favicon shown in place of the icon
export type ProjectLink = { label: string; url: string; icon: string; logo?: string }

export type ProjectCard = {
  title: string
  tag: string
  description: string
  tech: string[]
  links: ProjectLink[]
  coverUrl?: string | null
}

export const PROJECTS: ProjectCard[] = [
  {
    title: 'QuickWork',
    tag: 'Gig platform',
    coverUrl: '/work/quickwork.jpg',
    description:
      'A freelance marketplace with Google/GitHub sign-in, job search with filters, Razorpay and Stripe payments with a wallet, real-time chat, ZEGOCLOUD video calls, reviews and an admin dashboard for revenue and subscriptions.',
    tech: ['React', 'Redux', 'Chakra UI', 'Node.js', 'MongoDB', 'Socket.IO', 'AWS'],
    links: [
      { label: 'Live', url: 'https://saleeque7-quickwork-frontend-nu.vercel.app/', icon: 'bi-box-arrow-up-right' },
      { label: 'Frontend', url: 'https://github.com/Saleeque7/Saleeque7-quickwork_frontend.git', icon: 'bi-github' },
      { label: 'Backend', url: 'https://github.com/Saleeque7/quickwork_backend.git', icon: 'bi-github' },
    ],
  },
  {
    title: 'Tiktik',
    tag: 'E-commerce',
    description:
      'An online store with OTP sign-in, cart, coupons, referrals, wallet and payment gateway, real-time stock and order returns, plus an admin panel with charts and PDF/Excel sales reports.',
    tech: ['Node.js', 'Express', 'EJS', 'MongoDB', 'JavaScript'],
    links: [
      { label: 'Live', url: 'https://tiktiknew-1.onrender.com', icon: 'bi-box-arrow-up-right' },
      { label: 'Code', url: 'https://github.com/Saleeque7/tiktiknew.git', icon: 'bi-github' },
    ],
  },
  {
    title: 'ThoughtLoom',
    tag: 'Mini project',
    coverUrl: '/work/thoughtloom.jpg',
    description:
      'A place to capture and organise thoughts and ideas, with a responsive Tailwind UI, Lottie animations and media stored in S3.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS', 'S3'],
    links: [
      { label: 'Live', url: 'https://thought-loom.vercel.app/', icon: 'bi-box-arrow-up-right' },
      { label: 'Frontend', url: 'https://github.com/Saleeque7/thought-loom.git', icon: 'bi-github' },
      { label: 'Backend', url: 'https://github.com/Saleeque7/thoughtloom_backend.git', icon: 'bi-github' },
    ],
  },
  {
    title: 'WorkWise',
    tag: 'Mini project',
    description:
      'A task and project management dashboard with real-time updates and interactive charts to track progress.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Charts'],
    links: [
      { label: 'Frontend', url: 'https://github.com/Saleeque7/workWise.git', icon: 'bi-github' },
      { label: 'Backend', url: 'https://github.com/Saleeque7/workWise_backend.git', icon: 'bi-github' },
    ],
  },
]

export type CareerItem = {
  role: string
  company: string
  companyUrl?: string
  companyLogo?: string
  period: string
  about?: string
  points: string[]
  links?: ProjectLink[]
}

// Listed oldest first, from the start of the career. Favicons live in public/logos.
export const EXPERIENCE: CareerItem[] = [
  {
    role: 'Trainee Software Engineer',
    company: 'Techsa Solutions',
    companyUrl: 'https://techsasolutions.com/',
    companyLogo: '/logos/techsa.png',
    period: 'Sep 2025 – Dec 2025',
    about: 'UK web design and software company, and the parent company of Auxio Technologies.',
    points: [
      'Built the Ayurveda Wellness Centre booking platform, an online appointment scheduling system for a UK wellness clinic.',
      'Completed my training period, adding Laravel with Inertia and React to my MERN background.',
      "Learned the team's development workflow, code reviews and delivery practices before moving to Auxio Technologies.",
    ],
    links: [
      {
        label: 'Ayurveda Wellness Centre',
        url: 'https://booking.ayurvedawellnesscentre.co.uk/',
        icon: 'bi-box-arrow-up-right',
        logo: '/logos/ayurveda.png',
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Auxio Technologies',
    companyUrl: 'https://auxio.in/',
    companyLogo: '/logos/auxio.png',
    period: 'Jan 2026 – Present',
    about: 'A product-based company, part of Techsa Solutions.',
    points: [
      'Contributing to TaDa Tap, a digital loyalty card platform for UK cafés, salons, gyms and shops. Customers collect stamps by tapping an NFC display or scanning a QR code, with no app needed.',
      'Contributed to OhMyTicket, a ticketing and events platform, across front-end and back-end features.',
      'Built and maintained member-facing apps used by clubs and organisations across the UK.',
      'Worked with designers and product owners to turn requirements into responsive, user-friendly interfaces.',
      'Integrated REST APIs and cloud services, and took part in code reviews, debugging and performance work.',
    ],
    links: [
      { label: 'TaDa Tap', url: 'https://tadatap.co.uk/', icon: 'bi-box-arrow-up-right', logo: '/logos/tadatap.png' },
      { label: 'OhMyTicket', url: 'https://ohmyticket.co.uk/', icon: 'bi-box-arrow-up-right', logo: '/logos/ohmyticket.png' },
    ],
  },
]

export const EDUCATION = {
  degree: 'B.Com, Computer Application',
  school: 'Lakshmi Narayana Arts and Science College, Thrissur',
  university: 'University of Calicut, Kerala',
  period: '2017 – 2020',
}

export const SOFT_SKILLS = ['Problem-Solving', 'Adaptability', 'Communication', 'Teamwork', 'Leadership', 'Time Management']
