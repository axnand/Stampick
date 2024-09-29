'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function NoticeBanner() {
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrame = useRef();
  const [scrollAmount, setScrollAmount] = useState(0); // Track the current scroll position
  const [windowWidth, setWindowWidth] = useState(0); // Track window width after mounting

  useEffect(() => {
    // Set the window width only after the component is mounted
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const textElement = textRef.current;

    // Initialize the scroll amount to start from the right
    setScrollAmount(windowWidth);

    const scrollText = () => {
      if (!isHovered) {
        setScrollAmount(prev => {
          const newScrollAmount = prev - 1.5;

          // Reset scroll position if the text has scrolled out of view
          if (newScrollAmount <= -textElement.scrollWidth) {
            return windowWidth; // Reset to window width
          }
          
          textElement.style.transform = `translateX(${newScrollAmount}px)`;
          return newScrollAmount;
        });
      }
      
      animationFrame.current = requestAnimationFrame(scrollText);
    };

    if (!isHovered) {
      animationFrame.current = requestAnimationFrame(scrollText);
    }

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isHovered, windowWidth]);

  return (
    <a href='https://stamp-exhibition.vercel.app/' target='_blank' rel="noopener noreferrer">
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
