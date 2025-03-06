import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for the leaderboard
const leaderboardData = [
  { id: 1, name: 'Chief Sarah Johnson', department: 'Metropolis PD', signups: 15, avatar: '/images/avatars/avatar-1.jpg' },
  { id: 2, name: 'Chief Michael Chen', department: 'Riverside County', signups: 12, avatar: '/images/avatars/avatar-2.jpg' },
  { id: 3, name: 'Chief Robert Davis', department: 'Oakwood Police', signups: 10, avatar: '/images/avatars/avatar-3.jpg' },
  { id: 4, name: 'Chief Lisa Martinez', department: 'Pine Valley PD', signups: 9, avatar: '/images/avatars/avatar-4.jpg' },
  { id: 5, name: 'Chief John Smith', department: 'Cedar Hills Police', signups: 8, avatar: '/images/avatars/avatar-5.jpg' },
];

const LeaderboardWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-police-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Top Recruiters</h2>
        <Link href="/dashboard/leaderboard" className="text-sm text-police-gold hover:underline">
          View Full Leaderboard
        </Link>
      </div>
      
      <div className="p-4">
        <ul className="space-y-4">
          {leaderboardData.map((chief, index) => (
            <li key={chief.id} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 text-center font-bold text-gray-500">
                {index === 0 ? (
                  <span className="text-police-gold">🏆</span>
                ) : index === 1 ? (
                  <span className="text-police-silver">🥈</span>
                ) : index === 2 ? (
                  <span className="text-police-badge">🥉</span>
                ) : (
                  `#${index + 1}`
                )}
              </div>
              
              <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={chief.avatar}
                  alt={chief.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{chief.name}</p>
                <p className="text-xs text-gray-500 truncate">{chief.department}</p>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <p className="text-sm font-bold text-gray-900">{chief.signups}</p>
                <p className="text-xs text-gray-500">Signups</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Your Rank</p>
            <p className="text-lg font-bold text-gray-900">#5 of 48</p>
          </div>
          <div className="bg-police-blue text-white text-xs font-bold px-3 py-1 rounded-full">
            Top 10%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardWidget; 