import { NextRequest, NextResponse } from 'next/server';
import { fillTemplate } from '@/utils/fillTemplate';
import { getUniversityById } from '@/data/universities';

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // Get university information (default to Seton Hall if not specified)
  const universityId = formData.universityId || 'seton-hall';
  const university = getUniversityById(universityId);
  
  if (!university) {
    return NextResponse.json({
      success: false,
      message: `University with ID "${universityId}" not found.`
    }, { status: 404 });
  }

  // Calculate total cost example
  const rawCount = Number(formData.officerCount ?? 0);
  const costPerOfficer = 450;
  const totalCost = (rawCount * costPerOfficer).toString();
  
  // Format the date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Generate a quote number
  const quoteNumber = `${university.id.toUpperCase()}-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
  
  // Calculate expiration date (30 days from now)
  const expirationDate = new Date(today);
  expirationDate.setDate(expirationDate.getDate() + 30);
  const formattedExpirationDate = expirationDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Format the university address
  const formattedAddress = `${university.address.street}${university.address.unit ? ', ' + university.address.unit : ''}
${university.address.city}, ${university.address.state} ${university.address.zip}`;

  // Example template (you can store this in a DB or a file):
  const quoteTemplate = `
OFFICIAL PRICE QUOTATION

Quote Number: ${quoteNumber}
Date: ${formattedDate}
Valid Until: ${formattedExpirationDate}

FROM:
${university.name}
${university.school}
${formattedAddress}
${university.contactPhone} | ${university.contactEmail}

TO:
{{contactPerson}}
{{department}}

Dear {{contactPerson}},

Thank you for your interest in our "Operational Readiness for Police Officers: 
Practical Strategies for Addressing Opioid Use Disorder" training program.

We are pleased to provide you with the following quotation:

PROGRAM DETAILS
--------------
Program:       Operational Readiness for Police Officers
Duration:      2-day intensive training (16 hours total)
Location:      On-site at your department or preferred facility
Certification: All officers will receive official certification upon completion
Provider:      ${university.name}, ${university.school}

PRICING BREAKDOWN
---------------
Number of Officers:    {{officerCount}}
Cost per Officer:      $${costPerOfficer}.00
                                                 ----------------------
                                      SUBTOTAL:  ${{totalCost}}.00
                                      DISCOUNT:  $0.00
                                         TOTAL:  ${{totalCost}}.00

FUNDING INFORMATION
-----------------
This program qualifies for 100% funding through Opioid Settlement Funds,
including officer overtime costs. Our team will assist with all necessary
documentation for funding approval.

PROGRAM BENEFITS
--------------
• Evidence-based training on opioid response protocols
• Hands-on experience with naloxone administration
• De-escalation techniques for individuals in crisis
• Community resource coordination strategies
• Post-incident support and officer wellness components

To accept this quotation, please contact us at ${university.contactEmail}
or call ${university.contactPhone}.

This quote is valid for 30 days from the date of issue.

Sincerely,


Dr. Joyce Strawser
Dean, ${university.school}
${university.name}
`;

  // Build the data object that matches your placeholders in the template
  const data = {
    contactPerson: formData.contactPerson ?? 'Name',
    department: formData.department ?? 'Department',
    officerCount: (formData.officerCount ?? '0').toString(),
    totalCost,
    date: formattedDate,
    quoteNumber: quoteNumber,
    expirationDate: formattedExpirationDate
  };

  // Fill the template
  const filledQuote = fillTemplate(quoteTemplate, data);

  return NextResponse.json({
    success: true,
    quote: filledQuote,
    university: university
  });
} 