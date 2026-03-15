import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function BusinessLoansPage() {
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
                title="Business Loans"
                subtitle="Flexible financing solutions to help your business grow and thrive"
                imagePath="/business-loans-hero.jpg"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  Types of Business Loans
                </h2>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Secured Loans</h3>
                    <p className="text-sm">
                      This type of loan requires you to provide an asset, such as property, equipment, or company shares, as collateral. This lowers the risk for the lender, which can result in more competitive interest rates and larger borrowing amounts. However, you risk losing the asset if you default on the loan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Unsecured Loans</h3>
                    <p className="text-sm">
                      These loans do not require collateral. They are generally available for smaller sums and come with higher interest rates to compensate the lender for the increased risk. For limited companies, lenders may require a personal guarantee, making you personally liable if the business cannot repay the loan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-2">Start-up Loans</h3>
                    <p className="text-sm">
                      Designed for new businesses that have been trading for less than 36 months, these can be unsecured and are often government-backed, such as the UK&apos;s Start Up Loans scheme. The amount is typically capped at £25,000.
                    </p>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">When to Use a Business Loan</h3>
                    <p className="text-sm mb-3">A business loan can be used for a wide variety of purposes:</p>

                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Covering day-to-day running costs and boosting cash flow</li>
                      <li>Purchasing new equipment, vehicles, or inventory</li>
                      <li>Funding expansion into new markets or acquiring another business</li>
                      <li>Renovating or building new business premises</li>
                      <li>Consolidating existing debt into a single, more manageable payment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm
                serviceName="Business Loans"
                serviceFields={[
                  { name: 'amountToBorrow', label: 'How much do you want to borrow?' },
                  { name: 'fundsDuration', label: 'For how long do you want the funds?', placeholder: 'Enter Term I.E 6 months, 12 months' },
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
