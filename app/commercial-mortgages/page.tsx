'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function CommercialMortgagesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToUpdates: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agreeToUpdates: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceHero
          title="Commercial Mortgages"
          subtitle="Financing solutions for business properties from £150k to £15m"
          imagePath="/home/warehouse-outside.jpg"
          backgroundPosition="center"
        />

        {/* Main Content Section - Two Column Layout */}
        <section className="py-12 bg-[#1e3f6a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/commercial-units.jpg"
                      alt="Commercial Units"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/warehouse-finance.jpg"
                      alt="Warehouse Finance"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/hotels.jpg"
                      alt="Hotels"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                    What is a Commercial Mortgage?
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      A commercial mortgage is a type of loan specifically designed for businesses and investors to purchase or refinance commercial properties.
                    </p>

                    <h3 className="text-lg font-semibold text-[#1e3f6a] mt-6">Property Types:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Office buildings</li>
                        <li>Retail spaces</li>
                        <li>Industrial units</li>
                        <li>Hotels</li>
                        <li>Warehouses</li>
                        <li>Takeaways</li>
                      </ul>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Car Showrooms</li>
                        <li>Garages</li>
                        <li>Nurseries</li>
                        <li>Food Outlets/Takeaways</li>
                        <li>Public Houses</li>
                        <li>Convenience Stores</li>
                      </ul>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Key Features:</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Loan Amounts</h4>
                          <p className="text-sm">From £150k to £15m</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Terms</h4>
                          <p className="text-sm">Terms range from 5 to 25 years</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Interest Rates</h4>
                          <p className="text-sm">Interest rates on commercial mortgages can be fixed or variable, depending on the loan terms and the lender.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Deposit Requirement</h4>
                          <p className="text-sm">Lenders typically require a down payment of 20% to 30% or more of the property&apos;s purchase price.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Loan-to-Value (LTV)</h4>
                          <p className="text-sm">Max 70%</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Use of Funds</h4>
                          <p className="text-sm">Borrowers can use the funds obtained through a commercial mortgage for various purposes, including purchasing a property, refinancing an existing mortgage, renovating or expanding a property, or even acquiring additional commercial property.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <p className="text-sm font-semibold">
                        BestQuote also undertake the arranging of unsecured business loans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-[#1e3f6a] rounded-lg p-6 shadow-lg sticky top-4 lg:top-[240px]">
                  <h3 className="text-xl font-bold text-white mb-6">Contact us for information on Commercial Mortgages</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="First Name *"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="Last Name *"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="Email *"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToUpdates"
                        name="agreeToUpdates"
                        checked={formData.agreeToUpdates}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 rounded border-white/20 cursor-pointer"
                      />
                      <label htmlFor="agreeToUpdates" className="ml-3 text-xs text-white/90">
                        I agree to receive updates about Commercial Mortgage products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-[#1e3f6a] font-semibold py-3 rounded-lg transition-colors duration-300 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
