'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function BusinessLoansPage() {
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
          title="Business Loans"
          subtitle="Flexible financing solutions to help your business grow and thrive"
          imagePath="/business-loans-hero.jpg"
        />

        {/* Main Content Section - Two Column Layout */}
        <section className="py-12 bg-[#1e3f6a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Text Content */}
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                    Types of Business Loans
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Secured Loans</h3>
                      <p className="text-sm">
                        This type of loan requires you to provide an asset, such as property, equipment, or company shares, as collateral. This lowers the risk for the lender, which can result in more competitive interest rates and larger borrowing amounts. However, you risk losing the asset if you default on the loan.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Unsecured Loans</h3>
                      <p className="text-sm">
                        These loans do not require collateral. They are generally available for smaller sums and come with higher interest rates to compensate the lender for the increased risk. For limited companies, lenders may require a personal guarantee, making you personally liable if the business cannot repay the loan.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Start-up Loans</h3>
                      <p className="text-sm">
                        Designed for new businesses that have been trading for less than 36 months, these can be unsecured and are often government-backed, such as the UK&apos;s Start Up Loans scheme. The amount is typically capped at £25,000.
                      </p>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">When to Use a Business Loan</h3>
                      <p className="text-sm mb-3">A business loan can be used for a wide variety of purposes:</p>

                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Covering day-to-day running costs and boosting cash flow</li>
                        <li>Purchasing new equipment, vehicles, or inventory</li>
                        <li>Funding expansion into new markets or acquiring another business</li>
                        <li>Renovating or building new business premises</li>
                        <li>Consolidating existing debt into a single, more manageable payment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-[#1e3f6a] rounded-lg p-6 shadow-lg sticky top-4 lg:top-[240px]">
                  <h3 className="text-xl font-bold text-white mb-6">Contact us for information on Business Loans</h3>

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
                        I agree to receive updates about Business Loan products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
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
