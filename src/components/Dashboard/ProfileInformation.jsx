

import React, { useState } from 'react';

const ProfileInformation = () => {
  const [gender, setGender] = useState('Male');
  const [mobile, setMobile] = useState('+918723472635');
  const [firstName, setFirstName] = useState('Anand');
  const [lastName, setLastName] = useState('Mohan');

  return (
    <div className=" mx-auto p-8 font-sans align-left bg-white w-full text-black">
      {/* Personal Information Section */}
      <div className="mb-8">
        <div className='flex gap-2'>
        <h3 className="text-xl font-bold mb-4">Personal Information</h3>
        <a href="#" className="text-blue-500 mt-1">Edit</a>
        </div>
       
     <div className='flex gap-14  '>
        <div className="">
          <label className=" block w-20 ">First Name</label>
          <input
            type="text"
            value={firstName}
            readOnly
            className="w-72 border p-2 rounded-lg bg-gray-100 gap-3 mt-4"
          />
        </div>
        <div className=" mb-4 ">
          <label className="block w-20 ">Last Name</label>
          <input
            type="text"
            value={lastName}
            readOnly
            className=" w-72 border p-2 rounded-lg bg-gray-100 mt-4"
          />
        </div>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-semibold">Select Your Gender</p>
          <div>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={() => setGender('Male')}
              className="mr-2"
            />
            Male
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={() => setGender('Female')}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
</div>
      {/* Contact Information Section */}
     
        <div className=" mb-4 flex-col">
          <div>
            <div className='flex gap-3 '>
            <h3 className="text-xl font-semibold">Email </h3>
            <a href="#" className="text-blue-500 mt-1">Edit</a>
           
            </div>
        
          <input
            type="text"
            value=""
            placeholder="Enter email address"
            readOnly
            className="w-80 border p-2 rounded-lg bg-gray-100 text-black mt-4"
          />
        
        </div>
        </div>

       <div>
        <div className='flex gap-3'>
        <h3 className="text-xl  font-semibold ">Mobile Number</h3>
        <a href="#" className="text-blue-500 mt-1">Edit</a>
        </div>
       
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-80 border p-2 rounded-lg bg-gray-100 mt-4"
          />
         
        </div>
     

      {/* FAQ Section */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg mt-3">
        <h3 className="text-xl font-bold mb-4">FAQs</h3>
        <div className="mb-4">
          <p className="font-bold">
            What happens when I update my email address (or mobile number)?
          </p>
          <p className="text-gray-600">
            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">
            When will my StamPick account be updated with the new email address (or mobile number)?
          </p>
          <p className="text-gray-600">
            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">
            What happens to my existing StamPick account when I update my email address (or mobile number)?
          </p>
          <p className="text-gray-600">
            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
          </p>
        </div>
        <div>
          <p className="font-bold">
            Does my Seller account get affected when I update my email address?
          </p>
          <p className="text-gray-600">
            StamPick has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="">
        <a href="#" className="text-blue-500 flex ">Deactivate Account</a>
        <div className='mt-4'>
        <a href="#" className="text-red-500 ">Delete Account</a>
        </div>
      
      </div>
    </div>
  );
};

export default ProfileInformation;
