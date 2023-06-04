import React from "react";
import logo from "../assets/logo.png";
import phn from "../assets/phn.png";
import { FaAccusoft, FaLayerGroup, FaShippingFast, FaUser } from "react-icons/fa";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { GoLocation, GoSearch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiHome, BiPhone, BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone, BsPhoneLandscape } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
        {/* Left */}
        <div className="flex  items-center gap-x-3 shrink-0">
          <div className="hover:bg-[#06529a] p-2 rounded-full"></div>
            <img src={logo} alt="walmart" class="db" width="130" height="32"/>
          

          <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full">
            <FaLayerGroup className="text-[17px]" />
            <p className="text-[16px] font-semibold">Sections</p>
          </div>
          <div className="md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full ">
            <HiUserGroup className="text-[20px]" />
            <p className="text-[16px] font-semibold">Partners</p>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden relative lg:flex items-center flex-1 mx-6 ">
          <input
            type="search"
            className="rounded-full py-1.5 outline-0 flex-1" 
          />
          <div className="absolute bg-[#ffc220] p-1.5 rounded-full right-1.5">
            <GoSearch className="text-black" />
          </div>
        </div>
        {/* Right */}
        <div className="flex  items-center gap-x-2">
          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full">
            <FaHeart className="text-[17px] " />
            <tr>
            <p className="text-[12px]">Recorder</p>
            <p className="text-[16px] font-semibold">My Items</p></tr>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap">
            <FaUserAlt className="text-[20px]" />
            <tr>
            <p className="text-[12px] ">Sign in</p>
            <p className="text-[16px] font-semibold">Account</p></tr>
          </div>
          <div className="hover:bg-[#06529a] p-3 rounded-full">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1 hover:underline">
          <img src={phn} class="db" width="24" height="34" />
          <p className="text-[13px] font-bold">How do you want your items?</p>
        </div>
        <div class="" aria-hidden="true">|</div>
        
        <div className="flex items-center gap-1 hover:underline">
          <GoLocation />
          <p className="text-[13px] hover:underline">Scaramento, 95829</p>
        </div>
        <div className="flex items-center gap-1 hover:underline">
          <BiHome />
          <p className="text-[13px] hover:underline">Scaramento Supercenter</p>
        </div>
        <div className="flex items-center gap-5 hover:underline">
        <p className="text-[15px] font-bold">Deals</p>
        <p className="text-[15px] font-bold">Easter</p>
        <p className="text-[15px] font-bold">Grocery & essentials</p>
        <p className="text-[15px] font-bold">Home</p>
        <p className="text-[15px] font-bold">Tech</p>
        <p className="text-[15px] font-bold">Fashion</p>
        <p className="text-[15px] font-bold">Auto</p>
        <p className="text-[15px] font-bold">Registry</p>
        <p className="text-[15px] font-bold">Walmart+</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
