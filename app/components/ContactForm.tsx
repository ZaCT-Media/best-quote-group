'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { contactData } from '../lib/contact-data';

interface ContactFormProps {
  serviceName: string;
}

export default function ContactForm({ serviceName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

    if (!turnstileToken) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ready to discuss your {serviceName} needs? Fill out the form below and we&apos;ll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                placeholder="john.smith@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3f6a] focus:border-transparent resize-none"
                placeholder="Tell us more about your needs..."
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToUpdates"
                name="agreeToUpdates"
                checked={formData.agreeToUpdates}
                onChange={handleChange}
                required
                className="mt-1 h-5 w-5 text-[#1e3f6a] border-gray-300 rounded focus:ring-[#1e3f6a] cursor-pointer"
              />
              <label htmlFor="agreeToUpdates" className="ml-3 text-sm text-gray-700">
                I agree to receive communication updates about Best Quote Commercial Finance&apos;s {serviceName} products and services.{' '}
                <Link href="#privacy-policy" className="text-[#1e3f6a] hover:text-[#1e3f6a] underline">
                  Privacy Policy
                </Link>
                <span className="text-red-500"> *</span>
              </label>
            </div>

            {/* Turnstile CAPTCHA */}
            <div className="cf-turnstile" data-sitekey={contactData.turnstileSiteKey} data-callback="onTurnstileSuccess"></div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!turnstileToken}
                className="w-full bg-[#1e3f6a] hover:bg-[#1e3f6a] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
