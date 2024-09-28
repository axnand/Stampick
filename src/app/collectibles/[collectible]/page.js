'use client';
import React from 'react';
import StampDetails from '@/components/StampDetails';
import { trendingData } from '@/utils/trendingData';

const Page = ({ params }) => {
  const { collectible } = params;

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

  const collectibleData = findCollectibleData(collectible);

  if (!collectibleData) {
    return <div className="text-white">Collectible not found</div>;
  }
  
  return (
    <StampDetails product={collectibleData} className='' />
  );
};

export default Page;