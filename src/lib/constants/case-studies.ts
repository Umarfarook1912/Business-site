export const CASE_STUDIES = [
  {
    slug: "healthcare-data-platform",
    tag: "Healthcare",
    title: "Healthcare Data Platform",
    client: "Regional Hospital Network",
    summary:
      "Designed and deployed a HIPAA-compliant data lake and analytics platform enabling real-time clinical reporting across 12 hospital sites.",
    challenge:
      "The client operated 12 hospital sites with siloed EHR systems, no unified reporting, and manual data pipelines that took 48+ hours to produce a single cross-site report.",
    solution:
      "We architected a cloud-native data lakehouse on AWS using Glue, Redshift, and QuickSight, with strict PII masking at ingestion and role-based access controls.",
    outcomes: [
      { metric: "2.8x", label: "Faster clinical reporting" },
      { metric: "45%", label: "Reduction in data processing costs" },
      { metric: "99.9%", label: "Pipeline reliability SLA met" },
    ],
    tags: ["AWS", "Python", "Redshift", "Healthcare"],
  },
  {
    slug: "retail-inventory-optimization",
    tag: "Retail",
    title: "Retail Inventory Optimization",
    client: "Mid-size Retail Chain",
    summary:
      "Built a demand forecasting engine and inventory management system, reducing overstock by 38% and out-of-stock events by 52%.",
    challenge:
      "Manual inventory planning across 200+ SKUs led to chronic overstock in some categories and frequent stockouts in high-velocity items, eroding margins and customer satisfaction.",
    solution:
      "We deployed a machine-learning demand forecasting model integrated with their existing ERP and POS systems, with automated reorder triggers and a real-time inventory dashboard.",
    outcomes: [
      { metric: "38%", label: "Reduction in overstock" },
      { metric: "52%", label: "Fewer stock-out events" },
      { metric: "4 months", label: "Time to production" },
    ],
    tags: ["Python", "Machine Learning", "PostgreSQL", "React"],
  },
  {
    slug: "fintech-payments-automation",
    tag: "Fintech",
    title: "Financial Services Automation",
    client: "Payments Technology Firm",
    summary:
      "Automated end-to-end reconciliation and compliance reporting, eliminating 1,200+ hours of manual work per quarter.",
    challenge:
      "The client's finance team spent 15+ days per quarter manually reconciling transactions across four payment processors, with high error rates and compliance reporting delays.",
    solution:
      "We built an event-driven reconciliation engine on AWS Lambda, with automatic ledger matching, exception queuing, and auto-generated regulatory reports compliant with RBI guidelines.",
    outcomes: [
      { metric: "1,200+", label: "Manual hours eliminated / quarter" },
      { metric: "99.97%", label: "Reconciliation accuracy" },
      { metric: "0 days", label: "Compliance reporting delay" },
    ],
    tags: ["AWS Lambda", "Node.js", "PostgreSQL", "Fintech"],
  },
  {
    slug: "saas-platform-modernization",
    tag: "SaaS",
    title: "SaaS Platform Modernization",
    client: "B2B Software Company",
    summary:
      "Migrated a monolithic Rails application to a microservices architecture on Kubernetes, cutting deployment time from 2 hours to 8 minutes.",
    challenge:
      "An aging Rails monolith with 1.2M+ lines of code was causing 4-hour deployments, frequent production incidents, and blocking the team from shipping new features.",
    solution:
      "We executed a strangler-fig migration, extracting high-change domains into independent microservices, implementing a service mesh, and rebuilding the CI/CD pipeline on GitHub Actions + Kubernetes.",
    outcomes: [
      { metric: "8 min", label: "Deployment time (from 2 hours)" },
      { metric: "72%", label: "Reduction in production incidents" },
      { metric: "3x", label: "Feature delivery velocity" },
    ],
    tags: ["Kubernetes", "Go", "React", "GitHub Actions"],
  },
] as const;

export type CaseStudy = (typeof CASE_STUDIES)[number];
