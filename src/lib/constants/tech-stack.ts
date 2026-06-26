export const TECH_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Styling",
  "Mobile",
  "Database",
  "Hosting",
  "Tools",
] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];

export const TECH_STACK = [
  // Frontend
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  { name: "Next.js", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Astro", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
  // Backend
  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  // Styling
  { name: "Bootstrap", category: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", category: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  // Mobile
  { name: "Flutter", category: "Mobile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React Native", category: "Mobile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg" },
  // Database
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  // Hosting
  { name: "Hostinger", category: "Hosting", logo: "https://cdn.simpleicons.org/hostinger/673DE6" },
  { name: "GoDaddy", category: "Hosting", logo: "https://cdn.simpleicons.org/godaddy/1BDBDB" },
  { name: "AWS", category: "Hosting", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  // Tools
  { name: "GitHub", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitHub Actions", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
  { name: "SonarQube", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { name: "Jenkins", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "PostHog", category: "Tools", logo: "https://cdn.simpleicons.org/posthog/FD8238" },
] as const;

export const TECH_GROUPS = [
  { category: "Frontend", slugs: ["React", "Vite", "Next.js", "TypeScript", "JavaScript", "Astro"] },
  { category: "Backend", slugs: ["Node.js", "Python", "Java", "Spring Boot"] },
  { category: "Mobile", slugs: ["Flutter", "React Native"] },
  { category: "Database", slugs: ["PostgreSQL", "MongoDB", "MySQL"] },
] as const;
