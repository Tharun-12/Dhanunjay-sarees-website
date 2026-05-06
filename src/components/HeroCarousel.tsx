// // components/site/HeroCarousel.tsx (Alternative with Thumbnails)

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// interface Slide {
//   id: number;
//   image: string;
//   thumbnail?: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   stats: { n: string; l: string }[];
//   badge: string;
//   ctaText: string;
//   ctaLink: string;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     image: "https://i.pinimg.com/736x/10/a6/c2/10a6c22d3c9679c9c42ad0cc4326f11f.jpg",
//     thumbnail: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=100&h=80&fit=crop",
//     title: "Weaving Tradition",
//     subtitle: "into Every Thread",
//     description: "Direct from Manufacturer. Trusted by Retailers. Loved by Women.",
//     stats: [
//       { n: "15+", l: "Years Experience" },
//       { n: "500+", l: "Retail Partners" },
//       { n: "1000+", l: "Saree Designs" },
//     ],
//     badge: "15+ Years of Heritage",
//     ctaText: "Enquire Now",
//     ctaLink: "/contact"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop",
//     thumbnail: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&h=80&fit=crop",
//     title: "Premium Banarasi",
//     subtitle: "Silk Collections",
//     description: "Authentic Handloom. Exquisite Designs. Unmatched Quality.",
//     stats: [
//       { n: "50+", l: "Banarasi Designs" },
//       { n: "100+", l: "Silk Varieties" },
//       { n: "2000+", l: "Happy Customers" },
//     ],
//     badge: "Premium Collections",
//     ctaText: "Shop Now",
//     ctaLink: "/products"
//   },
//   {
//     id: 3,
//     image: "https://i.pinimg.com/1200x/0f/58/f9/0f58f94c8f6e261440127d6ba942c190.jpg",
//     thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=80&fit=crop",
//     title: "Wholesale Power",
//     subtitle: "For Retail Success",
//     description: "Best Margins. Bulk Discounts. Pan-India Delivery.",
//     stats: [
//       { n: "30%", l: "Higher Margins" },
//       { n: "24/7", l: "Customer Support" },
//       { n: "100%", l: "Quality Guarantee" },
//     ],
//     badge: "Wholesale Specialists",
//     ctaText: "Become Partner",
//     ctaLink: "/contact"
//   },
// ];

// const HeroCarousel: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, currentSlide]);

//   const current = slides[currentSlide];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-all duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover scale-105"
//             style={{
//               transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
//               transition: "transform 8s ease-out",
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 pt-24">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold-light/40 backdrop-blur-sm mb-6">
//             <Sparkles className="w-4 h-4 text-gold-light" />
//             <span className="text-gold-light text-xs uppercase tracking-[0.25em] font-medium">
//               {current.badge}
//             </span>
//           </div>

//           <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
//             {current.title}{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
//               {current.subtitle.split(" ")[0]}
//             </span>
//             <br />
//             {current.subtitle.split(" ").slice(1).join(" ")}
//           </h1>

//           <p className="text-lg md:text-2xl text-white/90 font-serif italic mb-8 max-w-2xl">
//             {current.description}
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to={current.ctaLink}
//               className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark text-gray-900 font-semibold shadow-lg hover:scale-105 transition-transform"
//             >
//               {current.ctaText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link
//               to="/gallery"
//               className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold-light/60 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
//             >
//               View Collections
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-2xl">
//             {current.stats.map((s) => (
//               <div key={s.l} className="border-l-2 border-gold pl-4">
//                 <div className="font-display text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light font-bold">
//                   {s.n}
//                 </div>
//                 <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider mt-1">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold/30 hover:border-gold/50 transition-all"
//       >
//         <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold/30 hover:border-gold/50 transition-all"
//       >
//         <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
//       </button>

//       {/* Thumbnails */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             onClick={() => setCurrentSlide(index)}
//             className={`transition-all duration-300 rounded-lg overflow-hidden border-2 ${
//               index === currentSlide ? "border-gold w-16 h-12" : "border-transparent w-12 h-10 opacity-60 hover:opacity-100"
//             }`}
//           >
//             <img
//               src={slide.thumbnail || slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </button>
//         ))}
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentSlide ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/50"
//             }`}
//           />
//         ))}
//       </div>

     
//     </section>
//   );
// };

