// import React from "react";
// import {
//   BadgeIndianRupee,
//   Shield,
//   Zap,
//   TrendingUp,
//   Leaf,
//   Globe,
// } from "lucide-react";

// const benefits = [
//   {
//     icon: BadgeIndianRupee,
//     title: "Best Price Guarantee",
//     desc: "Manufacturer-direct pricing with no middlemen markups",
//     image:
//       "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: Shield,
//     title: "Quality Assurance",
//     desc: "Multi-point quality check before dispatch",
//     image:
//       "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: Zap,
//     title: "Fast Dispatch",
//     desc: "Orders processed within 24-48 hours",
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: TrendingUp,
//     title: "High Margins",
//     desc: "60-70% retail margins on MRP",
//     image:
//       "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: Leaf,
//     title: "Eco-Friendly",
//     desc: "Sustainable packaging and practices",
//     image:
//       "https://i.pinimg.com/1200x/89/d4/83/89d483751e96b7f3cac1b962579f9764.jpg",
//   },
//   {
//     icon: Globe,
//     title: "Nationwide Reach",
//     desc: "Shipping to all corners of India",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// const RetainerBenefitsPage = () => {
//   return (
//     <section className="section-padding bg-background min-h-screen">
//       <div className="container mx-auto">
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">
//             Why Partner With Us
//           </span>

//           <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
//             Retainer{" "}
//             <span className="text-gradient-royal">Benefits</span>
//           </h2>

//           <p className="text-muted-foreground">
//             Exclusive advantages for our wholesale partners
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {benefits.map((benefit) => (
//             <div
//               key={benefit.title}
//               className="group relative overflow-hidden rounded-2xl border border-border bg-card h-[420px] hover:border-gold/40 transition-all duration-500 hover:shadow-2xl"
//             >
//               {/* Background Image */}
//               <img
//                 src={benefit.image}
//                 alt={benefit.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/65 transition-all duration-500" />

//               {/* Main Content */}
//               <div className="relative z-10 flex flex-col justify-end h-full p-6">
//                 {/* Icon */}
//                 <div className="w-14 h-14 rounded-xl gradient-royal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
//                   <benefit.icon className="w-7 h-7 text-gold-light" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-display text-2xl text-white mb-2">
//                   {benefit.title}
//                 </h3>

//                 {/* Hover Description */}
//                 <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
//                   <p className="text-white/90 text-sm leading-relaxed mt-2">
//                     {benefit.desc}
//                   </p>

                 
//                 </div>
//               </div>

//               {/* Bottom Gradient */}
//               <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RetainerBenefitsPage;



import React from "react";
import {
  BadgeIndianRupee,
  Shield,
  Zap,
  TrendingUp,
  Leaf,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: "Best Price Guarantee",
    desc: "Manufacturer-direct pricing with no middlemen markups",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Multi-point quality check before dispatch",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Fast Dispatch",
    desc: "Orders processed within 24-48 hours",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "High Margins",
    desc: "60-70% retail margins on MRP",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Sustainable packaging and practices",
    image:
      "https://i.pinimg.com/1200x/89/d4/83/89d483751e96b7f3cac1b962579f9764.jpg",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    desc: "Shipping to all corners of India",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
];

const RetainerBenefitsPage = () => {
  return (
    <section className="py-20 bg-[#f8f5f1]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Partner With Us</span>

           <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">Retainer <span className="text-gradient-royal">Benefits</span></h2>

          <p className="text-gray-600 text-lg">
            Exclusive advantages for our wholesale partners
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-[28px] min-h-[280px] border border-[#ddd3c7] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={benefit.image}
                alt={benefit.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                
                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#8d1028] to-[#cf1b52] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-[#f5d27a]" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-serif text-[32px] leading-tight mb-4 text-[#7c1224] group-hover:text-white transition-colors duration-500">
                    {benefit.title}
                  </h3>

                  <p className="text-[18px] leading-relaxed text-[#4a4a4a] group-hover:text-white/90 transition-colors duration-500">
                    {benefit.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetainerBenefitsPage;