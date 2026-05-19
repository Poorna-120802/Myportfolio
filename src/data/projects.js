export const projects = [
  {
    id: "ongole-bulls",
    title: "Ongole Bulls Investment Platform",
    category: "fullstack",
    featured: true,
    image: null,
    gradient: "from-violet-600/40 via-fuchsia-600/30 to-cyan-600/40",
    description:
      "Enterprise investment platform with 10 role-based dashboards for investment, partner, compliance, and operations teams.",
    problem:
      "Investment firms need unified, secure workflows across diverse roles—from investors to compliance officers—with BSE integration and real-time operational visibility.",
    features: [
      "10 role-based dashboards with granular access control",
      "BSE integration for investment workflows",
      "Dark/light theme system",
      "Responsive operational dashboards",
      "REST API layer with Spring Boot backend",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "AWS S3",
      "CloudFront",
      "EC2",
      "RDS",
    ],
    challenges: [
      "Coordinating multi-role UX while maintaining consistent design systems",
      "BSE integration complexity and error handling",
      "Production redeployment with CloudFront cache invalidation",
    ],
    contribution:
      "End-to-end feature development across React frontend, Spring Boot APIs, dashboard modules, theme enhancements, and AWS deployment activities.",
    architecture: [
      "React SPA hosted on S3 + CloudFront",
      "Spring Boot REST APIs on EC2",
      "MySQL on AWS RDS",
      "Role-based authorization per dashboard module",
    ],
    github: null,
    live: null,
  },
  {
    id: "books-cart",
    title: "Books Cart",
    category: "fullstack",
    featured: true,
    image: null,
    gradient: "from-amber-600/30 via-orange-600/25 to-rose-600/35",
    description:
      "Dynamic web application with role-based access for Admin and Customer users managing book inventory and purchases.",
    problem:
      "Small retailers need a simple, secure catalog system with separate admin and customer experiences without complex infrastructure.",
    features: [
      "Admin CRUD on book inventory",
      "Customer secure login & browse",
      "Book details & purchase flow",
      "Role-based access control",
    ],
    techStack: ["Java", "JSP/Servlets", "HTML", "CSS", "Oracle Database"],
    challenges: [
      "Session management across roles",
      "Inventory consistency during concurrent purchases",
    ],
    contribution:
      "Designed and implemented full application flow including authentication, CRUD operations, and customer purchase journey.",
    architecture: [
      "MVC with JSP/Servlets",
      "Oracle relational schema",
      "Role-separated views and controllers",
    ],
    github: null,
    live: null,
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    category: "frontend",
    featured: false,
    image: null,
    gradient: "from-emerald-600/30 via-teal-600/25 to-cyan-600/35",
    description:
      "Responsive e-commerce site with product catalogue, shopping cart, and simulated checkout with real-time updates.",
    problem:
      "Demonstrate modern frontend patterns—cart state, quantity updates, and API-driven product flows—in a polished consumer UI.",
    features: [
      "Product catalogue with filtering",
      "Real-time cart updates",
      "Quantity & total calculations",
      "API-integrated data flow",
      "Responsive Bootstrap layout",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST APIs"],
    challenges: [
      "Keeping cart state synchronized across UI components",
      "Responsive layout across device sizes",
    ],
    contribution:
      "Built entire frontend including cart logic, API integration, and responsive product experience.",
    architecture: [
      "Component-style JS modules",
      "Fetch-based API integration",
      "Bootstrap grid system",
    ],
    github: null,
    live: null,
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
];
