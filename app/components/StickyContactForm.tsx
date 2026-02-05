'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { contactData } from '../lib/contact-data';

interface StickyContactFormProps {
  serviceName?: string;
}

export default function StickyContactForm({ serviceName }: StickyContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToUpdates: false,
    service: serviceName || '',
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

    // Add global callback with unique name for sticky form
    ;(window as Window & { onTurnstileSuccessSticky?: (token: string) => void }).onTurnstileSuccessSticky = (token: string) => {
      setTurnstileToken(token);
    };

    return () => {
      delete (window as Window & { onTurnstileSuccessSticky?: (token: string) => void }).onTurnstileSuccessSticky;
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
    <div className="lg:sticky lg:top-4 lg:self-start">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 relative border border-gray-100 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1e3f6a]/5 to-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-400/5 to-[#1e3f6a]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Get Your Quote
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
            {serviceName ? `Interested in ${serviceName}? ` : ''}We&apos;ll respond within <span className="font-semibold text-[#1e3f6a]">24 hours</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3f6a]/20 focus:border-[#1e3f6a] transition-all duration-200 placeholder:text-gray-400"
                  placeholder="First Name"
                />
              </div>

              <div className="group">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3f6a]/20 focus:border-[#1e3f6a] transition-all duration-200 placeholder:text-gray-400"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3f6a]/20 focus:border-[#1e3f6a] transition-all duration-200 placeholder:text-gray-400"
                placeholder="Email Address"
              />
            </div>

            <div className="group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3f6a]/20 focus:border-[#1e3f6a] transition-all duration-200 placeholder:text-gray-400"
                placeholder="Phone Number"
              />
            </div>

            <div className="group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3f6a]/20 focus:border-[#1e3f6a] transition-all duration-200 placeholder:text-gray-400 resize-none"
                placeholder="Additional details (optional)"
              ></textarea>
            </div>

            <div className="flex items-start gap-3 pt-2 pb-2">
              <input
                type="checkbox"
                id="agreeToUpdates"
                name="agreeToUpdates"
                checked={formData.agreeToUpdates}
                onChange={handleChange}
                required
                className="mt-0.5 h-5 w-5 rounded-md border-gray-300 text-[#1e3f6a] focus:ring-[#1e3f6a] cursor-pointer"
              />
              <label htmlFor="agreeToUpdates" className="text-xs text-gray-600 leading-relaxed">
                I agree to receive updates about Best Quote Commercial Finance products and services.{' '}
                <Link href="/privacy-policy" className="text-[#1e3f6a] underline hover:text-[#2a5186] font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Turnstile CAPTCHA */}
            <div className="flex justify-center w-full overflow-x-auto">
              <div className="cf-turnstile" data-sitekey={contactData.turnstileSiteKey} data-callback="onTurnstileSuccessSticky" data-size="flexible"></div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1e3f6a] to-[#2a5186] hover:from-[#2a5186] hover:to-[#1e3f6a] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get My Free Quote
            </button>

            {/* Trust Signals */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-gray-600 font-medium">
                  Secure & Confidential
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-xs text-gray-600 font-medium">
                  Response in 24 hours
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
