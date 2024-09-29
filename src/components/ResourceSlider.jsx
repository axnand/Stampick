'use client';


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Import the Autoplay module

export default function ResourceSlider() {
  return (
    <div className='h-full w-full relative'>
      <Swiper
        slidesPerView={3.25}
        spaceBetween={20}
        autoplay={{
          delay: 1500, // Set the delay for autoplay
          disableOnInteraction: false, // Continue autoplay after interactions
        }}
        onSwiper={(swiper) => {
          // Add mouse hover events to pause and resume autoplay safely
          const swiperEl = swiper.el;
          swiperEl.addEventListener('mouseenter', () => {
            if (swiper.autoplay && swiper.autoplay.stop) {
              swiper.autoplay.stop();
            }
          });
          swiperEl.addEventListener('mouseleave', () => {
            if (swiper.autoplay && swiper.autoplay.start) {
              swiper.autoplay.start();
            }
          });
        }}
        modules={[Autoplay]} // Include the Autoplay module
        className="mySwiper"
      >
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#1A87CD] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
          <div className='w-full h-[220px] rounded-lg bg-[#272727]'>
          <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://youtu.be/LnW9RNv85pw?si=31KnCIe1J7rlI7u5' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
              An introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-80 text-[13px] text-left px-2'>
            This is an introduction to the hobby of Stamp Collecting. I show you what the hobby is, how to get stamps, how to put them in albums and I show you a little bit about how stamps are identified. It is a nice quiet hobby that is very rewarding.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
          <div className='w-full h-[220px] rounded-lg bg-[#272727]'>
          <Image src={'/spotlight/R-img3.svg'} width={10} height={10} alt="Resource" className='rounded-lg' />
            </div>
            <a href='https://www.youtube.com/watch?v=Gsdn2B3Ngsc' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
              My Postage Stamp Collection - Stamps I Use for Mail Art, Where I Buy Stamps & Store Them
              </div>
            </a>
            <div className='text-white opacity-80 text-[13px] text-left px-2'>
            A walk through of my postage stamp albums, plus resources for where I get my stamps.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#CE0E2D] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
          <div className='w-full h-[220px] object-cover rounded-lg bg-[#272727]'>
          <Image src={'/spotlight/R-img4.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://dharaastamps.co.in/' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
              Dhara Stamps-Online Store 
              For Stamps,Philatelic Material
              </div>
            </a>
            <div className='text-white opacity-80 text-[13px] text-left px-2'>
           Dharaa Stamps an E-commerce portal exclusively for Philately lovers, collectors searching for Indian Stamps, Postal History, Postal covers, Miniature sheets, Mint & Used singles, Errors, My stamps, Thematic stamps and other related philatelic items.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#df278c] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full h-[220px] object-cover rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/R-img5.svg'} width={100} height={100} alt="Resource" className='rounded-lg'/>
            </div>
            <a href='https://youtu.be/2xIik9VFtBA?si=Up9a0sQtDu2J_09m' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
              A Beginner's Guide to Collecting Stamps Ep. 1
              </div>
            </a>
            <div className='text-white opacity-80 text-[13px] text-left px-2'>
            Subscribe to join me on my stamp collecting journey, as I hunt for rare and unique collectibles, and share the tips and tricks learned along the way.My goal is for you to learn from my mistakes, and to enjoy my adventures too.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#fac927] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
          <div className='w-full h-[220px] object-cover rounded-lg bg-[#272727]'>
          <Image src={'/spotlight/R-imgL.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://www.warwickandwarwick.com/news/guides/stamp-collecting-for-beginners' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
              Stamp collecting for beginners
              </div>
            </a>
            <div className='text-white opacity-80 text-[13px] text-left px-2'>
            Stamp collecting is a fulfilling hobby with very few rules, but it’s actually much more than that. To many stamp collectors, it’s a way to explore the world, its many different countries, their diverse history, beautiful artwork and colourful cultures.
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
