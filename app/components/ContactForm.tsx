'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { contactData } from '../lib/contact-data';

interface ContactFormProps {
  serviceName: string;
}

export default function ContactForm({ serviceName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreeToUpdates: false,
    service: serviceName,
  });
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    // Add Turnstile script if not already added
    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Add global callback
    ;(window as Window & { onTurnstileSuccess?: (token: string) => void }).onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };

    return () => {
      delete (window as Window & { onTurnstileSuccess?: (token: string) => void }).onTurnstileSuccess;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/formSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          'cf-turnstile-response': turnstileToken
        })
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = result.redirect || '/thank-you';
      } else {
        alert(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    }
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
    <section className="py-8 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center text-sm mb-5">
            Ready to discuss your {serviceName} needs? Fill out the form below and we&apos;ll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Row 1: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                  placeholder="john@example.co.uk"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Row 2: Message + Submit side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-end">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent resize-none"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1e3f6a] hover:bg-[#2a5186] text-white font-semibold px-8 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base cursor-pointer h-[72px]"
              >
                Submit Enquiry
              </button>
            </div>

            {/* Row 3: Checkbox + Turnstile */}
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-start gap-2 flex-1">
                <input
                  type="checkbox"
                  id="agreeToUpdates"
                  name="agreeToUpdates"
                  checked={formData.agreeToUpdates}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 text-[#1e3f6a] border-gray-300 rounded focus:ring-[#1e3f6a] cursor-pointer shrink-0"
                />
                <label htmlFor="agreeToUpdates" className="text-xs text-gray-600">
                  I agree to receive updates about Best Quote Commercial Finance&apos;s {serviceName} products and services.{' '}
                  <Link href="#privacy-policy" className="text-[#1e3f6a] underline">Privacy Policy</Link>
                  <span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="flex justify-center overflow-x-auto shrink-0">
                <div className="cf-turnstile" data-sitekey={contactData.turnstileSiteKey} data-callback="onTurnstileSuccess" data-size="flexible"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
