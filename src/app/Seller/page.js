


"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar.jsx";
import { IconArrowLeft, IconUserBolt } from "@tabler/icons-react";
import { WalletIcon, ReceiptPercentIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MyOrder from "@/components/Dashboard/MyOrder.jsx";

import Vieworder from "@/components/Dashboard/Vieworder.jsx";
import Dashboard from "@/components/Dashboard/Dashboard.jsx"
import ProfileInformation from "@/components/Dashboard/ProfileInformation.jsx";
import SellerDashboard from "@/components/Dashboard/SellerDashboard.jsx";
import Orders from "@/components/Dashboard/Orders.jsx";

export default function SidebarDemo() {
  const [activeLabel, setActiveLabel] = useState("Manu Arora");
  const [isNpdaOpen, setIsNpdaOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isSellerOpen, setIsSellerOpen] = useState(false);
  const [open, setOpen] = useState(false);
 

  const linkes = [
    {
      label: "My Order",
      href: "#",
      icon: <ReceiptPercentIcon className="text-white h-5 w-5" />,  // White icon for visibility
    },
  ];

  const links = [
    {
      label: "NPDA Account",
      href: "#",
      icon: <UserIcon className="text-white h-7 w-6" />,  // White icon for visibility
      subLinks: [
        { label: "Profile Information", href: "#" },
        { label: "Manage Addresses", href: "#" },
        { label: "Pan Card Information", href: "#" },
      ],
      onClick: () => setIsNpdaOpen(!isNpdaOpen),
    },
  ];

  const wallet = [
    {
      label: "Wallet",
      href: "#",
      price: 500,
      icon: <WalletIcon className="text-white h-5 w-5" />,  // White icon for visibility
      subLinks: [
        { label: "Amount", href: "#" },
        { label: "Saved UPI", href: "#" },
        { label: "Saved Cards", href: "#" },
      ],
      onClick: () => setIsWalletOpen(!isWalletOpen),
    },
  ];

  const seller = [
    {
      label: "Seller",
      href: "#",
      icon: <IconUserBolt className="text-white h-5 w-5" />,  // White icon for visibility
      subLinks: [
        { label: "Dahboard", href: "#" },
        { label: "Orders", href: "#" },
      ],
      onClick: () => setIsSellerOpen(!isSellerOpen),
    },
  ];

  const logout = [
    {
      label: "Logout",
      href: "/",
      icon: <IconArrowLeft className="text-white h-5 w-5" />,  // White icon for visibility
    },
  ];

  const renderContent = () => {
    switch (activeLabel) {
      case "My Order":
        return <MyOrder />;
      case "Listproduct":
        return <Listproduct />;
      case "Vieworder":
        return <Vieworder />;
        case "Profile Information":
          return <ProfileInformation/>
          case "Dahboard":
            return <SellerDashboard/>
            case "Orders":
              return <Orders/>
      default:
        return <Dashboard />;
    }
   
  };
  

  return (
    
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 text-white">
  <Sidebar open={open} setOpen={setOpen} className="overflow-y-auto">
    <SidebarBody className="justify-around gap-3">
      <div className="flex flex-col">
        {open ? <Logo /> : <LogoIcon />}
        <div className="mt-8 flex flex-col gap-2 w-full">
          {linkes.map((link) => (
            <SidebarLink 
              key={link.label} 
              link={link} 
              onClick={() => setActiveLabel(link.label)} 
              showText={open} // pass the open state to control text visibility
            />
          ))}
        </div>

        {/* NPDA Account Dropdown */}
        <div className="mt-8 flex flex-col gap-2 w-full">
          {links.map((link) => (
            <div key={link.label} className="flex justify-between items-center cursor-pointer" onClick={link.onClick}>
              <div className="flex items-center">
                {link.icon}
                {open && <span className="ml-2">{link.label}</span>} {/* Show text only if open */}
              </div>
              {isNpdaOpen ? (
                <ChevronDownIcon className="text-white h-5 w-5 rotate-180" />
              ) : (
                <ChevronDownIcon className="text-white h-5 w-5" />
              )}
            </div>
          ))}
          {isNpdaOpen && links[0].subLinks && links[0].subLinks.map((subLink) => (
            <SidebarLink key={subLink.label} link={subLink} className="ml-6" onClick={() => setActiveLabel(subLink.label)} showText={open} />
          ))}
        </div>

        {/* Wallet Dropdown */}
        <div className="mt-8 flex flex-col gap-2 w-full">
          {wallet.map((link) => (
            <div key={link.label} className="flex justify-between items-center cursor-pointer" onClick={link.onClick}>
              <div className="flex items-center">
                {link.icon}
                {open && <span className="ml-2">{link.label}</span>} {/* Show text only if open */}
              </div>
              {isWalletOpen ? (
                <ChevronDownIcon className="text-white h-5 w-5 rotate-180" />
              ) : (
                <ChevronDownIcon className="text-white h-5 w-5" />
              )}
            </div>
          ))}
          {isWalletOpen && wallet[0].subLinks && wallet[0].subLinks.map((subLink) => (
            <SidebarLink key={subLink.label} link={subLink} className="ml-6" showText={open} />
          ))}
        </div>

        {/* Seller Dropdown */}
        <div className="mt-8 flex flex-col gap-2 w-full">
          {seller.map((link) => (
            <div key={link.label} className="flex justify-between items-center cursor-pointer" onClick={link.onClick}>
              <div className="flex items-center">
                {link.icon}
                {open && <span className="ml-2">{link.label}</span>} {/* Show text only if open */}
              </div>
              {isSellerOpen ? (
                <ChevronDownIcon className="text-white h-5 w-5 rotate-180" />
              ) : (
                <ChevronDownIcon className="text-white h-5 w-5" />
              )}
            </div>
          ))}
          {isSellerOpen && seller[0].subLinks && seller[0].subLinks.map((subLink) => (
            <SidebarLink key={subLink.label} link={subLink} className="ml-6" showText={open} onClick={()=>setActiveLabel(subLink.label)} />
          ))}
        </div>

        {/* Logout */}
        <div className="mt-8 flex flex-col gap-2 w-full">
          {logout.map((link) => (
            <SidebarLink key={link.label} link={link} onClick={() => setActiveLabel(link.label)} showText={open} />
          ))}
        </div>
      </div>
    </SidebarBody>
  </Sidebar>
  <div className="flex w-full bg-[#171717]">
    <div className="w-full flex">{renderContent()}</div>
  </div>
</div>

  );
}

const Logo = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-white py-1">
      <Image
        src="https://assets.aceternity.com/manu.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <span>Manu Arora</span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-white py-1">
      <Image
        src="https://assets.aceternity.com/manu.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </Link>
  );
};

