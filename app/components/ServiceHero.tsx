interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  objectFit?: 'cover' | 'contain';
  backgroundPosition?: string;
}

export default function ServiceHero({ title, subtitle, imagePath, objectFit = 'cover', backgroundPosition }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/40 to-gray-700/30 z-10"></div>

        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imagePath}')`,
            backgroundSize: objectFit,
            backgroundPosition: backgroundPosition || (objectFit === 'contain' ? 'center' : 'center 80%'),
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#2e3450'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 py-20 md:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
