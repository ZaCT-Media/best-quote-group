'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Mobile Phone Banner */}
      <div className="lg:hidden bg-[#464f7f] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <a href="tel:01279909750" className="flex items-center justify-center space-x-2 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-base font-bold">01279 909750</span>
          </a>
        </div>
      </div>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-6 relative">
          {/* Top Header */}
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo-3.jpeg"
                  alt="BestQuote Commercial Finance"
                  width={500}
                  height={200}
                  className="h-28 sm:h-32 lg:h-36 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Right side: Navigation and Phone */}
            <div className="flex flex-col items-end justify-center lg:space-y-3">
              {/* Top Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#464f7f] transition cursor-pointer">
                  HOME
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#about" className="hover:text-[#464f7f] transition cursor-pointer">
                  ABOUT US
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#what-we-do" className="hover:text-[#464f7f] transition cursor-pointer">
                  WHAT WE DO
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#how-we-work" className="hover:text-[#464f7f] transition cursor-pointer">
                  HOW WE WORK
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#contact" className="hover:text-[#464f7f] transition cursor-pointer">
                  CONTACT US
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#464f7f] transition cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Phone - Desktop Only */}
              <a href="tel:01279909750" className="hidden lg:flex items-center space-x-2 text-[#464f7f] cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-2xl font-bold">01279 909750</span>
              </a>
            </div>
          </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <nav className="lg:hidden absolute left-0 right-0 top-full bg-white z-40 max-h-[calc(100vh-200px)] overflow-y-auto shadow-xl border-t border-gray-200">
              <div className="p-6">

                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#what-we-do"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    What We Do
                  </Link>
                  <Link
                    href="#how-we-work"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How We Work
                  </Link>

                  {/* Services Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                    >
                      <span>Services</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="pb-2 ml-4 space-y-1 bg-gray-50">
                        <Link
                          href="/business-loans"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Business Loans
                        </Link>
                        <Link
                          href="/commercial-mortgages"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Commercial Mortgages
                        </Link>
                        <Link
                          href="/buy-to-let"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Buy to Let HMO/MUFB
                        </Link>
                        <Link
                          href="/development-finance"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Development Finance
                        </Link>
                        <Link
                          href="/bridging-loans"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Bridging Loans
                        </Link>
                        <Link
                          href="/asset-finance"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Asset Finance
                        </Link>
                        <Link
                          href="/business-services"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Business Services
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="#contact"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
        )}

          {/* Bottom Navigation Bar - Desktop */}
          <nav className="hidden lg:block bg-[#464f7f] rounded-full px-8 py-3">
            <ul className="flex justify-between items-center text-white text-sm font-medium">
              <li><Link href="/business-loans" className="hover:text-gray-200 transition cursor-pointer">Business Loans</Link></li>
              <li><Link href="/commercial-mortgages" className="hover:text-gray-200 transition cursor-pointer">Commercial Mortgages</Link></li>
              <li><Link href="/buy-to-let" className="hover:text-gray-200 transition cursor-pointer">Buy to Lets HMO/MUFB</Link></li>
              <li><Link href="/development-finance" className="hover:text-gray-200 transition cursor-pointer">Development Finance</Link></li>
              <li><Link href="/bridging-loans" className="hover:text-gray-200 transition cursor-pointer">Bridging Loans</Link></li>
              <li><Link href="/asset-finance" className="hover:text-gray-200 transition cursor-pointer">Asset Finance</Link></li>
              <li><Link href="/business-services" className="hover:text-gray-200 transition cursor-pointer">Business Services</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
