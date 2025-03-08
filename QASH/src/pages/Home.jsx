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
import UndrawPayment from "../assets/Home/UndrawPayment.png";
import Email from "../assets/Home/Email.png";
import bitcoin from "../assets/Home/bitcoin.png";
import gift from "../assets/Home/gift.png";
import Cheerful from "../assets/Home/Cheerful.jpg";
import PhoneUpgrade from "../assets/Home/PhoneUpgrade.png";
import CredCardIcon from "../assets/Home/CredCardIcon.png";
import Crypto from "../assets/Home/Crypto.png";
import Money from "../assets/Home/Money.png";
import Upgrade from "../assets/Home/Upgrade.png";
import { FaCheckCircle } from "react-icons/fa";
import beans from "../assets/Home/beans.jpg";
import business from "../assets/Home/business.webp";
import cafe from "../assets/Home/cafe.jpg";
import cashbackk from "../assets/Home/cashbackk.jpg";
import coffeeSale from "../assets/Home/coffeeSale.jpg";
import Credit from "../assets/Home/Credit.webp";
import ecoBags from "../assets/Home/ecoBags.jpg";
import freeShip from "../assets/Home/freeShip.jpg";
import mocha from "../assets/Home/mocha.png";
import off from "../assets/Home/off.jpg";
import phoneCashback from "../assets/Home/phoneCashback.jpeg";
import Rewards from "../assets/Home/Rewards.webp";
import sale from "../assets/Home/sale.webp";
import spend from "../assets/Home/spend.jpg";
import vault from "../assets/Home/vault.jpg";
import vip from "../assets/Home/vip.jpg";
import Marquee from "react-fast-marquee";

