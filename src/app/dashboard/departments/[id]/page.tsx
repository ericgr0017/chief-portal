"use client";

import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DepartmentDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the department data based on the ID
  const departmentId = params.id;
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Pinecrest Police Department</h1>
            <p className="text-gray-600">Florida • 35 officers</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Log Contact
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
              Generate Quote
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Department Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Address:</span> 123 Main Street, Pinecrest, FL 33156
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> (305) 555-1234
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> info@pinecrestpd.gov
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Website:</span> www.pinecrestpd.gov
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Department Details</h3>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Chief of Police:</span> Thomas Wilson
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Department Size:</span> 35 officers
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Population Served:</span> 18,500
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">County:</span> Miami-Dade
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Notes</h3>
                <p className="text-sm text-gray-600">
                  Department has expressed interest in the training program. Chief Wilson mentioned they have been looking for opioid response training for their officers. They have access to settlement funds through the county.
                </p>
              </div>
            </div>
            
            {/* Contact History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Contact History</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Add Contact
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Quote Sent</p>
                      <p className="text-xs text-gray-500">Mar 5, 2025 • Phone Call • You</p>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Quote Sent</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Spoke with Chief Wilson about the training program. Sent a quote for 20 officers at $450 per officer, totaling $9,000. Chief will review and discuss with the administrative team.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Initial Contact</p>
                      <p className="text-xs text-gray-500">Mar 1, 2025 • Email • You</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Initial Contact</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Sent initial email introducing the Operational Readiness for Police Officers program. Highlighted the benefits and mentioned that it's fully funded by Opioid Settlement Funds.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Outreach Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Outreach Timeline</h2>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-amber-100 border-2 border-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Quote Sent</h3>
                    <p className="text-xs text-gray-500">Mar 5, 2025</p>
                    <p className="text-sm text-gray-600 mt-1">Quote sent for 20 officers</p>
                  </div>
                </div>
                
                <div className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Initial Contact</h3>
                    <p className="text-xs text-gray-500">Mar 1, 2025</p>
                    <p className="text-sm text-gray-600 mt-1">Sent introduction email</p>
                  </div>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Next Steps</h3>
                    <p className="text-xs text-gray-500">Pending</p>
                    <p className="text-sm text-gray-400 mt-1">Waiting for response to quote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            {/* Department Status */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h2 className="text-lg font-bold">Department Status</h2>
              </div>
              
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Current Status</h3>
                  <div className="flex items-center">
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Quote Sent</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Contact Owner</h3>
                  <p className="text-sm font-medium">You (Retired Chief Johnson)</p>
                  <p className="text-xs text-gray-500">Claimed on Mar 1, 2025</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Follow-up Date</h3>
                  <p className="text-sm font-medium">Mar 12, 2025</p>
                  <p className="text-xs text-gray-500">7 days from now</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Quote Details</h3>
                  <p className="text-sm">
                    <span className="font-medium">Officers:</span> 20
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Per Officer:</span> $450
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Total:</span> $9,000
                  </p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Preferred University</h3>
                  <p className="text-sm font-medium">University of Florida</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded mb-2">
                    Update Status
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded">
                    Transfer Ownership
                  </button>
                </div>
              </div>
            </div>
            
            {/* Documents */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h2 className="text-lg font-bold">Documents</h2>
              </div>
              
              <div className="p-4">
                <ul className="divide-y divide-gray-200">
                  <li className="py-3 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Quote_Pinecrest_PD.pdf</p>
                      <p className="text-xs text-gray-500">Mar 5, 2025 • 245 KB</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </li>
                </ul>
                
                <div className="mt-4">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Upload Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 