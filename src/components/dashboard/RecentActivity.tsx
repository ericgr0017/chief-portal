import React from 'react';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  TrophyIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

// Mock data for recent activity
const activities = [
  {
    id: 1,
    type: 'signup',
    department: 'Westlake Sheriff Office',
    contactName: 'Sheriff Amanda Rodriguez',
    timestamp: '2023-03-05T14:32:00',
    points: 100
  },
  {
    id: 2,
    type: 'email',
    department: 'Pinecrest Police Department',
    contactName: 'Chief Thomas Wilson',
    timestamp: '2023-03-04T10:15:00'
  },
  {
    id: 3,
    type: 'achievement',
    name: 'Bronze Recruiter',
    timestamp: '2023-03-03T16:45:00',
    points: 500
  },
  {
    id: 4,
    type: 'call',
    department: 'Lakeside County Sheriff',
    contactName: 'Sheriff Michael Brown',
    timestamp: '2023-03-02T11:20:00'
  },
  {
    id: 5,
    type: 'signup',
    department: 'Riverdale Police Department',
    contactName: 'Chief James Cooper',
    timestamp: '2023-03-01T09:05:00',
    points: 100
  }
];

const RecentActivity: React.FC = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'signup':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'email':
        return <EnvelopeIcon className="h-5 w-5 text-blue-500" />;
      case 'call':
        return <PhoneIcon className="h-5 w-5 text-purple-500" />;
      case 'achievement':
        return <TrophyIcon className="h-5 w-5 text-amber-500" />;
      case 'new_contact':
        return <UserPlusIcon className="h-5 w-5 text-indigo-500" />;
      default:
        return null;
    }
  };
  
  const getActivityText = (activity: any) => {
    switch (activity.type) {
      case 'signup':
        return (
          <>
            <span className="font-medium">{activity.department}</span> signed up for the Opioid Training Program
          </>
        );
      case 'email':
        return (
          <>
            Sent email to <span className="font-medium">{activity.contactName}</span> at {activity.department}
          </>
        );
      case 'call':
        return (
          <>
            Called <span className="font-medium">{activity.contactName}</span> at {activity.department}
          </>
        );
      case 'achievement':
        return (
          <>
            Earned the <span className="font-medium">{activity.name}</span> achievement
          </>
        );
      case 'new_contact':
        return (
          <>
            Added <span className="font-medium">{activity.contactName}</span> as a new contact
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-police-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Recent Activity</h2>
        <Link href="/dashboard/activity" className="text-sm text-police-gold hover:underline">
          View All
        </Link>
      </div>
      
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="ml-3 flex-1">
                <div className="text-sm text-gray-800">
                  {getActivityText(activity)}
                </div>
                
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {new Date(activity.timestamp).toLocaleString()}
                  </div>
                  
                  {activity.points && (
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      +{activity.points} points
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
        <Link 
          href="/dashboard/activity" 
          className="text-police-blue hover:text-blue-700 font-medium text-sm"
        >
          View all activity
        </Link>
      </div>
    </div>
  );
};

export default RecentActivity; 