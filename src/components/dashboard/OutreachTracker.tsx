import React, { useState } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  XCircleIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

// Mock data for outreach contacts
const outreachData = [
  { 
    id: 1, 
    department: 'Pinecrest Police Department', 
    contactName: 'Chief Thomas Wilson', 
    status: 'pending', 
    lastContact: '2023-03-01', 
    notes: 'Sent initial email, waiting for response' 
  },
  { 
    id: 2, 
    department: 'Westlake Sheriff Office', 
    contactName: 'Sheriff Amanda Rodriguez', 
    status: 'confirmed', 
    lastContact: '2023-02-25', 
    notes: 'Confirmed participation in program' 
  },
  { 
    id: 3, 
    department: 'Riverdale Police Department', 
    contactName: 'Chief James Cooper', 
    status: 'follow-up', 
    lastContact: '2023-02-28', 
    notes: 'Interested but needs more information about implementation costs' 
  },
  { 
    id: 4, 
    department: 'Maplewood Police Department', 
    contactName: 'Chief Emily Parker', 
    status: 'declined', 
    lastContact: '2023-02-20', 
    notes: 'Currently using another training program' 
  },
  { 
    id: 5, 
    department: 'Lakeside County Sheriff', 
    contactName: 'Sheriff Michael Brown', 
    status: 'pending', 
    lastContact: '2023-03-02', 
    notes: 'Left voicemail, scheduled to call back next week' 
  },
];

const OutreachTracker: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredData = filter === 'all' 
    ? outreachData 
    : outreachData.filter(item => item.status === filter);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-amber-500" />;
      case 'follow-up':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'declined':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'follow-up':
        return 'Follow-up';
      case 'declined':
        return 'Declined';
      default:
        return status;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-amber-100 text-amber-800';
      case 'follow-up':
        return 'bg-blue-100 text-blue-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Outreach Tracker</h2>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              filter === 'all' ? 'bg-police-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              filter === 'pending' ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              filter === 'confirmed' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            Confirmed
          </button>
          <button
            onClick={() => setFilter('follow-up')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              filter === 'follow-up' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            Follow-up
          </button>
          <button
            onClick={() => setFilter('declined')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              filter === 'declined' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            Declined
          </button>
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
                Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.contactName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(item.status)}
                    <span className={`ml-1.5 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.lastContact).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {item.notes}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <EnvelopeIcon className="h-5 w-5" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <PhoneIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredData.length}</span> of <span className="font-medium">{outreachData.length}</span> departments
          </div>
          <div>
            <button className="bg-police-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Add New Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachTracker; 