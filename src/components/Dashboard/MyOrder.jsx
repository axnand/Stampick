import React, { useState } from 'react';

// Mock Data for Products
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
    name: 'Botanicals - Water Colour Collection Postcards - Set of 8',
    price: 'Rs.349',
    sold: '33 pcs',
    status: 'In Stock',
  },
  {
    image: 'https://nestbyarpitagarwal.com/cdn/shop/products/003IMG_20200611_114124_540x.jpg?v=1639660896',
    name: 'North-East Monument Collection Postcards - Set of 10',
    price: 'Rs.349',
    sold: '43 pcs',
    status: 'In Stock',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abbakka_Chowta_2023_stamp_of_India.jpg/330px-Abbakka_Chowta_2023_stamp_of_India.jpg',
    name: 'Abbakka Chowta',
    price: 'Rs.549',
    sold: '23 pcs',
    status: 'Out of Stock',
  },
  {
    image: 'https://philacy.com/wp-content/uploads/2023/04/Legends-of-Odisha-India-Stamp-768x672.png',
    name: 'Legends of Odisha',
    price: 'Rs.199',
    sold: '53 pcs',
    status: 'In Stock',
  },
];

// Main ProductList Component
const ProductList = () => {
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
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
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
              <span className="font-medium text-gray-800">{product.name}</span>
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
  );
};

export default ProductList;
