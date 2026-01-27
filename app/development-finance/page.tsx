import Image from 'next/image';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function DevelopmentFinancePage() {
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
                title="Development Finance"
                subtitle="Fund your property development projects with flexible financing solutions"
                imagePath="/development-finance-hero.jpg"
              />

              {/* Images Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/development-finance-1.jpg"
                    alt="Development Finance 1"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/development-finance-2.jpg"
                    alt="Refurbishment Finance"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/development-finance-3.jpg"
                    alt="Building Regulations"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  What is Development Finance?
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Development finance gives you the ability to fund the costs of developing a building project. It works on the basis of constructing property on land or developing of an existing property, the renovation of an existing building, and the subsequent sale or refinance of that project.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">How Development Finance Works</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Land Acquisition</h4>
                        <p className="text-sm text-gray-700">Developers often need capital to purchase land or existing properties for development.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Construction Financing</h4>
                        <p className="text-sm text-gray-700">Once the land is acquired, financing is required for the actual construction or renovation of buildings. This includes funding for materials, labor, contractors, and other construction-related expenses. Construction financing can be obtained through loans or other financing mechanisms.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project Viability Assessment</h4>
                        <p className="text-sm text-gray-700">Lenders will ascertain the viability of the project by way of the costs of purchase, costs of development and the gross development value upon completion.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Exit Strategy</h4>
                        <p className="text-sm text-gray-700">Developers will need to plan for the forward event of clearing the development loan, either by way of refinancing or sale.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Our Expertise</h3>
                    <p className="text-sm text-gray-700">
                      BestQuote Commercial also have a vast experience in all legal aspects and requirements of Development Finance, ensuring your project is supported every step of the way.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">What We Finance</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>New build construction projects</li>
                      <li>Property renovations and conversions</li>
                      <li>Land acquisition for development</li>
                      <li>Mixed-use developments</li>
                      <li>Residential and commercial projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="Development Finance" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
