import React from "react";
import { Link } from "react-router-dom";
import LogoSedap from "./LogoSedap"; // Asumsikan ini adalah komponen logo

const GuestHeader = () => {
  return (
    <header className="bg-[#81BFDA] shadow-md py-4 px-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <LogoSedap />
        <span className="text-xl font-bold text-blue-600">Sedap</span>
      </div>

      {/* Menu Navigasi */}
      <nav className="space-x-6 hidden md:flex">
        <Link to="/hero" className="text-gray-600 hover:text-red-600 font-medium">Beranda</Link>
        <Link to="/menu" className="text-gray-600 hover:text-red-600 font-medium">Menu</Link>
        <Link to="/tentang" className="text-gray-600 hover:text-red-600 font-medium">Tentang Kami</Link>
        <Link to="/kontak" className="text-gray-600 hover:text-red-600 font-medium">Kontak</Link>
      </nav>

      {/* Tombol Login & Register */}
      <div className="space-x-2">
        <Link
          to="/login"
          className="px-4 py-5 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-yellow transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default GuestHeader;
