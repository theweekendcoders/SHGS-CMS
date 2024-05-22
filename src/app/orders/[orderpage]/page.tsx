import React from "react";
import Image from "next/image";

const Page = ({ searchParams }: any) => {
  const Details = JSON.parse(searchParams.orderSummary);
  const orderData = Details[0].order;
  const isCodOrder = Array.isArray(orderData.paymentDetails) && orderData.paymentDetails.length === 1;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-5/6 xl:w-4/5">
        <div className="mt-4 flex flex-col gap-10">
          {isCodOrder ? (
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-2xl">Payment Details</h1>
              <span className="rounded-xl p-4 text-center text-white bg-gray-400 text-2xl">Cash on Delivery</span>
            </div>
          ) : (
            <div>
              <h1 className="font-medium text-2xl">Payment Details</h1>
              <div className="overflow-x-auto py-2">
                <table className="w-full bg-green-200 border border-black">
                  <tbody>
                    <tr>
                      <td className="py-4 px-4 font-medium">Razorpay Payment ID</td>
                      <td className="py-4 px-4 font-normal">{orderData.paymentDetails.razorpay_payment_id}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Razorpay Order ID</td>
                      <td className="py-4 px-4 font-normal">{orderData.paymentDetails.razorpay_order_id}</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Razorpay Signature</td>
                      <td className="py-4 px-4 font-normal">{orderData.paymentDetails.razorpay_signature}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <h1 className="font-medium text-2xl">Product Details</h1>
            <div className="my-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {orderData.orderedItems.map((product: any, index: any) => (
                <div
                  className="flex flex-col md:flex-row gap-4 shadow-lg p-4 rounded-lg"
                  key={index}
                >
                  <Image
                    src={product.image}
                    width={150}
                    height={150}
                    alt="product image"
                    className="flex object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className="font-medium text-xl">{product.name}</h1>
                    <p className="text-lg text-green-600 font-medium">₹ {product.price}</p>
                    <p className="text-lg">
                      <span className="font-medium">Weight: </span>
                      {product.weight}g
                    </p>
                    <p className="text-lg">
                      <span className="font-medium">Quantity: </span>
                      {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-medium text-2xl">Delivery Details</h1>
            <div className="overflow-x-auto py-2">
              <table className="w-full bg-white border-2 border-black rounded-xl">
                <tbody>
                  <tr>
                    <td className="py-4 px-4 font-bold">Name</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.firstName} {orderData.userDetails.lastName}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">Email</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.email}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">Phone</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.mobile}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">Street</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.street}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">City</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.city}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">District</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.district}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">State</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.state}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">Pincode</td>
                    <td className="py-4 px-4 font-normal">{orderData.userDetails.pincode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
