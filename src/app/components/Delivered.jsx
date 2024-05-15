import React from "react";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/delivered", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something Went Wrong");
  }
  return res.json();
};

const StandingOrders = async ({}) => {
    const orders = await getData();
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:w-full">
        <div className="p-8">
          <div className="flex flex-row gap-2 items-center my-4">
            <h1 className="text-2xl font-medium">Standing Orders</h1>
            <div className="w-[30px] h-[30px] rounded-full bg-red-500 text-white flex justify-center items-center">
              <p className="font-medium">{orders.length}</p>
            </div>
          </div>

          {orders.length > 0 ? (
            <>
              <div className="my-4 block w-full overflow-x-auto  overflow-y-auto shadow-lg rounded-sm">
                <table className="items-center bg-transparent border-collapse">
                  <thead className="border-b-2 border-black p-10">
                    <tr className=" ">
                      <th className="px-6 align-middle py-3 text-sm uppercase whitespace-nowrap font-semibold text-left">
                        S.No
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Customer Name
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Product
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Ordered Date
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Ordered Time
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Phone
                      </th>
                      <th className="px-6 align-middle py-3 text-sm capitalize whitespace-nowrap font-semibold text-left">
                        Payment type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b-2">
                        <td className="px-6 align-middle font-medium text-sm p-4 text-left ">
                          {index + 1}.
                        </td>
                        <td className="px-6 align-middle font-medium text-sm p-4 text-left ">
                          {order.userDetails.firstName}{" "}
                          {order.userDetails.lastName}
                        </td>
                        <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left flex flex-col gap-2">
                          {order.orderedItems.map(
                            (product, index) => (
                              <p key={index}>
                                {product.name}{" "}
                                <span className="text-green-600">
                                  {" "}
                                  ( {product.weight}g x {product.quantity} ){" "}
                                </span>{" "}
                              </p>
                            )
                          )}
                        </td>
                        <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left">
                          {order.orderDate}
                        </td>
                        <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left">
                          {order.orderTime}
                        </td>
                        <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left">
                          {order.userDetails.mobile}
                        </td>
                        {Array.isArray(order.paymentDetails) &&
                        order.paymentDetails.length === 1 ? (
                          <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left bg-red-400 text-white text-center">
                            Cash on Delivery
                          </td>
                        ) : (
                          <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left bg-green-600 text-white text-center">
                            Online Payment <br />
                            (Check account)
                          </td>
                        )}

                        <td className="px-6 align-middle font-medium text-sm whitespace-nowrap p-4 text-left underline text-orange-600 hover:cursor-pointer">
                          <Link
                            href={{
                              pathname: `/orders/${order._id}`,
                              query: {
                                orderSummary: JSON.stringify([
                                  {
                                    order,
                                  },
                                ]),
                              },
                            }}
                          >
                            View more
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex h-3/4 justify-center items-center">
              <h1 className="text-4xl font-medium">No orders yet.</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StandingOrders;
