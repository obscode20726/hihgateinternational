import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const event = await prisma.event.create({
      data: {
        title: body.title,
        startDate: new Date(body.startDate as string),
        endDate: new Date(body.endDate as string),
        description: body.description,
        location: body.location,
        imageUrl: body.imageUrl,
        frenchNote: body.frenchNote,
      },
    });
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Error creating event' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: [
        { startDate: 'asc' }
      ],
    });
    // Ensure we always return an array
    return NextResponse.json(events || []);
  } catch (error) {
    console.error('Error fetching events:', error);
    // Return empty array instead of error object
    return NextResponse.json([]);
  }
} 