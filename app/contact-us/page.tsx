import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';
import { contactData } from '../lib/contact-data';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Two Column Layout: Content + Sticky Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">

            {/* Left Column - Hero and Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Section */}
              <ServiceHero
                title="Contact Us"
                subtitle="Get in touch with our expert team"
                imagePath="/business-loans-hero.jpg"
              />

              {/* Contact Information Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700 text-sm">
                    Have questions about our services? Our expert team is here to help you find the best commercial finance solution for your needs.
                  </p>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e3f6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-1">Phone</h3>
                      <a href={`tel:${contactData.phone}`} className="text-gray-700 hover:text-[#1e3f6a] transition cursor-pointer">
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e3f6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-1">Email</h3>
                      <a href={`mailto:${contactData.email}`} className="text-gray-700 hover:text-[#1e3f6a] transition cursor-pointer break-all">
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e3f6a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e3f6a] mb-1">WhatsApp</h3>
                      <a
                        href={`https://wa.me/${contactData.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#1e3f6a] transition cursor-pointer"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Business Hours</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="Contact Us" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
