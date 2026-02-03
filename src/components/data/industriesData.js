import { Code, Cpu, Settings } from "lucide-react";

export const industries = [
  {
    title: "Software Development",
    desc: "Custom solutions tailored to your needs",
    icon: <Code className="w-10 h-10 text-[#00F5FF] mb-4 mx-auto" />, // bright cyan
  },
  {
    title: "Artificial Intelligence",
    desc: "Cutting-edge AI and machine learning",
    icon: <Cpu className="w-10 h-10 text-[#FF4D6D] mb-4 mx-auto" />, // vibrant pink/red
  },
  {
    title: "Automation & Control",
    desc: "Intelligent systems for the future",
    icon: <Settings className="w-10 h-10 text-[#7CFF00] mb-4 mx-auto" />, // neon green
  },
];
