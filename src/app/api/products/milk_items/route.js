// pages/api/most-frequently-bought.js
import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '../../../lib/database';

export const GET = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db('sweetshop');
    const products = await db.collection('milk_items').find().toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
