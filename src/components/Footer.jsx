import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold">Parampara 2025</h2>
        <p className="text-gray-400">Celebrating Tradition and Innovation</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="/updates" className="hover:text-yellow-400">Updates</a></li>
          </ul>
        </nav>
        <p className="mt-4 text-amber-400">Email:parampara2k25@gmail.com</p>
        
       
        
        <p className="mt-4 text-gray-500">&copy; 2025 Parampara. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
