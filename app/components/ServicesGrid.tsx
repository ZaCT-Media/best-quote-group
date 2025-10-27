import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
}

function ServiceCard({ title, href, description }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="bg-gradient-to-br from-[#2e3450] to-[#464f7f] rounded-lg p-8 h-full flex flex-col justify-between shadow-lg hover:from-[#464f7f] hover:to-[#2e3450] transition-all duration-300 group cursor-pointer">
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="text-white text-sm font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform mt-4">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const services = [
    {
      title: 'Business Loans',
      href: '#business-loans',
      description: 'Flexible business loan solutions tailored to your needs. Get the funding you need to grow and expand your business operations.'
    },
    {
      title: 'Commercial Mortgages',
      href: '#commercial-mortgages',
      description: 'Expand your business with our commercial mortgage options. Whether you\'re purchasing new premises or refinancing existing property, our bespoke solutions are designed to support your business growth.'
    },
    {
      title: 'Buy To Let Inc HMO and MUFB',
      href: '#buy-to-let',
      description: 'Specialist finance for buy-to-let properties, Houses in Multiple Occupation (HMO), and Multi-Unit Freehold Blocks (MUFB) to maximise your property investment returns.'
    },
    {
      title: 'Bridging Loans',
      href: '#bridging-loans',
      description: 'For those needing short-term finance solutions, our bridging loans offer quick access to funds. Ideal for property transactions or urgent financial needs, we provide fast, flexible solutions tailored to your situation.'
    },
    {
      title: 'Development Finance',
      href: '#development-finance',
      description: 'Our development finance solutions are designed to support property developers and investors at every stage of their project. From initial land purchase to construction and final sale.'
    },
    {
      title: 'Asset Finance',
      href: '#asset-finance',
      description: 'Asset finance is a broad term for a range of financial products that allow businesses to acquire essential assets like machinery, vehicles, or equipment, rather than paying the full cost upfront.'
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} href={service.href} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
