import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";

export const footerLinks = {
  Services: [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "IoT & Automation", href: "/services/iot-automation" },
    { name: "Security & Compliance", href: "/services/security-compliance" },
  ],
  Company: [
    { name: "About Nexora", href: "/about-us" },
    { name: "Our Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  Industries: [
    { name: "FinTech & Banking", href: "#" },
    { name: "HealthTech Solutions", href: "#" },
    { name: "Industrial IoT", href: "#" },
    { name: "Smart Infrastructure", href: "#" },
    { name: "Enterprise SaaS", href: "#" },
  ],
  Resources: [
    { name: "Case Studies", href: "/projects" },
    { name: "Documentation", href: "#" },
    { name: "Open Source", href: "https://github.com/nexora" },
    { name: "Partners Network", href: "#" },
    { name: "Support Center", href: "#" },
  ],
};

export const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nexora" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/nexora" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/nexora" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/nexora" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexora.tech",
    href: "mailto:hello@nexora.tech",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1929-559902",
    href: "tel:+8801929559902",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
  },
];

export const bottomLinks = [
  { name: "System Status", href: "/status" },
  { name: "Privacy Architecture", href: "/privacy" },
  { name: "Security Console", href: "/security" },
];
