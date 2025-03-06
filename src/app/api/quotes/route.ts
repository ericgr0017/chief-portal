import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  // Insert data into DB or process it somehow
  // e.g. const newQuote = await prisma.quote.create({ data })

  return NextResponse.json({
    success: true,
    message: 'Quote created successfully!',
    // possibly return the new quote object
  });
} 