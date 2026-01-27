import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function BridgingLoansPage() {
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
                title="Bridging Loans"
                subtitle="Fast, flexible short-term financing to bridge your property transactions"
                imagePath="/bridging-loans-hero.jpg"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  What is a Bridging Loan?
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    A bridging loan is a short-term, secured loan used to cover a temporary financial gap, most often to &quot;bridge&quot; the time between buying a new property before selling an existing one. These loans are typically secured against an asset like property, and because they are arranged quickly, they can be more expensive than long-term loans. They are used when speed is essential and funds are needed to complete a transaction.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">How They Work</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Secured against an asset</h4>
                        <p className="text-sm text-gray-700">You must use a high-value asset, like a house, as collateral. The loan is secured against this asset with a first or second charge.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Interest-only</h4>
                        <p className="text-sm text-gray-700">Bridging loans are interest-only, meaning the principal is not paid down during the term.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Repayment</h4>
                        <p className="text-sm text-gray-700">Interest can be paid monthly or deferred until the end of the loan term.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Clear exit strategy</h4>
                        <p className="text-sm text-gray-700">You must have a clear plan for how you will repay the loan, such as the sale of the property or another permanent financial arrangement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-3">Common Uses</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      <li><span className="font-semibold">Buying a new home:</span> A homeowner can use a bridging loan to buy a new property before their current home is sold.</li>
                      <li><span className="font-semibold">Property development:</span> To finance property development projects or renovations.</li>
                      <li><span className="font-semibold">Auction purchases:</span> To quickly fund a property purchased at an auction with a tight deadline.</li>
                      <li><span className="font-semibold">Business purposes:</span> Businesses may use them for large purchases, renovations, or bridging a gap in working capital.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="Bridging Loans" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
