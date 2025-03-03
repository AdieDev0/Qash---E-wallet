import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CreditCards from "../assets/Home/CreditCards.jpg";
import ThemeToggle from "../DarkMode/ThemeToggle";
import Percentage from "../assets/Home/Percentage.png";
import Person from "../assets/Home/person.png";
import Protect from "../assets/Home/Protect.png";
import Start from "../assets/Home/Start.png";

const inviCard = [
  {
    img: Percentage,
    name: "Transfer",
    para: "Instantly send money through QR code or phone number",
  },
  {
    img: Protect,
    name: "Shop",
    para: "Whether it be crypto or stocks, you can grow your money how you like it",
  },
  {
    img: Person,
    name: "Personalized",
    para: "Shop and withdraw cash with a card that has your @username",
  },
  {
    img: Start,
    name: "Easy to start",
    para: "Sign up with just 1 ID and no minimum balance",
  },
];

const Home = () => {
  return (
    <>
    {/* Top Context */}
      <div className="relative w-full">
        <div className="relative w-full h-[600px] sm:h-[500px] md:h-[550px]">
          <img
            src={CreditCards}
            alt="Credit Card"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80 h-full"></div>
        </div>

        {/* Desktop View */}
        <motion.div
          className="absolute top-30 left-40 hidden lg:block"
          initial={{ opacity: 0, y: -50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 1 }} // Animation duration
        >
          <p className="text-6xl font-bold font-inter text-purple-700">
            Our first credit card.
          </p>
          <p className="text-4xl font-inter text-white mt-3">
            The last one you'll ever need for cash back
          </p>
          <div className="flex gap-5 mt-10">
            <motion.button
              className="text-xl bg-purple-700 py-5 px-14 rounded-3xl text-white font-semibold font-inter hover:scale-110 duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              Sign up
            </motion.button>
            <motion.button
              className="text-xl border border-purple-700 rounded-3xl text-purple-700 font-semibold font-inter py-5 px-14 hover:scale-110 duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile & Tablet View */}
        <motion.div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6 sm:px-10 lg:hidden"
          initial={{ opacity: 0, y: -50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 1 }} // Animation duration
        >
          <p className="text-3xl sm:text-4xl font-bold font-inter text-purple-700">
            Our first credit card.
          </p>
          <p className="text-lg sm:text-2xl font-inter text-white mt-3">
            The last one you'll ever need for cash back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <motion.button
              className="w-40 text-lg sm:text-xl bg-purple-700 py-3 sm:py-4 rounded-3xl text-white font-semibold font-inter hover:scale-105 duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              Sign up
            </motion.button>
            <motion.button
              className="w-40 text-lg sm:text-xl border border-purple-700 rounded-3xl text-purple-700 font-semibold font-inter py-3 sm:py-4 hover:scale-105 duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        {/* Theme Toggle - Always at Bottom Left */}
        <div className="fixed bottom-5 left-5 z-50">
          <ThemeToggle />
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-stone-900 p-4 sm:p-10 md:p-20">
        <div>
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-violet-500 font-inter text-center max-w-3xl mb-8 sm:mb-12 md:mb-16 mx-auto"
            initial={{ opacity: 0, y: -50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to this state
            transition={{ duration: 1 }} // Animation duration
          >
            Meet your new all-in-one digital bank app
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-5">
            {inviCard.map((inviCard, index) => (
              <motion.div
                key={index}
                className="grid gap-3"
                initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
                whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
                transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay
                viewport={{ once: true }} // Animate only once
              >
                <motion.img
                  src={inviCard.img}
                  alt={inviCard.name}
                  className="size-24 sm:size-32 md:size-40 mx-auto"
                  whileHover={{ scale: 1.1 }} // Scale up on hover
                  transition={{ duration: 0.3 }} // Hover animation duration
                />
                <h1 className="text-center text-violet-600 font-bold font-inter text-2xl sm:text-3xl md:text-4xl">
                  {inviCard.name}
                </h1>
                <p className="text-center text-base sm:text-lg md:text-xl font-inter">
                  {inviCard.para}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.h1
            className="text-center font-bold font-madi text-4xl text-violet-600 hover:scale-105 duration-200 cursor-pointer mt-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AND MORE
          </motion.h1>
        </div>
      </div>

      {/* FlexBox */}
    </>
  );
};

export default Home;