// export default HeroCarousel;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Star, Diamond, Crown } from "lucide-react";

// interface Slide {
//   id: number;
//   image: string;
//   thumbnail?: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   stats: { n: string; l: string }[];
//   badge: string;
//   ctaText: string;
//   ctaLink: string;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&h=1080&fit=crop",
//     thumbnail: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=100&h=80&fit=crop",
//     title: "Weaving Tradition",
//     subtitle: "into Every Thread",
//     description: "Direct from Manufacturer. Trusted by Retailers. Loved by Women.",
//     stats: [
//       { n: "15+", l: "Years Experience" },
//       { n: "500+", l: "Retail Partners" },
//       { n: "1000+", l: "Saree Designs" },
//     ],
//     badge: "15+ Years of Heritage",
//     ctaText: "Enquire Now",
//     ctaLink: "/contact"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop",
//     thumbnail: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&h=80&fit=crop",
//     title: "Premium Banarasi",
//     subtitle: "Silk Collections",
//     description: "Authentic Handloom. Exquisite Designs. Unmatched Quality.",
//     stats: [
//       { n: "50+", l: "Banarasi Designs" },
//       { n: "100+", l: "Silk Varieties" },
//       { n: "2000+", l: "Happy Customers" },
//     ],
//     badge: "Premium Collections",
//     ctaText: "Shop Now",
//     ctaLink: "/products"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1920&h=1080&fit=crop",
//     thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=80&fit=crop",
//     title: "Wholesale Power",
//     subtitle: "For Retail Success",
//     description: "Best Margins. Bulk Discounts. Pan-India Delivery.",
//     stats: [
//       { n: "30%", l: "Higher Margins" },
//       { n: "24/7", l: "Customer Support" },
//       { n: "100%", l: "Quality Guarantee" },
//     ],
//     badge: "Wholesale Specialists",
//     ctaText: "Become Partner",
//     ctaLink: "/contact"
//   },
// ];

// const HeroCarousel: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, currentSlide]);

//   const current = slides[currentSlide];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Images with Parallax Effect */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-all duration-1000 ease-out ${
//             index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
//           }`}
//         >
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               transform: `scale(${index === currentSlide ? 1.08 : 1.1})`,
//               transition: "transform 10s ease-out",
//             }}
//           />
//           {/* Multiple Gradient Overlays for Depth */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black/40_100%)]" />
          
//           {/* Animated Gold Overlay */}
//           <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 animate-pulse" />
//         </div>
//       ))}

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 pt-24">
//         <div className="max-w-4xl">
//           {/* Badge with Animation */}
//           <div
//             className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/15 backdrop-blur-md border border-gold-light/40 mb-8 transition-all duration-700 ${
//               isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
//             }`}
//           >
//             <Crown className="w-4 h-4 text-gold-light animate-pulse" />
//             <span className="text-gold-light text-xs uppercase tracking-[0.3em] font-semibold">
//               {current.badge}
//             </span>
//           </div>

//           {/* Title with Stagger Animation */}
//           <div
//             className={`transition-all duration-700 delay-100 ${
//               isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
//             }`}
//           >
//             <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-4">
//               {current.title}{" "}
//               <span className="relative inline-block">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold-light animate-gradient">
//                   {current.subtitle.split(" ")[0]}
//                 </span>
//                 <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
//               </span>
//               <br />
//               <span className="text-white/90">{current.subtitle.split(" ").slice(1).join(" ")}</span>
//             </h1>
//           </div>

