import React from 'react';

// Sample data (You can replace this with actual data)
const orders = [
  {
    id: 1,
    productName: 'Karpoori Thakur',
    price: 'Rs.499',
    status: 'Delivered on Jan 01',
    delivered: true,
    description: 'Your item has been delivered',
    action: 'Rate & Review Product',
    imageUrl: 'https://imgs.search.brave.com/IKEBXcXyDmurml6sfl05oUImNRurTEwGnEzyqbgSSO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzE1L0th/cnBvb3JpX1RoYWt1/cl8yMDI0X3N0YW1w/X29mX0luZGlhLmpw/Zy81MTJweC1LYXJw/b29yaV9UaGFrdXJf/MjAyNF9zdGFtcF9v/Zl9JbmRpYS5qcGc', // Replace with actual image
  },
  {
    id: 2,
    productName: 'Botanicals - Water Colour Collection Postcards - Set of 8',
    price: 'Rs.349',
    status: 'Refund Completed',
    delivered: false,
    description: 'As per your request, your item has been cancelled',
    action: 'Refund Completed',
    refundId: 'CR23050723504518914623303',
    imageUrl: 'https://nestbyarpitagarwal.com/cdn/shop/products/001IMG_20211216_125337_540x.jpg?v=1639660595', // Replace with actual image
  },
  {
    id: 3,
    productName: 'North-East Monument Collection Postcards - Set of 10',
    price: 'Rs.349',
    status: 'Delivered on Jan 01',
    delivered: true,
    description: 'Your item has been delivered',
    action: 'Rate & Review Product',
    imageUrl: 'https://nestbyarpitagarwal.com/cdn/shop/products/003IMG_20200611_114124_540x.jpg?v=1639660896'
  },
  {
    id: 4,
    productName: 'Legends of Odisha',
    price: 'Rs.199',
    status: 'Delivered on Jan 01',
    delivered: true,
    description: 'Your item has been delivered',
    action: 'Rate & Review Product',
    imageUrl: 'https://philacy.com/wp-content/uploads/2023/04/Legends-of-Odisha-India-Stamp-768x672.png', // Replace with actual image
  },
];

const MyOrders = () => {
  return (
    <div className=" bg-blue-50 flex flex-col items-center justify-center text-black w-full h-full">
      {/* Container */}
      <div className="   w-[1050px]  h-[750px] mb-5 justify-start bg-white shadow-lg rounded-md mt-7 p-4 ">
        <h2 className="text-2xl font-bold mb-6">My Orders</h2>

        {/* Table Headers */}
        <div className="grid grid-cols-12 gap-4 font-semibold mb-4 border-b pb-4  ">
          <div className="col-span-6">Product Name</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-4 text-center">Status</div>
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-12 gap-4 items-start border-b pb-4"
            >
              {/* Product Image */}
              <img
                src={order.imageUrl}
                alt={order.productName}
                className="w-16 h-16 object-cover rounded-md col-span-1"
              />

              {/* Product Info */}
              <div className="col-span-5">
                <h3 className="text-lg font-semibold">{order.productName}</h3>
                {order.refundId && (
                  <p className="text-sm text-green-500">
                    Refund Completed{' '}
                    <span className="text-gray-400">
                      (Refund ID: {order.refundId})
                    </span>
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="col-span-2 text-center flex items-center justify-center">
                <p className="text-lg font-semibold">{order.price}</p>
              </div>

              {/* Status & Action */}
              <div className="col-span-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      order.delivered ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <p className="text-sm">{order.status}</p>
                </div>
                <p className="text-sm text-gray-500">{order.description}</p>
                <p className="text-sm text-blue-500 mt-2">{order.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
