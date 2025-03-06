import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Clear the token cookie by setting it to empty (or expired).
  const response = NextResponse.json({ success: true, message: 'Logged out.' });
  response.cookies.set('token', '', { httpOnly: true, path: '/', maxAge: 0 });
  return response;
} 