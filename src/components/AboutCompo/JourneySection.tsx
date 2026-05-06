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





// import React from "react";

// const timeline = [
//   {
//     year: "2009",
//     title: "The Beginning",
//     desc: "Pragati Sarees opens its first weaving unit in Surat with 6 looms and a single retailer partner.",
//     icon: "🌱",
//   },
//   {
//     year: "2014",
//     title: "Banarasi Mastery",
//     desc: "Direct partnerships with Banaras karigars bring authentic silk weaving in-house.",
//     icon: "👑",
//   },
//   {
//     year: "2018",
//     title: "Pan-India Network",
//     desc: "Crosses 500 retail partners across 18 states with a dedicated logistics team.",
//     icon: "🇮🇳",
//   },
//   {
//     year: "2022",
//     title: "Modern Atelier",
//     desc: "Launch of B4201 Kohinoor Textile Market flagship — the new home of Pragati.",
//     icon: "✨",
//   },
//   {
//     year: "Today",
//     title: "1000+ Retailers Strong",
//     desc: "Trusted by a thousand stockists, designing the future of Indian silk wholesale.",
//     icon: "🚀",
//   },
// ];

// const JourneyWave = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white via-rose-50 to-yellow-50 overflow-x-auto">
//       <div className="min-w-[1000px] px-8 mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-20 max-w-3xl mx-auto">
//           <p className="text-xs tracking-[0.4em] text-yellow-600 uppercase mb-4">
//             ✦ Our Story ✦
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             15+ Years of Crafting Excellence
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             What started as a small family-run loom in Surat has grown into one
//             of India's most trusted Banarasi silk manufacturers.
//           </p>
//         </div>

//         {/* WAVE TIMELINE */}
//         <div className="relative flex items-center justify-between">

//           {/* CURVE LINE */}
//           {/* <svg
//             className="absolute top-1/2 left-0 w-full -translate-y-1/2"
//             height="140"
//             viewBox="0 0 1200 140"
//             fill="none"
//           >
//             <path
//               d="M0 70 
//                  Q 150 0, 300 70 
//                  T 600 70 
//                  T 900 70 
//                  T 1200 70"
//               stroke="url(#grad)"
//               strokeWidth="12"
//               fill="transparent"
//             />
//             <defs>
//               <linearGradient id="grad">
//                 <stop offset="0%" stopColor="#34d399" />
//                 <stop offset="50%" stopColor="#3b82f6" />
//                 <stop offset="100%" stopColor="#1e3a8a" />
//               </linearGradient>
//             </defs>
//           </svg> */}

//           {/* ITEMS */}
//           {timeline.map((item, i) => (
//             <div key={i} className="relative flex flex-col items-center w-1/5">

//               {/* TOP CONTENT */}
//               {i % 2 === 0 && (
//                 <div className="mb-12 text-center max-w-[200px]">
//                   <p className="text-sm text-gray-500">{item.year}</p>
//                   <h4 className="font-semibold text-gray-900">
//                     {item.title}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-2">
//                     {item.desc}
//                   </p>
//                 </div>
//               )}

//               {/* ICON CIRCLE */}
//               <div className="z-10 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl border border-gray-100 hover:scale-110 transition duration-300">
//                 {item.icon}
//               </div>

//               {/* BOTTOM CONTENT */}
//               {i % 2 !== 0 && (
//                 <div className="mt-12 text-center max-w-[200px]">
//                   <p className="text-sm text-gray-500">{item.year}</p>
//                   <h4 className="font-semibold text-gray-900">
//                     {item.title}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-2">
//                     {item.desc}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* FOOTER TEXT */}
//         <div className="text-center mt-20">
//           <p className="text-gray-700 text-lg tracking-wide">
//             ✦ ✦ ✦ ✦
//           </p>
//           <p className="mt-4 font-medium text-gray-900">
//             Trusted by 1000+ retailers across India
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default JourneyWave;



import React from "react";

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    desc: "Pragati Sarees opens its first weaving unit in Surat with 6 looms and a single retailer partner.",
    icon: "🌱",
  },
  {
    year: "2014",
    title: "Banarasi Mastery",
    desc: "Direct partnerships with Banaras karigars bring authentic silk weaving in-house.",
    icon: "👑",
  },
  {
    year: "2018",
    title: "Pan-India Network",
    desc: "Crosses 500 retail partners across 18 states with a dedicated logistics team.",
    icon: "🇮🇳",
  },
  {
    year: "2022",
    title: "Modern Atelier",
    desc: "Launch of B4201 Kohinoor Textile Market flagship — the new home of Pragati.",
    icon: "✨",
  },
  {
    year: "Today",
    title: "1000+ Retailers Strong",
    desc: "Trusted by a thousand stockists, designing the future of Indian silk wholesale.",
    icon: "🚀",
  },
];

const JourneyWave = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-rose-50 to-yellow-50 overflow-x-auto">
      <div className="min-w-[1100px] px-10 mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.5em] text-yellow-600 uppercase mb-5">
            ✦ Our Story ✦
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             15+ Years of Crafting Excellence
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            What started as a small family-run loom in Surat has grown into one
            of India's most trusted Banarasi silk manufacturers.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative flex items-center justify-between">

          {timeline.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center w-1/5">

              {/* TOP CONTENT */}
              {i % 2 === 0 && (
                <div className="mb-14 text-center max-w-[260px]">
                  <p className="text-base text-gray-500 font-medium">
                    {item.year}
                  </p>
                  <h4 className="font-semibold text-xl text-gray-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}

              {/* ICON */}
              <div className="z-10 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl border border-gray-100 hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* BOTTOM CONTENT */}
              {i % 2 !== 0 && (
                <div className="mt-14 text-center max-w-[260px]">
                  <p className="text-base text-gray-500 font-medium">
                    {item.year}
                  </p>
                  <h4 className="font-semibold text-xl text-gray-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-24">
          <p className="text-gray-700 text-xl tracking-wide">
            ✦ ✦ ✦ ✦
          </p>
          <p className="mt-5 font-semibold text-lg text-gray-900">
            Trusted by 1000+ retailers across India
          </p>
        </div>

      </div>
    </section>
  );
};

export default JourneyWave;