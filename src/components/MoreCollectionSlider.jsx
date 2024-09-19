import Image from 'next/image';
import StampCard from './StampCard';
import { dummyStamps } from '@/utils/StampData';

const MoreCollectionSlider = () => {
  return (
    <div className="text-white p-8">
      <h2 className="text-2xl font-semibold mb-6 flex justify-center items-center">More from this collection</h2>
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide w-full">
        {dummyStamps.map((stamp) => (
          <div className="min-w-[240px]">
            <StampCard stamp={stamp} key={stamp.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreCollectionSlider;
