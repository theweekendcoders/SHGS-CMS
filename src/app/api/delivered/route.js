// pages/api/moveOrder.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/database";
import { ObjectId } from 'mongodb';

export const POST = async (req, res) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Only POST requests allowed" }, { status: 405 });
  }

  const data = await req.json();
  const orderID = data.orderId;
  const orderId = new ObjectId(orderID)

  if (!orderId) {
    return NextResponse.json({ message: 'Order ID is required' }, { status: 400 });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("sweetshop");

    // Find the order by ID
    const order = await db.collection("orders").findOne({ _id: orderId });

    if (!order) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    // Insert the order into the archivedOrders collection
    await db.collection("delivered").insertOne(order);
 
    // Delete the order from the original collection
    await db.collection("orders").deleteOne({ _id: orderId });

    return NextResponse.json({ message: 'Order moved successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error moving order:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
