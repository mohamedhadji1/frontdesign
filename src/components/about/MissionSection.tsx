"use client";

import { motion } from "framer-motion";

const Hexagon = ({
  title,
  subtitle,
  bgClass = "bg-white",
  textClass = "text-gray-900",
  borderClass = "bg-gray-300",
  subtitleClass = "text-gray-500",
  className = "",
  titleSize = "text-[34px]",
}: {
  title: string;
  subtitle: string;
  bgClass?: string;
  textClass?: string;
  borderClass?: string;
  subtitleClass?: string;
  className?: string;
  titleSize?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`absolute flex items-center justify-center ${borderClass} ${className}`}
    style={{
      width: "160px",
      height: "184px",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  >
    <div
      className={`absolute inset-[2px] flex flex-col items-center justify-center ${bgClass} ${textClass}`}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <span className={`font-bold leading-tight ${titleSize}`}>{title}</span>
      <span
        className={`text-[13px] font-medium tracking-widest mt-1 text-center whitespace-pre-line ${subtitleClass}`}
      >
        {subtitle}
      </span>
    </div>
  </motion.div>
);

export function MissionSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} 
      className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: "url('/background/bg5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Light overlay ensures text is readable if bg5 has strong lines */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-8">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full xl:w-5/12 flex flex-col items-start"
        >
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 bg-black/20 mr-4 mt-1"></div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-wider">OUR MISSION</h2>
          </div>

          <div className="text-gray-600 text-[16px] md:text-[17px] leading-[1.8] space-y-6">
            <p>
              To provide world-class cybersecurity services that protect organizations from ever-evolving digital threats, empowering them to operate securely, efficiently, and with complete confidence in an increasingly interconnected world.
            </p>
            <p>
              We are committed to combining cutting-edge technology, proven methodologies, and deep human expertise to deliver comprehensive, reliable, and scalable security solutions.
            </p>
            <p>
              Our mission is to strengthen digital resilience, support strategic growth, and ensure that every business we protect can thrive in a secure and trusted environment.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Hexagon Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full xl:w-7/12 flex justify-center xl:justify-end"
        >
          <div className="relative w-[420px] h-[480px] scale-90 sm:scale-100 origin-center xl:origin-right">
            <Hexagon
              title="425+"
              subtitle="PROJECTS"
              className="left-[84px] top-0"
            />
            <Hexagon
              title="05"
              subtitle="PAYS"
              borderClass="bg-red-600"
              className="left-[252px] top-0"
            />
            <Hexagon
              title="WORLD'S"
              subtitle={"SAFETY\nSTANDARDS"}
              bgClass="bg-red-600"
              textClass="text-white"
              borderClass="bg-red-600"
              subtitleClass="text-white"
              className="left-0 top-[144px]"
              titleSize="text-2xl"
            />
            <Hexagon
              title="230+"
              subtitle={"SATISFIED\nCLIENT"}
              bgClass="bg-gray-100"
              className="left-[168px] top-[144px]"
            />
            <Hexagon
              title="15"
              subtitle="EXPERTS"
              className="left-[252px] top-[288px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}