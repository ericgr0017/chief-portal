import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Community Engagement</h1>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Why Community Engagement Matters</h2>
              <p className="text-sm text-blue-700 mb-3">
                Building strong relationships between police departments and their communities is essential for effective policing. 
                Community engagement initiatives help foster trust, improve communication, and create safer neighborhoods.
              </p>
              <p className="text-sm text-blue-700">
                Use this portal to discover and share community engagement opportunities, best practices, and success stories.
              </p>
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            
            <div className="space-y-4">
              {/* Event Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-police-blue text-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">National Night Out</h3>
                    <span className="bg-white text-police-blue text-xs font-bold px-3 py-1 rounded-full">
                      Aug 2, 2025
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    National Night Out is an annual community-building campaign that promotes police-community partnerships
                    and neighborhood camaraderie to make our neighborhoods safer, more caring places to live.
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Various Locations Nationwide</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>6:00 PM - 9:00 PM</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Register Department
                    </button>
                    <button className="border border-police-blue text-police-blue hover:bg-blue-50 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Event Card 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-police-blue text-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Community Safety Workshop</h3>
                    <span className="bg-white text-police-blue text-xs font-bold px-3 py-1 rounded-full">
                      Jun 15, 2025
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Join us for a virtual workshop on community safety strategies. Learn how to implement 
                    effective neighborhood watch programs and build stronger community-police relationships.
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Virtual Event (Zoom)</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>1:00 PM - 3:00 PM EST</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Register Department
                    </button>
                    <button className="border border-police-blue text-police-blue hover:bg-blue-50 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Event Card 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-police-blue text-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Youth Police Academy</h3>
                    <span className="bg-white text-police-blue text-xs font-bold px-3 py-1 rounded-full">
                      Jul 10-14, 2025
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    A week-long program designed to give young people ages 14-18 an inside look at law enforcement. 
                    Participants will learn about police procedures, crime scene investigation, and more.
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Regional Training Center</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>9:00 AM - 3:00 PM Daily</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Register Department
                    </button>
                    <button className="border border-police-blue text-police-blue hover:bg-blue-50 text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4">
              <h2 className="text-lg font-bold">Success Stories</h2>
            </div>
            
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                <li className="py-3">
                  <p className="text-sm font-medium text-gray-900">Metropolis PD Community Outreach Program</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Reduced juvenile crime by 32% through their innovative youth mentorship program.
                  </p>
                  <a href="#" className="text-xs text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    Read more →
                  </a>
                </li>
                
                <li className="py-3">
                  <p className="text-sm font-medium text-gray-900">Riverdale Coffee with a Cop</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Monthly community meetings at local cafes helped build trust and improve communication.
                  </p>
                  <a href="#" className="text-xs text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    Read more →
                  </a>
                </li>
                
                <li className="py-3">
                  <p className="text-sm font-medium text-gray-900">Westlake Sheriff's Community Safety App</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Developed a mobile app that allows citizens to report concerns and receive safety alerts.
                  </p>
                  <a href="#" className="text-xs text-blue-600 hover:text-blue-800 mt-1 inline-block">
                    Read more →
                  </a>
                </li>
              </ul>
              
              <div className="mt-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View all success stories →
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4">
              <h2 className="text-lg font-bold">Resources</h2>
            </div>
            
            <div className="p-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Community Engagement Toolkit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Event Planning Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Social Media Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Grant Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Community Survey Templates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 