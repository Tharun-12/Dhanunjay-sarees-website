// import { Link } from "react-router-dom";
// import { ArrowRight, Award, Truck, Users, Sparkles, Star, Quote, ShieldCheck, IndianRupee, Clock, TrendingUp, Phone } from "lucide-react";
// import Layout from "@/components/site/Layout";
// import heroImg from "@/assets/hero-home.jpg";
// import showcaseImg from "@/assets/showcase-video.jpg";
// import s1 from "@/assets/saree-1.jpg";
// import s2 from "@/assets/saree-2.jpg";
// import s3 from "@/assets/saree-3.jpg";
// import s4 from "@/assets/saree-4.jpg";

// const collections = [
//   { img: s1, name: "Banarasi Silk", tag: "Heritage Weave" },
//   { img: s2, name: "Festive Pink", tag: "Bestseller" },
//   { img: s3, name: "Royal Blue", tag: "Wedding Pick" },
//   { img: s4, name: "Cream & Gold", tag: "Bridal" },
// ];

// const whyChoose = [
//   { icon: ShieldCheck, title: "Direct from Manufacturer", desc: "No middlemen. Better margins. Pure value." },
//   { icon: Award, title: "15+ Years of Trust", desc: "Proven reliability across East India." },
//   { icon: Sparkles, title: "Wide Range of Sarees", desc: "Festive, daily wear & modern styles." },
//   { icon: IndianRupee, title: "Affordable Pricing", desc: "Wholesale rates designed for retailers." },
//   { icon: Clock, title: "On-Time Delivery", desc: "Reliable, traceable dispatch system." },
//   { icon: TrendingUp, title: "Business Growth Partner", desc: "Supporting your retail success story." },
// ];

// const testimonials = [
//   { name: "Rajesh Patel", shop: "Patel Textiles, Ahmedabad", text: "Pragati Sarees has been our trusted partner for 6 years. Quality and timing — both unbeatable." },
//   { name: "Sunita Devi", shop: "Sunita Saree Bhandar, Patna", text: "Beautiful designs, fair pricing, and the team treats us like family. Highly recommended for retailers." },
//   { name: "Mohit Agarwal", shop: "Agarwal Sons, Kolkata", text: "Direct manufacturer rates with consistent quality. Our customers love every collection." },
// ];

// const Home = () => (
//   <Layout>
//     {/* HERO */}
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       <div className="absolute inset-0">
//         <img src={heroImg} alt="Pragati Sarees - Premium Banarasi Silk" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-overlay" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 pt-24">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold-light/40 backdrop-blur-sm mb-6 animate-fade-up">
//             <Sparkles className="w-4 h-4 text-gold-light" />
//             <span className="text-gold-light text-xs uppercase tracking-[0.25em] font-medium">15+ Years of Heritage</span>
//           </div>
//           <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6 animate-fade-up delay-100">
//             Weaving <span className="text-gradient-gold italic">Tradition</span><br />into Every Thread
//           </h1>
//           <p className="text-lg md:text-2xl text-primary-foreground/90 font-serif italic mb-8 max-w-2xl animate-fade-up delay-200">
//             "Direct from Manufacturer. Trusted by Retailers. Loved by Women."
//           </p>
//           <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
//             <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
//               Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold-light/60 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all">
//               View Collections
//             </Link>
//           </div>

//           <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-2xl animate-fade-up delay-500">
//             {[
//               { n: "15+", l: "Years Experience" },
//               { n: "500+", l: "Retail Partners" },
//               { n: "1000+", l: "Saree Designs" },
//             ].map((s) => (
//               <div key={s.l} className="border-l-2 border-gold pl-4">
//                 <div className="font-display text-3xl md:text-4xl text-gradient-gold font-bold">{s.n}</div>
//                 <div className="text-primary-foreground/80 text-xs md:text-sm uppercase tracking-wider mt-1">{s.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
//         <div className="w-6 h-10 rounded-full border-2 border-gold-light/60 flex justify-center pt-2">
//           <div className="w-1 h-2 rounded-full bg-gold-light" />
//         </div>
//       </div>
//     </section>

