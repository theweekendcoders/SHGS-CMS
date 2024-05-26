// pages/api/most-frequently-bought.js
import { NextResponse } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/app/lib/database";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      console.log(data);
 
      
      const client = await connectToDatabase();
      const db = client.db("sweetshop");

      const cart_items = await db.collection('products').updateOne(
        { productId: productId},
        { $set: { quantity: newQuantity } }
      );


      return NextResponse.json({
        status: 200,
        quantity: newQuantity,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
  }
};
