import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import QrCode from "../assets/Footer/QrCode.jpg";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-purple-400 py-12 border-t-4 border-purple-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Logo */}
        <div className="text-center md:text-left">
          <h1 className="font-madi text-7xl text-purple-700">QASH</h1>
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
            href="https://www.bsp.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline inline-block mt-2"
          >
            www.bsp.gov.ph
          </a>
        </div>
      </div>

      {/* Navigation & QR Code */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 mt-10">
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-300 cursor-pointer">Home</li>
            <li className="hover:text-purple-300 cursor-pointer">User Guide</li>
            <li className="hover:text-purple-300 cursor-pointer">Deals</li>
            <li className="hover:text-purple-300 cursor-pointer">
              Partner Merchants
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-300 cursor-pointer">About QASH</li>
            <li className="hover:text-purple-300 cursor-pointer">Careers</li>
            <li className="hover:text-purple-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-300 cursor-pointer">
              Help & Support
            </li>
            <li className="hover:text-purple-300 cursor-pointer">
              App Service Status
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Scan to Download</h3>
          <div className="flex justify-center md:justify-start border-2 border-purple-400 p-4 rounded-xl">
            <BsQrCode className="w-24 h-24 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-10">
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
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Icon className="w-7 h-7" />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-gray-700 pt-4 mt-10">
        <p>Static Website | DevAdie</p>
        <div className="mt-2">
          <a href="#" className="text-purple-400 hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="text-purple-400 hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
