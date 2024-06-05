// pages/api/moveOrder.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/database";
import { ObjectId } from 'mongodb';

export const DELETE = async (req, res) => {
  if (req.method !== "DELETE") {
    return NextResponse.json({ error: "Only DELETE requests allowed" }, { status: 405 });
  }

  const data = await req.json();
  console.log(data.id)
  const productID = data.id;
  const productId = new ObjectId(productID)

  if (!productId) {
    return NextResponse.json({ message: 'Order ID is required' }, { status: 400 });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("sweetshop");

    // Find the order by ID
    const product = await db.collection(data.category).findOne({ _id: productId });

    if (!product) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }
 
    await db.collection(data.category).deleteOne({ _id: productId}); 

    return NextResponse.json({ message: 'Product deleted successfully!' }, { status: 200 });
  } catch (error) {
    console.error("Error moving order:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
