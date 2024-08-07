"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MoveOrderButton from "./MoveOrder";
import { revalidatePath } from 'next/cache'


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/orders", {
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
    <div className="p-4 flex flex-col items-center w-full">
      <div className="w-full lg:w-4/5 xl:w-4/5">
        <div className="p-4">
          <div className="flex flex-row gap-2 items-center my-4">
            <h1 className="flex text-2xl font-medium lg:justify-start xl:justify-start justify-center items-center">Standing Orders</h1>
            <div className="w-[30px] h-[30px] rounded-full bg-red-500 text-white flex justify-center items-center">
              <p className="font-medium">{orders.length}</p>
            </div>
          </div>

          {orders.length > 0 ? (
            <div className="my-4 block w-full overflow-x-auto shadow-lg rounded-sm">
              <table className="min-w-full bg-transparent border-collapse">
                <thead className="border-b-2 border-black">
                  <tr>
                    <th className="px-4 py-2 text-sm uppercase font-semibold text-left">
                      S.No
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Customer Name
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Product
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Price
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Ordered Date
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Ordered Time
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Phone
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Payment Type
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Delivered
                    </th>
                    <th className="px-4 py-2 text-sm capitalize font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b-2">
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {index + 1}.
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {order.userDetails.firstName} {order.userDetails.lastName}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {order?.orderedItems?.map((product, index) => (
                          <p key={index} className="whitespace-nowrap">
                            {product.name}{" "}
                          {(product.category === 'poli' || product.name === 'Veg Samosa') ? 
                            (
                              <span className="text-green-600">
                              ({product.weight*5*product.quantity} pieces)
                            </span>
                            ): (
                              <span className="text-green-600">
                              ({product.weight}g x {product.quantity})
                            </span>
                            )}
                            </p>
                        ))}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                      ₹{order.grandTotal}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {order.orderDate}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {order.orderTime}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        {order.userDetails.mobile}
                      </td>
                      <td
                        className={`px-4 py-2 text-sm font-medium text-left text-white ${
                          Array.isArray(order.paymentDetails) &&
                          order.paymentDetails.length === 1
                            ? "bg-red-400"
                            : "bg-green-600"
                        }`}
                      >
                        {Array.isArray(order.paymentDetails) &&
                        order.paymentDetails.length === 1
                          ? "Cash on Delivery"
                          : "Online Payment (Check account)"}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left">
                        <MoveOrderButton orderId={order._id} />
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-left underline text-orange-600 hover:cursor-pointer">
                        <Link
                          href={{
                            pathname: `/orders/${order._id}`,
                            query: {
                              orderSummary: JSON.stringify([{ order }]),
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
          ) : (
            <div className="flex h-3/4 justify-center items-center">
              <h1 className="text-4xl font-medium">No orders yet.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StandingOrders;
