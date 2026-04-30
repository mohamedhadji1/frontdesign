import Image from "next/image";
import { motion } from "framer-motion";
interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: ContentSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className={isImageLeft ? "order-1 lg:order-2" : ""}>
          <motion.h2
            className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2"
            style={{ fontFamily: "'Gotham', sans-serif" }}
          >
            <span className="text-red-600">•</span> {title}
          </motion.h2>
          <p
            className="text-sm leading-relaxed text-gray-700"
            style={{ fontFamily: "'Gotham', sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Image */}
        <div
          className={`rounded-2xl overflow-hidden h-80 ${isImageLeft ? "order-2 lg:order-1" : ""
            }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
