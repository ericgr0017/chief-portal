"use client";

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { getAllUniversities, University } from '@/data/universities';
import Image from 'next/image';

export default function OutreachPage() {
  // Add state for universities
  const [universities, setUniversities] = useState<University[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  // Load universities on component mount
  useEffect(() => {
    const allUniversities = getAllUniversities();
    setUniversities(allUniversities);
    
    // Set default university (Seton Hall)
    if (allUniversities.length > 0) {
      const defaultUniversity = allUniversities.find(u => u.id === 'seton-hall') || allUniversities[0];
      setSelectedUniversity(defaultUniversity);
    }
  }, []);

  // Add state for form inputs
  const [formData, setFormData] = useState({
    department: '',
    contactPerson: '',
    contactMethod: '',
    status: '',
    followupDate: '',
    notes: '',
    officerCount: '0', // Add officer count for quote generation
    universityId: 'seton-hall', // Default university
  });

  // Add state for errors
  const [formErrors, setFormErrors] = useState({
    department: '',
    contactPerson: '',
    contactMethod: '',
    status: '',
    followupDate: '',
    officerCount: '', // Add error for officer count
    universityId: '', // Add error for university
    // etc. for other fields if needed
  });

  // Add state for quote modal
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [generatedQuote, setGeneratedQuote] = useState('');
  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false);
  const [quoteError, setQuoteError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If university changed, update the selected university
    if (name === 'universityId') {
      const university = universities.find(u => u.id === value);
      setSelectedUniversity(university || null);
    }

    // Simple required-field check
    if (!value && (name === 'department' || name === 'contactPerson' || name === 'followupDate')) {
      setFormErrors((prev) => ({ ...prev, [name]: 'This field is required.' }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate on submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic required-field checks
    const newErrors: any = {};
    if (!formData.department) newErrors.department = 'Department is required.';
    if (!formData.contactPerson) newErrors.contactPerson = 'Contact person is required.';
    if (!formData.contactMethod) newErrors.contactMethod = 'Contact method is required.';
    if (!formData.status) newErrors.status = 'Status is required.';
    if (!formData.followupDate) {
      newErrors.followupDate = 'Follow-up date is required.';
    } else {
      const enteredDate = new Date(formData.followupDate);
      const today = new Date();
      // If the date is in the past (before midnight today), mark as invalid
      if (enteredDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        newErrors.followupDate = 'Follow-up date cannot be in the past.';
      }
    }

    // If any errors, set them & stop
    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    // Otherwise, continue with form submission logic
    // e.g. send data to an API
    alert('Contact logged successfully!');
  };

  // A helper to check if the follow-up date is in the past
  const isPastDue = () => {
    if (!formData.followupDate) return false;
    const dueDate = new Date(formData.followupDate).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return dueDate < today;
  };

  // Function to generate a sample quote
  const handleSeeSampleQuote = () => {
    setIsGeneratingQuote(true);
    setQuoteError('');

    // Sample data
    const sampleData = {
      department: "Sample Police Department",
      contactPerson: "Chief John Smith",
      officerCount: "25",
      universityId: formData.universityId // Use the selected university
    };

    // Call the API with sample data
    fetch('/api/quotes/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sampleData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setGeneratedQuote(data.quote);
          setShowQuoteModal(true);
        } else {
          setQuoteError(data.message || 'Failed to generate sample quote. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error generating sample quote:', error);
        setQuoteError('An error occurred while generating the sample quote. Please try again.');
      })
      .finally(() => {
        setIsGeneratingQuote(false);
      });
  };

  // Function to generate a quote
  const handleGenerateQuote = async () => {
    // Validate required fields for quote generation
    if (!formData.department || !formData.contactPerson) {
      setQuoteError('Department and Contact Person are required to generate a quote.');
      return;
    }

    if (!formData.officerCount || parseInt(formData.officerCount) <= 0) {
      setQuoteError('Please enter a valid number of officers.');
      return;
    }

    if (!formData.universityId) {
      setQuoteError('Please select a university.');
      return;
    }

    setIsGeneratingQuote(true);
    setQuoteError('');

    try {
      const response = await fetch('/api/quotes/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          department: formData.department,
          contactPerson: formData.contactPerson,
          officerCount: formData.officerCount,
          universityId: formData.universityId
        }),
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedQuote(data.quote);
        setShowQuoteModal(true);
      } else {
        setQuoteError(data.message || 'Failed to generate quote. Please try again.');
      }
    } catch (error) {
      console.error('Error generating quote:', error);
      setQuoteError('An error occurred while generating the quote. Please try again.');
    } finally {
      setIsGeneratingQuote(false);
    }
  };

  // Function to download the quote as a text file
  const handleDownloadQuote = () => {
    if (!selectedUniversity) return;
    
    // Create a formatted quote with university name
    const formattedQuote = generatedQuote;
    
    // Create the file
    const element = document.createElement('a');
    const file = new Blob([formattedQuote], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    
    // Format the filename with university name and department
    const universityName = selectedUniversity.name.replace(/\s+/g, '_');
    const departmentName = formData.department.replace(/\s+/g, '_') || 'Department';
    const dateStr = new Date().toISOString().split('T')[0];
    
    element.download = `Quote_${universityName}_${departmentName}_${dateStr}.txt`;
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Opioid Remediation Outreach</h1>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Outreach Process</h2>
              <ul className="list-disc pl-5 text-sm text-blue-700 space-y-2">
                <li><span className="font-medium">Program:</span> Operational Readiness for Police Officers: Practical Strategies for Addressing Opioid Use Disorder</li>
                <li><span className="font-medium">Funding:</span> Fully funded by Opioid Settlement Funds, including overtime for officers completing the certificate program</li>
                <li><span className="font-medium">Cost:</span> $450 per officer (covered by settlement funds)</li>
                <li><span className="font-medium">Partners:</span> Offered in partnership with multiple universities across different states</li>
                <li><span className="font-medium">Contact Ownership:</span> Once you initiate contact with a department, you "own" that relationship until closure or admin override</li>
                <li><span className="font-medium">Process Steps:</span>
                  <ol className="list-decimal pl-5 mt-1 space-y-1">
                    <li>Contact department decision maker (chief, training officer, or administrator)</li>
                    <li>If interested, send quote with university options and funding details</li>
                    <li>Receive letter of intent from department</li>
                    <li>Contact town business administrator about settlement fund availability</li>
                    <li>If funds available: Secure PO for class</li>
                    <li>If funds not available: Assist with application for funds</li>
                    <li>Mark department as "Closed - Enrolled" or "Closed - Declined"</li>
                  </ol>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Log New Contact</h2>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Find Department
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.department ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter department name"
                  />
                  {formErrors.department && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.department}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="region"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter state"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.contactPerson ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter contact name"
                  />
                  {formErrors.contactPerson && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.contactPerson}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position
                  </label>
                  <select
                    id="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select position</option>
                    <option value="chief">Chief of Police</option>
                    <option value="sheriff">Sheriff</option>
                    <option value="deputy">Deputy Chief</option>
                    <option value="captain">Captain</option>
                    <option value="lieutenant">Lieutenant</option>
                    <option value="training">Training Officer</option>
                    <option value="admin">Administrative Staff</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Method <span className="text-red-500">*</span>
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${formErrors.contactMethod ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  required
                >
                  <option value="">Select contact method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="linkedin">LinkedIn Message</option>
                  <option value="inperson">In-Person Meeting</option>
                  <option value="video">Video Call</option>
                </select>
                {formErrors.contactMethod && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.contactMethod}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter detailed notes about the interaction"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Outreach Status <span className="text-red-500">*</span>
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${formErrors.status ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  required
                >
                  <option value="">Select status</option>
                  <option value="initial">Initial Contact</option>
                  <option value="interested">Interested - Quote Needed</option>
                  <option value="quote_sent">Quote Sent</option>
                  <option value="loi_received">Letter of Intent Received</option>
                  <option value="funds_available">Settlement Funds Available</option>
                  <option value="funds_needed">Settlement Funds Application Needed</option>
                  <option value="po_received">PO Received</option>
                  <option value="enrolled">Enrolled in Program</option>
                  <option value="completed">Program Completed</option>
                  <option value="closed_declined">Closed - Declined</option>
                  <option value="unreachable">Unreachable</option>
                </select>
                {formErrors.status && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.status}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="universityId" className="block text-sm font-medium text-gray-700 mb-1">
                    Issuing University
                  </label>
                  <div className="flex items-center space-x-4">
                    <select
                      id="universityId"
                      name="universityId"
                      value={formData.universityId}
                      onChange={handleInputChange}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      {universities.map(university => (
                        <option key={university.id} value={university.id}>
                          {university.name} - {university.school}
                        </option>
                      ))}
                    </select>
                    
                    {/* Display university logo */}
                    {selectedUniversity && (
                      <div className="w-40 h-16 relative">
                        <Image 
                          src={selectedUniversity.logoPath}
                          alt={`${selectedUniversity.name} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )}
                  </div>
                  {formErrors.universityId && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.universityId}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="officerCount" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Officers
                  </label>
                  <input
                    type="number"
                    id="officerCount"
                    name="officerCount"
                    value={formData.officerCount}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  {formErrors.officerCount && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.officerCount}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="followupDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Follow-up Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="followupDate"
                    name="followupDate"
                    value={formData.followupDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${formErrors.followupDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {formErrors.followupDate && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.followupDate}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="quoteAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Quote Amount ($)
                  </label>
                  <input
                    type="text"
                    id="quoteAmount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Calculated based on officer count"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <input
                  id="settlement-funds"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="settlement-funds" className="block text-sm text-gray-700">
                  Department has confirmed access to settlement funds
                </label>
              </div>
              
              <div className="flex items-center space-x-4">
                <input
                  id="claim-ownership"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  defaultChecked
                  onChange={() => {
                    /* If you want to handle the state for claiming ownership,
                       you can move this to a useState hook. 
                       For now, this empty handler removes the warning. */
                  }}
                />
                <label htmlFor="claim-ownership" className="block text-sm text-gray-700">
                  I am claiming ownership of this contact
                </label>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-police-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
                >
                  Log Contact
                </button>
                <button
                  type="button"
                  onClick={handleGenerateQuote}
                  disabled={isGeneratingQuote}
                  className="flex-1 bg-police-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isGeneratingQuote ? 'Generating...' : 'Generate Quote'}
                </button>
                <button
                  type="button"
                  onClick={handleSeeSampleQuote}
                  disabled={isGeneratingQuote}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See Sample Quote
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">My Assigned Departments</h2>
              <span className="bg-white text-police-blue text-xs font-bold px-2 py-1 rounded-full">12</span>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search departments..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <ul className="divide-y divide-gray-200">
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Pinecrest Police Department</p>
                      <p className="text-xs text-gray-500">Chief Thomas Wilson</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                      Quote Sent
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">Phone Call • Mar 5, 2025</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Westlake Sheriff Office</p>
                      <p className="text-xs text-gray-500">Sheriff Amanda Rodriguez</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      PO Received
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">Email • Mar 3, 2025</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                  </div>
                </li>
                
                <li className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Oakridge Police Department</p>
                      <p className="text-xs text-gray-500">Training Officer Michael Chen</p>
                    </div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      LOI Received
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-500">LinkedIn • Mar 1, 2025</p>
                    <button className="text-xs text-blue-600 hover:text-blue-800">View Details</button>
                  </div>
                </li>
              </ul>
              
              <div className="mt-4">
                <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View All My Departments
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-police-blue text-white p-4">
              <h2 className="text-lg font-bold">Quote Template</h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                The quote includes the following information:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 mb-4">
                <li>Department name and contact information</li>
                <li>Program name: "Operational Readiness for Police Officers: Practical Strategies for Addressing Opioid Use Disorder"</li>
                <li>Partnering university information</li>
                <li>Number of officers to be trained</li>
                <li>Cost per officer ($450)</li>
                <li>Total cost calculation</li>
                <li>Statement that program is fully funded by Opioid Settlement Funds</li>
                <li>Overtime coverage information</li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150">
                View Sample Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Department Search Modal - Hidden by default */}
      <div className="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
          <div className="bg-police-blue text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-bold">Find Department</h2>
            <button className="text-white hover:text-gray-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search departments..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All States</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  {/* More states would be listed here */}
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Statuses</option>
                  <option value="uncontacted">Uncontacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <button className="bg-police-blue hover:bg-blue-700 text-white px-4 py-2 rounded">
                Search
              </button>
            </div>
            
            <div className="overflow-y-auto max-h-[50vh]">
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Millfield Police Department</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Ohio</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">25 officers</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        Uncontacted
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">-</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button>Claim</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Riverdale Police Department</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">New York</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">42 officers</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        In Progress
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Sarah Johnson</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      Claimed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Lakeside Police Department</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">Michigan</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">18 officers</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        Uncontacted
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">-</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button>Claim</button>
                    </td>
                  </tr>
                  {/* More rows would be here */}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-between">
              <div className="text-sm text-gray-500">
                Showing 1-10 of 243 departments
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-police-blue text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-seton-hall-blue">Quote</h2>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-4">
              {/* Logo Header - The logo should be approximately 200x80px */}
              <div className="flex justify-center mb-8">
                <div className="w-[200px] h-[80px] relative">
                  <Image 
                    src="/images/universities/seton-hall-logo.png"
                    alt="Seton Hall University logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
              
              {/* Quote Content */}
              <div className="font-serif">
                <pre className="whitespace-pre-wrap font-serif text-sm text-seton-hall-blue">
                  {generatedQuote}
                </pre>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
              >
                Close
              </button>
              <button 
                onClick={handleDownloadQuote}
                className="bg-seton-hall-blue hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded"
              >
                Download Quote
              </button>
              <button 
                onClick={() => window.print()}
                className="bg-seton-hall-blue hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded"
              >
                Print Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
} 