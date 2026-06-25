export const SERVICES_HERO = {
  eyebrow: "What We Do",
  headline: "End-to-End Technology Services",
  subheadline:
    "From strategy and architecture to deployment and ongoing support — we deliver every layer of enterprise technology with precision and accountability.",
} as const;

export const SERVICES_LIST = [
  {
    id: "custom-software",
    tag: "01",
    title: "Custom Software Development",
    headline: "Built for Your Business. Engineered to Scale.",
    description:
      "We design and develop high-performance, production-ready software that solves real business problems. Our teams bring deep expertise in full-stack engineering, system design, and modern software delivery practices.",
    methodology: [
      {
        step: "Discovery & Architecture",
        detail:
          "We map your business requirements, existing systems, and user journeys to design a scalable architecture before writing a single line of code.",
      },
      {
        step: "Agile Development Sprints",
        detail:
          "Two-week sprints with working demos. You have full visibility into velocity, blockers, and scope at every stage.",
      },
      {
        step: "Code Review & Quality Gates",
        detail:
          "Every pull request is peer-reviewed. Static analysis, unit, integration, and end-to-end tests run in CI before any merge.",
      },
      {
        step: "Deployment & Handover",
        detail:
          "We deploy to your preferred infrastructure with full documentation, runbooks, and a 90-day post-launch support window.",
      },
    ],
    capabilities: [
      "Full-Stack Web Applications",
      "REST & GraphQL APIs",
      "Microservices Architecture",
      "Legacy System Modernization",
      "Third-party API Integrations",
      "Performance Optimization",
    ],
  },
  {
    id: "cloud-infra",
    tag: "02",
    title: "Cloud Infrastructure",
    headline: "Resilient, Cost-Efficient Cloud at Enterprise Scale.",
    description:
      "We design, migrate, and operate cloud environments that are secure by default, observable at every layer, and optimized for cost. Whether you are lifting-and-shifting or going cloud-native, we manage the full lifecycle.",
    methodology: [
      {
        step: "Cloud Readiness Assessment",
        detail:
          "Audit your current infrastructure for dependencies, security posture, and migration complexity before producing a phased roadmap.",
      },
      {
        step: "Infrastructure as Code",
        detail:
          "All resources are provisioned via Terraform or Pulumi — version-controlled, peer-reviewed, and repeatable across environments.",
      },
      {
        step: "Migration Execution",
        detail:
          "Zero-downtime migration using blue-green or canary strategies. Each workload is tested in staging before cutover.",
      },
      {
        step: "Ongoing Operations & FinOps",
        detail:
          "Continuous monitoring, auto-scaling policies, and monthly FinOps reviews keep costs predictable and SLAs tight.",
      },
    ],
    capabilities: [
      "AWS / Azure / GCP Architecture",
      "Kubernetes & Container Orchestration",
      "Serverless & Edge Computing",
      "Multi-Cloud & Hybrid Cloud",
      "Cloud Security & Compliance",
      "Cost Optimization (FinOps)",
    ],
  },
  {
    id: "it-strategy",
    tag: "03",
    title: "IT Strategy & Consulting",
    headline: "Align Technology with Business Outcomes.",
    description:
      "Our senior architects and technology strategists embed with your leadership team to build a coherent IT strategy — one that eliminates redundancy, reduces risk, and creates a clear execution roadmap.",
    methodology: [
      {
        step: "Technology Audit",
        detail:
          "Comprehensive review of your current stack, vendor contracts, team structure, and technical debt to surface quick wins and long-term risks.",
      },
      {
        step: "Roadmap Design",
        detail:
          "A prioritized, phased technology roadmap tied to your business milestones — not just a wish list of tools.",
      },
      {
        step: "Vendor & Build Decisions",
        detail:
          "Objective analysis of build vs. buy, open-source vs. commercial, and in-house vs. outsourced for each capability.",
      },
      {
        step: "Governance & Execution",
        detail:
          "We establish architecture review boards, engineering principles, and decision logs so the strategy survives beyond the engagement.",
      },
    ],
    capabilities: [
      "Technology Roadmapping",
      "Digital Transformation Programs",
      "Architecture Review Boards",
      "IT Governance Frameworks",
      "Vendor Selection & Management",
      "OKR-Aligned Engineering Metrics",
    ],
  },
  {
    id: "devops",
    tag: "04",
    title: "Dedicated DevOps Teams",
    headline: "Ship Faster. Break Nothing.",
    description:
      "We staff embedded DevOps engineers who own your delivery pipeline end-to-end — from code commit to production. Shorter cycle times, fewer incidents, and a culture of continuous improvement.",
    methodology: [
      {
        step: "Pipeline Assessment",
        detail:
          "Benchmark your current DORA metrics (lead time, deployment frequency, MTTR, change failure rate) to set a performance baseline.",
      },
      {
        step: "CI/CD Implementation",
        detail:
          "Design and implement automated build, test, and deploy pipelines using GitHub Actions, GitLab CI, or your preferred toolchain.",
      },
      {
        step: "Observability Stack",
        detail:
          "Instrument your services with distributed tracing, structured logs, and SLO-based alerting so you find issues before users do.",
      },
      {
        step: "Reliability Improvement Loop",
        detail:
          "Monthly reliability reviews, chaos engineering exercises, and runbook updates to progressively improve system resilience.",
      },
    ],
    capabilities: [
      "CI/CD Pipeline Design",
      "Container & Kubernetes Operations",
      "Observability & Alerting",
      "Incident Response Playbooks",
      "Security Scanning (SAST/DAST)",
      "Site Reliability Engineering",
    ],
  },
] as const;
