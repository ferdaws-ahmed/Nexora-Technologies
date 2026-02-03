import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export const footerLinks = {
  Product: [
    { name: "Software Development", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Control Systems", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Support", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" },
  ],
};

export const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
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
    href: "#",
  },
];
