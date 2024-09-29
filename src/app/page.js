'use client';
import React, { useRef, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { dummyStamps } from "@/utils/StampData";
import StampGrid from "@/components/StampGrid";
import SwiperComponent from "@/components/Slider";
import Spotlight from "@/components/Spotlight";
import PhilatelicResources from "@/components/PhilatelicResources";
import Footers from "@/components/Footers";
import Subscribe from "@/components/Subscribe";
import TrendingComponent from "@/components/Trending";
import NoticeBanner from '@/components/NoticeBanner';

export default function Home() {
  // Create refs for Spotlight and StampGrid sections
  const spotlightRef = useRef(null);
  const stampGridRef = useRef(null);
  
  // State to ensure we're on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true once the component has mounted on the client
    setIsClient(true);
  }, []);

  // usePathname and useSearchParams for Next.js App directory
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isClient) {
      const hash = searchParams.get('hash');
      if (hash === 'spotlight' && spotlightRef.current) {
        spotlightRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === 'drops' && stampGridRef.current) {
        stampGridRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isClient, pathname, searchParams]);

  return (
    <>
      <NoticeBanner />
      <div className="px-3">
        <div className="h-[100vh] p-3 mb-10">
          <div className="rounded-lg overflow-hidden relative h-[100vh]">
            <SwiperComponent />
          </div>
        </div>

        <div className="px-4">
          {/* StampGrid Section */}
          <div
            id="drops"
            ref={stampGridRef}
            className="border border-opacity-10 border-gray-300 py-7 px-5 rounded-md"
          >
            <div className="border border-opacity-10 border-gray-300 rounded-3xl px-3">
              <div className="flex flex-col gap-5">
                <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">
                  Latest Drops
                </div>
                {/* Send only the first 9 stamps */}
                <StampGrid stamps={dummyStamps.slice(0, 12)} />
              </div>
            </div>
          </div>

          {/* Trending Section */}
          <TrendingComponent />

          {/* Spotlight Section */}
          <div id="spotlight" ref={spotlightRef}>
            <Spotlight />
          </div>

          <Subscribe />
          <PhilatelicResources />
        </div>
      </div>
    </>
  );
}
