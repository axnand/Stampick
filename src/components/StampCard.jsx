import React from 'react';
import Link from 'next/link';

const StampCard = ({ stamp }) => {
  return (
    <Link href={`/stamps/${stamp.id}`} passHref>
      <div
        className='bg-[#191C1E] p-2 border h-full border-gray-300 border-opacity-10 rounded-md flex flex-col items-center space-y-4 text-sm cursor-pointer 
        transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
        <div className="bg-[#222528] text-white rounded-md flex w-full justify-center">
          <img
            src={stamp?.image}
            alt={stamp?.name}
            className="h-52 object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
        <h3 className="font-semibold mb-2 text-center text-base">{stamp?.collectibletitle}</h3>
        <div className="flex justify-between items-center text-xs text-gray-300 font- mb-2 opacity-70 bg-[#222528] w-full px-4 py-1 rounded-md">
          <div className='flex flex-col space-y-1 text-sm'>
            <span>Minting: </span><span className='font-semibold text-white opacity-100'>{stamp?.minting}</span>
          </div>
          <div className='flex flex-col space-y-1 text-sm'>
            <span className="">Price:</span><span className='opacity-100 text-white'> ₹{stamp?.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StampCard;