const dealsCard = [
  {
    img: vault,
    title: "₱300 joining bonus exclusive to BeanVault members!",
    buttonText: "Check it out",
  },
  {
    img: cashbackk,
    title: "Get ₱100 cashback on your first purchase at BrewSure Insurance!",
    buttonText: "Check it out",
  },
  {
    img: Credit,
    title: "Save up to 50% OFF this March at Roast & Relax!",
    buttonText: "Check it out",
  },
  {
    img: Rewards,
    title: "PerkPay Spend Anywhere Promo – Earn rewards daily!",
    buttonText: "Check it out",
  },
  {
    img: vip,
    title: "Exclusive 20% discount for new Roastify customers!",
    buttonText: "Check it out",
  },
  {
    img: coffeeSale,
    title: "Buy 1 Get 1 on selected coffee blends at AromaHouse!",
    buttonText: "Check it out",
  },
  {
    img: freeShip,
    title: "Free shipping on orders above ₱1,500 at SteamBrew!",
    buttonText: "Check it out",
  },
  {
    img: Rewards,
    title: "Earn double points this weekend with BeanBliss Rewards!",
    buttonText: "Check it out",
  },
  {
    img: sale,
    title: "Flash Sale: Up to 70% OFF for 24 hours at CaffeineMart!",
    buttonText: "Check it out",
  },
  {
    img: off,
    title: "BrewAcademy student discount: 15% OFF on all items!",
    buttonText: "Check it out",
  },
  {
    img: beans,
    title: "Win a free trip to Brew Haven! Join our raffle now!",
    buttonText: "Check it out",
  },
  {
    img: mocha,
    title: "Free drink with every pastry purchase at Mocha Lane!",
    buttonText: "Check it out",
  },
  {
    img: spend,
    title: "₱500 voucher when you refer a friend to PerkPoints!",
    buttonText: "Check it out",
  },
  {
    img: cafe,
    title: "Happy Hour: 50% OFF on selected beverages at Espresso Wave!",
    buttonText: "Check it out",
  },
  {
    img: business,
    title: "Mid-year Sale: Up to 60% OFF storewide at RoastLab!",
    buttonText: "Check it out",
  },
  {
    img: ecoBags,
    title: "Get a free eco-bag with every purchase at Java Essence!",
    buttonText: "Check it out",
  },
];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const cardVariants = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

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
      <div className="min-h-screen bg-gradient-to-br from-stone-800 to-stone-900 p-10">
        <motion.div
          className="text-center grid gap-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h5
            className="text-gray-200 font-semibold font-inter text-lg md:text-2xl"
            variants={itemVariants}
          >
            WHAT'S NEW
          </motion.h5>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl text-purple-400 font-semibold font-inter"
            variants={itemVariants}
          >
            Your Money. Your Way.
          </motion.h1>
        </motion.div>

        {/* CARD CONTEXT */}
        <motion.div
          className="px-4 md:px-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1st FlexBox Cards */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row gap-5 my-5">
              {/* 1st Card */}
              <motion.div
                className="items-center bg-gradient-to-tr from-orange-500 via-orange-300 px-10 py-12 rounded-3xl w-full md:w-1/2 shadow-md"
                variants={cardVariants}
                whileHover="hover"
              >
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
                <img src={CredCard} alt="" className="w-96 mt-10 mx-auto" />
              </motion.div>

              {/* 2nd Card */}
              <motion.div
                className="items-center bg-gradient-to-tr from-emerald-500 via-emerald-300 px-10 pt-12 rounded-3xl w-full md:w-1/2 shadow-md"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="grid gap-5 mb-10">
                  <p className="text-2xl font-bold font-inter text-black/80">
                    It’s easy to get banked with Qash
                  </p>
                  <p className="font-inter text-black/80 font-semibold">
                    Qash gives the safety of a bank and convenience of a wallet.
                  </p>
                </div>
                <button className="px-10 py-5 bg-white mx-auto text-black/80 font-bold font-inter rounded-xl hover:bg-white/90 duration-200 cursor-pointer">
                  Get banked
                </button>
                <img src={ModelCard} alt="" className="w-full mt-10" />
              </motion.div>
            </div>

            {/* 3rd Card */}
            <motion.div
              className="flex flex-col md:flex-row gap-10 items-center bg-gradient-to-tr from-fuchsia-400 via-fuchsia-300 px-10 rounded-3xl w-full shadow-md my-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="grid gap-5 mb-10">
                <p className="text-2xl font-bold font-inter text-black/80">
                  Landers Cashback Everywhere Credit Card by Qash It’s easy to
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
            </motion.div>
          </motion.div>

          {/* 2nd FlexBox Cards */}
          <motion.div
            className="flex flex-col md:flex-row gap-5 my-5"
            variants={containerVariants}
          >
            {/* First Cards */}
            <motion.div
              className="grid gap-5 w-full md:w-2/3"
              variants={itemVariants}
            >
              <motion.div
                className="flex flex-col md:flex-row justify-between bg-gradient-to-tr from-gray-300 via-gray-200 rounded-3xl shadow-md p-10"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="grid gap-5 w-full">
                  <p className="text-black/80 font-bold font-inter text-2xl">
                    Zero to ₱30,000 in seconds
                  </p>
                  <p className="text-black/80 font-medium font-inter text-md">
                    Get approval of up to 30k credit line with Qash Credit!
                  </p>
                  <div>
                    <button className="bg-purple-700 font-bold font-inter hover:bg-purple-600 duration-200 px-10 py-5 rounded-xl cursor-pointer">
                      Apply for Qash Credit
                    </button>
                  </div>
                </div>
                <img src={UndrawPayment} alt="" className="w-96 object-cover" />
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row gap-10 bg-gradient-to-tr from-gray-100 via-gray-200 rounded-3xl shadow-md p-10"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="grid gap-5 w-full">
                  <p className="text-black/80 font-bold font-inter text-2xl">
                    Did you know you can send money using @usernames?
                  </p>
                  <p className="text-black/80 font-medium font-inter text-md">
                    Don't have a friend's bank account memorized? Too many
                    details to enter? With Maya, all you need is your receiver's
                    username and you're ready to send away.
                  </p>
                  <div>
                    <button className="bg-purple-700 font-bold font-inter hover:bg-purple-600 duration-200 px-10 py-5 rounded-xl cursor-pointer">
                      Create your @username now
                    </button>
                  </div>
                </div>
                <img src={Email} alt="" className="w-60 object-cover" />
              </motion.div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="bg-gradient-to-tr from-blue-300 via-blue-400 p-10 rounded-3xl w-full md:w-1/3 shadow-md grid gap-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <h1 className="text-4xl font-bold font-inter">Crypto for all</h1>
              <p className="text-md font-medium font-inter">
                Get started with crypto through Maya. Buy, sell, send, and
                receive crypto anytime.
              </p>
              <p className="text-md font-medium font-inter">
                Plus, you have access to over a dozen currencies and everything
                you need to learn about crypto, all in the app.
              </p>
              <div>
                <button className="bg-lime-500 font-bold font-inter hover:bg-lime-400 duration-200 px-10 py-5 rounded-xl cursor-pointer">
                  Create your @username now
                </button>
              </div>
              <img src={bitcoin} alt="" className="w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Perks */}
      <div className="min-h-screen bg-gradient-to-br from-stone-800 to-stone-900 py-20 px-6 md:px-40">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={gift}
            alt="Gift"
            className="w-40 md:w-60"
            variants={itemVariants}
          />
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className="font-bold text-3xl md:text-4xl text-purple-400 mb-4">
              Perks all the way, baby!
            </h1>
            <p className="font-medium text-lg md:text-xl text-white/80">
              Earn cashbacks when you cash-in, transfer, refer a friend, and buy
              gaming credits.
            </p>
          </motion.div>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 duration-200 font-bold font-inter text-lg md:text-xl w-full md:w-72 py-4 md:py-5 rounded-2xl cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Get the App
          </motion.button>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1st Card */}
          <motion.div
            className="p-6 md:p-10 bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 from- rounded-3xl flex-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex gap-4 items-center mb-6">
              <FaCheckCircle className="text-green-400 size-6 md:size-7" />
              <p className="font-bold text-xl text-gray-200">
                Get Banked with Maya with these exclusive deals to make the
                switch painless
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-200 font-medium text-md">
                • Up to 1x FREE cash in via InstaPay
              </li>
              <li className="text-gray-200 font-medium text-md">
                • Up to 1x FREE InstaPay transfer for 2 months
              </li>
              <li className="text-gray-200 font-medium text-md">
                • Up to 15% interest p.a. with Maya Savings
              </li>
              <li className="text-gray-200 font-medium text-md">
                • FREE Maya card
              </li>
            </ul>
            <p className="italic text-gray-100 text-sm">
              Terms and conditions apply
            </p>
          </motion.div>

          {/* 2nd Card */}
          <motion.div
            className="p-6 md:p-10 bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 rounded-3xl flex-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex gap-4 items-center mb-6">
              <FaCheckCircle className="text-green-400 size-6 md:size-7" />
              <p className="font-bold text-xl text-gray-200">
                Earn ₱50 for every friend that you get banked with Maya.
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-gray-200 font-medium text-md">
                You can even earn up to ₱15,000 when you refer more than 30!
              </p>
              <p className="text-gray-200 font-medium text-md">
                a. Achieve 30 referrals - Get ₱2,500
              </p>
              <p className="text-gray-200 font-medium text-md">
                b. Achieve 50 - Get ₱3,000
              </p>
              <p className="text-gray-200 font-medium text-md">
                c. Achieve 100 - Get ₱9,000
              </p>
            </div>
            <p className="italic text-gray-100 text-sm">
              Terms and conditions apply
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* USER GUIDE */}

      <div className="bg-stone-800 p-10 md:p-20 flex flex-col md:flex-row justify-evenly items-center gap-10">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-[450px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-5">
            <p className="text-xl md:text-2xl font-semibold font-inter text-white">
              USER GUIDE
            </p>
            <img src={Cheerful} alt="Cheerful" className="w-28 md:w-40" />
          </div>
          <p className="text-4xl md:text-6xl font-bold font-inter text-purple-400 mb-4">
            How to make the most out of Qash
          </p>
          <p className="text-lg md:text-2xl font-medium font-inter text-gray-200">
            See how Maya gives you power over your finances with these
            step-by-step guides.
          </p>
        </motion.div>

        {/* Right Section (Carousel) */}
        <motion.div
          className="relative max-w-md overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="carousel carousel-center rounded-box space-x-4 p-4">
            {[
              "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
              "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
              "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
              "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
              "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
              "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
              "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="carousel-item"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  className="rounded-xl w-60 md:w-72 shadow-lg"
                  alt={`Guide ${index}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Upgrade your account */}
      <div className="p-10 md:p-20 bg-stone-900">
        <motion.div
          className="bg-gradient-to-tr from-purple-900 via-purple-700 to-purple-800 flex flex-col md:flex-row justify-evenly p-6 md:p-10 rounded-3xl items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={PhoneUpgrade}
              alt="Upgrade Phone"
              className="w-40 md:w-full"
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-white">
              Upgrade your Account
            </h1>
            <p className="text-lg md:text-xl font-medium font-inter mb-6 text-gray-200">
              Access banking features, get a more personalized experience, and
              bump up your wallet limit.
            </p>

            <div className="space-y-3">
              {[
                {
                  img: Money,
                  text: "Open a savings account with up to 10% p.a. starting March 7",
                },
                { img: Crypto, text: "Buy and sell crypto" },
                {
                  img: CredCardIcon,
                  text: "Shop online or in-store with a physical or virtual wallet card",
                },
                {
                  img: Upgrade,
                  text: "Max your monthly wallet limit from ₱50K to ₱100K",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <img src={item.img} alt="" className="w-8" />
                  <p className="font-medium font-inter text-gray-100">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-8 bg-purple-400 font-bold font-inter px-8 py-4 rounded-2xl cursor-pointer text-white shadow-lg hover:bg-purple-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tell me more
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Deals */}
      <div className="bg-stone-800 p-10 md:p-30">
        <div className="flex flex-col md:flex-row justify-between gap-10 px-10 items-center">
          <div>
            <p className="text-xl font-inter font-semibold mb-5">DEALS</p>
            <p className="text-5xl font-inter font-bold text-purple-600">
              Seal the deal with Qash
            </p>
          </div>
          <div>
            <button className="border border-purple-600 rounded-2xl px-10 py-5 text-xl font-bold font-inter text-purple-400 hover:scale-105 duration-200 cursor-pointer">
              Discover more deals & promos
            </button>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide py-5">
          <div className="flex gap-5 w-max">
            {dealsCard.map((deals, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#1A1A1A] text-white w-[300px] md:w-[340px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex-shrink-0"
                aria-label={`Deal card for ${deals.title}`}
              >
                {/* Image */}
                <div className="w-full h-40 rounded-t-2xl overflow-hidden">
                  <img
                    src={deals.img}
                    alt={deals.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-bold">{deals.title}</h3>
                  <p className="text-sm text-gray-300">{deals.description}</p>

                  <button className="text-purple-400 font-semibold flex items-center gap-1 hover:text-purple-300 transition duration-200 cursor-pointer">
                    Check it out →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center mt-10">
          <button className="bg-purple-800 text-white font-inter font-bold text-xl px-10 py-5 rounded-3xl hover:bg-purple-700 duration-200 cursor-pointer">
            See more stories
          </button>
        </div> */}
      </div>

      {/* Marquues */}
      <div>
        <Marquee autoFill play={true} direction="left">
          <p>hellow??</p>
        </Marquee>
      </div>
    </>
  );
};

export default Home;
