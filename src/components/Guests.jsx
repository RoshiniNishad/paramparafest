import React from "react";
import { motion } from "framer-motion";
import VIP from "../assets/VIP.jpg";
import SalmanAli from "../assets/SalmanAli.jpg";
import Zuby from "../assets/Zuby.jpg";
import Vanni from "../assets/Vanni.jpg";
import Akash from "../assets/Akash.jpg";
import ABK from "../assets/ABK.jpg";

const guests = [VIP, SalmanAli, Zuby, Vanni, Akash, ABK];

const GuestList = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 p-4 flex flex-col items-center mt-16"
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold mb-6 text-amber-500 text-center"
      >
        Parampara 2025 - Honored Guests
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-4">
        {guests.map((image, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full max-w-xs mx-auto border-2 border-amber-500 rounded-xl overflow-hidden shadow-lg"
          >
            <motion.img 
              src={image} 
              alt={`Guest ${index + 1}`} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GuestList;
