'use client';
import React from 'react';
import StampDetails from '@/components/StampDetails';
import { trendingData } from '@/utils/trendingData';

const Page = ({ params }) => {
  const { collectible } = params;

  // Function to find collectible data
  const findCollectibleData = (collectibleName) => {
    for (const period in trendingData) {
      const collectibleData = trendingData[period].find(
        (item) => item.collectibletitle.toLowerCase().replace(/\s+/g, '-') === collectibleName
      );
      if (collectibleData) {
        return collectibleData;
      }
    }
    return null;
  };

  // Find the collectible data based on the collectible name
  const collectibleData = findCollectibleData(collectible);

  // If no data found, display a message
  if (!collectibleData) {
    return <div className="text-white">Collectible not found</div>;
  }

  // Pass the collectible data to the StampDetails component
  return (
    <StampDetails product={collectibleData} className='' />
  );
};

export default Page;