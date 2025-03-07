// Database of universities that can issue quotes
export interface University {
  id: string;
  name: string;
  school: string;
  address: {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zip: string;
  };
  contactEmail: string;
  contactPhone: string;
  logoPath: string;
}

// Universities database
export const universities: University[] = [
  {
    id: "seton-hall",
    name: "Seton Hall University",
    school: "Stillman School of Business",
    address: {
      street: "511 South Orange Avenue",
      unit: "#2140",
      city: "Newark",
      state: "New Jersey",
      zip: "07103"
    },
    contactEmail: "training@stillman.shu.edu",
    contactPhone: "(973) 761-9000",
    logoPath: "/images/universities/seton-hall-logo.png"
  }
];

// Function to get a university by ID
export function getUniversityById(id: string): University | undefined {
  return universities.find(university => university.id === id);
}

// Function to get all universities
export function getAllUniversities(): University[] {
  return universities;
} 