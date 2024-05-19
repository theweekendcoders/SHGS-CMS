import { NextResponse } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/app/lib/database";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      console.log(data);

      const client = await connectToDatabase();
      const db = client.db("sweetshop");

      const product = await db.collection('savouries').insertOne(
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
