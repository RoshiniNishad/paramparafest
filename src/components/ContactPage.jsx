import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const headsData = {
  core: {
    name: "Deepak Pandey",
    image: "src/assets/deepak.jpg", // Replace with actual image path
    whatsapp:
      "https://wa.me/+917307013029/?text=I%20am%20excited%20to%20participate%20in%20technical,%20cultural%20and%20sports%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8", // Replace with actual link
  },
  technical: [
    {
      name: "Divyansh Srivastava",
      image: "src/assets/divyansh.jpg",
      whatsapp:
        "https://wa.me/+918299877578/?text=I%20am%20excited%20to%20participate%20in%20a%20technical%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Divyanshu Sharma",
      image: "src/assets/divyanshu.jpg",
      whatsapp:
        "https://wa.me/+919580716700/?text=I%20am%20excited%20to%20participate%20in%20a%20technical%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Saumya Srivastava",
      image: "src/assets/saumya.jpg",
      whatsapp:
        "https://wa.me/+917905892294/?text=I%20am%20excited%20to%20participate%20in%20a%20technical%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Poonam Nishad",
      image: "src/assets/poonam.jpg",
      whatsapp:
        "https://wa.me/+919569496940/?text=I%20am%20excited%20to%20participate%20in%20a%20technical%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
  ],
  cultural: [
    {
      name: "Tanmesh Srivastav",
      image: "src/assets/tanmesh.jpg",
      whatsapp:
        "https://wa.me/+917237878337/?text=I%20am%20excited%20to%20participate%20in%20a%20cultural%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Aayush Dubey",
      image: "src/assets/aayush.jpg",
      whatsapp:
        "https://wa.me/+919336564581/?text=I%20am%20excited%20to%20participate%20in%20a%20cultural%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Kashish Srivastava",
      image: "src/assets/kashish.jpg",
      whatsapp:
        "https://wa.me/+918564011626/?text=I%20am%20excited%20to%20participate%20in%20a%20cultural%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Jaya Pandey",
      image: "src/assets/jaya.jpg",
      whatsapp:
        "https://wa.me/+919695019183/?text=I%20am%20excited%20to%20participate%20in%20a%20cultural%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
  ],
  sports: [
    {
      name: "Divyansh Kasaudhan",
      image: "src/assets/divyanshk.jpg",
      whatsapp:
        "https://wa.me/+917706050406/?text=I%20am%20excited%20to%20participate%20in%20a%20sports%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Sujeet Yadav",
      image: "src/assets/sujit.jpg",
      whatsapp:
        "https://wa.me/+917348128074/?text=I%20am%20excited%20to%20participate%20in%20a%20sports%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
    {
      name: "Adarsh Ram Tripathi",
      image: "src/assets/adarsh.jpg",
      whatsapp:
        "https://wa.me/+919026037475/?text=I%20am%20excited%20to%20participate%20in%20a%20sports%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },

    {
      name: "Sanya Shukla",
      image: "src/assets/sanya.jpg",
      whatsapp:
        "https://wa.me/+919794993596/?text=I%20am%20excited%20to%20participate%20in%20a%20sports%20event%20at%20Parampara%202K25%20and%20would%20love%20to%20know%20more%20details!%20Kindly%20share%20the%20necessary%20information.%20Looking%20forward%20to%20your%20response!%20%F0%9F%98%8A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Best%20regards,%20%5BYour%20Name%5D%20%E2%9C%A8",
    },
  ],
};

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        {/* Core Committee Head */}
        <h1 className="mt-16 text-3xl text-bold">Organizing Committee Head</h1>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <img
            src={headsData.core.image}
            alt={headsData.core.name}
            className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-white shadow-lg mt-15"
          />
          <h1 className="text-3xl font-bold">{headsData.core.name}</h1>
          <a
            href={headsData.core.whatsapp}
            className="text-green-400 hover:underline flex items-center gap-2 justify-center mt-2">
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </motion.div>

        {/* Heads Sections */}
        {Object.entries(headsData)
          .slice(1)
          .map(([section, heads]) => (
            <div key={section} className="w-full max-w-6xl mb-10">
              <h2 className="text-2xl font-semibold text-center mb-4 capitalize">
                {section} Heads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {heads.map((head, i) => (
                  <motion.div
                    key={i}
                    className="text-center bg-gray-800 p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}>
                    <img
                      src={head.image}
                      alt={head.name}
                      className="w-40 h-40 rounded-full mx-auto mb-2 border-2 border-white shadow-md"
                    />
                    <p className="font-bold">{head.name}</p>
                    <a
                      href={head.whatsapp}
                      className="text-green-400 hover:underline flex items-center gap-2 justify-center mt-2">
                      <FaWhatsapp size={20} /> WhatsApp
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
