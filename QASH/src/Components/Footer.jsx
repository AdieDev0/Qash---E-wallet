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

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-12 border-t-4 border-purple-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="font-madi text-7xl text-purple-500">QASH</h1>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-purple-400" /> QASH Customer Hotline
            </h2>
            <p className="text-lg mt-2">(+632) 8845-7788</p>
            <p className="text-lg">Domestic Toll-Free: 1-800-1084-57788</p>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-left">
            <p className="text-sm leading-relaxed">
              QASH is powered by the country’s only end-to-end digital payments
              company QASH Philippines, Inc. and QASH Bank, Inc. for digital
              banking services.
            </p>
            <a
              href="https://www.youtube.com/watch?v=Yw6u6YkTgQ4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-block mt-2"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Navigation & QR Code */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
          {[
            {
              title: "Quick Links",
              links: ["Home", "User Guide", "Deals", "Partner Merchants"],
            },
            {
              title: "Company",
              links: ["About QASH", "Careers", "Contact Us"],
            },
            {
              title: "Support",
              links: ["Help & Support", "App Service Status"],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-purple-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold text-lg mb-3">Scan to Download</h3>
            <div className="flex justify-center md:justify-start border-2 border-purple-400 p-4 rounded-xl transform hover:scale-105 transition-transform">
              <img src={QrCode} className="w-24 h-24" />
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            FaFacebook,
            FaTwitter,
            FaInstagram,
            FaLinkedin,
            FaYoutube,
            FaTiktok,
          ].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-700 pt-4 mt-12">
          <p>Static Website | DevAdie</p>
          <div className="mt-2">
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
