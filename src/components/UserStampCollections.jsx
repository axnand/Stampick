// pages/profile.js
import React from "react";
import StampCard from "./StampCard"; 

const UserStampCollections = ({user, collections}) => {
    return (
        <>
            {/* categories navbar */}
            <div className="bg-[#191C1E] w-full py-4 px-8">
                <div className="flex justify-between items-center mt-10 ml-5">
                    {/* Left Section: Tabs */}
                    <div className="flex space-x-6 text-sm text-gray-400">
                    <button className="text-base flex items-center space-x-1 focus:outline-none text-white border-b-4 border-white pb-1">
                        <span>Owned</span>
                        <span className="bg-white text-xs font-bold px-1.5 py-0.5 rounded-xl text-black">{user.ownedStamps}</span>
                    </button>
                    <button className="text-base flex items-center space-x-1 focus:outline-none">
                        <span>On Sale</span>
                        <span className="bg-[#2b2c2d] text-xs px-2 py-0.5 rounded-xl text-white">{user.onSaleStamps}</span>
                    </button>
                    <button className="text-base focus:outline-none">Collections</button>
                    <button className="text-base focus:outline-none">Created</button>
                    <button className="text-base focus:outline-none">Activity</button>
                    <button className="text-base flex items-center focus:outline-none">
                        <span>More</span> 
                        <img src='/images/dropdown.svg' className="m-2" alt="fr"/>
                    </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex space-x-4 items-center">

                        {/* Dropdown for sorting */}
                        <div className="relative">
                            <button className="bg-[#242527] text-white px-4 py-2 rounded-xl flex items-center">
                            <span>Recently received</span>
                                <img src='/images/dropdown.svg' className="m-2" alt="fr"/>
                            </button>
                        </div>

                        {/* Grid/List View Buttons */}
                        <div className="flex space-x-2">
                            <button className="w-10 h-10 bg-[#242527] flex justify-center items-center rounded-xl">
                            <img src='/images/4grid.svg' alt='fr'/>
                            </button>
                            <button className="w-10 h-10 bg-[#242527] flex justify-center items-center rounded-xl">
                                <img src='/images/9grid.svg' alt="fr"/>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="bg-[#242527] px-4 py-2 rounded-xl flex items-center text-white m-4">
                    <img src='/images/filter.svg' alt="fr" className="m-1"/>
                    Filters
                </button>
            </div>

            {/* Collection card grid */}
            <div className="grid grid-cols-5 gap-7 m-10 -mt-3">
                {collections.map((collection) => (
                    <div key={collection.id} className="bg-gray-700 w-full h-full shadow-lg overflow-hidden rounded-xl">
                        <StampCard stamp={collection} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserStampCollections;