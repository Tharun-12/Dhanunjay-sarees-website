// import { Link } from "react-router-dom";
// import { Factory, Truck, Package, Boxes, ArrowRight, CheckCircle2 } from "lucide-react";
// import Layout from "@/components/site/Layout";
// import PageHero from "@/components/site/PageHero";
// import heroImg from "@/assets/hero-services.jpg";
// import s1 from "@/assets/saree-1.jpg";

// const services = [
//   { icon: Factory, title: "Manufacturing", desc: "In-house production of premium Banarasi Satin Silk Sarees with strict quality control." },
//   { icon: Boxes, title: "Wholesale Supply", desc: "Bulk order fulfilment at manufacturer-direct pricing — designed for retail growth." },
//   { icon: Truck, title: "Transportation", desc: "Reliable logistics network for safe, on-time delivery anywhere in India." },
//   { icon: Package, title: "Bulk Order Support", desc: "Dedicated support, custom bundles, and easy reordering for our retail partners." },
// ];

// const features = [
//   "Direct manufacturer pricing", "Quality-checked sarees", "Pan-India shipping",
//   "Custom bundle options", "Dedicated retailer support", "Festive collection launches",
//   "On-time dispatch guarantee", "Easy reorder system",
// ];

// const Services = () => (
//   <Layout>
//     <PageHero
//       eyebrow="What We Offer"
//       title="Our Services"
//       subtitle="End-to-end manufacturing, wholesale, and delivery — built around your retail business."
//       image={heroImg}
//     />

//     <section className="section-padding bg-background">
//       <div className="container mx-auto max-w-4xl text-center mb-16">
//         <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Overview</span>
//         <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-6">Built for Retailers, Powered by Heritage</h2>
//         <p className="text-muted-foreground text-lg leading-relaxed">
//           Manufacturing and wholesale supply of <strong className="text-primary">Banarasi Satin Silk Sarees</strong>, including transportation and delivery support for bulk orders.
//         </p>
//       </div>

//       <div className="container mx-auto grid md:grid-cols-2 gap-6">
//         {services.map((s, i) => (
//           <div key={s.title} className="group flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover-lift">
//             <div className="shrink-0">
//               <div className="w-16 h-16 rounded-2xl gradient-royal flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <s.icon className="w-8 h-8 text-gold-light" />
//               </div>
//             </div>
//             <div>
//               <div className="text-gold-dark text-xs uppercase tracking-widest mb-1">0{i + 1}</div>
//               <h3 className="font-display text-2xl text-primary mb-2">{s.title}</h3>
//               <p className="text-muted-foreground">{s.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

//     <section className="section-padding gradient-cream">
//       <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         <div className="relative">
//           <div className="absolute -inset-3 gradient-gold rounded-3xl opacity-20 blur-2xl" />
//           <img src={s1} alt="Banarasi saree" loading="lazy" className="relative rounded-3xl shadow-luxury w-full h-[600px] object-cover" />
//         </div>
//         <div>
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Retailers Choose Us</span>
//           <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-8 leading-tight">
//             Everything Your Store <span className="text-gradient-royal italic">Needs to Thrive</span>
//           </h2>
//           <div className="grid sm:grid-cols-2 gap-3 mb-8">
//             {features.map((f) => (
//               <div key={f} className="flex items-center gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
//                 <span className="text-foreground">{f}</span>
//               </div>
//             ))}
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
//             Request a Quote <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default Services;






import { Link } from "react-router-dom";
import { 
  Factory, Truck, Package, Boxes, ArrowRight, CheckCircle2, 
  Star, Clock, Shield, Calendar, Gift, Users, MapPin, 
  Phone, Mail, Award, Heart, Sparkles, TrendingUp, 
  Globe, Zap, BadgeIndianRupee, Leaf, Crown, HandshakeIcon,
  MessageCircle
} from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import heroImg from "@/assets/hero-services.jpg";
import s1 from "@/assets/sareepose.jpg";
import s2 from "@/assets/saree-2.jpg";
import s3 from "@/assets/saree-3.jpg";
import s4 from "@/assets/saree-4.jpg";
import StatsSection from "@/components/ServiceCompo/StatsSection";
import FestiveGallerySection from "@/components/ServiceCompo/FestiveGallerySection";
import RetainerBenefitsPage from "@/components/ServiceCompo/RetainerBenefitsPage";

