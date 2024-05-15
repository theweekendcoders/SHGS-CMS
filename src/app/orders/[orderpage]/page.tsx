import React from "react";
import Image from "next/image";

const page = ({ searchParams }: any) => {
  const Details = JSON.parse(searchParams.orderSummary);
  const orderData = Details[0].order;
  const isCodOrder = Array.isArray(orderData.paymentDetails) && orderData.paymentDetails.length === 1;

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="p-8 lg:w-5/6 xl:w-4/5 h-screen">
          <div className="mt-4 flex flex-col gap-10 ">
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
                    <tbody className="">
                      <tr>
                        <td className="py-4 px-4 font-medium">
                          Razorpay Payment ID
                        </td>
                        <td className="py-4 px-4 font-normal">
                          {orderData.paymentDetails.razorpay_payment_id}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">
                          Razorpay Order ID
                        </td>
                        <td className="py-4 px-4 font-normal">
                          {orderData.paymentDetails.razorpay_order_id}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">
                          Razorpay Signature
                        </td>
                        <td className="py-4 px-4 font-normal">
                          {orderData.paymentDetails.razorpay_signature}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div>
              <h1 className="font-medium text-2xl">Product Details</h1>
              <div className="my-2">
                {orderData.orderedItems.map((product: any, index: any) => (
                  <div
                    className="flex flex-row gap-4 shadow-lg p-4 rounded-lg w-[70%]"
                    key={index}
                  >
                    <Image
                      src={product.productImage}
                      width={150}
                      height={150}
                      alt="product image "
                      className="border-r-2 border-black"
                    />
                    <div className="flex flex-col gap-3">
                      <h1 className="font-medium text-xl">{product.name}</h1>
                      <p className="text-lg text-green-600 font-medium">
                        ₹ {product.price}
                      </p>
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
                <table className="w-full bg-white border border-black rounded-2xl">
                  <tbody className="">
                    <tr>
                      <td className="py-4 px-4 font-medium">Customer Name</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.firstName}{" "}
                        {orderData.userDetails.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Email ID</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Mobile Number</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.mobile}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Street</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.street}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">City / Town</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.city}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">District</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.district}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">State</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.state}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Pincode</td>
                      <td className="py-4 px-4 font-normal">
                        {orderData.userDetails.pincode}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
