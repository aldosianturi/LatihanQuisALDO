import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 bg-white rounded-xl shadow px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        
        {/* Copyright */}
        <div>
          © 2025 <span className="font-semibold text-gray-800">N T A</span>. All rights reserved.
        </div>

        {/* Quick Links */}
        <div className="flex space-x-4">
          <a href="#" className=" hover:text-blue-600">Privacy Policy</a>
          <a href="#" className=" hover:text-blue-600">Terms</a>
          <a href="#" className=" hover:text-blue-600">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3 text-lg">
          <a href="#" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
