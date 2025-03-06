import React from 'react';
import { 
  UserGroupIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const StatsOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Outreach Stats</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Departments Contacted */}
        <div className="bg-blue-50 rounded-lg p-4 flex items-center">
          <div className="bg-blue-100 rounded-full p-3 mr-4">
            <UserGroupIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Departments Contacted</p>
            <p className="text-2xl font-bold text-blue-800">24</p>
          </div>
        </div>
        
        {/* Departments Signed Up */}
        <div className="bg-green-50 rounded-lg p-4 flex items-center">
          <div className="bg-green-100 rounded-full p-3 mr-4">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Departments Signed Up</p>
            <p className="text-2xl font-bold text-green-800">8</p>
          </div>
        </div>
        
        {/* Pending Follow-ups */}
        <div className="bg-amber-50 rounded-lg p-4 flex items-center">
          <div className="bg-amber-100 rounded-full p-3 mr-4">
            <ClockIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-amber-600 font-medium">Pending Follow-ups</p>
            <p className="text-2xl font-bold text-amber-800">12</p>
          </div>
        </div>
        
        {/* Current Rank */}
        <div className="bg-purple-50 rounded-lg p-4 flex items-center">
          <div className="bg-purple-100 rounded-full p-3 mr-4">
            <TrophyIcon className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-purple-600 font-medium">Current Rank</p>
            <p className="text-2xl font-bold text-purple-800">5th</p>
          </div>
        </div>
      </div>
      
      {/* Progress to Next Rank */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-600">Progress to Silver Advocate</p>
          <p className="text-sm font-medium text-gray-600">8/10 Departments</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-police-gold h-2.5 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Just 2 more departments to reach Silver Advocate status!</p>
      </div>
    </div>
  );
};

export default StatsOverview; 