/**
 * Single source of truth for all portfolio content.
 *
 * Consumed by the home page, the /projects/[slug] case-study routes,
 * the dynamic sitemap, and the dynamic Open Graph image generators.
 * Content transcribed faithfully from the approved design brief.
 */

/* ----------------------------------------------------------------- Types */

export interface NavItem {
  label: string;
  id: string;
}

export interface SnapshotStat {
  value: string;
  label: string;
}

export interface Capability {
  mark: string;
  title: string;
  desc: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ExperienceRole {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface Project {
  id: string;
  slug: string;
  num: string;
  name: string;
  company: string;
  timeline: string;
  role: string;
  stack: string[];
  description: string;
  problem: string;
  roles: string[];
  modules: string[];
  contribution: string;
  challenges: string;
  architecture: string;
  result: string;
  screenshots?: { src: string; alt: string }[];
}

export interface Award {
  id: string;
  title: string;
  meta: string;
  desc: string;
  image: string;
}

export interface EducationEntry {
  title: string;
  detail: string;
  period: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/* --------------------------------------------------------------- Profile */

export const profile = {
  name: "Yashrajsinh Jadeja",
  firstName: "Yashrajsinh",
  title: "Full Stack Developer & Team Lead",
  initials: "YJ",
  availability:
    "Open to remote contract projects with US teams",
  heading: "Hi, I’m Yashrajsinh Jadeja.",
  intro:
    "I build scalable SaaS applications, secure REST APIs, responsive web and mobile experiences, payment workflows, and production-ready systems using MERN and MEVN technologies.",
  email: "yashrajsinhjadeja757@gmail.com",
  location: "Bhavnagar, Gujarat, India",
  locality: "Bhavnagar",
  region: "Gujarat",
  country: "IN",
  resume: "/Yashrajsinh_Jadeja_Resume.pdf",
  resumeDownloadName: "Yashrajsinh_Jadeja_Resume.pdf",
  linkedin: "https://linkedin.com/in/yashjadeja132",
  github: "https://github.com/yashjadeja132",
  knowsAbout: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Payment Integrations",
    "SaaS",
  ],
  worksFor: "Kanzariya Pharmaceutical Pvt. Ltd.",
  knowsLanguage: ["English", "Hindi", "Gujarati"],
} as const;

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Email", href: `mailto:${profile.email}` },
];

/* ------------------------------------------------------------------- Nav */

export const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

/* -------------------------------------------------------------- Snapshot */

export const snapshot: SnapshotStat[] = [
  { value: "3 Years", label: "Full-stack development experience" },
  { value: "MERN & MEVN", label: "React.js, Vue.js and Node.js" },
  {
    value: "5 Payment Gateways",
    label: "Stripe, Razorpay, Cashfree, NMI and Dejavoo",
  },
  {
    value: "Technical Leadership",
    label: "Planning, code reviews and team guidance",
  },
];

/* ----------------------------------------------------------------- About */

export const aboutParagraphs: string[] = [
  "I am a Full Stack Developer and Team Lead with 3 years of experience developing SaaS applications using React.js, Next.js, Vue.js, Node.js, Express.js, and MongoDB.",
  "My work includes REST API development, authentication, role-based access control, payment gateway integrations, recurring billing, Firebase services, push notifications, database design, production deployment, complex debugging, code reviews, project planning, and client communication.",
  "I enjoy solving real business problems, building maintainable application architecture, supporting development teams, and delivering reliable production-ready features.",
];

export const capabilities: Capability[] = [
  {
    mark: "</>",
    title: "Full Stack Engineering",
    desc: "Frontend, backend, API, database, authentication, and deployment development.",
  },
  {
    mark: "$",
    title: "SaaS & Payment Systems",
    desc: "Multi-role platforms, recurring billing, payment gateway integrations, and operational workflows.",
  },
  {
    mark: "&",
    title: "Technical Leadership",
    desc: "Planning, task allocation, debugging, code reviews, requirement analysis, and team guidance.",
  },
];

/* ---------------------------------------------------------------- Skills */

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages & Web",
    items: ["JavaScript ES6+", "HTML5", "CSS3", "SCSS"],
  },
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "Redux Toolkit",
      "Vuex",
      "Pinia",
      "Tailwind CSS",
      "Responsive Web Design",
      "Reusable Components",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
      "Role-Based Access Control",
      "Firebase",
      "Push Notifications",
    ],
  },
  { name: "Databases", items: ["MongoDB", "MySQL"] },
  { name: "Familiar With", items: ["PostgreSQL", "Redis"] },
  {
    name: "Payment Gateways",
    items: ["Stripe", "Razorpay", "Cashfree", "NMI", "Dejavoo"],
  },
  {
    name: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "VS Code",
      "Firebase Console",
      "Google Play Console",
      "Nginx",
      "Production Deployment",
    ],
  },
  {
    name: "Vibe Coding",
    items: ["Cursor", "ChatGPT", "Claude"],
  },
];

