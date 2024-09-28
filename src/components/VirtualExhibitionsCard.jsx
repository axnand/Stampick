import Image from 'next/image';
import { useState } from 'react';

const VirtualExhibitionsCard = ({ virtualExhibition }) => {
  const [isSave, setIsSave] = useState(false);

  const handleSaveButton = () => {
      setIsSave(!isSave);
  }
  return (
    <div className="max-w-sm mx-auto bg-white shadow-2xl overflow-hidden relative w-[25vw] h-[65vh]">
      {/* Save and Share Icons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button aria-label="Share" className="-mt-[0.5%] w-9 h-9 flex justify-center items-center text-gray-600 border border-gray-300 rounded-full hover:text-gray-800">
          <img src='/images/Share2.svg' />
        </button>
        <button
          onClick={handleSaveButton} 
          aria-label="Bookmark" 
          className="w-8 h-8 flex justify-center items-center text-gray-600 border border-gray-300 rounded-full hover:text-gray-800">
            <img src= {!isSave? '/images/bookmark.svg'
              : 
            '/images/bookmarked.svg'} />
        </button>
      </div>

      {/* Image */}
      <div className="relative h-48 w-full flex justify-center items-center overflow-hidden mt-[10%]">
        <Image
          src={virtualExhibition.imageUrl}
          alt="virtual exhibition"
          layout="intrinsic"  
          width={340}
          height={500}
        />
      </div>

      {/* Card Content */}
      <div className="p-1">
        <h2 className="text-lg font-bold text-center text-[#00539B]">
          {virtualExhibition.title}
        </h2>
        <p className="text-[#545668] font-bold text-center">
          {virtualExhibition.dates}
        </p>
        <p className="text-center text-gray-600 text-sm mb-4 mt-2 ml-8 w-[20vw]">
          {virtualExhibition.description}
        </p>
        <div className="border-t p-4 text-center border-gray-300 flex flex-row text-sm">
          <div className="mb-2 flex flex-col">
            <span className="text-black mr-10">Audience:</span>{" "}
            <span className="text-gray-500">{virtualExhibition.audience}</span>
          </div>
          <div className='flex flex-col ml-7'>
            <span className="text-black">Collecting Area:</span>{" "}
            <span className="text-gray-500">{virtualExhibition.collectingArea}</span>
          </div>
          <button className='border border-gray-500 rounded-full w-6 h-6 mt-2 ml-12 flex justify-center items-center'>
            <img src='/images/dropdown2.svg' className='w-3 h-3'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualExhibitionsCard;
