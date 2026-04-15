"use client";

import { FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto text-center px-6 py-16">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">KeenKeeper</h1>

        {/* Description */}
        <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="mb-3 text-sm">Social Links</p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaGithub />
          </button>

          <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaFacebookF />
          </button>

          <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaTwitter />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>

        </div>
      </div>
    </footer>
  );
}