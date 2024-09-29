'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function NoticeBanner() {
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrame = useRef();
  const scrollAmountRef = useRef(window.innerWidth); // Track the current scroll position

  useEffect(() => {
    const textElement = textRef.current;

    const scrollText = () => {
      if (!isHovered) {
        scrollAmountRef.current -= 1.5;
        textElement.style.transform = `translateX(${scrollAmountRef.current}px)`;

        if (scrollAmountRef.current <= -textElement.scrollWidth) {
          scrollAmountRef.current = window.innerWidth;
        }
      }

      animationFrame.current = requestAnimationFrame(scrollText);
    };

    if (!isHovered) {
      animationFrame.current = requestAnimationFrame(scrollText);
    }

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isHovered]);

  return (
    <a href='https://stamp-exhibition.vercel.app/' target='_blank'>
      <div
        className='w-full flex justify-between items-center text-gray-900 font-semibold text-base'
        onMouseEnter={() => {
          setIsHovered(true);
          cancelAnimationFrame(animationFrame.current); // Stop animation when hovered
        }}
        onMouseLeave={() => {
          setIsHovered(false); // Resume animation when unhovered
        }}
      >
        <div className="top-0 left-0 w-full bg-yellow-600 hover:underline z-50 h-8 flex items-center overflow-hidden">
          <div className="flex whitespace-nowrap">
            <p ref={textRef}>
              🚨 Click to view the 3D virtual stamp exhibition by the nearest postal circle 🚨
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
