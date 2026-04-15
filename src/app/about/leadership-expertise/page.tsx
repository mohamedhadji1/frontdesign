import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Leadership & Expertise | Keystone",
  description: "Learn about the leadership team and expertise at Keystone.",
};

export default function LeadershipExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-20 bg-neutral-900 border-b border-white/10"
        style={{
          backgroundImage: "url('/background/bg2.jpg')", // Assuming bg2 exists or a placeholder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Leadership & Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Decades of global cybersecurity experience, driving innovation and resilience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-12 container mx-auto max-w-6xl">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Guided by Experience, Driven by Innovation
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 font-medium mb-16 text-center max-w-4xl mx-auto">
            Our leadership team is comprised of industry veterans who have spent careers navigating the most complex security landscapes. We combine deep technical knowledge with strategic business acumen to deliver unmatched protection.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Expertise Areas */}
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4 border-gray-200">Our Core Expertise</h3>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">01</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Offensive Security</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our Red Team specialists employ nation-state level tactics to uncover vulnerabilities before malicious actors do. We believe the best defense starts with the strongest offense.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">02</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Incident Response & Forensics</h4>
                  <p className="text-gray-600 leading-relaxed">
                    When breaches occur, our elite blue teams respond with precision. We combine rapid containment with meticulous digital forensics to minimize impact and prevent recurrence.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xl">03</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Strategic Compliance</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Navigating global regulatory frameworks requires deep expertise. We ensure your security posture not only defends against threats but also seamlessly aligns with international standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Values / Stats */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 h-full flex flex-col justify-center">
               <h3 className="text-3xl font-bold text-gray-900 mb-8">The Keystone Difference</h3>
               <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                 What sets our team apart isn't just what we know, it's how we apply it. We approach every challenge with a practitioner's mindset and a partner's dedication.
               </p>

               <div className="grid grid-cols-2 gap-8">
                 <div>
                   <div className="text-4xl font-black text-red-600 mb-2">20+</div>
                   <div className="text-gray-900 font-semibold mb-1">Years Average Experience</div>
                   <p className="text-sm text-gray-500">Across our senior leadership team in top-tier environments.</p>
                 </div>
                 
                 <div>
                   <div className="text-4xl font-black text-red-600 mb-2">100%</div>
                   <div className="text-gray-900 font-semibold mb-1">Practitioner Led</div>
                   <p className="text-sm text-gray-500">Our leaders are actively involved in research and operations.</p>
                 </div>

                 <div>
                   <div className="text-4xl font-black text-red-600 mb-2">Global</div>
                   <div className="text-gray-900 font-semibold mb-1">Perspective</div>
                   <p className="text-sm text-gray-500">Experience across EMEA, APAC, and the Americas.</p>
                 </div>

                 <div>
                   <div className="text-4xl font-black text-red-600 mb-2">Zero</div>
                   <div className="text-gray-900 font-semibold mb-1">Compromise</div>
                   <p className="text-sm text-gray-500">On our commitment to your organization's security.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}