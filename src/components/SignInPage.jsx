'use client';
import React, { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex w-full h-full">
        {/* Left section - image */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-white">
          <img
            src="/images/signInStamp.jpg"
            className="w-[30vw] h-[75vh] object-cover rounded-lg ml-10"
          />
        </div>

        {/* Right section - form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-white -mr-16">
          <div className="w-full max-w-md bg-white p-8 rounded-lg -ml-16">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Sign In</h2>
            <p className="text-sm text-gray-500 text-center mb-6">Enter your credentials to sign in.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <a href="/ForgetPassword" className="text-indigo-600 text-sm hover:underline">
                  Forgot Password?
                </a>
                <a href="/createaccount" className="text-indigo-600 text-sm hover:underline">
                  Create Account?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1c3470] text-white py-3 rounded-md hover:bg-opacity-95 transition duration-200 text-lg font-semibold"
              >
                Sign In
              </button>
            </form>
            <div className="my-6 text-center">
              <span className="text-sm text-gray-500">Or</span>
            </div>
            <button className="w-full text-black bg-white border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-200 flex justify-center items-center">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google Icon"
                className="mr-2 w-6 h-6"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
