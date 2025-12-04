'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-10 mb-12">
          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="text-gray-900 font-bold text-lg mb-3">
              Get expert advice, tips and industry news direct to your inbox
            </h3>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Join our mailing list today and keep up to date with all things commercial and domestic finance.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent min-w-0"
                required
              />
              <button
                type="submit"
                className="bg-[#1e3f6a] text-white px-8 py-3 rounded-lg hover:bg-[#1e3f6a] transition font-medium whitespace-nowrap"
              >
                JOIN LIST
              </button>
            </form>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#commercial-mortgages" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Commercial Mortgages
                </Link>
              </li>
              <li>
                <Link href="#buy-to-lets" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Buy to Lets
                </Link>
              </li>
              <li>
                <Link href="#hmo" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  HMO
                </Link>
              </li>
              <li>
                <Link href="#development-finance" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Development Finance
                </Link>
              </li>
              <li>
                <Link href="#bridging-loans" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Bridging Loans
                </Link>
              </li>
              <li>
                <Link href="#business-loans" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Business Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about-us" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#how-we-work" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className="text-gray-600 hover:text-[#1e3f6a] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Social */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-gray-400 hover:text-[#1e3f6a] transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1e3f6a] transition" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} BestQuote Commercial Finance. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <p>
                Made by{' '}
                <a
                  href="https://www.zactmedia.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3f6a] hover:text-[#1e3f6a] transition font-medium"
                >
                  ZaCT Media
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
