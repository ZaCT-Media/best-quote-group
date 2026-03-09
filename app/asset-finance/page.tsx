import Image from 'next/image';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function AssetFinancePage() {
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
                title="Asset Finance"
                subtitle="Acquire essential equipment and machinery with flexible financing solutions"
                imagePath="/asset-finance-hero.jpg"
              />

              {/* Images Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/machinery-finance.jpg"
                    alt="Machinery Finance"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/lorry.jpg"
                    alt="Vehicle Finance"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/crawler-crane.jpg"
                    alt="Construction Equipment Finance"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  What is Asset Finance?
                </h2>
                <div className="space-y-4">
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>
                      Asset finance is a broad term for a range of financial products that allow businesses to acquire essential assets like machinery, vehicles, or equipment, rather than paying the full cost upfront. Instead of a standard loan, asset finance uses the purchased asset as collateral for the loan, or provides the asset through mechanisms like leasing.
                    </p>
                    <p>
                      Businesses make regular, affordable monthly payments over an agreed period, helping to conserve cash flow for other priorities, and can also use asset refinance to unlock capital from existing assets.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Benefits of Asset Finance</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Preserves Cash Flow:</span> Spreading costs over time prevents a large upfront outlay, protecting your business&apos;s capital for other essential expenses.</li>
                      <li><span className="font-semibold">Access to Modern Assets:</span> It allows businesses to access new, more advanced, or necessary equipment that they might not otherwise be able to afford.</li>
                      <li><span className="font-semibold">Flexibility:</span> Various asset finance options are available, allowing businesses to choose an agreement that best suits their specific needs.</li>
                      <li><span className="font-semibold">Can Use Existing Assets:</span> Asset refinance offers a way to generate cash by borrowing against the value of assets your business already owns.</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Common Types of Asset Finance</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Hire Purchase</h4>
                        <p className="text-sm text-gray-700">You pay a deposit and then make regular payments, owning the asset at the end of the term.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Leasing (including Finance and Operating Leases)</h4>
                        <p className="text-sm text-gray-700">You pay a regular fee to use the asset for an agreed period, similar to renting.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Refinancing/Capital Release</h4>
                        <p className="text-sm text-gray-700">You borrow money against assets you already own.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm
                serviceName="Asset Finance"
                serviceFields={[
                  { name: 'assetType', label: 'What is the asset you want to finance?' },
                  { name: 'amountToBorrow', label: 'How much do you want to borrow?' },
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
