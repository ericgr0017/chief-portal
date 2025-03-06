import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function CommunicationGuidePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Communication Sequence Guide</h1>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Effective Outreach Strategy</h2>
            <p className="text-sm text-blue-700 mb-4">
              This guide provides a structured approach to contacting police departments about the Opioid Remediation Training Program. 
              Following this sequence will maximize your chances of reaching the decision maker and securing enrollment.
            </p>
          </div>
          
          {/* Initial Contact Phase */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-2">1</span>
              Initial Contact Phase
            </h2>
            
            <div className="border-l-4 border-blue-500 pl-4 py-4 mb-4">
              <h3 className="font-medium text-lg mb-2">Email Introduction</h3>
              <p className="text-gray-600 mb-3">
                Send a professional email introducing yourself and the Opioid Remediation Training Program. 
                Include brief details about the program being fully funded by settlement funds.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Elements to Include:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Your background as a retired/active chief of police</li>
                  <li>Brief overview of the training program (1-2 sentences)</li>
                  <li>Mention that it's fully funded by Opioid Settlement Funds</li>
                  <li>Request a brief phone call to discuss details</li>
                  <li>Include your contact information</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If no response within 3 business days
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-4 mb-4">
              <h3 className="font-medium text-lg mb-2">LinkedIn Connection</h3>
              <p className="text-gray-600 mb-3">
                Connect with the department's chief, training officer, or administrator on LinkedIn. 
                Send a personalized connection request mentioning the program.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Effective Approach:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Keep the connection request message brief (300 character limit)</li>
                  <li>Mention your shared profession and the training opportunity</li>
                  <li>After connection is accepted, send a more detailed message</li>
                  <li>Include a link to program information</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If no response within 3-4 business days after connection
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-4">
              <h3 className="font-medium text-lg mb-2">Phone Call</h3>
              <p className="text-gray-600 mb-3">
                Call the department directly and ask to speak with the chief, training officer, or administrator.
                Be prepared with your elevator pitch about the program.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Call Structure:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Introduce yourself and mention your background</li>
                  <li>Ask if they have a few minutes to discuss the training program</li>
                  <li>Highlight the key benefits: fully funded, includes overtime, practical skills</li>
                  <li>Address common objections (staffing concerns, time commitment)</li>
                  <li>Offer to send information via email</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If interested, send follow-up email within 24 hours
              </div>
            </div>
          </div>
          
          {/* Follow-up Phase */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full mr-2">2</span>
              Follow-up Phase
            </h2>
            
            <div className="border-l-4 border-amber-500 pl-4 py-4 mb-4">
              <h3 className="font-medium text-lg mb-2">Email with Detailed Information</h3>
              <p className="text-gray-600 mb-3">
                Send a comprehensive email with program details, including training curriculum, 
                funding information, and university partners.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Information to Include:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Detailed program overview document (PDF attachment)</li>
                  <li>List of participating universities and their credentials</li>
                  <li>Testimonials from departments that have completed the training</li>
                  <li>Clear explanation of the settlement funding process</li>
                  <li>Next steps for expressing interest</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If no response within 5 business days
              </div>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4 py-4">
              <h3 className="font-medium text-lg mb-2">Second Phone Call</h3>
              <p className="text-gray-600 mb-3">
                Make a follow-up call to confirm receipt of information and answer any questions.
                This call is crucial for moving the process forward.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Call Objectives:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Confirm they received the detailed information</li>
                  <li>Ask if they've had a chance to review it</li>
                  <li>Address any questions or concerns</li>
                  <li>Discuss potential training dates and officer count</li>
                  <li>Offer to generate a quote for their department</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If interested, send quote within 24-48 hours
              </div>
            </div>
          </div>
          
          {/* Quote and Commitment Phase */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-2">3</span>
              Quote and Commitment Phase
            </h2>
            
            <div className="border-l-4 border-green-500 pl-4 py-4 mb-4">
              <h3 className="font-medium text-lg mb-2">Send Personalized Quote</h3>
              <p className="text-gray-600 mb-3">
                Generate and send a detailed quote based on the department's size and needs.
                Include all funding details and next steps.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Quote Components:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Department name and contact information</li>
                  <li>Number of officers to be trained</li>
                  <li>Cost per officer ($450)</li>
                  <li>Total cost calculation</li>
                  <li>Statement about settlement fund coverage</li>
                  <li>Overtime coverage details</li>
                  <li>Preferred university partner</li>
                  <li>Proposed training dates</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> If no response within 5 business days
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-4">
              <h3 className="font-medium text-lg mb-2">Secure Letter of Intent</h3>
              <p className="text-gray-600 mb-3">
                Request a letter of intent (LOI) from the department indicating their commitment
                to participate in the training program.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">LOI Process:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Provide a template LOI they can use</li>
                  <li>Explain that the LOI is non-binding but helps secure funding</li>
                  <li>Offer to assist with any questions about the LOI</li>
                  <li>Once received, confirm next steps for settlement fund verification</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> Weekly check-ins until LOI is received
              </div>
            </div>
          </div>
          
          {/* Funding and Enrollment Phase */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full mr-2">4</span>
              Funding and Enrollment Phase
            </h2>
            
            <div className="border-l-4 border-purple-500 pl-4 py-4 mb-4">
              <h3 className="font-medium text-lg mb-2">Settlement Fund Verification</h3>
              <p className="text-gray-600 mb-3">
                Work with the department and local government to verify settlement fund availability
                and secure the necessary approvals.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Verification Steps:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Contact town/city business administrator</li>
                  <li>Provide documentation about settlement fund eligibility</li>
                  <li>Assist with any required applications or paperwork</li>
                  <li>Follow up regularly on the status of fund approval</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> Weekly until funding is secured
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-4">
              <h3 className="font-medium text-lg mb-2">Finalize Enrollment</h3>
              <p className="text-gray-600 mb-3">
                Complete the enrollment process by securing a purchase order and confirming
                all details for the training program.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Enrollment Completion:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Obtain purchase order from department</li>
                  <li>Confirm final officer count and names</li>
                  <li>Finalize training dates and location</li>
                  <li>Send welcome packet with pre-training materials</li>
                  <li>Mark department as "Enrolled" in the system</li>
                </ul>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                <strong>Follow-up Timing:</strong> Regular check-ins until training begins
              </div>
            </div>
          </div>
          
          {/* Communication Tips */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Communication Best Practices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Do's</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                  <li><strong>Be respectful of their time</strong> - Police departments are busy places</li>
                  <li><strong>Emphasize the practical benefits</strong> - Focus on how this training helps officers on the street</li>
                  <li><strong>Address funding concerns early</strong> - Make it clear that settlement funds cover all costs</li>
                  <li><strong>Leverage your law enforcement background</strong> - Speak as a colleague who understands their challenges</li>
                  <li><strong>Document all communications</strong> - Keep detailed notes of every interaction</li>
                  <li><strong>Always set a specific follow-up date</strong> - Never leave an interaction without a clear next step</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Don'ts</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                  <li><strong>Don't be pushy</strong> - Respect their decision-making process</li>
                  <li><strong>Don't overwhelm with information</strong> - Provide details gradually as interest develops</li>
                  <li><strong>Don't make promises you can't keep</strong> - Be honest about program limitations</li>
                  <li><strong>Don't skip follow-ups</strong> - Persistence (without being annoying) is key</li>
                  <li><strong>Don't forget to update the contact system</strong> - Keep all information current</li>
                  <li><strong>Don't contact departments claimed by others</strong> - Respect the ownership system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 