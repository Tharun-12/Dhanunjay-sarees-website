// components/site/WhyChooseUs.tsx

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  IndianRupee, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star,
  Heart,
  Zap
} from "lucide-react";

interface WhyChooseItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  image?: string;
  benefits?: string[];
}

const whyChooseData: WhyChooseItem[] = [
  { 
    icon: ShieldCheck, 
    title: "Direct from Manufacturer", 
    desc: "No middlemen. Better margins. Pure value.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    benefits: ["20-30% Higher Margins", "Factory Direct Pricing", "Bulk Discounts Available"]
  },
  { 
    icon: Award, 
    title: "15+ Years of Trust", 
    desc: "Proven reliability across East India.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
    benefits: ["500+ Happy Retailers", "98% Customer Retention", "Industry Recognition"]
  },
  { 
    icon: Sparkles, 
    title: "Wide Range of Sarees", 
    desc: "Festive, daily wear & modern styles.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop",
    benefits: ["500+ Designs", "All Festive Collections", "Seasonal Updates"]
  },
  { 
    icon: IndianRupee, 
    title: "Affordable Pricing", 
    desc: "Wholesale rates designed for retailers.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop",
    benefits: ["Best Market Price", "Volume Discounts", "Seasonal Offers"]
  },
  { 
    icon: Clock, 
    title: "On-Time Delivery", 
    desc: "Reliable, traceable dispatch system.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    benefits: ["Pan-India Delivery", "Real-time Tracking", "Secure Packaging"]
  },
  { 
    icon: TrendingUp, 
    title: "Business Growth Partner", 
    desc: "Supporting your retail success story.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    benefits: ["Marketing Support", "Business Guidance", "After Sales Service"]
  },
];

const WhyChooseUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">
            The Pragati Promise
          </h2>
          <div className="ornament-divider">
            <span className="text-gold text-2xl">❋</span>
          </div>
          <p className="text-muted-foreground mt-4">
            Discover why thousands of retailers trust Pragati Sarees for their wholesale needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, index) => (
            <div
              key={item.title}
              className="relative perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative transition-all duration-700 transform-gpu
                  ${hoveredIndex === index ? 'rotate-y-180' : ''}
                `}
                style={{
                  transformStyle: 'preserve-3d',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Front Side */}
                <div
                  className={`
                    backface-hidden group p-8 rounded-2xl bg-card border border-border 
                    hover:border-gold/50 transition-all relative overflow-hidden
                    ${hoveredIndex === index ? 'invisible' : 'visible'}
                  `}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                  }}
                >
                  {/* Background Glow Effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full gradient-gold opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl gradient-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-gold-light" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-gold-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* Hover Hint */}
                  <div className="absolute bottom-4 right-4 text-xs text-gold/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover to flip →
                  </div>
                </div>

                {/* Back Side (Folded/Image Side) */}
                <div
                  className={`
                    absolute top-0 left-0 w-full h-full backface-hidden
                    ${hoveredIndex === index ? 'visible' : 'invisible'}
                  `}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="h-full rounded-2xl overflow-hidden relative group cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    </div>
                    
                    {/* Content on Image */}
                    <div className="relative h-full flex flex-col justify-end p-2 text-white">
                      <div className="transform translate-y-0 transition-transform duration-500">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-gold-light" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-display text-2xl mb-3 text-white">
                          {item.title}
                        </h3>
                        
                        {/* Key Benefits */}
                        <div className="space-y-2 mb-4">
                          {item.benefits?.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-gold" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Call to Action */}
                        <button className="mt-4 px-4 py-2 bg-gold hover:bg-gold-dark text-primary rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                          Learn More →
                        </button>
                      </div>
                    </div>
                    
                    {/* Corner Fold Effect */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for 3D Effects */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        /* Corner fold animation */
        @keyframes cornerFold {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .group:hover .corner-fold {
          animation: cornerFold 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;