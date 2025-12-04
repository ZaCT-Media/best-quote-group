'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function BridgingLoansPage() {
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
          title="Bridging Loans"
          subtitle="Fast, flexible short-term financing to bridge your property transactions"
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
                    What is a Bridging Loan?
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-sm">
                      A bridging loan is a short-term, secured loan used to cover a temporary financial gap, most often to &quot;bridge&quot; the time between buying a new property before selling an existing one. These loans are typically secured against an asset like property, and because they are arranged quickly, they can be more expensive than long-term loans. They are used when speed is essential and funds are needed to complete a transaction.
                    </p>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">How They Work</h3>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Secured against an asset</h4>
                          <p className="text-sm">You must use a high-value asset, like a house, as collateral. The loan is secured against this asset with a first or second charge.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Interest-only</h4>
                          <p className="text-sm">Bridging loans are interest-only, meaning the principal is not paid down during the term.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Repayment</h4>
                          <p className="text-sm">Interest can be paid monthly or deferred until the end of the loan term.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Clear exit strategy</h4>
                          <p className="text-sm">You must have a clear plan for how you will repay the loan, such as the sale of the property or another permanent financial arrangement.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Common Uses</h3>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Buying a new home</h4>
                          <p className="text-sm">A homeowner can use a bridging loan to buy a new property before their current home is sold.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Property development</h4>
                          <p className="text-sm">To finance property development projects or renovations.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Auction purchases</h4>
                          <p className="text-sm">To quickly fund a property purchased at an auction with a tight deadline.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1e3f6a]">Business purposes</h4>
                          <p className="text-sm">Businesses may use them for large purchases, renovations, or bridging a gap in working capital.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-[#1e3f6a] rounded-lg p-6 shadow-lg sticky top-4 lg:top-[240px]">
                  <h3 className="text-xl font-bold text-white mb-6">Contact us for information on Bridging Loans</h3>

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
                        I agree to receive updates about Bridging Loan products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
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
