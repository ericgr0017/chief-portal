"use client";

import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      // data.role comes from the login route. 
      if (data.role === 'admin') {
        window.location.href = '/dashboard/admin';
      } else if (data.role === 'chief') {
        window.location.href = '/dashboard';
      } else {
        setError('Unknown or missing role.');
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white">
        <h1 className="text-xl font-bold mb-4">Officer Login</h1>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <div className="mb-2">
          <label className="block text-sm">Username</label>
          <input
            type="text"
            autoComplete="username"
            className="border p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            className="border p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2">
          Login
        </button>
      </form>
    </div>
  );
} 