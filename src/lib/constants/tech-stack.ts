export const TECH_CATEGORIES = ["All", "Frontend", "Backend", "Cloud", "Mobile", "Database", "DevOps"] as const;

export const TECH_STACK = [
  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "Angular", category: "Frontend", icon: "🅰️" },
  { name: "Vue.js", category: "Frontend", icon: "🟢" },
  { name: "TypeScript", category: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  // Backend
  { name: ".NET", category: "Backend", icon: "🔷" },
  { name: "Node.js", category: "Backend", icon: "🟩" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "Java", category: "Backend", icon: "☕" },
  { name: "Go", category: "Backend", icon: "🔵" },
  { name: "Django", category: "Backend", icon: "🌿" },
  { name: "Spring Boot", category: "Backend", icon: "🍃" },
  // Cloud
  { name: "AWS", category: "Cloud", icon: "🟠" },
  { name: "Azure", category: "Cloud", icon: "🔷" },
  { name: "Google Cloud", category: "Cloud", icon: "🔴" },
  { name: "Terraform", category: "Cloud", icon: "🟣" },
  { name: "Kubernetes", category: "Cloud", icon: "⛵" },
  { name: "Serverless", category: "Cloud", icon: "⚡" },
  // Mobile
  { name: "Flutter", category: "Mobile", icon: "🐦" },
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "Kotlin", category: "Mobile", icon: "🟣" },
  { name: "Swift", category: "Mobile", icon: "🍎" },
  { name: "Xamarin", category: "Mobile", icon: "🔵" },
  { name: "Ionic", category: "Mobile", icon: "⚡" },
  // Database
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Redis", category: "Database", icon: "🔴" },
  { name: "SQL Server", category: "Database", icon: "🔷" },
  { name: "DynamoDB", category: "Database", icon: "🟠" },
  // DevOps
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Kubernetes", category: "DevOps", icon: "⛵" },
  { name: "Jenkins", category: "DevOps", icon: "🔧" },
  { name: "GitHub Actions", category: "DevOps", icon: "⚙️" },
  { name: "GitLab CI", category: "DevOps", icon: "🦊" },
  { name: "Ansible", category: "DevOps", icon: "🔴" },
] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];