//     {/* TRUST STRIP */}
//     <section className="gradient-royal py-6">
//       <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-primary-foreground">
//         <span className="flex items-center gap-2 text-sm md:text-base font-serif"><Award className="w-5 h-5 text-gold-light" /> 15+ Years Experience</span>
//         <span className="text-gold-light">•</span>
//         <span className="flex items-center gap-2 text-sm md:text-base font-serif"><Users className="w-5 h-5 text-gold-light" /> Trusted by Retailers</span>
//         <span className="text-gold-light">•</span>
//         <span className="flex items-center gap-2 text-sm md:text-base font-serif"><ShieldCheck className="w-5 h-5 text-gold-light" /> Quality Assured</span>
//       </div>
//     </section>

//     {/* INTRO + SHOWCASE (one side content, one side video/image) */}
//     <section className="section-padding bg-background">
//       <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         <div className="relative">
//           <div className="absolute -inset-4 gradient-gold rounded-3xl opacity-20 blur-2xl" />
//           <div className="relative rounded-3xl overflow-hidden shadow-luxury group">
//             <video
//               autoPlay loop muted playsInline poster={showcaseImg}
//               className="w-full h-[600px] object-cover"
//             >
//               <source src="https://videos.pexels.com/video-files/4994015/4994015-uhd_2560_1440_25fps.mp4" type="video/mp4" />
//             </video>
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 text-primary-foreground">
//               <div className="text-xs uppercase tracking-widest text-gold-light mb-1">Heritage Craft</div>
//               <div className="font-display text-2xl">Crafted on the Loom</div>
//             </div>
//           </div>
//           <div className="absolute -bottom-6 -right-6 hidden md:flex w-32 h-32 rounded-full gradient-gold items-center justify-center shadow-gold animate-float">
//             <div className="text-center text-primary">
//               <div className="font-display text-3xl font-bold">15+</div>
//               <div className="text-[10px] uppercase tracking-widest">Years</div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="ornament-divider justify-start max-w-xs mb-5"><span className="text-gold">❋</span></div>
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">About Pragati Sarees</span>
//           <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-6 leading-tight">
//             Where Every Thread <span className="text-gradient-royal italic">Tells a Story</span>
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed mb-5">
//             For over 15 years, Pragati Sarees has been the trusted partner of small and medium retail shop owners across East India — manufacturing premium Banarasi Satin Silk Sarees that blend timeless tradition with contemporary style.
//           </p>
//           <p className="text-muted-foreground text-lg leading-relaxed mb-8">
//             By cutting out the middlemen, we deliver fair pricing, consistent quality, and on-time dispatch — empowering your store to grow with confidence.
//           </p>

//           <div className="grid grid-cols-2 gap-4 mb-8">
//             {[["Direct Manufacturer", "No middlemen"], ["Wholesale Pricing", "Best margins"], ["On-Time Dispatch", "Trusted logistics"], ["Premium Quality", "Hand-checked"]].map(([t, d]) => (
//               <div key={t} className="flex gap-3 items-start">
//                 <div className="w-9 h-9 rounded-full gradient-gold shrink-0 flex items-center justify-center"><Star className="w-4 h-4 text-primary" /></div>
//                 <div>
//                   <div className="font-semibold text-foreground">{t}</div>
//                   <div className="text-xs text-muted-foreground">{d}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-gold pb-1 hover:gap-4 transition-all">
//             Discover Our Story <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>
//       </div>
//     </section>

//     {/* FEATURED COLLECTIONS */}
//     <section className="section-padding gradient-cream relative overflow-hidden">
//       <div className="container mx-auto relative">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Featured</span>
//           <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">Signature Collections</h2>
//           <div className="ornament-divider"><span className="text-gold">❋</span></div>
//           <p className="text-muted-foreground mt-4">Handpicked Banarasi Satin Silk sarees — the styles your customers love most.</p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {collections.map((c, i) => (
//             <div key={c.name} className="group relative rounded-2xl overflow-hidden bg-card shadow-soft hover-lift">
//               <div className="aspect-[3/4] overflow-hidden bg-muted">
//                 <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//                 <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{c.tag}</div>
//                 <div className="font-display text-2xl text-primary-foreground mb-3">{c.name}</div>
//                 <Link to="/gallery" className="text-gold-light text-sm border-b border-gold-light w-fit pb-1">Explore →</Link>
//               </div>
//               <div className="p-5 group-hover:opacity-0 transition-opacity">
//                 <div className="text-gold-dark text-xs uppercase tracking-widest mb-1">{c.tag}</div>
//                 <div className="font-display text-xl text-primary">{c.name}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-luxury transition-all hover:scale-105">
//             View Full Gallery <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </section>

