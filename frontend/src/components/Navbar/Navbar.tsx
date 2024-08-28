import { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className="py-[20px] px-0 flex justify-between items-center lowercase">
      <img 
        src={assets.logo} 
        alt="Logo" 
        className="w-[170px]"
      />
      <ul className="flex list-none gap-[20px] text-[#49557e] text-xl">
        <li 
        onClick={() => setMenu("home")} 
        className={`cursor-pointer duration-300 ${menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Home
        </li>
        <li 
        onClick={() => setMenu("menu")} 
        className={`cursor-pointer duration-300 ${menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Menu
        </li>
        <li 
        onClick={() => setMenu("mobile-app")} 
        className={`cursor-pointer duration-300 ${menu === "mobile-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Mobile-App
        </li>
        <li 
        onClick={() => setMenu("contact")} 
        className={`cursor-pointer duration-300 ${menu === "contact" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>
          Contact
        </li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="search" />
        <div className="relative">
          <img src={assets.basket_icon} alt="cart" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button 
        className="lowercase bg-transparent text-xl text-[#49557e] border border-[#ff6347] py-[10px] px-[30px] cursor-pointer rounded-[50px] duration-300 hover:bg-[#fff4f2]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
