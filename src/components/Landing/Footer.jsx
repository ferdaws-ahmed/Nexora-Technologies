import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Xhoraa<span className="text-indigo-500">.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Xhoraa Technologies is a modern software firm building scalable web
            apps, mobile solutions & digital products for global clients.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaLinkedinIn, FaGithub].map((Icon, i) => (
              <span
                key={i}
                className="p-2 rounded-lg bg-white/5 hover:bg-indigo-600 transition cursor-pointer"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Mobile Apps</li>
            <li className="hover:text-white cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer">Custom Software</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer"><a href="/about-us">About</a></li>
            <li className="hover:text-white cursor-pointer"><a href="/projects">Projects</a></li>
            <li className="hover:text-white cursor-pointer"><a href="/careers">Careers</a></li>
            <li className="hover:text-white cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5">Get in touch</h3>

          <div className="flex items-center gap-3 text-sm">
            <FaEnvelope />
            xhoraatech@gmail.com
          </div>

          <p className="text-sm mt-3">Dhaka, Bangladesh</p>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10">
            <p className="text-xs">
              Let’s build something amazing together 🚀
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Xhoraa Technologies — All rights reserved.
      </div>

    </footer>
  );
}
