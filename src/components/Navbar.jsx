'use client';
import React, { useState } from "react";
import SearchBar from './SearchBar';
import Link from 'next/link';
import { Popup, usePopup } from '@/components/ui/popup';
import AiScan from '@/components/ui/AiScan'; 

function Navbar() {
  const { isPopUpOpen, togglePopUp } = usePopup();

  const items = [
    "Collections",
    "Stamp 1",
    "Stamp 2",
    "Stamp 3",
    "User 1",
    "User 2",
    "User 3",
  ];

  const user = {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/75.jpg', 
  };

  return (
    <>
      {/* Popup Component */}
      <Popup isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
        <AiScan />
      </Popup>

      <div className="flex p-3 items-center text-sm justify-between">
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <SearchBar items={items} />
          <div className="flex px-6 gap-6 font-medium text-gray-400">
            <a className="cursor-pointer">Virtual Exhibition</a>
            <Link href="/Seller" className="cursor-pointer">
              Sell
            </Link>
            <a className="cursor-pointer">Drop</a>
            <a className="cursor-pointer">Spotlight</a>
          </div>
        </div>

        <div className="flex space-x-4 text-xs text-black font-bold items-center">
          <button
            className="px-3 py-2 rounded-full text-black bg-[#FFFFFF] transition hover:bg-amber-500"
            onClick={togglePopUp}
          >
            SIGN IN
          </button>
          <button
            className="px-3 py-2 rounded-full bg-[#FAFF02] hover:bg-gray-600 hover:text-white shadow text-black transition"
            onClick={togglePopUp} 
          >
            SMARTSCAN
          </button>
          <Link href="/Seller">
            <img className="rounded-full w-10" src={user.image} alt="User" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
