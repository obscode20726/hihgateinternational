import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const schoolLife = await prisma.schoolLife.create({
      data: {
        title: body.title,
        description: body.description,
        imageUrl: body.imageUrl,
        link: body.link || "#",
      },
    });
    return NextResponse.json(schoolLife);
  } catch (error) {
    console.error('Error creating school life entry:', error);
    return NextResponse.json({ error: 'Error creating school life entry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const schoolLife = await prisma.schoolLife.findMany({
      orderBy: [
        { createdAt: 'desc' }
      ],
    });
    return NextResponse.json(schoolLife || []);
  } catch (error) {
    console.error('Error fetching school life entries:', error);
    return NextResponse.json([]);
  }
} 