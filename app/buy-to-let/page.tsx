import Image from 'next/image';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function BuyToLetPage() {
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
                title="Buy to Let HMO & MUFB Finance"
                subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
                imagePath="/hmo-hero.jpg"
                backgroundPosition="center"
              />

              {/* Images Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/hmo-1.jpg"
                    alt="HMO Property 1"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/hmo-2.jpg"
                    alt="HMO Property 2"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/mufb.png"
                    alt="MUFB Property"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  Buy-to-Let (BTL) Mortgages
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    A BTL (Buy-to-Let) mortgage is a type of loan specifically designed for purchasing property that you intend to rent out to tenants, rather than live in yourself. It&apos;s an investment mortgage for landlords and property investors.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Key Characteristics</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li>Higher deposits: Typically require 20-25% deposit minimum, often more than standard residential mortgages</li>
                      <li>Interest rates: Usually higher than owner-occupier mortgages, reflecting the increased risk lenders perceive with rental properties</li>
                      <li>Rental yield requirements: Lenders typically want the expected rental income to be 125-145% of the monthly mortgage payment to ensure the property can cover costs</li>
                      <li>Stricter lending criteria: More stringent income verification and credit checks, as lenders view buy-to-let as higher risk</li>
                      <li>Tax implications: Rental income is taxable, and there are specific rules around mortgage interest relief for landlords</li>
                      <li>Different regulations: BTL mortgages aren&apos;t covered by the same consumer protections as residential mortgages and may have different early repayment charges</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-4">
                      BTL mortgages became popular during property booms as a way for individuals to build property portfolios, though recent tax changes and regulations have made them less attractive than they once were. They&apos;re commonly used by both individual investors and those looking to supplement their retirement income through rental yields.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">House of Multiple Occupancy (HMO)</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      A House of Multiple Occupancy (HMO) is a property where multiple tenants live who are not all from the same household or family. In the UK, where this term is most commonly used, an HMO typically involves:
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-2">Key Characteristics</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
                      <li>Three or more tenants forming more than one household</li>
                      <li>Tenants who share facilities like kitchens, bathrooms, or living areas</li>
                      <li>Each tenant usually has their own bedroom but shares common areas</li>
                      <li>Tenants pay rent individually rather than as a group</li>
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-2">Common Types</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
                      <li>Student accommodation with individual bedrooms and shared facilities</li>
                      <li>Bedsits or studio flats within a converted house</li>
                      <li>Shared houses where professionals rent individual rooms</li>
                      <li>Converted properties split into multiple living units</li>
                    </ul>

                    <p className="text-sm text-gray-700">
                      HMOs are subject to specific regulations and licensing requirements, particularly for larger properties (typically 5+ occupants). These cover fire safety, space standards, amenities, and management standards to ensure tenant welfare. HMOs provide affordable housing options, particularly in areas with high property prices, and are popular among students, young professionals, and others seeking flexible, lower-cost accommodation.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Multi-Unit Freehold Block (MUFB)</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p>
                        Multi-unit freehold blocks (MUFBs) are singular freehold buildings that contain multiple self-contained units. A typical example is a tower block with multiple flats. Each one of these units can have its own entrance, kitchen, and bedrooms etc. But, there will be certain shared areas among the residents, such as hallways and outdoor spaces.
                      </p>
                      <p>
                        The tenants in each unit will have their own Assured Shorthold Tenancy (AST), although an MUFB itself will be a single freehold property.
                      </p>
                      <p>
                        While tower blocks are what many think of when they picture MUFBs, they can actually take on other forms. Multiple houses or rows of houses on one freehold, and houses converted into flats can also be MUFBs.
                      </p>
                      <p>
                        Given the variation involved, an MUFB could have as few as two flats, or several hundred, depending on the size and scale of the asset. It should be noted that, despite also being able to house multiple tenants, there are some key differences between MUFBs and HMOs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm
                serviceName="Buy to Let HMO & MUFB Finance"
                serviceFields={[
                  { name: 'propertyValue', label: 'What is the property value?' },
                  { name: 'amountToBorrow', label: 'How much do you want to borrow?' },
                  { name: 'monthlyRent', label: 'How much does the property obtain in monthly rent?' },
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
