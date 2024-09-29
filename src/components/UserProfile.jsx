// pages/profile.js
import React, { useState } from "react";
import UserStampCollections from './UserStampCollections';

const UserProfile = ({ user, owned, collections, onsale }) => {
  const [activeTab, setActiveTab] = useState('owned');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getFilteredCollections = () => {
    switch (activeTab) {
      case 'owned':
        return owned; 
      case 'onSale':
        return onsale; 
      case 'collections':
        return collections;
      case 'created':
      case 'activity':
        return []; 
      default:
        return owned; 
    }
  };

  return (
    <div className="min-h-screen bg-[#191C1E] text-white flex flex-col justify-between">
      {/* Profile Cover */}
      <div className="bg-[#222528] h-72 w-[95%] rounded-3xl ml-[2.5%]"></div>

      {/* Profile Info */}
      <div className="relative -mt-16 px-6">
        <div className="flex justify-between items-center">
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
              <button className="bg-white text-black h-[40px] px-3 rounded-xl font-bold hover:bg-gray-200 transition mt-7 -ml-7">
                + Follow
              </button>
              <div className="w-10 h-10 bg-[#242527] flex justify-center rounded-xl mt-7">
                <button className="text-gray-400">
                  <img src='/images/Share.svg' alt="Share" />
                </button>
              </div>
              <div className="w-10 h-10 bg-[#242527] flex justify-center rounded-xl mt-7">
                <button className="text-gray-400">
                  <img src='/images/Ellipsis.svg' alt="Options" />
                </button>
              </div>
            </div>
          </div>
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
      <UserStampCollections 
        user={user} 
        collections={activeTab === 'created' || activeTab === 'activity' ? [] : getFilteredCollections()} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
      
      {(activeTab === 'created' || activeTab === 'activity') && (
        <div className="flex flex-col items-center justify-center flex-grow">
          <h2 className="text-lg font-semibold">Nothing to show</h2>
          <p className="text-gray-400 text-center mt-2">It seems like there’s nothing in this section yet.</p>
        </div>
      )}
      <div className="mb-20" /> 
    </div>
  );
};

export default UserProfile;
