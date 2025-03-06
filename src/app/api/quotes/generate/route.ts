import { NextRequest, NextResponse } from 'next/server';
import { fillTemplate } from '@/utils/fillTemplate';

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // Calculate total cost example
  const rawCount = Number(formData.officerCount ?? 0);
  const costPerOfficer = 450;
  const totalCost = (rawCount * costPerOfficer).toString();

  // Example template (you can store this in a DB or a file):
  const quoteTemplate = `
  Dear {{contactPerson}} from {{department}},
  
  We are pleased to offer you our program: 
  "Operational Readiness for Police Officers: Practical Strategies for Addressing Opioid Use Disorder"

  Number of Officers: {{officerCount}}
  Cost per Officer: $${costPerOfficer}
  Total Cost: ${{totalCost}}

  This program is fully funded by Opioid Settlement Funds (including officer overtime).
  We look forward to working with you.
  
  Sincerely,
  The Program Team
  `;

  // Build the data object that matches your placeholders in the template
  const data = {
    contactPerson: formData.contactPerson ?? 'Name',
    department: formData.department ?? 'Department',
    officerCount: (formData.officerCount ?? '0').toString(),
    totalCost,
  };

  // Fill the template
  const filledQuote = fillTemplate(quoteTemplate, data);

  return NextResponse.json({
    success: true,
    quote: filledQuote,
  });
} 