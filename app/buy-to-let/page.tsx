'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import Footer from '../components/Footer';

export default function BuyToLetPage() {
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
      <main className="flex-1 mt-[140px] lg:mt-[200px]">
        <ServiceHero
          title="Buy to Let HMO & MUFB Finance"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
          imagePath="/hmo-hero.jpg"
        />

        {/* Main Content Section */}
        <section className="py-12 bg-[#2e3450]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar - Images */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/hmo-1.jpg"
                    alt="HMO Property 1"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/hmo-2.jpg"
                    alt="HMO Property 2"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/mufb.png"
                    alt="MUFB Property"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-9">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#2e3450] mb-4">
                      House of Multiple Occupancy (HMO)
                    </h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        A House of Multiple Occupancy (HMO) is a property where multiple tenants live who are not all from the same household or family. In the UK, where this term is most commonly used, an HMO typically involves:
                      </p>

                      <h3 className="text-lg font-semibold text-[#2e3450] mt-4">Key Characteristics:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Three or more tenants forming more than one household</li>
                        <li>Tenants who share facilities like kitchens, bathrooms, or living areas</li>
                        <li>Each tenant usually has their own bedroom but shares common areas</li>
                        <li>Tenants pay rent individually rather than as a group</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-[#2e3450] mt-4">Common Types:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Student accommodation with individual bedrooms</li>
                        <li>Bedsits or studio flats within a converted house</li>
                        <li>Shared houses where professionals rent rooms</li>
                        <li>Converted properties split into multiple units</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h2 className="text-2xl font-bold text-[#2e3450] mb-4">
                      Multi-Unit Freehold Block (MUFB)
                    </h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Multi-unit freehold blocks (MUFBs) are singular freehold buildings that contain multiple self-contained units. A typical example is a tower block with multiple flats.
                      </p>
                      <p>
                        Each unit can have its own entrance, kitchen, and bedrooms, with shared areas among residents such as hallways and outdoor spaces.
                      </p>
                      <p>
                        The tenants in each unit will have their own Assured Shorthold Tenancy (AST), although an MUFB itself will be a single freehold property.
                      </p>
                      <p>
                        Given the variation involved, an MUFB could have as few as two flats, or several hundred, depending on the size and scale of the asset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-gray-50" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Contact Us
            </h2>

            <div className="bg-[#2e3450] rounded-lg p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information - Left Column */}
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                <div className="space-y-8">
                  {/* Phone */}
                  <div>
                    <p className="text-white/70 text-sm mb-2">Call us</p>
                    <a href="tel:01279909750" className="text-2xl font-semibold hover:text-white/90 transition">
                      01279 909750
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-white/70 text-sm mb-2">Email us</p>
                    <a href="mailto:info@bestquotecommercialfinance.com" className="text-base md:text-lg hover:text-white/90 transition break-words">
                      info@bestquotecommercialfinance.com
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <p className="text-white/70 text-sm mb-2">Business Hours</p>
                    <p className="text-lg">Monday - Friday</p>
                    <p className="text-lg">9:00 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Column */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      rows={5}
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
                    <label htmlFor="agreeToUpdates" className="ml-3 text-sm text-white/90">
                      I agree to receive updates about Buy to Let HMO & MUFB products. <Link href="#privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#464f7f] hover:bg-[#464f7f]/80 text-white font-semibold py-4 rounded-lg transition-colors duration-300 text-lg cursor-pointer"
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