/* ------------------------------------------------------------ Experience */

export const experience: ExperienceRole[] = [
  {
    title: "Full Stack Developer",
    company: "Kanzariya Pharmaceutical Pvt. Ltd.",
    location: "Jamnagar, India",
    period: "Sep 2026 – Present",
    current: true,
    points: [
      "Building internal business applications for a pharmaceutical company, including an employee management system and a sales force automation platform.",
      "Developed Butterfly - EMS, a redesigned employee management system with a new UI and company-specific changes.",
      "Developing Disha - SFA, a sales force automation platform with a React admin web app, a Node.js/Express API and a React Native app for field teams.",
      "Implemented role-based permissions, territory hierarchy, geo-fenced attendance, approval workflows, payroll and reporting modules.",
      "Using AI-assisted (vibe coding) workflows with Cursor, ChatGPT and Claude to deliver full-stack features faster, while reviewing and testing all generated code.",
    ],
  },
  {
    title: "Full Stack Developer & Team Lead",
    company: "Sparrow Softtech",
    location: "Bhavnagar, India",
    period: "Jan 2024 – Aug 2026",
    points: [
      "Developed and maintained full-stack SaaS applications across MERN and MEVN environments.",
      "Designed and maintained REST APIs with authentication, authorization, and role-based access control.",
      "Integrated Stripe, Razorpay, Cashfree, NMI, and Dejavoo payment gateways, including recurring-payment and automated-billing workflows.",
      "Built reusable and responsive frontend components.",
      "Led developers through planning, task allocation, technical guidance, code reviews, and debugging.",
      "Managed production builds, deployments, releases, and production issue resolution.",
      "Implemented Firebase services and push notifications.",
      "Communicated directly with clients to analyse requirements and deliver production-ready solutions.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Sparrow Softtech",
    location: "Bhavnagar, India",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Contributed to a Complaint Management System using React.js, Node.js, Express.js, and MongoDB.",
      "Worked on machine-fault reporting, complaint assignment, status tracking, and resolution workflows.",
      "Fixed application issues and supported administrative modules and feature development.",
    ],
  },
];

/* -------------------------------------------------------------- Projects */

