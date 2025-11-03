'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function AssetFinancePage() {
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
          title="Asset Finance"
          subtitle="Acquire essential equipment and machinery with flexible financing solutions"
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
                    What is Asset Finance?
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Asset finance is a broad term for a range of financial products that allow businesses to acquire essential assets like machinery, vehicles, or equipment, rather than paying the full cost upfront. Instead of a standard loan, asset finance uses the purchased asset as collateral for the loan, or provides the asset through mechanisms like leasing.
                    </p>
                    <p>
                      Businesses make regular, affordable monthly payments over an agreed period, helping to conserve cash flow for other priorities, and can also use asset refinance to unlock capital from existing assets.
                    </p>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">How Asset Finance Works</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[#2e3450]">1. Acquiring Assets</h4>
                          <p className="text-sm">A lender or lessor provides funds or the asset itself to a business to acquire new or used equipment, vehicles, machinery, or other capital goods.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">2. Collateral</h4>
                          <p className="text-sm">The asset being financed serves as security for the loan, reducing the lender&apos;s risk and potentially leading to lower interest rates.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">3. Repayment</h4>
                          <p className="text-sm">The business repays the loan or lease in regular instalments over a set period, often with interest, making the purchase more manageable.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2e3450]">4. Ownership</h4>
                          <p className="text-sm">At the end of the agreed term, the business typically owns the asset outright.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">Benefits of Asset Finance</h3>

                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>Preserves Cash Flow:</strong> Spreading costs over time prevents a large upfront outlay, protecting your business&apos;s capital for other essential expenses.</li>
                        <li><strong>Access to Modern Assets:</strong> It allows businesses to access new, more advanced, or necessary equipment that they might not otherwise be able to afford.</li>
                        <li><strong>Flexibility:</strong> Various asset finance options are available, allowing businesses to choose an agreement that best suits their specific needs.</li>
                        <li><strong>Can Use Existing Assets:</strong> Asset refinance offers a way to generate cash by borrowing against the value of assets your business already owns.</li>
                      </ul>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-[#2e3450] mb-4">Common Types of Asset Finance</h3>

                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>Hire Purchase:</strong> You pay a deposit and then make regular payments, owning the asset at the end of the term.</li>
                        <li><strong>Leasing (including Finance and Operating Leases):</strong> You pay a regular fee to use the asset for an agreed period, similar to renting.</li>
                        <li><strong>Refinancing/Capital Release:</strong> You borrow money against assets you already own.</li>
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
                        I agree to receive updates about Asset Finance products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
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