const services = [
  { icon: Factory, title: "Manufacturing", desc: "In-house production of premium Banarasi Satin Silk Sarees with strict quality control." },
  { icon: Boxes, title: "Wholesale Supply", desc: "Bulk order fulfilment at manufacturer-direct pricing — designed for retail growth." },
  { icon: Truck, title: "Transportation", desc: "Reliable logistics network for safe, on-time delivery anywhere in India." },
  { icon: Package, title: "Bulk Order Support", desc: "Dedicated support, custom bundles, and easy reordering for our retail partners." },
];

const features = [
  "Direct manufacturer pricing", "Quality-checked sarees", "Pan-India shipping",
  "Custom bundle options", "Dedicated retailer support", "Festive collection launches",
  "On-time dispatch guarantee", "Easy reorder system",
];

const sareeCollections = [
  { name: "Heritage Gold", pieces: "250+", price: "₹1,299", image: s1, tag: "Bestseller" },
  { name: "Royal Peacock", pieces: "180+", price: "₹1,499", image: s2, tag: "New Arrival" },
  { name: "Festival Special", pieces: "300+", price: "₹1,199", image: s3, tag: "Limited" },
  { name: "Bridal Collection", pieces: "120+", price: "₹1,899", image: s4, tag: "Premium" },
];

