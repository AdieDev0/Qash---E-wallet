import React from "react";
import { FiSearch, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Mini = () => {
  return (
    <motion.div
      className="bg-black text-white py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left Empty Space (for alignment) */}
        <div className="flex-1"></div>

        {/* Centered Section */}
        <div className="flex gap-6 mr-90">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-green-500 font-medium text-sm cursor-pointer"
          >
            Qash
          </motion.button>
          {["Qash Bank", "Qash Business", "Qash Center"].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-medium text-sm cursor-pointer hover:text-gray-300"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex gap-6 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm flex items-center gap-1 hover:text-gray-300 cursor-pointer"
          >
            Help & Support <FiExternalLink className="text-green-500 text-xs" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm flex items-center gap-1 hover:text-gray-300 cursor-pointer"
          >
            <FiSearch className="text-lg" /> Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Mini;
