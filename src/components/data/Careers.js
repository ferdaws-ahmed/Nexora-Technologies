import { DollarSign, Heart, Home, BookOpen, Target, Clock } from "lucide-react";
export const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    level: "Senior",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description:
      "We are looking for an experienced Full-Stack Developer to join our core team and build scalable web applications.",
    requirements: [
      "5+ years of experience with JavaScript/TypeScript",
      "Strong experience with React and Node.js",
      "Experience with cloud platforms",
      "Knowledge of databases and system design",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work options",
      "Professional development",
    ],
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    level: "Mid",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$70,000 - $100,000",
    description:
      "Join our AI team to develop cutting-edge machine learning solutions and predictive analytics systems.",
    requirements: [
      "3+ years of experience with ML frameworks",
      "Strong Python programming skills",
      "Experience with data preprocessing",
      "Knowledge of computer vision or NLP",
      "Familiarity with cloud ML services",
    ],
    benefits: [
      "Competitive salary",
      "Research opportunities",
      "Learning budget",
      "Collaborative environment",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    level: "Mid",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    description:
      "Create beautiful and responsive user interfaces for our AI-integrated dashboards and web platforms.",
    requirements: [
      "3+ years of Frontend development experience",
      "Expert in React and modern CSS frameworks",
      "Experience with responsive design",
      "Strong understanding of performance optimization",
      "Git and agile development experience",
    ],
    benefits: [
      "Flexible hours",
      "Home office setup",
      "Learning opportunities",
      "Team outings",
    ],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    level: "Mid",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$65,000 - $95,000",
    description:
      "Build and maintain robust CI/CD pipelines and cloud infrastructure for our global platform.",
    requirements: [
      "4+ years of DevOps experience",
      "Proficiency with Docker and Kubernetes",
      "Strong AWS or Google Cloud experience",
      "Infrastructure as Code experience",
      "Linux system administration skills",
    ],
    benefits: [
      "On-call compensation",
      "Technical certifications",
      "Modern infrastructure",
      "Mentorship program",
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    level: "Senior",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$75,000 - $110,000",
    description:
      "Lead product strategy and development for our intelligent control systems and AI platforms.",
    requirements: [
      "5+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical and communication skills",
      "Understanding of AI/ML technologies",
      "Experience with agile methodologies",
    ],
    benefits: [
      "Equity options",
      "Flexible work",
      "Executive coaching",
      "Conference attendance",
    ],
  },
  {
    id: 6,
    title: "Junior Software Developer",
    department: "Engineering",
    level: "Junior",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    description:
      "Start your career at NEXORA. We mentor junior developers to become expert engineers.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Strong foundation in programming fundamentals",
      "Familiarity with JavaScript or Python",
      "Passion for learning and problem-solving",
      "Good teamwork and communication skills",
    ],
    benefits: [
      "Mentorship",
      "Training budget",
      "Career growth path",
      "Internship-to-hire program",
    ],
  },
];

export const benefits = [
  {
    icon: <DollarSign size={28} className="text-green-400" />,
    title: "Competitive Salary",
    desc: "Industry-leading compensation packages",
  },
  {
    icon: <Heart size={28} className="text-red-400" />,
    title: "Health Insurance",
    desc: "Comprehensive health and wellness coverage",
  },
  {
    icon: <Home size={28} className="text-blue-400" />,
    title: "Remote Work",
    desc: "Flexible work-from-home options",
  },
  {
    icon: <BookOpen size={28} className="text-yellow-400" />,
    title: "Learning Budget",
    desc: "Annual professional development allowance",
  },
  {
    icon: <Target size={28} className="text-pink-400" />,
    title: "Career Growth",
    desc: "Clear advancement and mentorship paths",
  },
  {
    icon: <Clock size={28} className="text-purple-400" />,
    title: "Work-Life Balance",
    desc: "Flexible hours and paid time off",
  },
];
