interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  objectFit?: 'cover' | 'contain';
  backgroundPosition?: string;
}

export default function ServiceHero({ title, subtitle, imagePath, objectFit = 'cover', backgroundPosition }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3f6a] via-[#2a5186] to-[#1e3f6a] rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl">
      {/* Background Pattern/Image - Subtle */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imagePath}')`,
            backgroundSize: objectFit,
            backgroundPosition: backgroundPosition || (objectFit === 'contain' ? 'center' : 'center 80%'),
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-white space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Specialist Finance Solutions
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            {subtitle}
          </p>
        )}

        {/* Key Benefits */}
        <div className="grid grid-cols-1 gap-4 pt-6">
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">Competitive Rates</p>
              <p className="text-white/70 text-sm">Access the best deals from 100+ lenders</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">Expert Guidance</p>
              <p className="text-white/70 text-sm">Dedicated support throughout your journey</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">Fast Decisions</p>
              <p className="text-white/70 text-sm">Quick approval process to keep you moving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
