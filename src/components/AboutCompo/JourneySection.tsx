import React from "react";

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    desc: "Pragati Sarees opens its first weaving unit in Surat with 6 looms and a single retailer partner.",
  },
  {
    year: "2014",
    title: "Banarasi Mastery",
    desc: "Direct partnerships with Banaras karigars bring authentic silk weaving in-house.",
  },
  {
    year: "2018",
    title: "Pan-India Network",
    desc: "Crosses 500 retail partners across 18 states with a dedicated logistics team.",
  },
  {
    year: "2022",
    title: "Modern Atelier",
    desc: "Launch of B4201 Kohinoor Textile Market flagship — the new home of Pragati.",
  },
  {
    year: "Today",
    title: "1000+ Retailers Strong",
    desc: "Trusted by a thousand stockists, designing the future of Indian silk wholesale.",
  },
];

const JourneySection = ({ story }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50 to-yellow-50">
      <div className="container mx-auto px-4">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-600 mb-4">
            Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            15+ Years of Crafting Excellence
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            What started as a small family-run loom in Surat has grown into one
            of India's most trusted Banarasi silk manufacturers.
          </p>
        </div>

       

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-pink-400 to-blue-400 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* CARD */}
                  <div
                    className={`w-full md:w-[45%] p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/80 border border-gray-100 transition duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.year} — {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* DOT */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;