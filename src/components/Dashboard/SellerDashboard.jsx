import React, {useState} from "react";
import { FaLock, FaShoppingCart, FaChartLine, FaCity } from "react-icons/fa";
import Image from "next/image";


const Dashboard = () => {
  const products = [
    {
      image: 'https://imgs.search.brave.com/IKEBXcXyDmurml6sfl05oUImNRurTEwGnEzyqbgSSO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzE1L0th/cnBvb3JpX1RoYWt1/cl8yMDI0X3N0YW1w/X29mX0luZGlhLmpw/Zy81MTJweC1LYXJw/b29yaV9UaGFrdXJf/MjAyNF9zdGFtcF9v/Zl9JbmRpYS5qcGc',
      name: 'Karpoori Thakur',
      price: 'Rs.499',
      sold: '63 pcs',
      status: 'In Stock',
    },
    {
      image: 'https://nestbyarpitagarwal.com/cdn/shop/products/001IMG_20211216_125337_540x.jpg?v=1639660595',
      name: 'Gangadhar mehar',
      price: 'Rs.349',
      sold: '33 pcs',
      status: 'In Stock',
    },
    {
      image: 'https://philacy.com/wp-content/uploads/2023/04/Legends-of-Odisha-India-Stamp-768x672.png',
      name: 'Legends of odisha',
      price: 'Rs.349',
      sold: '43 pcs',
      status: 'In Stock',
    },
  ]

 const  topCities=[
  {
    num:"1",
    name:"mumbai",
    percentage:"16%",
    image:"https://imgs.search.brave.com/q7FrrU9Z27lDUqMuAyQgU7BL4LISOqDbVaTHy18PNY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JmbGFncy5zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9m/bGFncy9pbi1jaXJj/bGUtMDEucG5n"
  },
  {
    num:"2",
    name:"Benglore",
    percentage:"15%",
    image:"https://imgs.search.brave.com/q7FrrU9Z27lDUqMuAyQgU7BL4LISOqDbVaTHy18PNY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JmbGFncy5zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9m/bGFncy9pbi1jaXJj/bGUtMDEucG5n"
  },
  {
    num:"3",
    name:"mumbai",
    percentage:"15%",
    image:"https://imgs.search.brave.com/q7FrrU9Z27lDUqMuAyQgU7BL4LISOqDbVaTHy18PNY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JmbGFncy5zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9m/bGFncy9pbi1jaXJj/bGUtMDEucG5n"
  },
  {
    num:"4",
    name:"mumbai",
    percentage:"13%",
    image:"https://imgs.search.brave.com/q7FrrU9Z27lDUqMuAyQgU7BL4LISOqDbVaTHy18PNY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JmbGFncy5zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9m/bGFncy9pbi1jaXJj/bGUtMDEucG5n"
  },
  {
    num:"5",
    name:"mumbai",
    percentage:"12%",
    image:"https://imgs.search.brave.com/q7FrrU9Z27lDUqMuAyQgU7BL4LISOqDbVaTHy18PNY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JmbGFncy5zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9m/bGFncy9pbi1jaXJj/bGUtMDEucG5n"
  },
 
  
 ]
    const [filterStatus, setFilterStatus] = useState('All');
  
    // Function to handle filter change
    const handleFilterChange = (e) => {
      setFilterStatus(e.target.value);
    };
  
    // Filtered Products based on status
    const filteredProducts = products.filter((product) =>
      filterStatus === 'All' ? true : product.status === filterStatus
    );
  return (
    <div className="min-h-screen bg-blue-50 p-5 text-black w-full">
      {/* Main Content */}

     
        {/* Upper Section: Graph and Stats */}
        <div className="flex flex-col items-center justify-center space-y-6 w-full ">
          {/* Sales Graph */}
          <div className=" p-4  w-full flex gap-7 items-center justify-center  ">
           
           
            {/* <Image
              src="/images/grapg.png" // Sample graph image
              alt="Graph"
              className="w-[614px] mt-1"
            /> */}
           <Image src="/images/graph.png" alt="Graph Image" width={614} height={250}  />

          {/* Stat Cards Section */}
          <div className=" grid grid-rows-2 grid-cols-2 gap-4">
            {/* Total Sales Card */}
            <div className="bg-white p-4 rounded-md shadow  items-center space-x-3 w-48 h-40">
              <FaShoppingCart className="text-blue-500 text-3xl" />
              <div>
                <div className=" justify-between items-center">
                  <h3 className="text-sm font-semibold">Total Sales</h3>
                  <h2 className="text-2xl font-bold">Rs.8,784.93</h2>
                </div>
                
                <span className="text-green-500 text-sm">13.02% From Jan</span>
              </div>
            </div>

            {/* Avg. Order Value Card */}
            <div className="bg-white p-4 rounded-md shadow  items-center space-x-3 w-48 h-40">
              <FaLock className="text-blue-500 text-2xl" />
              <div>
                <div className=" justify-between items-center">
                  <h3 className="text-sm font-semibold">Avg. Order Value</h3>
                  <h2 className="text-2xl font-bold">Rs.234.14</h2>
                 
                </div>
               
                <span className="text-green-500 text-sm">3.02% From Jan</span>
              </div>
            </div>

            {/* Online Sessions Card */}
            <div className="bg-white p-4 rounded-md shadow  items-center space-x-3 w-48 h-40">
              <FaChartLine className="text-blue-500 text-3xl" />
              <div>
                <div className=" justify-between items-center">
                  <h3 className="text-sm font-semibold">Online Sessions</h3>
                  <h2 className="text-2xl font-bold">Rs.43,422</h2>
                </div>
               
                <span className="text-green-500 text-sm">6.02% From Jan</span>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="bg-white p-4 rounded-md shadow  items-center space-x-3 w-48 h-40">
              <FaLock className="text-blue-500 text-2xl" />
              <div>
                <div className= "justify-between items-center">
                  <h3 className="text-sm font-semibold">Conversion Rate</h3>
                  <h2 className="text-2xl font-bold">$82.94%</h2>
                </div>
               
                <span className="text-red-500 text-sm">0.32% From Jan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    

        {/* Selling Products Section */}
        <div className="flex gap-6 items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-[848px] h-[371px] mt-12">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-lg font-semibold text-black">Selling Products</h2>
        <div className="flex space-x-4 items-center">
          {/* Filter by Status Dropdown */}
          <select
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={handleFilterChange}
            value={filterStatus}
          >
            <option value="All">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* Calendar Dropdown (Placeholder) */}
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option>8 Jan - 2 Feb</option>
            <option>1 Feb - 28 Feb</option>
            <option>1 Mar - 31 Mar</option>
          </select>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-4 gap-4 pb-2 border-b border-gray-300">
        <div className="text-gray-500">Product Name</div>
        <div className="text-gray-500">Price</div>
        <div className="text-gray-500">Sold</div>
        <div className="text-gray-500">Status</div>
      </div>

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 py-4 border-b border-gray-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <span className="font-medium text-gray-800 w-52">{product.name}</span>
            </div>
            <div className="text-gray-800">{product.price}</div>
            <div className="text-gray-800">{product.sold}</div>
            <div
              className={`flex items-center ${
                product.status === 'In Stock'
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  product.status === 'In Stock'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              ></span>
              {product.status}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No products match this filter.</p>
      )}
    </div>
         
        {/* Top Cities Section */}
        <div className="bg-white p-4 rounded-md shadow w-[203px] h-[371px] mt-12 items-center justify-center">
          <h2 className="text-lg font-bold">Top Cities</h2>
          <ul className="mt-4 space-y-2 text-black">
            {topCities.map((city, index) => (
              <li key={index} className="flex items-center space-x-2 mt-6">
                <h2>{city.num}</h2>
                <div className="flex mt-4 gap-3">
                <img
                  src={city.image} // Path to the India flag image
                  alt="India Flag"
                  className="w-6 h-6 rounded-lg"
                />
               <div className="">
               <span className="gap-3 ">{city.name}  </span>
                <span>{city.percentage}  </span>

                </div>
                
               </div>
                
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-gray-200 px-4 py-1 w-32 h-8 rounded-md items-center justify-center ml-5 ">Load More</button>
         
        </div>
        </div>
       
      
    </div>
  );
};

export default Dashboard;
