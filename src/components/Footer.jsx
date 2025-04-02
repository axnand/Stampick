import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 py-4 h-20">
      <div className="container mx-auto flex justify-center">
        
        {/* Left Side - Company Name */}
        <div className="text-sm mr-10"> 
          © Created by <a href="https://anandmohan.vercel.app/" className="hover:text-blue-600 underline text-blue-500">Anand Mohan</a>
        </div>

        {/* Center - Links */}
        <div className='flex flex-col'>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-200">Community guidelines</a>
            <a href="#" className="hover:text-gray-200">Terms</a>
            <a href="#" className="hover:text-gray-200">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
