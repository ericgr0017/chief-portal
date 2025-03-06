import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function ResourcesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Program Resources</h1>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Operational Readiness for Police Officers</h2>
            <p className="text-sm text-blue-700 mb-2">
              Practical Strategies for Addressing Opioid Use Disorder
            </p>
            <p className="text-sm text-blue-700">
              Access our comprehensive collection of resources designed to support the Operational Readiness training program.
              These materials are available to departments that have enrolled in the program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Program Overview</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Detailed information about the training program, curriculum, and learning objectives.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • 2.4 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Card 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Settlement Funds Guide</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Guide to accessing and utilizing Opioid Settlement Funds for training program participation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • 1.8 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Card 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Sample Letter of Intent</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Template for departments to use when submitting their letter of intent to participate in the program.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">DOCX • 0.5 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Card 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Opioid Response Field Guide</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Pocket reference guide for officers responding to opioid-related incidents in the field.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • 3.2 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Card 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Settlement Funds Application</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Application template for departments that need to apply for Opioid Settlement Funds.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • 1.5 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resource Card 6 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-police-blue text-white p-4">
                <h3 className="font-bold">Program FAQ</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Frequently asked questions about the training program, funding, and participation requirements.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • 0.9 MB</span>
                  <button className="bg-police-blue hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Participating Universities</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of Washington</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in Washington, Oregon, Idaho, Montana, and Alaska.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
            
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of Michigan</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in Michigan, Ohio, Indiana, Illinois, and Wisconsin.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
            
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of Texas</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in Texas, Oklahoma, New Mexico, Arkansas, and Louisiana.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
            
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of Florida</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in Florida, Georgia, Alabama, South Carolina, and Tennessee.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
            
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of California</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in California, Nevada, Arizona, Hawaii, and Utah.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
            
            <div className="border-l-4 border-police-blue pl-4">
              <h3 className="font-bold text-gray-800">University of New York</h3>
              <p className="text-sm text-gray-600 mb-2">
                Serving departments in New York, New Jersey, Pennsylvania, Connecticut, and Massachusetts.
              </p>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View Program Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 