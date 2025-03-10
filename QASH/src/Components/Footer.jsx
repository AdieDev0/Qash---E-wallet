import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import QrCode from "../assets/Footer/QrCode.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-16 border-t-4 border-purple-600 text-gray-300">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6"
      >
        {/* 🔹 Top Section */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 🌟 Brand Logo */}
          <div className="text-center md:text-left">
            <h1 className="font-madi text-7xl text-purple-500">QASH</h1>
          </div>

          {/* ☎ Contact Details */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-purple-400" /> QASH Customer Hotline
            </h2>
            <p className="text-lg mt-2">(+632) 8845-7788</p>
            <p className="text-lg">Domestic Toll-Free: 1-800-1084-57788</p>
          </div>

          {/* ℹ Company Info */}
          <div className="text-center md:text-left">
            <p className="text-sm leading-relaxed">
              QASH is powered by the country’s only end-to-end digital payments
              company, QASH Philippines, Inc., and QASH Bank, Inc. for digital banking services.
            </p>
            <a
              href="https://www.youtube.com/watch?v=Yw6u6YkTgQ4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300 inline-block mt-2"
            >
              Learn More
            </a>
          </div>

        </motion.div>

        {/* 🔹 Navigation & QR Code */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
          
          {/* 🔗 Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "User Guide", "Deals", "Partner Merchants"].map((link, i) => (
                <li key={i} className="cursor-pointer text-purple-300 hover:text-purple-400 transition-all duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🏢 Company */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About QASH", "Careers", "Contact Us"].map((link, i) => (
                <li key={i} className="cursor-pointer text-purple-300 hover:text-purple-400 transition-all duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🛠 Support */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              {["Help & Support", "App Service Status"].map((link, i) => (
                <li key={i} className="cursor-pointer text-purple-300 hover:text-purple-400 transition-all duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 📱 QR Code */}
          <motion.div variants={fadeScale} className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3">Scan to Download</h3>
            <div className="flex justify-center md:justify-start border-2 border-purple-400 p-4 rounded-xl transform hover:scale-105 transition-all duration-300">
              <img src={QrCode} className="w-24 h-24" />
            </div>
          </motion.div>

        </div>

        {/* 🔹 Social Media */}
        <motion.div variants={fadeScale} className="flex justify-center gap-6 mt-12">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok].map((Icon, index) => (
            <a key={index} href="#" className="text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </motion.div>

        {/* 🔹 Footer Bottom */}
        <div className="text-center text-sm border-t border-gray-700 pt-6 mt-12">
          <p className="text-gray-400">© 2025 QASH | All Rights Reserved</p>
          <div className="mt-2">
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-all duration-300 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-all duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
