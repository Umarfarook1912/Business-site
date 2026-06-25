export const HOME_HERO = {
  eyebrow: "Enterprise IT Consulting & Software Development",
  headline: "We Architect Solutions.\nYou Achieve More.",
  subheadline:
    "Growza helps enterprises modernize legacy systems, build scalable software, and optimize cloud infrastructure to accelerate growth and operational excellence.",
  primaryCta: { label: "Book a Consultation", href: "/#consultation" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
} as const;

export const HOME_TRUSTED = {
  label: "Trusted by forward-thinking enterprises",
  logos: [
    "Infosys", "CRED", "Dreamin", "Times Internet", "Lenscart", "Zomato",
  ],
} as const;

export const HOME_SERVICES = [
  {
    icon: "Code2",
    title: "Custom Software Development",
    description:
      "End-to-end software development services tailored to your business objectives and user needs.",
    bullets: [
      "Full-Stack Web & Mobile Apps",
      "API Development & Integration",
      "Legacy System Modernization",
      "Product Architecture Design",
    ],
    href: "/services#custom-software",
  },
  {
    icon: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "We help you leverage the power of cloud to build resilient, scalable, and cost-efficient cloud infrastructure.",
    bullets: [
      "Cloud Strategy & Consulting",
      "AWS / Azure / GCP Migration",
      "Infrastructure Management",
      "FinOps & Cost Optimization",
    ],
    href: "/services#cloud-infra",
  },
  {
    icon: "LineChart",
    title: "IT Strategy & Consulting",
    description:
      "Modernize technology with our technical consultants to drive efficiency, reduce tech debt, and align IT with business.",
    bullets: [
      "Technology Roadmapping",
      "Digital Transformation",
      "Monitoring & Observability",
      "IT Governance & Risk",
    ],
    href: "/services#it-strategy",
  },
  {
    icon: "Layers",
    title: "Dedicated DevOps Teams",
    description:
      "Staff our engineering resources with your services DevOps experts and drive quality and other engineering norms.",
    bullets: [
      "DevOps Consulting",
      "CI/CD Implementation",
      "Security & Vulnerability",
      "Security & Compliance",
    ],
    href: "/services#devops",
  },
] as const;

export const HOME_STATS = [
  { value: 40, suffix: "%", label: "Less Infrastructure Cost" },
  { value: 99.99, suffix: "%", label: "System Uptime" },
  { value: 6, suffix: " Months", label: "Average Project Duration" },
  { value: 3, suffix: "x", label: "Faster Deployments" },
] as const;

export const HOME_DEPLOYMENTS = [
  {
    tag: "ERP",
    title: "Enterprise ERP Migration",
    description:
      "Migrated a complex ERP system to cloud-native infrastructure for a mid-size manufacturing enterprise.",
    metrics: [
      { value: "40%", label: "Less Infrastructure Cost" },
      { value: "99.99%", label: "System Uptime" },
      { value: "6 Months", label: "Project Duration" },
    ],
    image: "/assets/cover-image.png",
  },
  {
    tag: "E-Commerce",
    title: "Scalable E-commerce Architecture",
    description:
      "Built a high-availability, auto-scaling platform to handle peak traffic and drive growth.",
    metrics: [
      { value: "60%", label: "Increase in Performance" },
      { value: "99.95%", label: "Availability" },
      { value: "3x", label: "Revenue Growth" },
    ],
    image: "/assets/cover-image.png",
  },
  {
    tag: "Data",
    title: "Data Platform Modernization",
    description:
      "Implemented a modern data platform for real-time analytics and smarter decision-making.",
    metrics: [
      { value: "70%", label: "Faster Data Processing" },
      { value: "10M+", label: "Records / Day" },
      { value: "100+", label: "User Integrations" },
    ],
    image: "/assets/cover-image.png",
  },
] as const;

export const CONSULTATION_STEPS = ["About You", "Project Details", "Additional Info"] as const;
