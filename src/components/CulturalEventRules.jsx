import React from "react";
import { motion } from "framer-motion";

const CulturalEventRules = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="max-w-3xl w-full p-6 sm:p-8 bg-gray-900 text-white shadow-xl rounded-lg border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <motion.h1
          className="text-2xl sm:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Rules and Regulations regarding Cultural Events
        </motion.h1>
        <motion.ul
          className="list-decimal list-inside space-y-3 sm:space-y-4 text-sm sm:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            The event is open to all (i.e., anyone can participate in any event
            with an age limit of Maximum 25 years).
          </motion.li>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            When the registration of a group is done in the name of any
            institute or organization, then each member of the group must also
            belong to that particular institute or organization.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            All the events are organized for both boys and girls.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            The decision of judges and volunteers shall be universally accepted.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            Any inappropriate behavior towards the judge or volunteer may lead
            to your disqualification.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05, color: "#38bdf8" }}>
            There will be no refreshment and stay provided for participants.
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default CulturalEventRules;
