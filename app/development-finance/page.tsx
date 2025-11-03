'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function DevelopmentFinancePage() {
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
          title="Development Finance"
          subtitle="Fund your property development projects with flexible financing solutions"
          imagePath="/hmo-hero.jpg"
        />

        {/* Main Content Section - Two Column Layout */}
        <section className="py-12 bg-[#2e3450]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Text Content */}
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#2e3450] mb-4">
                    What is Development Finance?
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Development finance gives you the ability to fund the costs of developing a building project. It works on the basis of constructing property on land or developing of an existing property, the renovation of an existing building, and the subsequent sale or refinance of that project.
                    </p>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">How Development Finance Works</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[#2e3450]">Land Acquisition</h4>
                          <p className="text-sm">Developers often need capital to purchase land or existing properties for development.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">Construction Financing</h4>
                          <p className="text-sm">Once the land is acquired, financing is required for the actual construction or renovation of buildings. This includes funding for materials, labor, contractors, and other construction-related expenses. Construction financing can be obtained through loans or other financing mechanisms.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">Project Viability Assessment</h4>
                          <p className="text-sm">Lenders will ascertain the viability of the project by way of the costs of purchase, costs of development and the gross development value upon completion.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">Exit Strategy</h4>
                          <p className="text-sm">Developers will need to plan for the forward event of clearing the development loan, either by way of refinancing or sale.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">Our Expertise</h3>
                      <p className="text-sm">
                        BestQuote Commercial also have a vast experience in all legal aspects and requirements of Development Finance, ensuring your project is supported every step of the way.
                      </p>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">What We Finance</h3>

                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>New build construction projects</li>
                        <li>Property renovations and conversions</li>
                        <li>Land acquisition for development</li>
                        <li>Mixed-use developments</li>
                        <li>Residential and commercial projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <div className="bg-[#464f7f] rounded-lg p-6 shadow-lg sticky top-4">
                  <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>

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
                        placeholder="Tell us about your development project..."
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
                        I agree to receive updates about Development Finance products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2e3450] hover:bg-[#2e3450]/90 text-white font-semibold py-3 rounded-lg transition-colors duration-300 cursor-pointer"
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
