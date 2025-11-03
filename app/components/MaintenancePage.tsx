'use client';

import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

interface MaintenancePageProps {
  title: string;
  serviceName: string;
}

export default function MaintenancePage({ title, serviceName }: MaintenancePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-[140px] lg:mt-[200px]">
        {/* Maintenance Section */}
        <section className="py-20 bg-[#2e3450]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg p-12 shadow-lg">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <svg
                  className="w-20 h-20 text-[#464f7f]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-[#2e3450] mb-4">
                {title}
              </h1>

              {/* Message */}
              <p className="text-xl text-gray-600 mb-8">
                This page is currently under construction
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-700 mb-6">
                  We&apos;re working hard to bring you detailed information about our {serviceName} services. In the meantime, please get in touch with us to discuss your requirements.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <a
                    href="tel:01279909750"
                    className="inline-flex items-center justify-center space-x-2 text-[#464f7f] hover:text-[#2e3450] transition cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-2xl font-bold">01279 909750</span>
                  </a>

                  <p className="text-sm text-gray-500">
                    Our team of experts is ready to help you with your {serviceName} needs
                  </p>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                  <Link
                    href="/#services"
                    className="inline-block bg-[#464f7f] hover:bg-[#2e3450] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
                  >
                    Return to Services
                  </Link>
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
