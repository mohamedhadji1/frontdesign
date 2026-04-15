import Image from "next/image";

export function VersatilityAndImpartialitySection() {
  return (
    <div className="mb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden order-2 lg:order-1 w-full h-full min-h-[300px] shadow-lg">
          <Image
            src="/images/highlight-vision.png"
            alt="Versatility and Impartiality"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 lg:pl-12">
          <h2
            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 flex items-start gap-4"
            style={{ fontFamily: "'Gotham', sans-serif" }}
          >
            <span className="w-2.5 h-2.5 bg-black inline-block flex-shrink-0 mt-2"></span> 
            <span>VERSATILITY AND<br/>IMPARTIALITY</span>
          </h2>
          <p
            className="text-gray-700 leading-[1.8]"
            style={{ fontFamily: "'Gotham', sans-serif" }}
          >
            Our team stands out for its versatility and objectivity. With diverse skill sets and a strong ability to maintain neutrality in analysis and problem-solving, they ensure solutions that are fair, tailored, and fully aligned with each client's specific needs.
          </p>
        </div>
      </div>
    </div>
  );
}
