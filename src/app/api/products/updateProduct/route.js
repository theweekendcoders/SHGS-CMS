// pages/api/products/updateProduct.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/database";
import { ObjectId } from 'mongodb';

export const POST = async (req, res) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Only POST requests allowed" }, { status: 405 });
  }

  try {
    const data = await req.json();
    const { productID, name, type, category, price, image, stock, discount } = data;
    console.log(productID)
    console.log(name)
    console.log(type)
    console.log(category)
    console.log(price)
    console.log(image)
    console.log(stock)
    console.log(discount)

    if (!productID || !name || !category || !price || !stock || !discount || !image) {
      return NextResponse.json({ status: 400, error: "Missing required fields" });
    }

    const client = await connectToDatabase();
    const db = client.db('sweetshop');

    const result = await db.collection(type).updateOne(
      { _id: new ObjectId(productID) },
      { 
        $set: {
          name,
          category,
          image,
          price,
          stock,
          discount
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 404, error: "Product not found" });
    }

    return NextResponse.json({ status: 200, message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
};

export default POST;
