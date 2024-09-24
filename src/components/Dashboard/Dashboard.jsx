


import React from 'react'

function Dashboard() {
  return (
    <div className="p-8 bg-white text-gray-800  w-full shadow-lg rounded-lg  ">
      <div className='flex gap-3'>
      <div className=" justify-center mb-6 flex">
      <img
        src="https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/295332627_388618813382859_7611317495166121121_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=I70BkyQzYEkQ7kNvgHgFKn6&_nc_ht=scontent.fdel63-1.fna&oh=00_AYCUbQIfpXWap0rA7AWoQODF1lr0nl4MvheRSLb5sdQDYw&oe=66F4AF12" // Replace with the actual path to your peacock image
        alt="Peacock"
        className="h-24 w-20"
      />
    </div>

    {/* Heading */}
<div className='mt-9'>
<h1 className="text-2xl font-bold text-center mb-4">
      Philatelic Deposit Account
    </h1>
</div>
      </div>
    {/* Peacock Image */}
   
   

    {/* Description */}
    <p className="text-justify mb-6 font-normal">
      A domestic philatelic deposit account (PDA) system was introduced with effect from 1.8.1965 at all philatelic bureaus in India. The customers who wish to take advantage of this facility are supplied with the commemorative/special issues of stamps; first day covers (FDCs); information sheets and postal stationery soon after their issue. Domestic philatelic account holders can also obtain philatelic items issued by other philatelic bureaus and offices by placing their demands with the Bureau where their accounts stand.
    </p>

    <p className="text-justify mb-6 font-normal">
      Philatelic counters are functioning at all the Head Post Offices. The philatelic counter at offices other than philatelic bureaus would offer registration facilities for the opening of philatelic deposit accounts with supply of the material to be made by the parent bureau of the respective counter with customers having the option to book from the counter of registration.
    </p>

    {/* Subheading */}
  <div>
  <span className='font-bold '>How to open a Philatelic Deposit Account:</span> If anyone wishes to operate a Philatelic Deposit Account with the Philatelic Bureau, an application in the prescribed proforma may be sent to the Philatelic Bureau.
  </div>
    <div className='mt-4'>
    <span className='font-bold'> Conditions of Service:</span> The account may be opened with a minimum deposit of Rs. 200/- in cash or by remittance by money order or by cheque encashable in India. With the remittances, the customers should also indicate clearly the types and quantities of philatelic items they desire to purchase with each issue of new stamp. The items indicated in the application form will be dispatched to the customer automatically without any further orders on the part of the customer.
    </div> 
   <div className='mt-3'>
    <span className='font-bold'> Mode of dispatch and charges for dispatch of philatelic items:</span>The items will be dispatched free "on postal service" by registered post unless the customer specifically desires that the items should be sent to them by insured post. The Philatelic Deposit Account holder may also collect these after every issue by calling at the counter of the philatelic bureau.
   </div>
     
    

   
    {/* Last Updated */}
    <p className=" text-gray-600 mt-4">
      Last Updated: <strong>14 Feb 2022</strong>
    </p>
  </div>
  )
}

export default Dashboard