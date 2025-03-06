import React from 'react';
import Link from 'next/link';

// Mock data for challenges
const challenges = [
  {
    id: 1,
    title: 'Weekly Sprint',
    description: 'Sign up 3 new departments this week',
    reward: 'Special Badge + 500 Points',
    deadline: '2023-03-12',
    participants: 32,
    isActive: true
  },
  {
    id: 2,
    title: 'Regional Champion',
    description: 'Be the top recruiter in your state this month',
    reward: 'Gold Trophy + 1000 Points',
    deadline: '2023-03-31',
    participants: 48,
    isActive: true
  },
  {
    id: 3,
    title: 'Perfect Follow-up',
    description: 'Complete all pending follow-ups within 48 hours',
    reward: 'Efficiency Badge + 300 Points',
    deadline: '2023-03-10',
    participants: 27,
    isActive: true
  }
];

const UpcomingChallenges: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-police-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Active Challenges</h2>
        <Link href="/dashboard/challenges" className="text-sm text-police-gold hover:underline">
          View All
        </Link>
      </div>
      
      <div className="p-4">
        <ul className="space-y-4">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-bold text-gray-800">{challenge.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  {challenge.description}
                </p>
                
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <div>
                    <span className="font-medium">Reward:</span> {challenge.reward}
                  </div>
                  <div>
                    <span className="font-medium">{challenge.participants}</span> participants
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Deadline:</span> {new Date(challenge.deadline).toLocaleDateString()}
                  </div>
                  <button className="bg-police-blue text-white text-xs font-medium px-3 py-1 rounded hover:bg-blue-700 transition duration-200">
                    Join Challenge
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="text-center">
          <Link 
            href="/dashboard/challenges/create" 
            className="text-police-blue hover:text-blue-700 font-medium text-sm"
          >
            Suggest a new challenge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingChallenges; 