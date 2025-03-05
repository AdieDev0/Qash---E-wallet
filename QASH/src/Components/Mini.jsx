import React, { useState } from "react";
import { FiSearch, FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Mini = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="bg-black text-white py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Dropdown Button */}
        <div className="sm:hidden w-full flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="text-white font-medium text-sm cursor-pointer"
          >
            {isMenuOpen ? (
              <FiX className="text-lg" />
            ) : (
              <FiMenu className="text-lg" />
            )}
          </motion.button>
          <div className="flex gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-medium text-sm flex items-center gap-1 hover:text-gray-300 cursor-pointer"
            >
              Help & Support{" "}
              <FiExternalLink className="text-purple-400 text-xs" />
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

        {/* Centered Section (Desktop) */}
        <div className="hidden sm:flex gap-6 mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-purple-400 font-medium text-sm cursor-pointer"
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

        {/* Right Section (Desktop) */}
        <div className="hidden sm:flex gap-6 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-medium text-sm flex items-center gap-1 hover:text-gray-300 cursor-pointer"
          >
            Help & Support{" "}
            <FiExternalLink className="text-purple-400 text-xs" />
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="sm:hidden bg-black text-white py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-400 font-medium text-sm cursor-pointer"
            >
              Qash
            </motion.button>
            {["Qash Bank", "Qash Business", "Qash Center"].map(
              (item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white font-medium text-sm cursor-pointer hover:text-gray-300"
                >
                  {item}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Mini;
