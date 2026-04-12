import Image from "next/image";

const partners = [
  { name: "BNA", logo: "/images/trustedby/bna.png" },
  { name: "BNA 2", logo: "/images/trustedby/bna.png" },
  { name: "BNA 3", logo: "/images/trustedby/bna.png" },
  { name: "BNA 4", logo: "/images/trustedby/bna.png" },
  { name: "BNA 5", logo: "/images/trustedby/bna.png" },
  { name: "BNA 6", logo: "/images/trustedby/bna.png" },
];

export function TrustedBySection() {
  return (
    <section className="pb-10 pt-8 bg-black px-4">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-center font-medium text-sm md:text-base">
          We are proud to collaborate with industry leaders and trusted organizations.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative w-40 h-20 md:w-48 md:h-24"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 10rem, 12rem"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}