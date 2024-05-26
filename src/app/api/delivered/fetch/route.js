import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '../../../lib/database';

export const GET = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db('sweetshop');
    const delivered_items = await db.collection('delivered').find().toArray();
    return NextResponse.json(delivered_items);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
