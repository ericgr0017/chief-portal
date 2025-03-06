import { NextResponse } from 'next/server';

export async function GET() {
  // Example mock data; in a real app, you'd fetch from DB
  const data = [
    {
      id: 1,
      department: 'Pinecrest Police Department',
      contactPerson: 'Chief Thomas Wilson',
      followupDate: '2025-03-05',
      status: 'quote_sent',
    },
    {
      id: 2,
      department: 'Westlake Sheriff Office',
      contactPerson: 'Sheriff Amanda Rodriguez',
      followupDate: '2025-03-03',
      status: 'po_received',
    },
  ];

  return NextResponse.json(data);
} 