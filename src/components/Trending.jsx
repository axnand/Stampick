'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import {trendingData} from '@/utils/trendingData.js'

const TrendingComponent = () => {
  const [activeTab, setActiveTab] = useState('1D'); 

  return (
    <div className="flex flex-col mt-10 border-white rounded-xl p-6 border border-opacity-10 text-white w-full">
      
      <div className="flex space-x-4 items-center mb-4 border-b-white border-b pb-2 border-opacity-10">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex bg-[#222528] rounded-2xl text-xs p-[2px]">
          {['1H', '1D', '7D', '30D'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-2xl transition hover:bg-zinc-700 ${
                activeTab === tab ? 'bg-[#191C1F]' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Collectors Info wrapped in a flex-col container */}
      <div className="flex w-full text-xs justify-between items-center space-x-6 px-7 py-2">
        <div className="flex flex-col w-full text-[13px]">
          {/* First div: Title content */}
          <div className="flex justify-between text-xs mb-3 font-semibold opacity-50">
            <div className="w-1/12">#</div>
            <div className="w-10/12">Collectors</div>
            <div className="w-2/12">Items</div>
          </div>
          {/* Second div: Mapped content */}
          <div className="flex flex-col">
            {trendingData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center py-3 justify-between">
                {/* 1st div: Collector Index */}
                <div className="w-1/12">{index + 1}</div>

                {/* 2nd div: Collector's name and image */}
                <div className="w-10/12 flex items-center space-x-2">
                  <Image src={item.img} width={30} height={30} alt="Collector" />
                  <Link href={`/collectors/${item.collector.toLowerCase()}`} passHref>
                    <div className="hover:underline cursor-pointer">{item.collector}</div>
                  </Link>
                </div>

                {/* 3rd div: Items */}
                <div className="w-2/12">{item.items}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Collectibles Info */}
        <div className="flex flex-col w-full text-[13px] font-medium">
          {/* First div: Title content */}
          <div className="flex justify-between text-xs mb-3 font-semibold opacity-50">
            <div className="w-1/12">#</div>
            <div className="w-10/12">Collectible</div>
            <div className="w-2/12">Price</div>
          </div>
          {/* Second div: Mapped content */}
          <div className="flex flex-col">
            {trendingData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center py-3 justify-between">
                {/* 1st div: Collectible Index */}
                <div className="w-1/12">{index + 1}</div>

                {/* 2nd div: Collectible's name and image */}
                <div className="w-10/12 flex items-center space-x-2">
                  <Image src={item.image} width={30} height={30} alt="Collectible" />
                  <Link href={`/collectibles/${item.collectibletitle.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                    <div className="hover:underline cursor-pointer">{item.collectibletitle}</div>
                  </Link>
                </div>

                {/* 3rd div: Price */}
                <div className="w-2/12">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3rd Section: View All Button */}
      <div className='flex w-full pt-5 justify-center'>
        <div className='p-3 rounded-2xl bg-[#222528] text-white font-semibold w-4/5 text-center text-xs mb-4 cursor-pointer hover:bg-white hover:text-[#222528] transition'>
          View All Collection ➜
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
