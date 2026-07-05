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
    "Open to Full Stack Developer & Software Engineer opportunities",
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
  worksFor: "Sparrow Softtech",
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
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

/* -------------------------------------------------------------- Snapshot */

export const snapshot: SnapshotStat[] = [
  { value: "2.5+ Years", label: "Full-stack development experience" },
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
  "I am a Full Stack Developer and Team Lead with 2.5+ years of experience developing SaaS applications using React.js, Next.js, Vue.js, Node.js, Express.js, and MongoDB.",
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
  { name: "Familiar With", items: ["PostgreSQL", "Redis", "Nginx"] },
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
      "Production Deployment",
    ],
  },
];

/* ------------------------------------------------------------ Experience */

export const experience: ExperienceRole[] = [
  {
    title: "Full Stack Developer & Team Lead",
    company: "Sparrow Softtech",
    location: "Bhavnagar, India",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Develop and maintain full-stack SaaS applications across MERN and MEVN environments.",
      "Design and maintain REST APIs with authentication, authorization, and role-based access control.",
      "Integrate Stripe, Razorpay, Cashfree, NMI, and Dejavoo payment gateways.",
      "Build reusable and responsive frontend components.",
      "Lead developers through planning, task allocation, technical guidance, code reviews, and debugging.",
      "Manage production builds, deployments, releases, and production issue resolution.",
      "Implement Firebase services and push notifications.",
      "Communicate directly with clients to analyse requirements and deliver production-ready solutions.",
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
    id: "gym",
    slug: "gym-management-system",
    num: "01",
    name: "Gym Management System",
    company: "Sparrow Softtech",
    timeline: "Jan 2025 – Present",
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
      "The platform is in active development and production use. Leading it end to end strengthened my ability to translate client requirements into a technical plan and deliver a multi-role SaaS product with a team.",
  },
  {
    id: "ems",
    slug: "employee-management-system",
    num: "02",
    name: "Employee Management System",
    company: "Sparrow Softtech",
    timeline: "Nov 2025 – Mar 2026",
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
    id: "rental",
    slug: "rental-management-system",
    num: "03",
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
    id: "bed",
    slug: "bed-configurator",
    num: "04",
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
    num: "05",
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
    detail: "Percentage as per resume",
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
