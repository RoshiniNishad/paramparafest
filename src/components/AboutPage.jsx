import React from "react";
import { useNavigate } from "react-router-dom";
import Developers from "./Developers";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center p-4 sm:p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/about.jpeg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl bg-white bg-opacity-90 p-6 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800 mb-4 sm:mb-6">
            About Parampara 2025
          </h1>
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Celebrating 25 Glorious Years! 🎉
          </h2>
          <p className="text-gray-800 text-sm sm:text-lg leading-relaxed text-center px-2 sm:px-0">
            🌟 Parampara 2025 marks the 25th anniversary of our grand celebration of tradition, culture, and innovation. Over the years, it has become a symbol of artistic expression, cultural heritage, and modern creativity.
          </p>
          <p className="text-gray-800 text-sm sm:text-lg leading-relaxed mt-4 sm:mt-6 text-center px-2 sm:px-0">
            🎭 With thrilling competitions, engaging workshops, and mesmerizing performances, this milestone edition promises to be more spectacular than ever before. Whether you are here to perform, learn, or simply enjoy the festivities, this is the place to be!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
            className="block mx-auto mt-4 sm:mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm sm:text-xl font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition"
          >
            Join us in celebrating 25 years of legacy and excellence! ✨
          </motion.button>
        </motion.div>
      </div>
      <Developers />
      <Footer />
    </>
  );
};

export default AboutPage;
