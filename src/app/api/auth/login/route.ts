import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  // Simple example: "admin" user, or "chief" user
  // In real life, you'd query the DB for the user, hash-check the password, etc.
  let userRole = '';
  if (username === 'admin' && password === 'admin123') {
    userRole = 'admin';
  } else if (username === 'officer1' && password === 'secret123') {
    userRole = 'chief';
  }

  if (!userRole) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  // If valid, set a cookie that includes their role
  const response = NextResponse.json({
    success: true,
    message: 'Logged in!',
    role: userRole,
  });
  // Note: For real auth, store a JWT with role info. For simplicity, role in cookie:
  response.cookies.set('token', `fake-token-with-role=${userRole}`, {
    httpOnly: true,
    path: '/',
  });

  return response;
} 