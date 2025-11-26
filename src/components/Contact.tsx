import React from "react";
import { Mail, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Contact: React.FC = () => (
  <>
    <Header />
    <div className="w-full bg-[#2f3450] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-1 bg-[#2f3450] text-white p-6 md:p-10 rounded-xl flex flex-col justify-center">
          <h4 className="text-orange-400 font-bold mb-3 text-xs sm:text-sm tracking-wide">GET IN TOUCH</h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Data problems are fun.<br/>Let’s solve them.
          </h1>
          <p className="mb-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            We help teams build scalable, modern, and intelligent data solutions. 
            Reach out for analytics, automation, dashboards, machine learning, 
            or anything data-driven.
          </p>
          <div className="mb-7 flex items-center">
            <span className="bg-gray-400 bg-opacity-20 rounded-full p-4 mr-5 flex items-center justify-center">
              <Mail className="w-6 h-6 text-orange-500" />
            </span>
            <span>
              <span className="block text-gray-300 font-semibold text-sm sm:text-base">Email Us</span>
              <span className="text-white font-bold text-lg">hello@thecloudside.com</span>
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-400 bg-opacity-20 rounded-full p-4 mr-4 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-orange-500" />
            </span>
            <span>
              <span className="block text-gray-300 font-semibold text-sm sm:text-base">Headquarters</span>
              <span className="text-white font-bold text-lg">Bangalore, India</span>
            </span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Name</label>
              <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"/>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Email</label>
              <input type="email" placeholder="john@company.com" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"/>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Message</label>
              <textarea placeholder="How can we help?" rows={4} className="w-full border border-gray-300 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"/>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded shadow hover:bg-orange-600 transition text-sm sm:text-base">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
