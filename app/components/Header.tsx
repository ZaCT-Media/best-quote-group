'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Top Header */}
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo-2.jpg"
                  alt="BestQuote Commercial Finance"
                  width={500}
                  height={200}
                  className="h-16 sm:h-20 lg:h-20 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Right side: Navigation and Phone */}
            <div className="flex flex-col items-end justify-center lg:space-y-3">
              {/* Top Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
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

                {/* Services Dropdown - Desktop */}
                <div className="relative">
                  <button
                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    className="flex items-center space-x-1 hover:text-[#464f7f] transition cursor-pointer"
                  >
                    <span>SERVICES</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {desktopServicesOpen && (
                    <div
                      onMouseLeave={() => setDesktopServicesOpen(false)}
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      <Link
                        href="/business-loans"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Business Loans
                      </Link>
                      <Link
                        href="/commercial-mortgages"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Commercial Mortgages
                      </Link>
                      <Link
                        href="/buy-to-let"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Buy to Let HMO/MUFB
                      </Link>
                      <Link
                        href="/development-finance"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Development Finance
                      </Link>
                      <Link
                        href="/bridging-loans"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Bridging Loans
                      </Link>
                      <Link
                        href="/asset-finance"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Asset Finance
                      </Link>
                      <Link
                        href="/business-consultancy"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#464f7f] hover:text-white transition cursor-pointer"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Business Consultancy
                      </Link>
                    </div>
                  )}
                </div>

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
                          href="/business-consultancy"
                          className="block px-4 py-3 text-gray-600 hover:bg-[#464f7f] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Business Consultancy
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
        </div>
      </header>
    </div>
  );
}
