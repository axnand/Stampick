import Image from 'next/image';
import { useState } from 'react';

const VirtualExhibitionsCard = ({ virtualExhibition }) => {
  const [isSave, setIsSave] = useState(false);

  const handleSaveButton = () => {
      setIsSave(!isSave);
  }
  return (
    <div className=" flex flex-col bg-white shadow-2xl p-4 w-[25vw] object-cover space-y-2">
      {/* Save and Share Icons */}
      <div className=" flex w-full items-center justify-end space-x-2">
        <a href='https://stamp-exhibition.vercel.app/' target='blank'><button aria-label="Share" className="-mt-[0.5%] w-8 h-8 flex justify-center items-center text-gray-600 border border-gray-300 rounded-full hover:text-gray-800">
          <img className='w-5' src='/images/Share2.svg' />
        </button></a>
        <button
          onClick={handleSaveButton} 
          aria-label="Bookmark" 
          className="w-8 h-8 flex justify-center items-center text-gray-600 border border-gray-300 rounded-full hover:text-gray-800">
            <img className='w-[14px]' src= {!isSave? '/images/bookmark.svg'
              : 
            '/images/bookmarked.svg'} />
        </button>
      </div>

      {/* Image */}
      <div className=" w-full flex items-center mt-3 overflow-hidden h-[35vh]">
        <Image
          src={virtualExhibition.imageUrl}
          alt="virtual exhibition"
          layout="intrinsic"  
          width={320}
          height={700}
          className='object-cover'
        />
      </div>

    
      <div className="">
        <h2 className="text-lg font-bold text-center text-[#00539B]">
          {virtualExhibition.title}
        </h2>
        <p className="text-[#545668] text-xs font-bold text-center">
          {virtualExhibition.dates}
        </p>
        <p className="= text-gray-600 text-sm mt-4 text-center mb-3 w-full">
          {virtualExhibition.description}
        </p>
        <div className="border-t justify-between text-center border-gray-300 flex text-sm pt-4">
          <div className="mb-2 flex flex-col">
            <span className="text-black mr-10">Audience:</span>{" "}
            <span className="text-gray-500">{virtualExhibition.audience}</span>
          </div>
          <div className='flex flex-col'>
            <span className="text-black">Collecting Area:</span>{" "}
            <span className="text-gray-500">{virtualExhibition.collectingArea}</span>
          </div>
          <button className='border border-gray-500 rounded-full w-6 h-6 mt-2  flex justify-center items-center'>
            <img src='/images/dropdown2.svg' className='w-3 h-3'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualExhibitionsCard;
