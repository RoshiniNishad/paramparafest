import { useState } from "react";
import { motion } from "framer-motion";
import { FaPenFancy } from "react-icons/fa";

export default function DirectorsDesk() {
  const [showMoreDirector, setShowMoreDirector] = useState(false);
  const [showMoreConvenor, setShowMoreConvenor] = useState(false);
  const [showMoreOrganiser, setShowMoreOrganiser] = useState(false);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-16 lg:px-24 flex flex-col space-y-16 mt-8">
      {/* Director's Desk */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-gray-800">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Director's Desk
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-yellow-500 mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            It is my privilege to welcome you all to{" "}
            <strong className="text-amber-600">Parampara 2025</strong>, our annual cultural extravaganza
            that celebrates heritage, creativity, and excellence.
          </motion.p>
          {showMoreDirector && (
            <motion.p
              className="text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}>
              As we mark <strong className="text-amber-600">25 years of ITM, GIDA, Gorakhpur</strong>, this
              milestone is a testament to our legacy of academic and cultural
              enrichment.
            </motion.p>
          )}
          <button
            className="mt-4 text-blue-600 font-medium focus:outline-none"
            onClick={() => setShowMoreDirector(!showMoreDirector)}>
            {showMoreDirector ? "Read Less" : "Read More"}
          </button>
          <div className="mt-4 flex items-center text-gray-800 font-medium">
            <FaPenFancy className="w-5 h-5 mr-2" />
            Dr. NK Singh
          </div>
        </div>
        <motion.div
          className="md:w-1/3 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}>
          <img
            src="src/assets/Director.webp"
            alt="Director"
            className="rounded-lg shadow-lg w-64 md:w-80"
          />
        </motion.div>
      </div>

      {/* Convenor's Desk */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-2/3 text-gray-800">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Convenor's Desk
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-yellow-500 mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            It gives me immense pleasure to be a part of{" "}
            <strong className="text-amber-600">Parampara 2025</strong>, as we proudly celebrate{" "}
            <strong className="text-amber-600">25 years of ITM, GIDA, Gorakhpur</strong>.
          </motion.p>
          {showMoreConvenor && (
            <motion.p
              className="text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}>
              This festival is not just an event but a platform for students to
              showcase their talents, learn, and grow together.
            </motion.p>
          )}
          <button
            className="mt-4 text-blue-600 font-medium focus:outline-none"
            onClick={() => setShowMoreConvenor(!showMoreConvenor)}>
            {showMoreConvenor ? "Read Less" : "Read More"}
          </button>
          <div className="mt-4 flex items-center text-gray-800 font-medium">
            <FaPenFancy className="w-5 h-5 mr-2" />
            Dr. Manoj Kumar Mishra
          </div>
        </div>
        <motion.div
          className="md:w-1/3 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}>
          <img
            src="src/assets/Dr-Manoj-Mishra_-HOD_MBA.jpg"
            alt="Convenor"
            className="rounded-lg shadow-lg w-64 md:w-80"
          />
        </motion.div>
      </div>

      {/* Organiser's Desk */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-gray-800">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Organisor's Desk
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-yellow-500 mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            As we celebrate the 25th anniversary of <strong className="text-amber-600">Parampara 2025</strong> , we extend
            our heartfelt gratitude to all who have been a part of this
            incredible journey.{" "}
          </motion.p>
          {showMoreConvenor && (
            <motion.p
              className="text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}>
              Over the years, Parampara has stood as a symbol of tradition,
              culture, and excellence, bringing together talent and creativity
              in a vibrant celebration. Here's to <strong className="text-amber-600">25 years of tradition,
              passion, and togetherness!</strong>
            </motion.p>
          )}
          <button
            className="mt-4 text-blue-600 font-medium focus:outline-none"
            onClick={() => setShowMoreConvenor(!showMoreConvenor)}>
            {showMoreConvenor ? "Read Less" : "Read More"}
          </button>
          <div className="mt-4 flex items-center text-gray-800 font-medium">
            <FaPenFancy className="w-5 h-5 mr-2" />
            Ms. Shalini Singh
          </div>
        </div>
        <motion.div
          className="md:w-1/3 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}>
          <img
            src="src/assets/Ms.-Shalini-Singh-_-HOD_-Computer-Application.jpeg"
            alt="Organiser"
            className="rounded-lg shadow-lg w-64 md:w-80"
          />
        </motion.div>
      </div>
    </div>
  );
}
