"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HomeIcon, 
  TrophyIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-police-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Opioid Remediation Training Portal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard" className="hover:text-police-gold">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/outreach" className="hover:text-police-gold">
                  Outreach
                </Link>
              </li>
              <li>
                <Link href="/dashboard/departments" className="hover:text-police-gold">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/dashboard/community" className="hover:text-police-gold">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/dashboard/resources" className="hover:text-police-gold">
                  Resources
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-white hover:text-police-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-police-gold rounded-full flex items-center justify-center text-police-blue font-bold">
                RC
              </div>
              <span className="hidden md:inline">Retired Chief Johnson</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Opioid Remediation Training Portal | Funded by Opioid Settlement Funds</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout; 