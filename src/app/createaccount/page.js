'use client';
import React, { useState } from 'react';

function createAccountPage() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Added state for name

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailSent) {
      // Simulate sending reset link
      console.log(`Sending password reset link to ${email}`);
      setEmailSent(true);
    } else {
      if (password === confirmPassword) {
        // Simulate password update
        console.log("Password updated successfully");
      } else {
        console.log("Passwords do not match");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex max-w-5xl w-full h-[100vh] overflow-hidden bg-white">
        {/* Left section - image */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-white ml-14">
          <img
            src="https://i.etsystatic.com/20493508/r/il/903884/3606974756/il_570xN.3606974756_7fe2.jpg"
            alt="Stamp Magnifying Glass"
            className="w-[60vw] h-[80vh] object-cover rounded-lg "
          />
        </div>

        {/* Right section - form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-white">
          <div className="max-w-md w-full bg-white p-8 rounded-lg">
            {!emailSent ? (
              <>
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Create Account</h2>
                <p className="text-sm text-gray-500 text-center mb-6">Fill in the details below to create a new account.</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-md  font-medium text-gray-700" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-4 text-black py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="password"
                      placeholder="Re-enter password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200 text-lg font-semibold"
                  >
                    Create Account
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Reset Your Password</h2>
                <p className="text-md text-gray-500 text-center mb-6">Enter and confirm your new password to complete the reset process.</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="password">
                      New Password
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="confirmPassword">
                      Confirm New Password
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="password"
                      placeholder="Re-enter new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200 text-lg font-semibold"
                  >
                    Update Password
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default createAccountPage;
