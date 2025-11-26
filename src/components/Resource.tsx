import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FileText, BookOpen, Globe, Terminal, Bot } from "lucide-react";

const Resources: React.FC = () => (
  <>
    <Header />
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Knowledge & Insights
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Dive into our resources, including case studies, whitepapers,
          newsletters, and our blog, to learn more about the cloud-native world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow hover:shadow-lg flex flex-col items-center text-center transition">
            <FileText className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-bold text-lg text-gray-700 mb-2">
              Case Studies
            </h3>
            <p className="text-gray-500 text-sm">
              In-depth success stories detailing client challenges, our
              solutions, and measurable outcomes.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow hover:shadow-lg flex flex-col items-center text-center transition">
            <BookOpen className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-bold text-lg text-gray-700 mb-2">
              Whitepapers
            </h3>
            <p className="text-gray-500 text-sm">
              Expert technical documents on cloud trends, architecture best
              practices, and next-gen data strategies.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow hover:shadow-lg flex flex-col items-center text-center transition">
            <Globe className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-bold text-lg text-gray-700 mb-2">
              Newsletter & Events
            </h3>
            <p className="text-gray-500 text-sm">
              Stay up-to-date with our latest insights, webinars, and in-person
              industry events.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow hover:shadow-lg flex flex-col items-center text-center transition">
            <Terminal className="w-8 h-8 text-red-400 mb-3" />
            <h3 className="font-bold text-lg text-gray-700 mb-2">Blog</h3>
            <p className="text-gray-500 text-sm">
              Timely articles from our engineers covering coding, cloud
              security, and DevOps tips.
            </p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl px-4 py-5 flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <Bot className="w-8 h-8 text-red-400" />
            <span className="text-gray-500 font-medium text-base">
              Can't find what you need? Use our{" "}
              <span className="text-orange-500">AI Resource Matcher</span>.
            </span>
          </div>

          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-5 py-2 rounded-lg shadow transition text-sm">
            Ask the AI Assistant
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Resources;
