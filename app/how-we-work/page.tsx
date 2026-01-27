import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import StickyContactForm from '../components/StickyContactForm';
import Footer from '../components/Footer';

export default function HowWeWorkPage() {
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
                title="How We Work"
                subtitle="A one-stop shop for all your business finance needs"
                imagePath="/business-loans-hero.jpg"
              />

              {/* Content Section */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3f6a] mb-4">
                  Our Process
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p className="text-sm">
                    BestQuote Commercial Finance offer a one stop shop for arranging your business finance needs, to undertaking the administrative process right through to funds being released.
                  </p>
                  <p className="text-sm">
                    From start to finish, our detailed expert knowledge, allow us to be able to take the process of financing your Business for you and allowing you to remain focused on running your business, from application, valuations, legals and completion, we take control of the whole process. In addition to that, we don&apos;t charge any fees for our advice and arrangement.
                  </p>

                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-[#1e3f6a] mb-4">What We Handle</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Complete application process</li>
                      <li>Property valuations</li>
                      <li>Legal documentation</li>
                      <li>Process management from start to finish</li>
                      <li>No fees for advice and arrangement</li>
                      <li>Allowing you to focus on your business</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <StickyContactForm serviceName="How We Work" />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
