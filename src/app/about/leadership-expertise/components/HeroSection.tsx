export function HeroSection() {
  return (
    <section
      className="relative w-full pt-24 pb-16 bg-neutral-900 border-b border-white/10"
      style={{
        backgroundImage: "url('/background/bg14.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Gotham', sans-serif" }}
        >
          Our Leadership & Expertise
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Gotham', sans-serif" }}>
          A team of seasoned cybersecurity experts guiding Keystone with strong technical knowledge and strategic vision.
        </p>
      </div>
    </section>
  );
}
