// pages/profile.js
import React from "react";
import UserStampCollections from './UserStampCollections'

const UserProfile = ({user, collections}) => {
  return (
    <div className="min-h-screen bg-[#191C1E] text-white">
      {/* Profile Cover */}
      <div className="bg-[#222528] h-72 w-[95%] rounded-3xl ml-[2.5%]"></div>

      {/* Profile Info */}
      <div className="relative -mt-16 px-6">
        <div className="flex justify-between items-center">
          {/* Profile Picture and Name */}
            <div className="flex flex-col space-x-4 ml-10 -mt-16">
                <img
                src={user?.img} 
                alt="Profile"
                className="w-44 h-44 rounded-full"
                />
                <div>
                <h1 className="text-4xl mt-4 -ml-7">{user?.collector}</h1>
                </div>
                
                <div className="flex space-x-4">
                    {/* Follow button */}
                    <button className="bg-white text-black h-[40px] px-3 rounded-xl font-bold hover:bg-gray-200 transition mt-7 -ml-7">
                    + Follow
                    </button>
                    {/* Share button */}
                    <div className="w-10 h-10 bg-[#242527] flex justify-center rounded-xl mt-7">
                        <button className="text-gray-400">
                            <img src='/images/Share.svg' alt="fr" />
                        </button>
                    </div>
                    {/* Options button */}
                    <div className="w-10 h-10 bg-[#242527] flex justify-center rounded-xl mt-7">
                        <button className="text-gray-400">
                            <img src='/images/Ellipsis.svg' alt="fr" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Followers and Following Info */}
            <div className="bg-[#191c1e] rounded-2xl flex justify-between w-64 h-20 text-gray-400 p-4 m-4 mt-20 ml-10 border border-opacity-10 mr-10">
                <div className="flex flex-col items-start ml-4">
                    <p className="mb-1">Followers</p>
                    <p>Following</p>
                </div>
                <div className="flex flex-col items-end mr-4">
                    <p className="text-gray-400 mb-1">{user?.followers}</p>
                    <p className="text-gray-400">{user?.following}</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <UserStampCollections user={user} collections={collections} />
      </div>
    </div>
  );
};

export default UserProfile;