//     {/* WHY CHOOSE US */}
//     <section className="section-padding bg-background">
//       <div className="container mx-auto">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Choose Us</span>
//           <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">The Pragati Promise</h2>
//           <div className="ornament-divider"><span className="text-gold">❋</span></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {whyChoose.map((w) => (
//             <div key={w.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover-lift transition-all relative overflow-hidden">
//               <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full gradient-gold opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
//               <div className="w-14 h-14 rounded-xl gradient-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
//                 <w.icon className="w-7 h-7 text-gold-light" />
//               </div>
//               <h3 className="font-display text-2xl text-primary mb-2">{w.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* TESTIMONIALS */}
//     <section className="section-padding gradient-cream relative overflow-hidden">
//       <Quote className="absolute top-10 left-10 w-40 h-40 text-gold/10" />
//       <div className="container mx-auto relative">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Testimonials</span>
//           <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">Loved by Retailers</h2>
//           <div className="ornament-divider"><span className="text-gold">❋</span></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t) => (
//             <div key={t.name} className="p-8 rounded-2xl bg-card shadow-soft hover-lift relative">
//               <Quote className="w-10 h-10 text-gold mb-4" />
//               <div className="flex gap-1 mb-3">
//                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
//               </div>
//               <p className="text-foreground leading-relaxed font-serif italic mb-6">"{t.text}"</p>
//               <div className="border-t border-border pt-4">
//                 <div className="font-display text-lg text-primary">{t.name}</div>
//                 <div className="text-sm text-muted-foreground">{t.shop}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* CTA */}
//     <section className="relative section-padding overflow-hidden">
//       <div className="absolute inset-0 gradient-royal" />
//       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${showcaseImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
//       <div className="absolute inset-0 bg-gradient-overlay" />
//       <div className="container mx-auto relative text-center max-w-3xl">
//         <Sparkles className="w-12 h-12 text-gold-light mx-auto mb-6 animate-float" />
//         <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-5 leading-tight">
//           Grow Your Saree Business <span className="text-gradient-gold italic">With Us Today</span>
//         </h2>
//         <p className="text-primary-foreground/85 text-lg mb-8 font-serif italic">
//           Partner with India's trusted Banarasi Satin Silk manufacturer. Better margins, better designs, better growth.
//         </p>
//         <div className="flex flex-wrap gap-4 justify-center">
//           <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
//             Enquire Now <ArrowRight className="w-5 h-5" />
//           </Link>
//           <a href="tel:+919328015392" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold-light text-primary-foreground hover:bg-primary-foreground/10 transition-all">
//             <Phone className="w-5 h-5" /> Call +91 93280 15392
//           </a>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default Home;





import { Link } from "react-router-dom";
import { ArrowRight, Award, Truck, Users, Sparkles, Star, Quote, ShieldCheck, IndianRupee, Clock, TrendingUp, Phone } from "lucide-react";
import Layout from "@/components/site/Layout";
import heroImg from "@/assets/hero-home.jpg";
import showcaseImg from "@/assets/showcase-video.jpg";
import s1 from "@/assets/saree-1.jpg";
import s2 from "@/assets/saree-2.jpg";
import s3 from "@/assets/saree-3.jpg";
import s4 from "@/assets/saree-4.jpg";
import VideoSection from "@/components/IndexCompo/Video";
import SareeCarousel from "@/components/IndexCompo/SareeCarousel";
import SignatureCollections from "@/components/IndexCompo/SignatureCollections";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroCarousel from "@/components/HeroCarousel";
import Testimonials from "@/components/Testimonials";


