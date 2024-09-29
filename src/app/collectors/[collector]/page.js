"use client"
import React from 'react';
import UserProfile from '@/components/UserProfile';
import { dummyStampsOwned } from '@/utils/StampData0';
import { dummyStampsCollections } from '@/utils/StampData0';
import { dummyStampsOnSale } from '@/utils/StampData0';
import { trendingData } from '@/utils/trendingData';

const UserProfilePage = ({ params }) => {
  const { collector } = params; 

  const findCollectorData = (collectorName) => {
    for (const period in trendingData) {
      const collectorData = trendingData[period].find(
        (item) => item.collector.toLowerCase() === collectorName.toLowerCase()
      );
      if (collectorData) {
        return collectorData;
      }
    }
    return null;
  };

  const user = findCollectorData(collector);

  if (!user) {
    return <div className="text-white">Collector not found</div>;
  }

  return (
    <UserProfile user={user} owned={dummyStampsOwned} collections={dummyStampsCollections} onsale={dummyStampsOnSale} />
  );
};

export default UserProfilePage;