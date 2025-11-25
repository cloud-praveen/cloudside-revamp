import React from "react";
import { Globe, Users, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        "Cloud Transformation",
        "Data & AI/ML",
        "App Modernization",
        "DevOps & Infra",
      ],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Whitepapers", "Blog", "Events"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Team", "Contact Us"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white">
      {/* Decorative Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <span className="text-xl font-semibold">
                THE<span className="text-orange-500">CLOUDSIDE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We make Cloud work for you. Trusted team of cloud-native and data
              problem solvers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition-colors"
              >
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 The CloudSide. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-orange-500 hover:bg-orange-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50">
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};

export default Footer;
