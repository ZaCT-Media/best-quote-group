'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function WhatWeDoPage() {
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
          title="What We Do"
          subtitle="Specialist finance brokers for business and investment"
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
                    Our Services
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-sm">
                      We are Specialist Finance Brokers in the Business and Investment Market. We can advise and arrange specialist lending facilities for all your business and investment borrowing needs.
                    </p>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Our Specialties</h3>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Business finance solutions</li>
                        <li>Investment property lending</li>
                        <li>Commercial mortgages</li>
                        <li>Development finance</li>
                        <li>Asset finance</li>
                        <li>Bridging loans</li>
                        <li>Buy-to-let financing</li>
                        <li>Business services and advisory</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-[#1e3f6a] rounded-lg p-6 shadow-lg sticky top-4 lg:top-[240px]">
                  <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>

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
                        I agree to receive updates. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
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
