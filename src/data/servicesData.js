import { Brain, Cloud, Code2, Shield, Smartphone, Zap } from "lucide-react";

export const servicesData = [
  {
    id: 1,
    icon: Code2,
    title: "Software Development",
    shortDesc: "Custom enterprise solutions",
    description:
      "We build scalable, high-performance applications tailored to your business needs using modern technologies and best practices.",
    features: [
      "Custom software solutions",
      "Enterprise applications",
      "SaaS platforms",
      "Cloud-based systems",
      "REST APIs & Backend services",
    ],
    technologies: ["React", "Node.js", "Python", "TypeScript", "Next.js"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI & Machine Learning",
    shortDesc: "Intelligent automation",
    description:
      "Leverage cutting-edge AI and ML technologies to unlock insights, automate processes, and drive smarter business decisions.",
    features: [
      "Predictive analytics",
      "Computer vision solutions",
      "Natural language processing",
      "Decision-support systems",
      "Optimization algorithms",
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-Learn", "Python", "OpenAI"],
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Web Development",
    shortDesc: "Modern web experiences",
    description:
      "Create stunning, responsive web applications with cutting-edge frameworks and exceptional user experience design.",
    features: [
      "High-performance web apps",
      "AI-integrated dashboards",
      "Responsive design",
      "PWA development",
      "E-commerce solutions",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vue.js", "GraphQL"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 4,
    icon: Cloud,
    title: "Cloud Solutions",
    shortDesc: "Scalable infrastructure",
    description:
      "Enterprise-grade cloud infrastructure for secure, reliable, and infinitely scalable deployments across global platforms.",
    features: [
      "AWS & Google Cloud setup",
      "Kubernetes orchestration",
      "Database optimization",
      "Disaster recovery",
      "Cost optimization",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 5,
    icon: Zap,
    title: "IoT & Automation",
    shortDesc: "Smart systems control",
    description:
      "Develop intelligent control systems for industrial automation and real-time monitoring with edge computing.",
    features: [
      "Real-time control systems",
      "Edge computing solutions",
      "Industrial automation",
      "Smart infrastructure",
      "Device management",
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node-RED", "InfluxDB"],
    color: "from-red-500 to-pink-600",
  },
  {
    id: 6,
    icon: Shield,
    title: "Security & Compliance",
    shortDesc: "Enterprise-grade security",
    description:
      "Comprehensive security solutions with compliance standards, encryption, and continuous monitoring for peace of mind.",
    features: [
      "End-to-end encryption",
      "SOC 2 compliance",
      "Security audits",
      "24/7 monitoring",
      "Incident response",
    ],
    technologies: ["OpenSSL", "HashiCorp", "Vault", "SIEM", "WAF"],
    color: "from-indigo-500 to-purple-600",
  },
];
