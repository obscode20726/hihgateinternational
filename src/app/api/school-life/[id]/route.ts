import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    
    const schoolLife = await prisma.schoolLife.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        imageUrl: body.imageUrl,
        link: body.link || "#",
      },
    });
    
    return NextResponse.json(schoolLife);
  } catch (error) {
    console.error('Error updating school life entry:', error);
    return NextResponse.json(
      { error: 'Error updating school life entry' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    await prisma.schoolLife.delete({
      where: { id },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting school life entry:', error);
    return NextResponse.json(
      { error: 'Error deleting school life entry' },
      { status: 500 }
    );
  }
} 