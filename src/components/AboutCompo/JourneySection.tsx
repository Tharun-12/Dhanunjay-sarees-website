// import React from "react";

// const timeline = [
//   {
//     year: "2009",
//     title: "The Beginning",
//     desc: "Pragati Sarees opens its first weaving unit in Surat with 6 looms and a single retailer partner.",
//   },
//   {
//     year: "2014",
//     title: "Banarasi Mastery",
//     desc: "Direct partnerships with Banaras karigars bring authentic silk weaving in-house.",
//   },
//   {
//     year: "2018",
//     title: "Pan-India Network",
//     desc: "Crosses 500 retail partners across 18 states with a dedicated logistics team.",
//   },
//   {
//     year: "2022",
//     title: "Modern Atelier",
//     desc: "Launch of B4201 Kohinoor Textile Market flagship — the new home of Pragati.",
//   },
//   {
//     year: "Today",
//     title: "1000+ Retailers Strong",
//     desc: "Trusted by a thousand stockists, designing the future of Indian silk wholesale.",
//   },
// ];

// const JourneySection = ({ story }) => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white via-rose-50 to-yellow-50">
//       <div className="container mx-auto px-4">

//         {/* TOP CONTENT */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <p className="text-xs uppercase tracking-[0.35em] text-yellow-600 mb-4">
//             Our Journey
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             15+ Years of Crafting Excellence
//           </h2>

//           <p className="text-gray-600 leading-relaxed text-lg">
//             What started as a small family-run loom in Surat has grown into one
//             of India's most trusted Banarasi silk manufacturers.
//           </p>
//         </div>

       

//         {/* TIMELINE */}
//         <div className="relative">
//           {/* CENTER LINE */}
//           <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-pink-400 to-blue-400 transform -translate-x-1/2"></div>

//           <div className="space-y-16">
//             {timeline.map((item, index) => {
//               const isLeft = index % 2 === 0;

//               return (
//                 <div
//                   key={index}
//                   className={`relative flex flex-col md:flex-row items-center ${
//                     isLeft ? "md:justify-start" : "md:justify-end"
//                   }`}
//                 >
//                   {/* CARD */}
//                   <div
//                     className={`w-full md:w-[45%] p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/80 border border-gray-100 transition duration-300 hover:shadow-2xl hover:-translate-y-2 ${
//                       isLeft ? "md:mr-auto" : "md:ml-auto"
//                     }`}
//                   >
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">
//                       {item.year} — {item.title}
//                     </h4>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>

//                   {/* DOT */}
//                   <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
//                     <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-white shadow-md"></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JourneySection;




import React from "react";

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    desc: "Pragati Sarees opens its first weaving unit in Surat with 6 looms and a single retailer partner.",
    icon: "🌱",
    color: "from-emerald-400 to-teal-500",
  },
  {
    year: "2014",
    title: "Banarasi Mastery",
    desc: "Direct partnerships with Banaras karigars bring authentic silk weaving in-house.",
    icon: "👑",
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "2018",
    title: "Pan-India Network",
    desc: "Crosses 500 retail partners across 18 states with a dedicated logistics team.",
    icon: "🇮🇳",
    color: "from-sky-500 to-indigo-600",
  },
  {
    year: "2022",
    title: "Modern Atelier",
    desc: "Launch of B4201 Kohinoor Textile Market flagship — the new home of Pragati.",
    icon: "✨",
    color: "from-fuchsia-500 to-rose-600",
  },
  {
    year: "Today",
    title: "1000+ Retailers Strong",
    desc: "Trusted by a thousand stockists, designing the future of Indian silk wholesale.",
    icon: "🚀",
    color: "from-violet-600 to-purple-700",
  },
];

const JourneySection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER SECTION - Refined with accent lines */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-amber-200 mb-5">
            <span className="text-amber-600 text-sm font-semibold tracking-wide">✦ OUR STORY ✦</span>
          </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            15+ Years of Crafting Excellence
           </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
            What started as a small family-run loom in Surat has grown into one
            of India's most trusted Banarasi silk manufacturers.
          </p>
        </div>

        {/* BOLD NEW TIMELINE LAYOUT - Alternating Horizontal Cards with Vertical Line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-rose-300 to-purple-300 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === timeline.length - 1;

              return (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Card */}
                    <div className="w-full md:w-[calc(50%-2rem)] group">
                      <div
                        className={`relative p-6 md:p-7 rounded-2xl bg-white/90 backdrop-blur-sm border border-amber-100/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-white ${
                          isLeft ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

                        {/* Year badge with icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-md transform transition-transform group-hover:scale-110 duration-300`}
                          >
                            {item.icon}
                          </div>
                          <span className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            {item.year}
                          </span>
                        </div>

                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>

                        {/* Decorative corner accent */}
                        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-200/60 rounded-tr-lg"></div>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-5 h-5 bg-white rounded-full border-2 border-amber-400 shadow-md z-10 relative"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-amber-200/50 rounded-full animate-ping opacity-40"></div>
                      </div>
                    </div>

                    {/* Empty spacer for alignment on mobile */}
                    <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                  </div>

                  {/* Connector line between cards - visible only on last item to separate */}
                  {!isLast && (
                    <div className="hidden md:block absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-amber-300 to-rose-300 transform -translate-x-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA - Trust Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-amber-100">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  ✦
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              Trusted by <span className="font-bold text-amber-700">1000+</span> retailers across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