const collections = [
  { img: s1, name: "Banarasi Silk", tag: "Heritage Weave" },
  { img: s2, name: "Festive Pink", tag: "Bestseller" },
  { img: s3, name: "Royal Blue", tag: "Wedding Pick" },
  { img: s4, name: "Cream & Gold", tag: "Bridal" },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Direct from Manufacturer", desc: "No middlemen. Better margins. Pure value." },
  { icon: Award, title: "15+ Years of Trust", desc: "Proven reliability across East India." },
  { icon: Sparkles, title: "Wide Range of Sarees", desc: "Festive, daily wear & modern styles." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Wholesale rates designed for retailers." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable, traceable dispatch system." },
  { icon: TrendingUp, title: "Business Growth Partner", desc: "Supporting your retail success story." },
];

const testimonials = [
  { name: "Rajesh Patel", shop: "Patel Textiles, Ahmedabad", text: "Pragati Sarees has been our trusted partner for 6 years. Quality and timing — both unbeatable." },
  { name: "Sunita Devi", shop: "Sunita Saree Bhandar, Patna", text: "Beautiful designs, fair pricing, and the team treats us like family. Highly recommended for retailers." },
  { name: "Mohit Agarwal", shop: "Agarwal Sons, Kolkata", text: "Direct manufacturer rates with consistent quality. Our customers love every collection." },
];

