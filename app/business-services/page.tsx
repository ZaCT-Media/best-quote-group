import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function BusinessServicesPage() {
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
                title="Business Services"
                subtitle="Comprehensive professional services to support your property development and business needs"
                imagePath="/business-services-hero.jpg"
                objectFit="contain"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  Our Business Services
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    We provide a comprehensive range of professional services to support your business and property development projects from conception through to completion.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Architectural Services</h3>
                        <p className="text-sm text-gray-700">
                          From initial idea through to plan design. Our architectural team can help bring your vision to life with professional design services tailored to your project requirements.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Planning Permission</h3>
                        <p className="text-sm text-gray-700">
                          We can help and advice on all aspects of planning permission, from initial plan through to approval. Navigate the complexities of planning regulations with expert guidance.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Quantity Surveying</h3>
                        <p className="text-sm text-gray-700">
                          Managing projects estimates, costings and contracts. Our quantity surveying services ensure your project stays on budget and meets financial objectives.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Buildings Control</h3>
                        <p className="text-sm text-gray-700">
                          Plan submission, inspection and final completion. We manage the building control process to ensure compliance with regulations and standards.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Building Warranties</h3>
                        <p className="text-sm text-gray-700">
                          Lender required 10 year insurance policies against structural defects in new or converted properties due to faulty design, workmanship, or materials. Protect your investment with comprehensive warranty coverage.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Commercial Leases</h3>
                        <p className="text-sm text-gray-700">
                          Lease generation and legal process to protect both landlord and tenant. We facilitate fair and comprehensive lease agreements for commercial properties.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Legal Services</h3>
                        <p className="text-sm text-gray-700">
                          Commercial Litigation. Expert legal support for commercial disputes and business-related legal matters.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <p className="text-sm text-gray-700 font-semibold">
                      Get in touch to discuss how our business services can support your next project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm
                serviceName="Business Services"
                serviceFields={[
                  {
                    name: 'adviceNeeded',
                    label: 'Please tell us what you need help and advice on',
                    placeholder: 'E.g planning permission, Building Warranties',
                  },
                ]}
              />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
