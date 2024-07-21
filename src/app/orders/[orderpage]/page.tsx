import React from "react";
import Image from "next/image";

const Page = ({ searchParams }: any) => {
  const Details = JSON.parse(searchParams.orderSummary);
  const orderData = Details[0].order;
  const isCodOrder =
    Array.isArray(orderData.paymentDetails) &&
    orderData.paymentDetails.length === 1;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-5/6 xl:w-4/5">
        <div className="mt-4 flex flex-col gap-6">
          {isCodOrder ? (
            <span className="flex flex-row">
              <span className="font-medium text-2xl">Payment Details: </span>
              <span className="md:hidden ml-4 text-red-600 font-medium text-2xl">
                COD
              </span>
              <span className="hidden ml-4 md:block text-red-600 font-medium text-2xl">
                Cash on Delivery
              </span>
            </span>
          ) : (
            <div>
              <span className="flex flex-row">
                <span className="font-medium text-2xl">Payment Details: </span>
                <span className="ml-4 md:hidden font-medium text-2xl text-green-600">
                  Online
                </span>
                <span className="ml-4 hidden md:block font-medium text-2xl text-green-600">
                  Online Payment Received
                </span>
              </span>
            </div>
          )}

          <div>
            <h1 className="font-medium text-2xl">Product Details</h1>
            <div className="my-2 grid gap-4">
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
                    className="flex object-cover "
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold font-italic text-xl text-blue-700">
                      {product.name}
                    </h1>
                    {product.category === "poli" ||
                    product.name === "Veg Samosa" ? (
                      <>
                        <p className="text-lg">
                          <span className="font-bold text-lg">Pieces: </span>
                          <span className="text-green-600 font-medium">
                            {product.weight * 5 * product.quantity}
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-lg">
                          <span className="font-bold text-lg">Weight: </span>
                          <span className="text-green-600 font-medium">
                            {product.weight}g
                          </span>
                        </p>
                        <p className="text-lg">
                          <span className="font-bold text-lg">Quantity: </span>
                          <span className="text-green-600 font-medium">
                            {product.quantity}
                          </span>
                        </p>
                      </>
                    )}
                    <p className="text-lg">
                      <span className="font-bold text-lg">Price: </span>
                      <span className="text-green-600 font-medium">
                        ₹ {product.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-4">
          <h1 className="font-medium text-2xl mt-4">Total Amount: </h1>
          <span className="mt-4 text-green-600 font-bold text-2xl">
            ₹ {orderData.grandTotal}
          </span>
          </div>

          <div>
            <h1 className="font-medium text-2xl">Delivery Details</h1>
            <div className="overflow-x-auto py-2">
              <table className="w-full bg-white border-2 border-black rounded-xl">
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">Name</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.firstName}{" "}
                      {orderData.userDetails.lastName}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">Email</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.email}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">Phone</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.mobile}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">Street</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.street}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">City</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.city}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">District</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.district}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">State</td>
                    <td className="py-4 px-4 text-center font-normal">
                      {orderData.userDetails.state}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-4 px-4 text-center font-bold border-r-2 border-black">Pincode</td>
                    <td className="py-4 px-4 text-center font-normal">
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
  );
};

export default Page;
