import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Mobile menu icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo and Title (Left Corner) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Parampara 2025" className="h-10 w-auto mr-3" />
              <span className="text-2xl font-bold">Parampara 2025</span>
            </Link>
          </div>

          {/* Desktop Navigation (Right Aligned) */}
          <ul className="hidden md:flex space-x-6 ml-auto">
            {["Home", "About", "Contact", "Updates"].map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`hover:text-yellow-400 ${
                    location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "text-yellow-400"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-transform duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gray-900 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {["Home", "About", "Contact", "Updates"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
