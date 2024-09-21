
import React from 'react';
import Image from 'next/image';
import VirtualExhibitionsCard from './VirtualExhibitionsCard';
import { dummyExhibitions } from '@/utils/virtualExhibitionsDataCO';
import { dummyExhibitions2 } from '@/utils/virtualExhibitionsDataUpcoming';


const VirtualExhibitions = () => {
  return (
    <div>
      <div className="flex flex-col w-full p-4 bg-gray-100">
        {/* Heading */}
        {/* Search and Sort Section */}
        <div className="flex flex-col w-full items-end space-y-4 mt-10">
          {/* Sort Dropdown with Chevron */}
          <div className="relative w-auto mr-36">
            <select className="appearance-none bg-white text-gray-600 text-sm font-medium py-2 px-4 pr-8 rounded-full focus:outline-none">
              <option>Sort: Relevance</option>
              <option>Sort: Date</option>
              <option>Sort: Popularity</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex w-[900px] border rounded-sm overflow-hidden mr-36">
            <img src='/images/search.svg' className='bg-white pl-3'/>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 focus:outline-none text-black"
            />
            {/* Go Button */}
            <button className="bg-[#00539B] text-white px-6">
              GO
            </button>
          </div>
        </div>
        <div className='mb-20 mr-44 p-10'>
          <div className='flex flex-col items-center'>
            {/* Currently Open Section */}
            <div className='w-full max-w-screen-lg'>
              <h1 className="text-3xl font-bold mb-4 text-black">Currently Open</h1>
              <div className='grid grid-cols-3 gap-x-48 gap-y-6'>
                {dummyExhibitions.map((exhibition) => (
                  <VirtualExhibitionsCard key={exhibition.id} virtualExhibition={exhibition} />
                ))}
              </div>
            </div>
            
            {/* Upcoming Section */}
            <div className='w-full max-w-screen-lg mt-16'>
              <h1 className="text-3xl font-bold text-black mb-5">Upcoming</h1>
              <div className='grid grid-cols-3 gap-x-48 gap-y-6'>
                {dummyExhibitions2.map((exhibition) => (
                  <VirtualExhibitionsCard key={exhibition.id} virtualExhibition={exhibition} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};