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
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Centered Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-purple-500 font-medium text-sm cursor-pointer"
          >
            Qash
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm cursor-pointer hover:text-gray-300"
          >
            Qash Bank
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm cursor-pointer hover:text-gray-300"
          >
            Qash Business
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm cursor-pointer hover:text-gray-300"
          >
            Qash Center
          </motion.button>
        </div>

        {/* End Section */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-4 sm:mt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm flex items-center gap-1 hover:text-gray-300 cursor-pointer"
          >
            Help & Support <FiExternalLink className="text-purple-500 text-xs" />
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
