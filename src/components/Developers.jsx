import React from "react";
import { Linkedin } from "lucide-react";

const Developers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full bg-white bg-opacity-90 p-6 sm:p-10 rounded-3xl shadow-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-6">
          Meet the Developers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Developer 1 - Roshini Nishad */}
          <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-500">
            <img
              src="src/assets/rose.jpeg"
              alt="Developer 2"
              className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full mb-4 border-4 border-indigo-500"
            />
            <h2 className="text-xl sm:text-2xl font-bold">Roshini Nishad</h2>
            <p className="text-gray-400 text-sm sm:text-base">Web Developer</p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              Enthusiast building robust APIs and scalable frontend-backend
              solutions with Node.js and Express.
            </p>
            <a
              href="https://www.linkedin.com/in/roshini-nishad-87a887289/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
              <Linkedin size={18} className="mr-2" />
              LinkedIn Profile
            </a>
          </div>

          {/* Developer 2 - Divyansh Srivastava */}
          <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-500">
            <img
              src="src/assets/div.jpeg"
              alt="Developer 1"
              className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full mb-4 border-4 border-purple-500"
            />
            <h2 className="text-xl sm:text-2xl font-bold">
              Divyansh Srivastava
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Web Developer</p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              Passionate about crafting full-stack web projects with beautiful
              UI experiences using React, Node, Express, and more.
            </p>
            <a
              href="https://www.linkedin.com/in/divyanshsrivastava1/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
              <Linkedin size={18} className="mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