//           {/* Description */}
//           <p
//             className={`text-xl md:text-2xl text-white/90 font-serif italic mb-10 max-w-2xl transition-all duration-700 delay-200 ${
//               isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
//             }`}
//           >
//             "{current.description}"
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className={`flex flex-wrap gap-5 transition-all duration-700 delay-300 ${
//               isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
//             }`}
//           >
//             <Link
//               to={current.ctaLink}
//               className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold bg-size-200 animate-shimmer text-gray-900 font-bold shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
//             >
//               <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
//               <Sparkles className="w-5 h-5" />
//               {current.ctaText}
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link
//               to="/gallery"
//               className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold-light/50 text-white hover:bg-white/10 hover:border-gold-light backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
//             >
//               <Diamond className="w-5 h-5" />
//               View Collections
//               <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//             </Link>
//           </div>

//           {/* Stats with Glass Morphism */}
//           <div
//             className={`grid grid-cols-3 gap-6 md:gap-10 mt-16 max-w-2xl transition-all duration-700 delay-400 ${
//               isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
//             }`}
//           >
//             {current.stats.map((s, idx) => (
//               <div
//                 key={s.l}
//                 className="group relative backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-gold/30 transition-all duration-300 hover:scale-105"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="font-display text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold-light font-bold">
//                   {s.n}
//                 </div>
//                 <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-1 font-medium">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows - Enhanced */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold/40 hover:border-gold/60 transition-all duration-300 group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform group-hover:translate-x-[-2px]" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold/40 hover:border-gold/60 transition-all duration-300 group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform group-hover:translate-x-[2px]" />
//       </button>

//       {/* Thumbnails with Progress Ring */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             onClick={() => setCurrentSlide(index)}
//             className="group relative"
//           >
//             <div
//               className={`transition-all duration-300 rounded-xl overflow-hidden border-2 ${
//                 index === currentSlide
//                   ? "border-gold shadow-lg shadow-gold/20 scale-110"
//                   : "border-transparent opacity-60 hover:opacity-100"
//               }`}
//             >
//               <img
//                 src={slide.thumbnail || slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className={`w-16 h-12 md:w-20 md:h-14 object-cover transition-all duration-300 ${
//                   index === currentSlide ? "brightness-110" : "brightness-75 group-hover:brightness-100"
//                 }`}
//               />
//             </div>
//             {index === currentSlide && (
//               <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-xl border-2 border-gold/50 animate-pulse"></div>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Auto-play Toggle Button */}
//       <button
//         onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//         className="absolute bottom-8 right-8 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold/40 hover:border-gold/60 transition-all duration-300 group"
//         aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
//       >
//         {isAutoPlaying ? (
//           <Pause className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
//         ) : (
//           <Play className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
//         )}
//       </button>

//       {/* Slide Counter */}
//       <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
//         <div className="flex items-center gap-2">
//           <span className="text-gold-light text-2xl font-bold font-mono">
//             {String(currentSlide + 1).padStart(2, "0")}
//           </span>
//           <span className="text-white/40 text-sm font-mono">/ {String(slides.length).padStart(2, "0")}</span>
//           <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent ml-2"></div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-gold-light/40 flex justify-center pt-2">
//           <div className="w-1 h-2 rounded-full bg-gold-light animate-pulse" />
//         </div>
//       </div>

//       {/* Add Custom CSS */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -100% 0; }
//           100% { background-position: 200% 0; }
//         }
        
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-shimmer {
//           background-size: 200% auto;
//           animation: shimmer 2s linear infinite;
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
        
//         .bg-size-200 {
//           background-size: 200% 100%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroCarousel;




// components/site/HeroCarousel.tsx (Ultra Simple)

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/58/82/fe/5882fe5f69f29f950de607a4084142b7.jpg",
    alt: "Traditional Saree Collection"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/23/0b/05/230b057ae593922b406c6a51d9d3438d.jpg",
    alt: "Banarasi Silk Saree"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/0f/58/f9/0f58f94c8f6e261440127d6ba942c190.jpg",
    alt: "Wholesale Saree Collection"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/1200x/18/ff/26/18ff261d61b77e32b60544bf4c8eb929.jpg",
    alt: "Premium Bridal Saree Collection"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/60/83/b5/6083b5b6470fb399cdf2c6c59a5faa7f.jpg",
    alt: "Festive Saree Collection"
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-gold/40 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-gold/40 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-gold"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;