const Home = () => (
  <Layout>
    {/* HERO */}
    <HeroCarousel />
    {/* <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Pragati Sarees - Premium Banarasi Silk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold-light/40 backdrop-blur-sm mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-gold-light" />
            <span className="text-gold-light text-xs uppercase tracking-[0.25em] font-medium">15+ Years of Heritage</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6 animate-fade-up delay-100">
            Weaving <span className="text-gradient-gold italic">Tradition</span><br />into Every Thread
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 font-serif italic mb-8 max-w-2xl animate-fade-up delay-200">
            "Direct from Manufacturer. Trusted by Retailers. Loved by Women."
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
              Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold-light/60 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all">
              View Collections
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-2xl animate-fade-up delay-500">
            {[
              { n: "15+", l: "Years Experience" },
              { n: "500+", l: "Retail Partners" },
              { n: "1000+", l: "Saree Designs" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold pl-4">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold font-bold">{s.n}</div>
                <div className="text-primary-foreground/80 text-xs md:text-sm uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold-light/60 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold-light" />
        </div>
      </div>
    </section> */}
    

    {/* TRUST STRIP */}
    <section className="gradient-royal py-6">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-primary-foreground">
        <span className="flex items-center gap-2 text-sm md:text-base font-serif"><Award className="w-5 h-5 text-gold-light" /> 15+ Years Experience</span>
        <span className="text-gold-light">•</span>
        <span className="flex items-center gap-2 text-sm md:text-base font-serif"><Users className="w-5 h-5 text-gold-light" /> Trusted by Retailers</span>
        <span className="text-gold-light">•</span>
        <span className="flex items-center gap-2 text-sm md:text-base font-serif"><ShieldCheck className="w-5 h-5 text-gold-light" /> Quality Assured</span>
      </div>
    </section>

    {/* INTRO + SHOWCASE (one side content, one side video/image) */}
    <section className="section-padding bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-gold rounded-3xl opacity-20 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-luxury group">
            <video
              autoPlay loop muted playsInline poster={showcaseImg}
              className="w-full h-[600px] object-cover"
            >
              <source src="https://www.pexels.com/download/video/28520946/" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <div className="text-xs uppercase tracking-widest text-gold-light mb-1">Heritage Craft</div>
              <div className="font-display text-2xl">Crafted on the Loom</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex w-32 h-32 rounded-full gradient-gold items-center justify-center shadow-gold animate-float">
            <div className="text-center text-primary">
              <div className="font-display text-3xl font-bold">15+</div>
              <div className="text-[10px] uppercase tracking-widest">Years</div>
            </div>
          </div>
        </div>

        <div>
          <div className="ornament-divider justify-start max-w-xs mb-5"><span className="text-gold">❋</span></div>
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">About Pragati Sarees</span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-6 leading-tight">
            Where Every Thread <span className="text-gradient-royal italic">Tells a Story</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            For over 15 years, Pragati Sarees has been the trusted partner of small and medium retail shop owners across East India — manufacturing premium Banarasi Satin Silk Sarees that blend timeless tradition with contemporary style.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            By cutting out the middlemen, we deliver fair pricing, consistent quality, and on-time dispatch — empowering your store to grow with confidence.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[["Direct Manufacturer", "No middlemen"], ["Wholesale Pricing", "Best margins"], ["On-Time Dispatch", "Trusted logistics"], ["Premium Quality", "Hand-checked"]].map(([t, d]) => (
              <div key={t} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full gradient-gold shrink-0 flex items-center justify-center"><Star className="w-4 h-4 text-primary" /></div>
                <div>
                  <div className="font-semibold text-foreground">{t}</div>
                  <div className="text-xs text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-gold pb-1 hover:gap-4 transition-all">
            Discover Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

   <SareeCarousel />

    {/* FEATURED COLLECTIONS */}
    {/* <section className="section-padding gradient-cream relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Featured</span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">Signature Collections</h2>
          <div className="ornament-divider"><span className="text-gold">❋</span></div>
          <p className="text-muted-foreground mt-4">Handpicked Banarasi Satin Silk sarees — the styles your customers love most.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c, i) => (
            <div key={c.name} className="group relative rounded-2xl overflow-hidden bg-card shadow-soft hover-lift">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{c.tag}</div>
                <div className="font-display text-2xl text-primary-foreground mb-3">{c.name}</div>
                <Link to="/gallery" className="text-gold-light text-sm border-b border-gold-light w-fit pb-1">Explore →</Link>
              </div>
              <div className="p-5 group-hover:opacity-0 transition-opacity">
                <div className="text-gold-dark text-xs uppercase tracking-widest mb-1">{c.tag}</div>
                <div className="font-display text-xl text-primary">{c.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-luxury transition-all hover:scale-105">
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section> */}

    <SignatureCollections />

      <VideoSection />

    {/* WHY CHOOSE US */}
    {/* <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">The Pragati Promise</h2>
          <div className="ornament-divider"><span className="text-gold">❋</span></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((w) => (
            <div key={w.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover-lift transition-all relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full gradient-gold opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="w-14 h-14 rounded-xl gradient-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <w.icon className="w-7 h-7 text-gold-light" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">{w.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <WhyChooseUs />

    {/* TESTIMONIALS */}
    <Testimonials />
    {/* <section className="section-padding gradient-cream relative overflow-hidden">
      <Quote className="absolute top-10 left-10 w-40 h-40 text-gold/10" />
      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 mb-4">Loved by Retailers</h2>
          <div className="ornament-divider"><span className="text-gold">❋</span></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl bg-card shadow-soft hover-lift relative">
              <Quote className="w-10 h-10 text-gold mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground leading-relaxed font-serif italic mb-6">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-display text-lg text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.shop}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* CTA */}
    <section className="relative section-padding overflow-hidden">

  {/* 🔹 Background Image (MAIN) */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${showcaseImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* 🔹 LIGHT DARK OVERLAY (only one, balanced) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* 🔹 OPTIONAL GOLD GRADIENT (very subtle) */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-yellow-500/20"></div>

  {/* 🔹 CONTENT */}
  <div className="container mx-auto relative text-center max-w-3xl">
    <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-6 animate-float" />

    <h2 className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
      Grow Your Saree Business{" "}
      <span className="text-yellow-400 italic">With Us Today</span>
    </h2>

    <p className="text-white/90 text-lg mb-8 font-serif italic">
      Partner with India's trusted Banarasi Satin Silk manufacturer. Better margins, better designs, better growth.
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
        bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
        text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Enquire Now <ArrowRight className="w-5 h-5" />
      </Link>

      <a
        href="tel:+919328015392"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
        border-2 border-white text-white hover:bg-white/10 transition"
      >
        <Phone className="w-5 h-5" /> Call +91 93280 15392
      </a>
    </div>
  </div>
</section>
  </Layout>
);

export default Home;
