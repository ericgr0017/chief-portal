"use client";

import { useParams } from 'next/navigation';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DepartmentDetailPage() {
  // Use the useParams hook to get the id parameter
  const params = useParams();
  const departmentId = params.id as string;
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Department Details</h1>
            <p className="text-gray-600">ID: {departmentId}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Department Information</h2>
          <p>This is a placeholder for department {departmentId} details.</p>
        </div>
      </div>
    </DashboardLayout>
  );
} 