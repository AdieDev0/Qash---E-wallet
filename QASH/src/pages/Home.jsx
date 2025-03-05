import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CreditCards from "../assets/Home/CreditCards.jpg";
import ThemeToggle from "../DarkMode/ThemeToggle";
import Percentage from "../assets/Home/Percentage.png";
import Person from "../assets/Home/person.png";
import Protect from "../assets/Home/Protect.png";
import Start from "../assets/Home/Start.png";
import CredCard from "../assets/Home/CredCard.png";
import ModelCard from "../assets/Home/ModelCard.png";
import FloatCard from "../assets/Home/FloatCard.png";

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
          <p className="text-6xl font-bold font-inter text-purple-400">
            Our first credit card.
          </p>
          <p className="text-4xl font-inter text-gray-200 mt-3">
            The last one you'll ever need for cash back
          </p>
          <div className="flex gap-5 mt-10">
            <motion.button
              className="text-xl bg-purple-700 py-5 px-14 rounded-3xl text-gray-200 font-semibold font-inter hover:scale-110 duration-200 cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              Sign up
            </motion.button>
            <motion.button
              className="text-xl border border-purple-700 rounded-3xl text-purple-400 font-semibold font-inter py-5 px-14 hover:scale-110 duration-200 cursor-pointer"
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
          <p className="text-3xl sm:text-4xl font-bold font-inter text-purple-400">
            Our first credit card.
          </p>
          <p className="text-lg sm:text-2xl font-inter text-gray-200 mt-3">
            The last one you'll ever need for cash back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <motion.button
              className="w-40 text-lg sm:text-xl bg-purple-700 py-3 sm:py-4 rounded-3xl text-gray-200 font-semibold font-inter hover:scale-105 duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              Sign up
            </motion.button>
            <motion.button
              className="w-40 text-lg sm:text-xl border border-purple-700 rounded-3xl text-purple-400 font-semibold font-inter py-3 sm:py-4 hover:scale-105 duration-200 cursor-pointer"
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
      <div className="bg-stone-800 p-4 sm:p-10 md:p-20">
        <div>
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 font-inter text-center max-w-3xl mb-8 sm:mb-12 md:mb-16 mx-auto"
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
                <h1 className="text-center text-purple-300 font-bold font-inter text-2xl sm:text-3xl md:text-4xl">
                  {inviCard.name}
                </h1>
                <p className="text-center text-gray-200 sm:text-lg md:text-xl font-inter">
                  {inviCard.para}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.h1
            className="text-center font-bold font-madi text-4xl text-gray-200 hover:scale-105 duration-200 cursor-pointer mt-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AND MORE
          </motion.h1>
        </div>
      </div>

      {/* FlexBox */}
      <div className="bg-stone-800 p-30">
        <div className="text-center grid gap-3 mb-20">
          <h5 className="text-gray-200 font-semibold font-inter text-2xl">
            WHAT"S NEW
          </h5>
          <h1 className="text-7xl text-purple-400 font-semibold font-inter">
            Your Money. Your Way.
          </h1>
        </div>

        {/* CARD CONTEXT */}
        <div className="px-16">
          {/* 1st FlexBox Cards */}
          <div>
            <div className="flex gap-5 my-5">
              {/* 1st */}
              <div className="items-center bg-orange-700 px-10 py-12 rounded-3xl w-lg shadow-md">
                <div className="grid gap-5 mb-10">
                  <p className="text-2xl font-bold font-inter text-gray-200">
                    Get your very own physical Qash card?
                  </p>
                  <p className="font-inter text-gray-200 font-semibold">
                    Shop to your heart’s delight or withdraw cash with a cool
                    black card with your @username on it
                  </p>
                  <p className="font-inter text-gray-200 font-semibold">
                    Want a FREE Qash card? Click here to learn more.
                  </p>
                </div>

                <button className="px-10 py-5 bg-purple-700 mx-auto text-gray-200 font-bold font-inter rounded-xl hover:bg-purple-600 duration-200 cursor-pointer">
                  Get a Qash card
                </button>
                <img src={CredCard} alt="" className="w-96 mt-10" />
              </div>
              {/* 2nd */}
              <div className="items-center bg-emerald-500 px-10 pt-12 rounded-3xl w-2xl shadow-md">
                <div className="grid gap-5 mb-10">
                  <p className="text-2xl font-bold font-inter text-black/80">
                    It’s easy to get banked with Qash
                  </p>
                  <p className="font-inter text-black/80 font-semibold">
                    Maya gives the safety of a bank and convenience of a wallet.
                  </p>
                </div>
                <button className="px-10 py-5 bg-white mx-auto text-black/80 font-bold font-inter rounded-xl hover:bg-white/90 duration-200 cursor-pointer">
                  Get banked
                </button>
                <img src={ModelCard} alt="" className="w-full mt-10" />
              </div>
            </div>
            <div className="flex gap-10 items-center bg-emerald-500 px-10 rounded-3xl w-full shadow-md">
              <div className="grid gap-5 mb-10">
                <p className="text-2xl font-bold font-inter text-black/80">
                  Landers Cashback Everywhere Credit Card by Maya It’s easy to
                  get banked with Qash
                </p>
                <p className="font-inter text-black/80 font-semibold">
                  Enjoy having both a credit card and membership in one to get
                  all the benefits of being a Landers member and all the perks
                  of a credit card.
                </p>
                <div>
                  <button className="px-10 py-5 bg-white mx-auto text-black/80 font-bold font-inter rounded-xl hover:bg-white/90 duration-200 cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
              <div>
                <img src={FloatCard} alt="" className="w-full mt-10" />
              </div>
            </div>
          </div>
          {/* 2nd FlexBox Cards */}
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
