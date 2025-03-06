import React from 'react';
import Link from 'next/link';

// Mock data for achievements
const achievements = [
  { 
    id: 1, 
    name: 'First Contact', 
    description: 'Reach out to your first department', 
    icon: '📱', 
    completed: true, 
    date: '2023-01-15' 
  },
  { 
    id: 2, 
    name: 'Bronze Recruiter', 
    description: 'Sign up 5 departments', 
    icon: '🥉', 
    completed: true, 
    date: '2023-02-10' 
  },
  { 
    id: 3, 
    name: 'Silver Advocate', 
    description: 'Sign up 10 departments', 
    icon: '🥈', 
    completed: false, 
    progress: 80 
  },
  { 
    id: 4, 
    name: 'Gold Champion', 
    description: 'Sign up 25 departments', 
    icon: '🏆', 
    completed: false, 
    progress: 32 
  },
  { 
    id: 5, 
    name: 'Perfect Week', 
    description: 'Make contact with 7 departments in one week', 
    icon: '🔥', 
    completed: false, 
    progress: 57 
  }
];

const AchievementsWidget: React.FC = () => {
  const completedCount = achievements.filter(a => a.completed).length;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-police-blue text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Achievements & Badges</h2>
        <Link href="/dashboard/achievements" className="text-sm text-police-gold hover:underline">
          View All
        </Link>
      </div>
      
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Completed</span>
            <div className="text-2xl font-bold">{completedCount}/{achievements.length}</div>
          </div>
          <div className="bg-police-gold text-police-blue text-xs font-bold px-3 py-1 rounded-full">
            Bronze Tier
          </div>
        </div>
        
        <ul className="space-y-3">
          {achievements.map((achievement) => (
            <li key={achievement.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mr-3">
                <span className="text-xl" role="img" aria-label={achievement.name}>
                  {achievement.icon}
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {achievement.name}
                  </p>
                  {achievement.completed ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                  )}
                </div>
                
                <p className="text-xs text-gray-500 truncate mb-1">
                  {achievement.description}
                </p>
                
                {achievement.completed ? (
                  <p className="text-xs text-gray-400">
                    Completed on {new Date(achievement.date).toLocaleDateString()}
                  </p>
                ) : (
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-police-gold h-1.5 rounded-full" 
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
        <Link 
          href="/dashboard/achievements" 
          className="text-police-blue hover:text-blue-700 font-medium text-sm"
        >
          See all achievements and rewards
        </Link>
      </div>
    </div>
  );
};

export default AchievementsWidget; 