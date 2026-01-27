import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function WhatWeDoPage() {
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
                title="What We Do"
                subtitle="Specialist finance brokers for business and investment"
                imagePath="/business-loans-hero.jpg"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  Our Services
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    We are Specialist Finance Brokers in the Business and Investment Market. We can advise and arrange specialist lending facilities for all your business and investment borrowing needs.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Our Specialties</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Business finance solutions</li>
                      <li>Investment property lending</li>
                      <li>Commercial mortgages</li>
                      <li>Development finance</li>
                      <li>Asset finance</li>
                      <li>Bridging loans</li>
                      <li>Buy-to-let financing</li>
                      <li>Business services and advisory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="What We Do" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
