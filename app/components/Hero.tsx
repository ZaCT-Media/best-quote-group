export default function Hero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d5875]/80 via-[#3d5875]/70 to-[#3d5875]/60 z-10"></div>

        {/* Background image - you can replace this with an actual machinery image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundColor: '#3d5875' // Fallback color matching the design
          }}
        >
          {/* Placeholder gradient if image doesn't exist */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a5f7f] via-[#3d5875] to-[#2f4562]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 py-20 md:py-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold mb-8 leading-tight max-w-4xl mx-auto">
          Asset Finance - From
          <br />
          Printing Machinery to Plant -
          <br />
          we can help
        </h1>
        <a
          href="#contact"
          className="inline-block bg-[#4169b8] hover:bg-[#3558a0] text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
}
