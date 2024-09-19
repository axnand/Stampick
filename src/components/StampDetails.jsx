"use client";
import Image from "next/image";
import MoreCollectionSlider from "./MoreCollectionSlider";

const StampDetails = ({ product }) => {
  return (
    <div className="text-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Section */}
        <div key={product?.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-xl">
          {/* Image Section */}
          <div className="flex justify-center items-center rounded-lg overflow-hidden h-full w-full">
            <Image
              src={product?.image}
              alt={product?.title}
              width={300}
              height={300}
              layout="intrinsic"
              className="object-cover rounded-md"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between space-y-6">
            <h1 className="text-3xl font-bold w-[80%]">{product?.title}</h1>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span className="text-lg">Rarity:</span>
              <span className="bg-[#f6c339] text-black font-semibold rounded-xl px-2 py-1">{product?.rarity}%</span>
            </div>
            <div className="flex space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2 mr-20">
                <div className="w-8 h-8 bg-purple-700 rounded-full mr-2"></div>
                <div>
                  <span className="block text-gray-400">Creator</span>
                  <span>{product?.creator}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#d426d4] rounded-full mr-2"></div>
                <div>
                  <span className="block text-gray-400">Current Owner</span>
                  <span>{product?.owner}</span>
                </div>
              </div>
            </div>
            {/* partition line */}
            <div className="border-b border-gray-700 mt-6 mb-4 w-[500px]"></div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-400">
                <img src="/images/Heart.svg" alt="heart" className="w-6 h-6" />
                <span>{product?.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400">
                <img src="/images/Share.svg" alt="share" className="w-6 h-6" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400">
                <img src="/images/Refresh.svg" alt="refresh" className="w-6 h-6" />
                <span>Refresh</span>
              </button>
            </div>

            {/* Price and Buy Now Section */}
            <div className="bg-[#191C1E] p-4 rounded-xl border border-[#2c2f32] w-[500px]">
              {/* Price Section */}
              <div className="mb-4 bg-[#2a2c2e] w-full h-[70px] rounded-xl flex flex-col mt-2">
                <p className="text-gray-400 text-sm ml-4 mt-2">Price</p>
                <p className="text-white text-2xl font-semibold ml-4">{product.price}</p>
              </div>

              {/* Buy Now Button */}
              <button className="w-full py-3 bg-white text-black font-bold text-xl rounded-xl hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out mb-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Overview and Details Section */}
        <div className="text-white py-8">
          <div className="max-w-7xl mx-auto">
            {/* Overview Section */}
            <div className="p-8 -mt-8"> 
              <h2 className="text-2xl font-semibold mb-2 pb-2">Overview</h2>
              <div className="border border-gray-700"></div>

              {/* Description */}
              <div className="mt-4 ml-3"> 
                <h3 className="text-2xl font-semibold mb-2">Description</h3>
                <p className="text-gray-400 text-md">{product.description}</p>
              </div>

              {/* Details Section */}
              <div className="mt-6"> 
                <h3 className="text-2xl font-semibold mb-4 ml-3">Details</h3>
                <div className="space-y-4 border border-gray-700 rounded-xl w-[600px] h-[200px] flex flex-col justify-center">
                  {/* First Detail: Title */}
                  <div className="flex items-center ml-4">
                    <img src="/images/aptos.svg" alt="title" className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">{product.shortTitle}</span>
                  </div>

                  {/* Second Detail: Release Date */}
                  <div className="flex items-center ml-4">
                    <img src="/images/aptos.svg" alt="release date" className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">
                      Release Date: <span>{product.releaseDate}</span>
                    </span>
                  </div>

                  {/* Third Detail: View */}
                  <div className="flex items-center ml-4">
                    <img src="/images/view.svg" alt="view" className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">View</span>
                  </div>
                  <div className="border-b border-gray-700 ml-4 w-[550px]"></div>
                  {/* Number of Reviews */}
                  <div className="mt-4 text-gray-400 ml-4">
                    <span className="flex items-center">
                      <img src="/images/refresh.svg" alt="reviews" className=" w-4 h-4 mr-2" />
                      {product.numOfReviews} reviews
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* More Collections Slider */}
        <MoreCollectionSlider className="-mt-4" /> {/* Reduced margin-top */}
      </div>
    </div>
  );
};

export default StampDetails;