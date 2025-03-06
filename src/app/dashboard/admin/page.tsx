"use client";

import { useState } from 'react';

export default function AdminPage() {
  // Example: mock array of chiefs
  const [chiefs] = useState([
    { id: 1, name: 'Chief Thomas Wilson', department: 'Pinecrest Police Department' },
    { id: 2, name: 'Chief Susan Martinez', department: 'Hillview Police Department' },
    { id: 3, name: 'Chief Mark Johnson', department: 'Lakeside Police Department' },
  ]);

  function handleCreateQuote() {
    // Instead of just an alert,
    // navigate to your create-quote path:
    window.location.href = '/dashboard/admin/create-quote';
  }

  function handleGenerateReport() {
    // Example placeholder: pretend to generate a CSV or PDF
    alert('Report generated! (placeholder)');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <h2 className="text-xl font-semibold mb-2">All Chiefs</h2>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border-b">ID</th>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Department</th>
          </tr>
        </thead>
        <tbody>
          {chiefs.map((chief) => (
            <tr key={chief.id}>
              <td className="p-2 border-b">{chief.id}</td>
              <td className="p-2 border-b">{chief.name}</td>
              <td className="p-2 border-b">{chief.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleGenerateReport}
        className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
      >
        Generate Reports
      </button>

      <button
        onClick={handleCreateQuote}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Create a Quote
      </button>
    </div>
  );
} 