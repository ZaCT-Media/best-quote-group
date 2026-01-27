import Image from 'next/image';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function CommercialMortgagesPage() {
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
                title="Commercial Mortgages"
                subtitle="Financing solutions for business properties from £150k to £15m"
                imagePath="/home/warehouse-outside.jpg"
                backgroundPosition="center"
              />

              {/* Images Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/commercial-units.jpg"
                    alt="Commercial Units"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/warehouse-finance.jpg"
                    alt="Warehouse Finance"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/hotels.jpg"
                    alt="Hotels"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  What is a Commercial Mortgage?
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    A commercial mortgage is a type of loan specifically designed for businesses and investors to purchase or refinance commercial properties.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Property Types</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Office buildings</li>
                        <li>Retail spaces</li>
                        <li>Industrial units</li>
                        <li>Hotels</li>
                        <li>Warehouses</li>
                        <li>Takeaways</li>
                      </ul>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>Car Showrooms</li>
                        <li>Garages</li>
                        <li>Nurseries</li>
                        <li>Food Outlets/Takeaways</li>
                        <li>Public Houses</li>
                        <li>Convenience Stores</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Key Features</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li><span className="font-semibold">Loan Amounts:</span> From £150k to £15m</li>
                      <li><span className="font-semibold">Terms:</span> Terms range from 5 to 25 years</li>
                      <li><span className="font-semibold">Interest Rates:</span> Interest rates on commercial mortgages can be fixed or variable, depending on the loan terms and the lender.</li>
                      <li><span className="font-semibold">Deposit Requirement:</span> Lenders typically require a down payment of 20% to 30% or more of the property&apos;s purchase price.</li>
                      <li><span className="font-semibold">Loan-to-Value (LTV):</span> Max 70%</li>
                      <li><span className="font-semibold">Use of Funds:</span> Borrowers can use the funds obtained through a commercial mortgage for various purposes, including purchasing a property, refinancing an existing mortgage, renovating or expanding a property, or even acquiring additional commercial property.</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <p className="text-sm font-semibold">
                      BestQuote also undertake the arranging of unsecured business loans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="Commercial Mortgages" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
