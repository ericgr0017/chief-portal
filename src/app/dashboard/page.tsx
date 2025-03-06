"use client";

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // 1. State to store today's follow-ups
  const [todaysFollowups, setTodaysFollowups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch today's follow-ups on mount
  useEffect(() => {
    // Example fetch; replace with real data call or your chosen approach
    setIsLoading(true);
    fetch('/api/outreach/todaysFollowups')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch follow-ups');
        }
        return res.json();
      })
      .then((data) => {
        setTodaysFollowups(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching todaysFollowups:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
          {/* Program Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Operational Readiness for Police Officers</h3>
              <p className="text-sm text-blue-700 mb-3">Practical Strategies for Addressing Opioid Use Disorder</p>
              <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                <li>Comprehensive training on recognizing and responding to opioid-related incidents</li>
                <li>Fully funded by Opioid Settlement Funds ($450 per officer)</li>
                <li>Includes overtime compensation for officers completing the certificate program</li>
                <li>Offered in partnership with leading universities across multiple states</li>
                <li>Designed specifically for law enforcement professionals</li>
              </ul>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Outreach Stats</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Departments Contacted */}
              <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Departments Contacted</p>
                  <p className="text-2xl font-bold text-blue-800">24</p>
                </div>
              </div>
              
              {/* Departments Enrolled */}
              <div className="bg-green-50 rounded-lg p-4 flex items-center">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium">POs Received</p>
                  <p className="text-2xl font-bold text-green-800">8</p>
                </div>
              </div>
              
              {/* Settlement Funds Allocated */}
              <div className="bg-amber-50 rounded-lg p-4 flex items-center">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-amber-600 font-medium">Funds Allocated</p>
                  <p className="text-2xl font-bold text-amber-800">$1.2M</p>
                </div>
              </div>
              
              {/* Officers Trained */}
              <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium">Officers Enrolled</p>
                  <p className="text-2xl font-bold text-purple-800">156</p>
                </div>
              </div>
            </div>
            
            {/* Progress to Goal */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-gray-600">Progress to Quarterly Goal</p>
                <p className="text-sm font-medium text-gray-600">8/20 Departments</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-police-gold h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">12 more departments needed to reach quarterly goal</p>
            </div>
          </div>
          
          {/* Outreach Tracker */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Recent Outreach Activities</h2>
            </div>
            
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Pinecrest Police Department</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Chief Thomas Wilson</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Phone Call</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                          Quote Sent
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mar 5, 2025
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Westlake Sheriff Office</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Sheriff Amanda Rodriguez</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Email</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          PO Received
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mar 3, 2025
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Oakridge Police Department</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Training Officer Michael Chen</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">LinkedIn</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          LOI Received
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mar 1, 2025
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Oakwood Police</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Chief Robert Davis</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Text Message</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Interested
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Feb 25, 2025
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <a href="/dashboard/outreach" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View all outreach activities →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          {/* Opioid Settlement Funds Widget */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4">
              <h2 className="text-lg font-bold">Settlement Funds Overview</h2>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Total Allocated</h3>
                <p className="text-2xl font-bold text-gray-900">$2,500,000</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Funds Committed</h3>
                <p className="text-2xl font-bold text-gray-900">$1,200,000</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">48% of total allocation</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Funds Remaining</h3>
                <p className="text-2xl font-bold text-gray-900">$1,300,000</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Program Cost Breakdown</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Training Fee ($450/officer)</span>
                    <span className="text-sm font-medium text-gray-900">$702,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Officer Overtime</span>
                    <span className="text-sm font-medium text-gray-900">$348,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Materials & Resources</span>
                    <span className="text-sm font-medium text-gray-900">$150,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Participating Universities */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4">
              <h2 className="text-lg font-bold">Participating Universities</h2>
            </div>
            
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">University of Washington</p>
                      <p className="text-xs text-gray-500">Pacific Northwest Region</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      42 Officers
                    </span>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">University of Michigan</p>
                      <p className="text-xs text-gray-500">Midwest Region</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      38 Officers
                    </span>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">University of Texas</p>
                      <p className="text-xs text-gray-500">Southwest Region</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      35 Officers
                    </span>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">University of Florida</p>
                      <p className="text-xs text-gray-500">Southeast Region</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      24 Officers
                    </span>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">University of California</p>
                      <p className="text-xs text-gray-500">West Coast Region</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      17 Officers
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. "Follow-ups Due Today" section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Follow-ups Due Today</h2>
        {todaysFollowups.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {todaysFollowups.map((contact: any) => (
              <li key={contact.id} className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {contact.department} — {contact.contactPerson}
                    </p>
                    <p className="text-xs text-gray-500">
                      Follow-up Date: {contact.followupDate}
                    </p>
                  </div>
                  <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Due Today
                  </span>
                </div>
                <div className="mt-1">
                  <p className="text-xs text-gray-500">Status: {contact.status}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No follow-ups due today.</p>
        )}
      </section>
    </DashboardLayout>
  );
} 