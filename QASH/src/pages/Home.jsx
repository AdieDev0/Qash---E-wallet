import React from "react";
import CreditCards from "../assets/Home/CreditCards.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src={CreditCards}
            alt=""
            className="w-full object-cover h-[500px]"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
