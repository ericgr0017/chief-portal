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
  const quoteNumber = `SHU-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
  
  // Calculate expiration date (30 days from now)
  const expirationDate = new Date(today);
  expirationDate.setDate(expirationDate.getDate() + 30);
  const formattedExpirationDate = expirationDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Create a professional quote template
  const quoteTemplate = `
QUOTE

Date: ${formattedDate}
Quote #: ${quoteNumber}
Valid Until: ${formattedExpirationDate}

FROM:
Seton Hall University
Stillman School of Business
511 South Orange Avenue, #2140
Newark, New Jersey 07103
${university.contactPhone} | ${university.contactEmail}

TO:
{{contactPerson}}
{{department}}

Subject: Certificate Program: Operational Readiness for Police Officers - Practical Strategies for Addressing Opioid Use Disorder and Co-occurring Conditions

Dear {{contactPerson}},

Thank you for your interest in our certificate program. We are pleased to provide you with the following quotation:

ITEM DESCRIPTION                                                   QTY    UNIT PRICE    AMOUNT
-------------------------------------------------------------------------------
Certificate Program: Operational Readiness for Police Officers -   {{officerCount}}    $${costPerOfficer}.00    ${{totalCost}}.00
Practical Strategies for Addressing Opioid Use Disorder and 
Co-occurring Conditions

                                                                   SUBTOTAL:    ${{totalCost}}.00
                                                                   TAX:         $0.00
                                                                   TOTAL:       ${{totalCost}}.00

PROGRAM DETAILS:
• 2-day intensive training (16 hours total)
• On-site at your department or preferred facility
• All officers will receive official certification upon completion
• Evidence-based training on opioid response protocols
• Hands-on experience with naloxone administration
• De-escalation techniques for individuals in crisis
• Community resource coordination strategies
• Post-incident support and officer wellness components

TERMS & CONDITIONS:
Subject to Receipt of Opioid Settlement Disbursement Funding.

This program qualifies for 100% funding through Opioid Settlement Funds, including officer overtime costs. 
Our team will assist with all necessary documentation for funding approval.

To accept this quotation, please contact us at ${university.contactEmail} or call ${university.contactPhone}.

This quote is valid for 30 days from the date of issue.

Sincerely,


Dr. Joyce Strawser
Dean, Stillman School of Business
Seton Hall University
`;

  // Build the data object that matches your placeholders in the template
  const data = {
    contactPerson: formData.contactPerson ?? 'Name',
    department: formData.department ?? 'Department',
    officerCount: (formData.officerCount ?? '0').toString(),
    totalCost
  };

  // Fill the template
  const filledQuote = fillTemplate(quoteTemplate, data);

  return NextResponse.json({
    success: true,
    quote: filledQuote,
    university: university
  });
} 