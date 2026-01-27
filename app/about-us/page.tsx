import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function AboutUsPage() {
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
                title="About Us"
                subtitle="Over 30 years of experience in commercial finance"
                imagePath="/business-loans-hero.jpg"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  About BestQuote Commercial Finance
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    BestQuote Commercial Finance has over 30 years experience in the finance industry and specific to both Business financing and Asset backed lending.
                  </p>
                  <p className="text-sm">
                    From initial market analysis to funds being released, we have a wealth of knowledge on how to obtain you the best rates and the quickest lending completions.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">Our Expertise</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Over 30 years of industry experience</li>
                      <li>Specialists in business financing</li>
                      <li>Asset-backed lending experts</li>
                      <li>Market analysis and competitive rates</li>
                      <li>Fast and efficient lending completions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="About Us" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
