import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { contactData } from '../lib/contact-data';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 text-center mb-10">
              Your enquiry has been successfully submitted.
            </p>

            {/* What Happens Next */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#1e3f6a] mb-6 text-center">
                What Happens Next?
              </h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1e3f6a] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-gray-700 pt-1">
                    Our team will review your enquiry within 24 hours
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1e3f6a] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-gray-700 pt-1">
                    An expert will contact you to discuss your needs
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1e3f6a] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-gray-700 pt-1">
                    We&apos;ll find the best commercial finance solution for you
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Contact Section */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a
                  href={`tel:${contactData.phone}`}
                  className="flex items-center gap-2 text-[#1e3f6a] hover:text-[#1e3f6a]/80 font-semibold transition cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contactData.phone}
                </a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a
                  href={`https://wa.me/${contactData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] font-semibold transition cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-block px-10 py-4 bg-[#1e3f6a] hover:bg-[#1e3f6a]/90 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg cursor-pointer"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
