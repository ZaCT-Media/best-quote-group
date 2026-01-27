'use client';

import { useState } from 'react';
import Link from 'next/link';

interface InlineCTAProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'compact';
}

export default function InlineCTA({
  title = "Ready to Get Started?",
  description = "Speak with our experts today and discover the best financing options for your needs.",
  variant = 'default'
}: InlineCTAProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick contact submitted:', formData);
    setFormData({
      email: '',
      phone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-[#1e3f6a] to-[#2a5186] rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
          </div>
          <Link
            href="/contact-us"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#1e3f6a] via-[#2a5186] to-[#1e3f6a] rounded-2xl p-8 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-lg">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 border border-white/20 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Your Email Address *"
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 border border-white/20 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="Your Phone Number *"
          />

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Request Callback
          </button>
        </form>

        <p className="text-center text-white/70 text-xs mt-4">
          By submitting, you agree to our{' '}
          <Link href="/privacy-policy" className="text-yellow-400 underline hover:text-yellow-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
