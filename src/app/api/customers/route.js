import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '../../lib/database';;

export const GET = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db('sweetshop');
    const users = await db.collection('userDetails').find().toArray();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
