"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useRouter } from 'next/navigation';

// Define the Department type
interface Department {
  id: string;
  name: string;
  state: string;
  size: string;
  status: string;
  statusColor: string;
  owner: string;
  lastContact: string;
}

// Define the User type
interface User {
  role: 'admin' | 'chief';
  name: string;
}

// List of US states for the filter
const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
  'Wisconsin', 'Wyoming'
];

export default function DepartmentsPage() {
  const router = useRouter();
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [ownerFilter, setOwnerFilter] = useState('');
  
  // State for communication history modal
  const [showCommunicationHistory, setShowCommunicationHistory] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  
  // Current user state (in a real app, this would come from an auth context or API)
  const [currentUser, setCurrentUser] = useState<User>({ role: 'chief', name: 'You' });
  
  // Fetch user role on component mount (simulated)
  useEffect(() => {
    // In a real app, this would be an API call to get the user's role
    const fetchUserRole = async () => {
      try {
        // Simulating API call
        const response = await new Promise<User>((resolve) => {
          setTimeout(() => {
            // This would be the response from your API
            resolve({ role: 'chief', name: 'You' });
          }, 500);
        });
        
        setCurrentUser(response);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
    
    fetchUserRole();
  }, []);
  
  // Toggle between admin and chief role (for demo purposes)
  const toggleRole = () => {
    setCurrentUser(prev => ({
      ...prev,
      role: prev.role === 'admin' ? 'chief' : 'admin'
    }));
  };

  // Mock data for departments
  const departmentsData: Department[] = [
    {
      id: '1',
      name: 'Pinecrest Police Department',
      state: 'Florida',
      size: '35 officers',
      status: 'Quote Sent',
      statusColor: 'amber',
      owner: 'You',
      lastContact: 'Mar 5, 2025'
    },
    {
      id: '2',
      name: 'Westlake Sheriff Office',
      state: 'Ohio',
      size: '48 officers',
      status: 'PO Received',
      statusColor: 'green',
      owner: 'You',
      lastContact: 'Mar 3, 2025'
    },
    {
      id: '3',
      name: 'Oakridge Police Department',
      state: 'California',
      size: '62 officers',
      status: 'Uncontacted',
      statusColor: 'gray',
      owner: 'Unassigned',
      lastContact: 'Never'
    },
    {
      id: '4',
      name: 'Riverdale County Sheriff',
      state: 'Georgia',
      size: '85 officers',
      status: 'In Progress',
      statusColor: 'blue',
      owner: 'Sarah Johnson',
      lastContact: 'Mar 1, 2025'
    },
    {
      id: '5',
      name: 'Lakewood Police Department',
      state: 'Florida',
      size: '42 officers',
      status: 'Closed',
      statusColor: 'green',
      owner: 'You',
      lastContact: 'Feb 28, 2025'
    }
  ];

  // Filter departments based on selected filters
  const filteredDepartments = departmentsData.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = stateFilter === '' || dept.state === stateFilter;
    const matchesStatus = statusFilter === '' || dept.status.replace(' ', '_').toLowerCase() === statusFilter;
    const matchesOwner = ownerFilter === '' || 
                         (ownerFilter === 'my' && dept.owner === 'You') ||
                         (ownerFilter === 'unassigned' && dept.owner === 'Unassigned') ||
                         (ownerFilter === 'others' && dept.owner !== 'You' && dept.owner !== 'Unassigned');
    
    return matchesSearch && matchesState && matchesStatus && matchesOwner;
  });

  // Handle showing communication history
  const handleShowCommunicationHistory = (department: Department) => {
    setSelectedDepartment(department);
    setShowCommunicationHistory(true);
  };
  
  // Check if user has permission to perform actions on a department
  const hasPermission = (department: Department): boolean => {
    // Admins can access all departments
    if (currentUser.role === 'admin') return true;
    
    // Chiefs can only access departments they own
    return currentUser.role === 'chief' && department.owner === 'You';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Police Departments</h1>
            <div className="flex space-x-3">
              {/* Role toggle for demo purposes */}
              <button 
                onClick={toggleRole}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm transition-colors"
              >
                Current Role: {currentUser.role}
              </button>
              
              {/* Only admins can add or import departments */}
              {currentUser.role === 'admin' && (
                <>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    Add Department
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    Import Departments
                  </button>
                </>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search departments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="uncontacted">Uncontacted</option>
                <option value="in_progress">In Progress</option>
                <option value="quote_sent">Quote Sent</option>
                <option value="po_received">PO Received</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            
            <div>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={ownerFilter}
                onChange={(e) => setOwnerFilter(e.target.value)}
              >
                <option value="">All Owners</option>
                <option value="my">My Departments</option>
                <option value="unassigned">Unassigned</option>
                <option value="others">Other Team Members</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    State
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDepartments.map((department) => (
                  <tr key={department.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{department.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{department.state}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{department.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${department.statusColor}-100 text-${department.statusColor}-800`}>
                        {department.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{department.owner}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{department.lastContact}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {/* View button - always visible but only clickable with permission */}
                      {hasPermission(department) ? (
                        <Link href={`/dashboard/departments/${department.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                          View
                        </Link>
                      ) : (
                        <span className="text-gray-400 cursor-not-allowed mr-3">View</span>
                      )}
                      
                      {/* History button - only clickable with permission */}
                      {hasPermission(department) ? (
                        <button 
                          onClick={() => handleShowCommunicationHistory(department)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          History
                        </button>
                      ) : (
                        <span className="text-gray-400 cursor-not-allowed mr-3">History</span>
                      )}
                      
                      {/* Contact button - only clickable with permission */}
                      {hasPermission(department) ? (
                        <button className="text-blue-600 hover:text-blue-900">Contact</button>
                      ) : (
                        <span className="text-gray-400 cursor-not-allowed">Contact</span>
                      )}
                      
                      {/* Claim button - only for unassigned departments and admins */}
                      {department.owner === 'Unassigned' && (
                        <button 
                          className={currentUser.role === 'admin' ? "text-green-600 hover:text-green-900 ml-3" : "text-gray-400 cursor-not-allowed ml-3"}
                          onClick={() => currentUser.role === 'admin' && alert(`Claimed ${department.name}`)}
                        >
                          Claim
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-4">
            <div className="flex flex-1 justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
              <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredDepartments.length}</span> of <span className="font-medium">{filteredDepartments.length}</span> results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-police-blue px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Communication History Modal */}
      {showCommunicationHistory && selectedDepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Communication History: {selectedDepartment.name}
              </h2>
              <button 
                onClick={() => setShowCommunicationHistory(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Mock communication history items */}
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Email: Introduction to Training Program</p>
                    <p className="text-xs text-gray-500">Mar 1, 2025 • You → Chief Thomas Wilson</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Initial Contact</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Sent introduction email about the Operational Readiness for Police Officers program, highlighting benefits and funding options.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Phone Call: Follow-up on Introduction</p>
                    <p className="text-xs text-gray-500">Mar 3, 2025 • Chief Thomas Wilson → You</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Inbound</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Chief Wilson called to express interest in the program. He requested more information about the curriculum and pricing.
                </p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Email: Quote for Training Program</p>
                    <p className="text-xs text-gray-500">Mar 5, 2025 • You → Chief Thomas Wilson</p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Quote Sent</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Sent a detailed quote for training 20 officers at $450 per officer, totaling $9,000. Included curriculum overview and timeline.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowCommunicationHistory(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mr-2"
              >
                Close
              </button>
              <Link 
                href={`/dashboard/departments/${selectedDepartment.id}`}
                className="bg-police-blue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                View Department
              </Link>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
} 