const testimonials = [
  { name: "Priya Sharma", store: "Saree Sangam, Mumbai", text: "The quality and pricing are unmatched. My customers love these Banarasi sarees!", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rajesh Mehta", store: "Mehta Textiles, Ahmedabad", text: "On-time delivery and great support. Sales have increased by 40% this festive season.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Anjali Singh", store: "Silk Route, Delhi", text: "The custom bundle option is a game-changer. Highly recommended for retailers.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const stats = [
  { value: "50,000+", label: "Sarees Sold", icon: Crown },
  { value: "2,000+", label: "Retail Partners", icon: Users },
  { value: "25+", label: "Years of Excellence", icon: Award },
  { value: "50+", label: "Cities Served", icon: MapPin },
];

const benefits = [
  { icon: BadgeIndianRupee, title: "Best Price Guarantee", desc: "Manufacturer-direct pricing with no middlemen markups" },
  { icon: Shield, title: "Quality Assurance", desc: "Multi-point quality check before dispatch" },
  { icon: Zap, title: "Fast Dispatch", desc: "Orders processed within 24-48 hours" },
  { icon: TrendingUp, title: "High Margins", desc: "60-70% retail margins on MRP" },
  { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable packaging and practices" },
  { icon: Globe, title: "Nationwide Reach", desc: "Shipping to all corners of India" },
];

const processSteps = [
  { step: "01", title: "Place Order", desc: "Select your sarees & quantities online", icon: Package },
  { step: "02", title: "Quality Check", desc: "Each saree inspected before packing", icon: CheckCircle2 },
  { step: "03", title: "Secure Dispatch", desc: "Tamper-proof packaging with tracking", icon: Shield },
  { step: "04", title: "Fast Delivery", desc: "Reach your store in 3-7 days", icon: Truck },
];

const Services = () => (
  <Layout>
    <PageHero
      eyebrow="What We Offer"
      title="Our Services"
      subtitle="End-to-end manufacturing, wholesale, and delivery — built around your retail business."
      image={heroImg}
    />

    {/* Services Grid Section */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl text-center mb-16">
        <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Overview</span>
        <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-6">Built for Retailers, Powered by Heritage</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Manufacturing and wholesale supply of <strong className="text-primary">Banarasi Satin Silk Sarees</strong>, including transportation and delivery support for bulk orders.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="group flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover-lift">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-2xl gradient-royal flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-gold-light" />
              </div>
            </div>
            <div>
              <div className="text-gold-dark text-xs uppercase tracking-widest mb-1">0{i + 1}</div>
              <h3 className="font-display text-2xl text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Stats Counter Section */}
    {/* <section className="py-16 gradient-royal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-10 h-10 text-gold-light" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gold-light/90 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    <StatsSection />

    {/* Featured Collections Showcase */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Our Stock</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">Premium <span className="text-gradient-royal">Collections</span> In Stock</h2>
          <p className="text-muted-foreground">Ready-to-ship wholesale lots — available in bulk quantities</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sareeCollections.map((item) => (
            <div key={item.name} className="group relative rounded-2xl overflow-hidden bg-card border border-border hover-lift">
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-gold text-primary text-xs font-bold rounded-full">{item.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-primary mb-1">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gold-dark font-bold text-lg">{item.price}</span>
                  <span className="text-muted-foreground text-sm">{item.pieces} pieces</span>
                </div>
                <Link to="/gallery">
  <button className="w-full mt-4 py-2 rounded-full border border-gold text-gold-dark font-medium hover:bg-gold hover:text-primary transition-colors">
    View Collection →
  </button>
            </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gold text-gold-dark font-semibold hover:bg-gold hover:text-primary transition-all">
            View Complete Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Retailers Choose Us Section */}
    <section className="section-padding gradient-cream">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-3 gradient-gold rounded-3xl opacity-20 blur-2xl" />
          <img src={s1} alt="Banarasi saree" loading="lazy" className="relative rounded-3xl shadow-luxury w-full h-[600px] object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-primary">Trusted by 2000+</div>
              <div className="text-sm text-muted-foreground">retailers across India</div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Retailers Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-8 leading-tight">
            Everything Your Store <span className="text-gradient-royal italic">Needs to Thrive</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* Key Benefits Grid */}
    {/* <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Partner With Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">Retainer <span className="text-gradient-royal">Benefits</span></h2>
          <p className="text-muted-foreground">Exclusive advantages for our wholesale partners</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl gradient-royal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-gold-light" />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    <RetainerBenefitsPage />

    {/* How It Works - Process Flow */}
    <section className="section-padding gradient-cream">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Simple Process</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">How <span className="text-gradient-royal">Wholesale Ordering</span> Works</h2>
          <p className="text-muted-foreground">From order to delivery — seamless and transparent</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-1/2 z-0" />
          
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative z-10 text-center group">
              <div className="w-20 h-20 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-gold-dark text-sm font-bold mb-1">{step.step}</div>
              <h3 className="font-display text-xl text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FestiveGallerySection />

    {/* Testimonials Section */}
    {/* <section className="section-padding gradient-cream">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Trust & Credibility</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">What Our <span className="text-gradient-royal">Retail Partners</span> Say</h2>
          <p className="text-muted-foreground">Join hundreds of successful retailers who trust us for their saree inventory</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.store}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-4 pt-3 border-t border-border">
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> Verified Partner
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* Contact CTA Banner */}
    {/* <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-royal">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <HandshakeIcon className="w-16 h-16 text-gold-light mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Ready to <span className="text-gold-light">Grow Your Business</span>?</h2>
          <p className="text-white/80 text-lg mb-8">Get wholesale pricing, exclusive collections, and dedicated support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-primary font-semibold hover:bg-gold-light transition-colors shadow-xl">
              Get Wholesale Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/catalog" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              Download Catalog <Package className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-XXX-XXXXXXX</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> wholesale@banarasisilk.com</div>
          </div>
        </div>
      </div>
    </section> */}
    <section className="py-20 relative overflow-hidden bg-white">
  {/* SOFT BACKGROUND DECOR */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40" />
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="max-w-3xl mx-auto">

      {/* ICON */}
      <HandshakeIcon className="w-16 h-16 text-yellow-600 mx-auto mb-6" />

      {/* HEADING */}
      <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
        Ready to <span className="text-yellow-600">Grow Your Business</span>?
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-lg mb-8">
        Get wholesale pricing, exclusive collections, and dedicated support
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition shadow-lg"
        >
          Get Wholesale Quote <ArrowRight className="w-5 h-5" />
        </Link>

       <Link
  to="/contact"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
>
  Talk to Sales <MessageCircle className="w-5 h-5" />
      </Link>

      </div>

      {/* CONTACT INFO */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" /> +91-XXX-XXXXXXX
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" /> wholesale@banarasisilk.com
        </div>
      </div>

    </div>
  </div>
</section>
  </Layout>
);

export default Services;