export const projects: Project[] = [
  {
    id: "erp",
    slug: "distropharma-erp",
    num: "01",
    name: "DistroPharma ERP",
    company: "Kanzariya Pharmaceutical Pvt. Ltd.",
    timeline: "Oct 2026 – Present",
    role: "Full Stack Developer",
    stack: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "JWT",
    ],
    description:
      "A multi-tenant ERP for pharmaceutical distributors. It covers masters, purchase, sales, stock, accounts and reports, with separate data for each company and role-based permissions.",
    problem:
      "Pharma distributors track batches, expiry dates, free scheme goods, GST and customer credit in separate tools and spreadsheets. This causes stock mistakes, wrong GST totals and late payments. DistroPharma ERP keeps these in one system where stock and money always match.",
    roles: ["Administrators", "Staff", "Viewers", "Custom roles"],
    modules: [
      "Party master: C&F, stockist, chemist, doctor, supplier",
      "Batch master with MRP, PTD, PTS and PTR prices",
      "Purchase orders with approval, purchase invoices and returns",
      "Quotations, proforma invoices, sales invoices and credit notes",
      "Free quantity (scheme goods) and expiry or breakage entries",
      "GST with CGST/SGST and IGST, TCS and round-off",
      "Credit control: limits, credit days and auto-lock",
      "Receipts, payments, expenses and journals",
      "Ledger, outstanding with ageing and GST registers",
      "Stock report and 16 registers with CSV export",
      "Per-module permission manager and approval queues",
      "CSV data import, A4 print, email and WhatsApp sharing",
      "React Native mobile app for approvals and quick lookups",
    ],
    contribution:
      "Designing and building the whole product myself: the React web app, the Node.js/Express API, the database design, the permission system, background email jobs, the React Native mobile app and a 250-test server test suite.",
    challenges:
      "Keeping stock exact when many users post at the same time, so nothing is oversold. Keeping every company's data separate. Locking posted documents and cancelling instead of editing, so the audit trail stays true. Applying Indian GST rules and financial-year document numbers.",
    architecture:
      "React (Vite) web app and a React Native app on one Node.js/Express REST API with JWT authentication. MongoDB with Mongoose, and per-company data isolation. Stock is a ledger with atomic per-batch balances. Redis and BullMQ send emails in the background. The web app and API can be built into one server file and run on one port.",
    result:
      "A working ERP with 250 automated tests. The server checks all totals, GST and permissions, so the screen never decides them. The screenshots below use demo data only.",
    screenshots: [
      {
        src: "/projects/erp-dashboard.jpg",
        alt: "DistroPharma ERP dashboard with sales, receivables, inventory value, low stock and near-expiry batches (demo data)",
      },
      {
        src: "/projects/erp-invoice-detail.jpg",
        alt: "DistroPharma ERP sales invoice with batch, expiry, MRP, free quantity and IGST totals (demo data)",
      },
      {
        src: "/projects/erp-stock-report.jpg",
        alt: "DistroPharma ERP stock report with batch-wise stock, expiry status and minimum stock alerts (demo data)",
      },
      {
        src: "/projects/erp-permissions.jpg",
        alt: "DistroPharma ERP permission manager with view, create, edit, delete and approve rights per module (demo data)",
      },
    ],
  },
  {
    id: "disha",
    slug: "disha-sfa",
    num: "02",
    name: "Disha - SFA",
    company: "Kanzariya Pharmaceutical Pvt. Ltd.",
    timeline: "Oct 2026 – Present",
    role: "Full Stack Developer",
    stack: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "AI-Assisted Development",
    ],
    description:
      "A sales force automation platform for pharmaceutical field teams, with a web admin panel and an Android app for medical representatives covering doctor visits, tour plans, expenses, attendance, orders, sales, targets, approvals and payroll.",
    problem:
      "Pharma field teams track doctor and chemist visits, tour plans, expenses, orders and attendance across calls, spreadsheets and paper reports, so managers have little visibility into what the field team actually did. The platform brings these workflows into one system with verified check-ins, approvals and reporting.",
    roles: [
      "Medical Representatives",
      "Area, Regional and Zonal Managers",
      "Administrators",
      "Super Administrators",
    ],
    modules: [
      "Doctor and chemist masters",
      "HQ, city, area and route territory setup",
      "Daily call reports and visit tracking",
      "Tour plans with approvals",
      "Expense claims with TA/DA rates",
      "Geo-fenced attendance with work selfie",
      "Leave management and holidays",
      "POB orders, primary and secondary sales",
      "Targets and incentives",
      "Payroll, salary templates and salary slips",
      "Dynamic roles with web and mobile permissions",
      "Reports with PDF and Excel export",
      "Device lock, notices, documents and e-detailing",
    ],
    contribution:
      "Building the platform end to end with AI-assisted (vibe coding) workflows: the React admin web app, the Node.js/Express API, the React Native Android app, role-based permissions, territory and approval workflows, and Android release builds.",
    challenges:
      "Designing a configurable permission system shared by web and mobile, modelling a territory hierarchy used by doctors, chemists and team members, verifying field activity with geo-fenced check-ins, and reviewing, testing and hardening AI-generated code with API and mobile test suites.",
    architecture:
      "React (Vite) admin web app and a React Native Android app on a shared Node.js/Express REST API with JWT authentication, role-based middleware and MongoDB. Redis and BullMQ run background email and notification jobs.",
    result:
      "Built working web and Android apps quickly with AI-assisted development, while keeping architecture decisions, code review and testing in my own hands.",
    screenshots: [
      {
        src: "/projects/disha-dashboard.jpg",
        alt: "Disha - SFA admin dashboard with daily call reports, tour approvals, expense breakdown and activity feed",
      },
    ],
  },
  {
    id: "butterfly",
    slug: "butterfly-ems",
    num: "03",
    name: "Butterfly - EMS",
    company: "Kanzariya Pharmaceutical Pvt. Ltd.",
    timeline: "Sep 2026 – Oct 2026",
    role: "Full Stack Developer",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI-Assisted Development",
    ],
    description:
      "An employee management system for Kanzariya Pharmaceutical, rebuilt from my earlier EMS product with a new UI and the changes the company required.",
    problem:
      "Handling attendance, leave, shifts and payroll manually leads to errors in salary calculation and slow monthly reporting. The company needed my earlier EMS adapted to its own HR processes, with a fresh interface.",
    roles: ["Employees", "HR / Administrators", "Managers"],
    modules: [
      "Employee management",
      "Role management",
      "Shift scheduling",
      "Attendance",
      "Leave management",
      "Payroll",
      "Indian salary calculation",
      "Monthly reports",
      "Role-based access control",
    ],
    contribution:
      "Redesigned the user interface and adapted the existing EMS platform to the company's requirements using AI-assisted (vibe coding) workflows, covering employee, attendance, leave, shift, payroll and reporting modules.",
    challenges:
      "Adapting a proven product to a different company's HR policies and salary rules without breaking existing workflows, and reviewing AI-generated interface and code changes for correctness.",
    architecture:
      "React.js web application on a Node.js/Express REST API with role-based access control and MongoDB, the same architecture as the earlier EMS with a new interface layer.",
    result:
      "Delivered a company-ready version of an existing product in about two months, showing how I reuse proven architecture and speed up delivery with AI-assisted development.",
  },
  {
    id: "gym",
    slug: "gym-management-system",
    num: "04",
    name: "Gym Management System",
    company: "Sparrow Softtech",
    timeline: "Jan 2025 – Sep 2026",
    role: "Full Stack Developer & Team Lead",
    stack: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Pinia", "NMI", "MEVN"],
    description:
      "A SaaS platform for managing gym operations across members, trainers, staff, administrators, gym owners, and super administrators.",
    problem:
      "Gym businesses typically manage memberships, class schedules, staff, billing, and member communication across disconnected tools, which creates manual work, missed payments, and inconsistent records. The platform brings these operations into one multi-role system with automated recurring billing.",
    roles: [
      "Members",
      "Trainers",
      "Staff",
      "Administrators",
      "Gym Owners",
      "Super Administrators",
    ],
    modules: [
      "Multi-role access control",
      "Member management",
      "Trainer management",
      "Class and service scheduling",
      "Attendance tracking",
      "Recurring payments",
      "Automated billing",
      "NMI payment integration",
      "E-signature workflows",
      "Internal communication",
      "Digital document management",
    ],
    contribution:
      "Led end-to-end development across frontend, backend, database design, multi-role access, recurring billing, technical planning, debugging, team guidance and production deployment.",
    challenges:
      "Designing a permission matrix that stays maintainable across six user roles, implementing reliable recurring billing on NMI with failure and retry handling, and coordinating e-signature and document workflows without blocking day-to-day operations.",
    architecture:
      "Vue.js single-page application with Pinia state management, backed by a Node.js/Express REST API with role-based middleware, MongoDB for data, and NMI for recurring payment processing.",
    result:
      "The platform reached production use across all six roles. Leading it end to end strengthened my ability to translate client requirements into a technical plan and deliver a multi-role SaaS product with a team.",
  },
  {
    id: "ems",
    slug: "employee-management-system",
    num: "05",
    name: "Employee Management System",
    company: "Sparrow Softtech",
    timeline: "Nov 2025 – Sep 2026",
    role: "Full Stack Developer",
    stack: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB"],
    description:
      "A SaaS employee management platform for digitising HR operations.",
    problem:
      "HR teams handling attendance, leave, shifts, and payroll manually face errors in salary calculation and slow monthly reporting. The platform digitises these workflows end to end, including a mobile app for employees.",
    roles: ["Employees", "HR / Administrators", "Managers"],
    modules: [
      "Employee management",
      "Role management",
      "Shift scheduling",
      "Attendance",
      "Leave management",
      "Payroll",
      "Indian salary calculation",
      "Bank-detail management",
      "Monthly reports",
      "Role-based access control",
      "React Native employee application",
    ],
    contribution:
      "Developed employee management, attendance, leave, shift, payroll, Indian salary-calculation, reporting and React Native employee modules.",
    challenges:
      "Modelling Indian salary structures and statutory calculation rules accurately, keeping attendance and leave state consistent between the web platform and the React Native app, and generating correct monthly reports across roles.",
    architecture:
      "React.js web application and React Native employee app sharing a Node.js/Express REST API with role-based access control and MongoDB for data storage.",
    result:
      "Deepened my experience shipping the same product surface across web and mobile, and in modelling payroll domain logic that must be exactly right.",
  },
  {
    id: "keyresumes",
    slug: "keyresumes-io",
    num: "06",
    name: "keyresumes.io",
    company: "Sparrow Softtech",
    timeline: "Jun 2025 – Sep 2025",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    description:
      "A web platform that helps users create professional resumes, cover letters, and public career profiles.",
    problem:
      "Job seekers often rebuild their resume and cover letter from scratch for every application. The platform lets users create professional documents from reusable templates and share a public career profile.",
    roles: ["Job seekers", "Public profile visitors"],
    modules: [
      "Dynamic resume generation",
      "Cover-letter generation",
      "Reusable templates",
      "User-controlled content and formatting",
      "Authentication",
      "Profile management",
      "Public profile sharing",
      "Responsive interface",
    ],
    contribution:
      "Contributed across frontend development, backend APIs, database design, debugging and deployment, including the resume and cover-letter generation workflows and reusable templates.",
    challenges:
      "Keeping templates flexible while giving users control over content and formatting, and keeping generated documents consistent across screen sizes.",
    architecture:
      "React.js frontend on a Node.js/Express REST API with MongoDB storing users, profiles, templates, and documents.",
    result:
      "A full product build from interface to deployment that strengthened my experience with template-driven, user-generated content.",
  },
  {
    id: "rental",
    slug: "rental-management-system",
    num: "07",
    name: "Rental Management System",
    company: "Sparrow Softtech",
    timeline: "Aug 2024 – Dec 2024",
    role: "Full Stack Developer & Team Lead",
    stack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    description:
      "A rental-management platform for properties, tenants, leases, automated billing, payments, tenant ledgers, and financial reporting.",
    problem:
      "Property managers tracking leases, rent collection, and tenant balances in spreadsheets lose visibility into what is due, paid, and overdue. The platform centralises properties, leases, billing, and ledgers with automated financial reporting.",
    roles: ["Administrators", "Property Managers", "Tenants"],
    modules: [
      "Property management",
      "Tenant management",
      "Lease management",
      "Automated billing",
      "Payments",
      "Tenant ledgers",
      "Financial reporting",
    ],
    contribution:
      "Led development of property, tenant, lease, billing, payment, ledger and financial-reporting workflows, including project planning and code reviews.",
    challenges:
      "Keeping tenant ledgers consistent with billing and payment events, handling lease lifecycle edge cases such as renewals and terminations, and producing financial reports that reconcile cleanly.",
    architecture:
      "React.js frontend with Redux state management on a Node.js/Express REST API, with MongoDB modelling properties, leases, billing cycles, and ledger entries.",
    result:
      "Delivered through planning, code reviews, and team coordination — a project that sharpened my approach to leading ledger-driven, correctness-critical systems.",
  },
  {
    id: "contracts",
    slug: "contract-management-system",
    num: "08",
    name: "Contract Management System",
    company: "Sparrow Softtech",
    timeline: "Apr 2024 – Aug 2024",
    role: "Full Stack Developer & Team Lead",
    stack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    description:
      "A contract management platform for a service company, covering contracts with customers for services delivered by field workers such as AC repair technicians, along with quotes, invoices, payments, and customer records.",
    problem:
      "A service company that sends workers to customers for jobs such as AC repairing needs clear contracts for each service. Managing those contracts, quotes, and invoices manually across spreadsheets and email loses track of approvals, payment status, and customer history. The platform centralises the contract lifecycle, quoting, invoicing, and payments in one system.",
    roles: ["Administrators", "Sales / Account Managers", "Customers"],
    modules: [
      "Contract management",
      "Quote generation",
      "Invoicing",
      "Payment processing",
      "Customer management",
    ],
    contribution:
      "Designed and built the complete software UI, designed the database, and led the team through planning and delivery of the contract, quote, invoice, payment, and customer management modules, including the payment gateway integration.",
    challenges:
      "Keeping quotes, contracts, and invoices consistent as records moved through the approval and billing lifecycle, and integrating the payment gateway reliably for customer payments.",
    architecture:
      "React.js frontend with Redux state management on a Node.js/Express REST API, with MongoDB modelling contracts, quotes, invoices, payments, and customers.",
    result:
      "Strengthened my experience building document-lifecycle-driven SaaS modules and integrating payment processing end to end.",
  },
  {
    id: "bed",
    slug: "bed-configurator",
    num: "09",
    name: "Bed Configurator",
    company: "Sparrow Softtech",
    timeline: "Jan 2024 – Mar 2024",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "An interactive product configurator allowing customers to customise bed size, colour, storage, headboard, and layout.",
    problem:
      "Customers buying configurable furniture need to see how size, colour, storage, and headboard choices combine before ordering. The configurator renders the selected combination dynamically and keeps options manageable for administrators.",
    roles: ["Customers", "Administrators"],
    modules: [
      "Dynamic product rendering",
      "Configurable product options",
      "Administrative management",
      "Responsive user interface",
      "Reusable React components",
    ],
    contribution:
      "Developed interactive configuration, dynamic product rendering, configurable options and reusable responsive React components.",
    challenges:
      "Structuring option data so combinations render correctly without hardcoding, keeping the interface responsive across devices, and designing components that stay reusable as options grow.",
    architecture:
      "React.js frontend with a component-driven configuration state, backed by a Node.js/Express API and MongoDB storing product options and configurations.",
    result:
      "A strong exercise in data-driven UI design — building rendering logic that adapts to whatever options administrators define.",
  },
  {
    id: "cms",
    slug: "complaint-management-system",
    num: "10",
    name: "Complaint Management System",
    company: "Sparrow Softtech",
    timeline: "Oct 2023 – Dec 2023",
    role: "Full Stack Developer Intern",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "A system for machine-fault reporting, complaint assignment, engineer workflows, status tracking, and complaint resolution.",
    problem:
      "Machine faults reported informally get lost or resolved slowly. The system gives operators a structured way to report faults, assigns complaints to engineers, and tracks each complaint through to resolution.",
    roles: ["Operators / Reporters", "Engineers", "Administrators"],
    modules: [
      "Machine-fault reporting",
      "Complaint assignment",
      "Engineer workflows",
      "Status tracking",
      "Complaint resolution",
    ],
    contribution:
      "Contributed during internship to complaint reporting, engineer assignment, resolution workflows, administration, debugging and feature improvements.",
    challenges:
      "Learning a production codebase quickly, modelling complaint status transitions correctly, and fixing issues without regressing existing workflows.",
    architecture:
      "React.js frontend on a Node.js/Express REST API with MongoDB storing complaints, assignments, and status history.",
    result:
      "My first production project — it established the debugging habits and workflow thinking I now use as a team lead.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------- Services */

export interface ServiceItem {
  mark: string;
  title: string;
  desc: string;
}

export const services: ServiceItem[] = [
  {
    mark: "</>",
    title: "SaaS web applications",
    desc: "Multi-role platforms, admin dashboards and customer portals built with React or Vue, Node.js and MongoDB.",
  },
  {
    mark: "$",
    title: "Payment integrations",
    desc: "Stripe, Razorpay, Cashfree, NMI and Dejavoo, including recurring billing and automated billing workflows.",
  },
  {
    mark: "RN",
    title: "Mobile apps",
    desc: "React Native apps that use the same API as your web platform, with push notifications through Firebase.",
  },
  {
    mark: "{ }",
    title: "Backend and APIs",
    desc: "Secure REST APIs, authentication, role-based access, database design and production deployment.",
  },
];

export const workSteps: { title: string; desc: string }[] = [
  {
    title: "Understand",
    desc: "We discuss your goal, users and must-have features. I write a short plan with milestones.",
  },
  {
    title: "Build",
    desc: "I build in small milestones, so you can see real progress early.",
  },
  {
    title: "Review",
    desc: "After each milestone you see a demo and give feedback, and I adjust.",
  },
  {
    title: "Launch and support",
    desc: "Production deployment, handover notes and bug-fix support after launch.",
  },
];

export const workFacts: { label: string; value: string }[] = [
  {
    label: "Time zone",
    value: "Based in India (IST, UTC+5:30). I can overlap with US hours by agreement.",
  },
  {
    label: "Communication",
    value: "Clear written updates, plus short video calls when needed.",
  },
  {
    label: "Engagement",
    value: "Remote contract work, on an hourly or fixed-scope basis.",
  },
];

/* ---------------------------------------------------------------- Awards */

export const awards: Award[] = [
  {
    id: "newcomer",
    title: "Newcomer of the Year",
    meta: "2024 · Sparrow Softtech",
    desc: "Recognised for rapid growth and impact in the first year.",
    image: "/awards/newcomer.webp",
  },
  {
    id: "shining",
    title: "Shining Star Award",
    meta: "Apr 2025 · Sparrow Softtech",
    desc: "Outstanding performance and dedication.",
    image: "/awards/shining-star.webp",
  },
  {
    id: "falcon",
    title: "The Full Stack Falcon Award",
    meta: "2025–2026 · Sparrow Softtech",
    desc: "MERN stack technical excellence.",
    image: "/awards/falcon.webp",
  },
  {
    id: "crown",
    title: "The Sparrow Crown Award",
    meta: "2025–2026 · Sparrow Softtech",
    desc: "Employee of the Year.",
    image: "/awards/crown.webp",
  },
];

/* ------------------------------------------------------- Education / Lang */

export const education: EducationEntry[] = [
  {
    title: "B.E. in Information Technology",
    detail: "CGPA: 6.72",
    period: "Jun 2021 – May 2025",
  },
  {
    title: "Higher Secondary Certificate, Science — A Group",
    detail: "Percentage: 79%",
    period: "May 2019 – May 2021",
  },
  {
    title: "Secondary School Certificate",
    detail: "Percentage: 70%",
    period: "Completed Mar 2019",
  },
];

export const languages: string[] = ["English", "Hindi", "Gujarati"];

/* ----------------------------------------------- Hero decorative visual */

export interface ArchLayer {
  label: string;
  gap: string;
  bg: string;
  border: string;
  fg: string;
  dot: string;
  anim: string;
}

export const archLayers: ArchLayer[] = [
  {
    label: "FRONTEND",
    gap: "0px",
    bg: "linear-gradient(135deg, #1B2E52, #16274A)",
    border: "rgba(127,165,245,.45)",
    fg: "#AFC6F5",
    dot: "#7FA5F5",
    anim: "yjFloatA 7s ease-in-out infinite",
  },
  {
    label: "BACKEND",
    gap: "-22px",
    bg: "linear-gradient(135deg, #17284A, #132242)",
    border: "rgba(118,152,222,.4)",
    fg: "#9FB8E8",
    dot: "#6F94E2",
    anim: "yjFloatB 8s ease-in-out infinite",
  },
  {
    label: "REST APIs",
    gap: "-22px",
    bg: "linear-gradient(135deg, #14233F, #101D36)",
    border: "rgba(110,145,215,.35)",
    fg: "#93AEDD",
    dot: "#5F87D8",
    anim: "yjFloatA 8.5s ease-in-out infinite",
  },
  {
    label: "DATABASE",
    gap: "-22px",
    bg: "linear-gradient(135deg, #101B31, #0C1628)",
    border: "rgba(95,125,185,.3)",
    fg: "#7D97C4",
    dot: "#4A6FB8",
    anim: "yjFloatB 9s ease-in-out infinite",
  },
  {
    label: "PAYMENTS",
    gap: "-22px",
    bg: "linear-gradient(135deg, #0D1728, #0A1220)",
    border: "rgba(80,108,160,.28)",
    fg: "#6C84AD",
    dot: "#3D5C99",
    anim: "yjFloatA 10s ease-in-out infinite",
  },
  {
    label: "DEPLOYMENT",
    gap: "-22px",
    bg: "linear-gradient(135deg, #0B1322, #08101C)",
    border: "rgba(70,95,140,.25)",
    fg: "#5D7499",
    dot: "#33507F",
    anim: "yjFloatB 11s ease-in-out infinite",
  },
];

export interface ArchChip {
  label: string;
  top: string;
  left: string;
  anim: string;
}

export const archChips: ArchChip[] = [
  { label: "React.js", top: "2%", left: "6%", anim: "yjFloatA 6s ease-in-out infinite" },
  { label: "Vue.js", top: "10%", left: "68%", anim: "yjFloatB 7s ease-in-out infinite" },
  { label: "Node.js", top: "36%", left: "84%", anim: "yjFloatA 8s ease-in-out infinite" },
  { label: "Express.js", top: "52%", left: "78%", anim: "yjFloatB 7.5s ease-in-out infinite" },
  { label: "MongoDB", top: "70%", left: "72%", anim: "yjFloatB 6.5s ease-in-out infinite" },
  { label: "REST APIs", top: "56%", left: "0%", anim: "yjFloatA 7.5s ease-in-out infinite" },
  { label: "Firebase", top: "28%", left: "-2%", anim: "yjFloatB 8.5s ease-in-out infinite" },
  { label: "Payments", top: "86%", left: "30%", anim: "yjFloatA 9s ease-in-out infinite" },
];
