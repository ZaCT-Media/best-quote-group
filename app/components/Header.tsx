'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { contactData } from '../lib/contact-data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      {/* Mobile Phone Banner */}
      <div className="lg:hidden bg-[#1e3f6a] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <a href="tel:01279909750" className="flex items-center justify-center space-x-2 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-base font-bold">01279 909750</span>
          </a>
        </div>
      </div>

      <header className="bg-white shadow-md overflow-visible relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-6 relative overflow-visible z-30">
          {/* Top Header */}
          <div className="flex justify-between items-center py-3 lg:py-4 overflow-visible">
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
            <div className="flex flex-col items-end justify-center lg:space-y-3 overflow-visible min-w-0 relative z-30">
              {/* Top Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-4 text-sm text-gray-600 flex-shrink-0 whitespace-nowrap desktop-top-nav">
                <Link href="/" className="hover:text-[#1e3f6a] transition cursor-pointer">
                  HOME
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/about-us" className="hover:text-[#1e3f6a] transition cursor-pointer">
                  ABOUT US
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/what-we-do" className="hover:text-[#1e3f6a] transition cursor-pointer">
                  WHAT WE DO
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/how-we-work" className="hover:text-[#1e3f6a] transition cursor-pointer">
                  HOW WE WORK
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact-us" className="hover:text-[#1e3f6a] transition cursor-pointer">
                  CONTACT US
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#1e3f6a] transition cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Phone - Desktop Only */}
              <div className="hidden lg:flex flex-col items-end space-y-2 flex-shrink-0 whitespace-nowrap desktop-phone-section">
                <a href="tel:01279909750" className="flex items-center space-x-2 text-[#1e3f6a] cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-2xl font-bold">01279 909750</span>
                </a>
                {/* WhatsApp Pill */}
                <a
                  href={`https://wa.me/${contactData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition cursor-pointer shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-sm font-medium">Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <nav className="lg:hidden absolute left-0 right-0 top-full bg-white z-40 max-h-[calc(100vh-200px)] overflow-y-auto shadow-xl border-t border-gray-200">
              <div className="p-6">

                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#1e3f6a] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#1e3f6a] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/what-we-do"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#1e3f6a] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    What We Do
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="block px-4 py-4 text-lg text-gray-700 hover:bg-[#1e3f6a] hover:text-white rounded-lg border-b border-gray-200 cursor-pointer transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How We Work
                  </Link>

                  {/* Services Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg text-gray-700 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
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
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/business-loans' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Business Loans
                        </Link>
                        <Link
                          href="/commercial-mortgages"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/commercial-mortgages' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Commercial Mortgages
                        </Link>
                        <Link
                          href="/buy-to-let"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/buy-to-let' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Buy to Let HMO/MUFB
                        </Link>
                        <Link
                          href="/development-finance"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/development-finance' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Development Finance
                        </Link>
                        <Link
                          href="/bridging-loans"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/bridging-loans' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Bridging Loans
                        </Link>
                        <Link
                          href="/asset-finance"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/asset-finance' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Asset Finance
                        </Link>
                        <Link
                          href="/business-services"
                          className={`block px-4 py-3 text-gray-600 hover:bg-[#1e3f6a] hover:text-white rounded-lg cursor-pointer transition-all duration-200 ${pathname === '/business-services' ? 'bg-[#1e3f6a] text-white' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Business Services
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact-us"
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
          <nav className="hidden lg:block bg-[#1e3f6a] rounded-full px-8 py-3 overflow-visible desktop-bottom-nav">
            <ul className="flex justify-between items-center text-white text-sm font-medium whitespace-nowrap">
              <li><Link href="/business-loans" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/business-loans' ? 'border-b-2 border-white' : ''}`}>Business Loans</Link></li>
              <li><Link href="/commercial-mortgages" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/commercial-mortgages' ? 'border-b-2 border-white' : ''}`}>Commercial Mortgages</Link></li>
              <li><Link href="/buy-to-let" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/buy-to-let' ? 'border-b-2 border-white' : ''}`}>Buy to Lets HMO/MUFB</Link></li>
              <li><Link href="/development-finance" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/development-finance' ? 'border-b-2 border-white' : ''}`}>Development Finance</Link></li>
              <li><Link href="/bridging-loans" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/bridging-loans' ? 'border-b-2 border-white' : ''}`}>Bridging Loans</Link></li>
              <li><Link href="/asset-finance" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/asset-finance' ? 'border-b-2 border-white' : ''}`}>Asset Finance</Link></li>
              <li><Link href="/business-services" className={`hover:text-gray-200 transition cursor-pointer pb-1 ${pathname === '/business-services' ? 'border-b-2 border-white' : ''}`}>Business Services</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
