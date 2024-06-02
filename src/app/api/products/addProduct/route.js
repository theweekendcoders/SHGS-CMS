import { NextResponse } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "../../../lib/database";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      const collection = data.type;
      const client = await connectToDatabase();
      const db = client.db("sweetshop");

      const product = await db.collection(collection).insertOne(
        data
      );
      return NextResponse.json(
        {
          status: 200,
        },
        {
          message: "Product added to cart",
        }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 500 });
  }
};
