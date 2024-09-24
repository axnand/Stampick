'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export const usePopup = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return { isPopUpOpen, togglePopUp };
};

export const Popup = ({ isPopUpOpen, togglePopUp, children, popupType }) => {
  if (!isPopUpOpen) return null;

  // Set different width based on the popup type
  const popupWidth = popupType === 'signIn' ? 'w-[70vw]' : 'w-[50vw]';
  const isSignIn = popupType === 'signIn'; 

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999]"
      style={{ zIndex: 99999 }}
    >
      {/* Conditional width and height for SignIn */}
      <div className={`relative flex flex-col ${popupWidth} ${isSignIn ? 'w-[70vw] h-[90vh]' : 'w-[50vw]'} overflow-hidden shadow-lg`}>
        <div className="bg-[#191c1e] relative w-full h-full overflow-auto p-0 scrollbar-hide">
          <div onClick={togglePopUp} className="cursor-pointer w-full flex justify-end">
            {/* Close button */}
            <img src="/images/cross.svg" alt="Close" className="fixed mt-4 mr-4" />
          </div>
          <div className={`w-full h-full ${isSignIn ? 'p-0' : 'p-6'}`}>{children}</div> 
        </div>
      </div>
    </div>,
    document.body
  );
};
