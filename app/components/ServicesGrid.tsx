import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
}

function ServiceCard({ title, href }: ServiceCardProps) {
  return (
    <div className="bg-[#4169b8] rounded-lg p-8 h-64 flex flex-col justify-between shadow-lg hover:bg-[#3558a0] transition group">
      <h3 className="text-white text-2xl font-semibold">{title}</h3>
      <Link
        href={href}
        className="text-white text-sm font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
      >
        <span>Learn More</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default function ServicesGrid() {
  const services = [
    { title: 'Business Loans', href: '#business-loans' },
    { title: 'Commercial Mortgages', href: '#commercial-mortgages' },
    { title: 'Buy To Let Inc HMO and MUFB', href: '#buy-to-let' },
    { title: 'Bridging Loans', href: '#bridging-loans' },
    { title: 'Development Finance', href: '#development-finance' },
    { title: 'Asset Finance', href: '#asset-finance' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} href={service.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
