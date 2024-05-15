// pages/api/most-frequently-bought.js
import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '../../lib/database';

export const POST = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db('sweetshop');
    const orders = await db.collection('delivered').find().toArray();
    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
