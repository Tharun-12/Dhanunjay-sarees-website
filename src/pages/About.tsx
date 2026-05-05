import { Link } from "react-router-dom";
import { Heart, Award, Users, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import heroImg from "@/assets/hero-about.jpg";
import showcaseImg from "@/assets/showcase-video.jpg";
import s6 from "@/assets/saree-6.jpg";

const About = () => (
  <Layout>
    <PageHero
      eyebrow="Our Story"
      title="About Pragati Sarees"
      subtitle="Weaving trust, tradition, and timeless style for over 15+ years."
      image={heroImg}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 gradient-gold rounded-3xl opacity-20 blur-2xl" />
          <img src={showcaseImg} alt="Banarasi saree heritage" loading="lazy" className="relative rounded-3xl shadow-luxury w-full h-[600px] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-luxury max-w-xs hidden md:block">
            <Heart className="w-8 h-8 text-rose mb-2" />
            <div className="font-display text-xl text-primary">Made with Love</div>
            <div className="text-sm text-muted-foreground">Every saree carries our promise of quality and care.</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Who We Are</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-6 leading-tight">
            A Legacy of <span className="text-gradient-royal italic">Trust & Tradition</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            At <strong className="text-primary">Pragati Sarees</strong>, we've been weaving trust, tradition, and timeless style for over <strong className="text-primary">15+ years</strong>. As a direct manufacturer, we specialize in crafting high-quality sarees that cater to the needs of small and medium retail shop owners across East India.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Our wide range of festival silk sarees are designed to suit every woman, every occasion, and every store's unique demand. By cutting out middlemen, we ensure fair pricing, consistent quality, and on-time delivery — making us a trusted partner for retailers who want to grow their business with confidence.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            More than just sarees, we provide reliability, variety, and long-term partnership — because at Pragati Sarees, every thread we weave carries our promise of quality and care.
          </p>
          <blockquote className="border-l-4 border-gold pl-5 italic font-serif text-xl text-primary">
            "Pragati Sarees – Direct from Manufacturer. Trusted by Retailers. Loved by Women."
          </blockquote>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section-padding gradient-cream">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Our Values</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">What We Stand For</h2>
          <div className="ornament-divider"><span className="text-gold">❋</span></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Quality First", desc: "Every saree is hand-checked before dispatch — uncompromising standards on every weave." },
            { icon: Users, title: "Partnership", desc: "We grow when you grow. Our retailers are family, not just customers." },
            { icon: Sparkles, title: "Tradition + Modern", desc: "Heritage Banarasi craftsmanship designed for today's women." },
          ].map((v) => (
            <div key={v.title} className="bg-card p-8 rounded-2xl shadow-soft text-center hover-lift">
              <div className="w-16 h-16 mx-auto rounded-full gradient-royal flex items-center justify-center mb-5">
                <v.icon className="w-8 h-8 text-gold-light" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MILESTONES */}
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={s6} alt="Bundle" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>
      <div className="container mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
          {[["15+", "Years Experience"], ["500+", "Retail Partners"], ["1000+", "Saree Designs"], ["50K+", "Happy Customers"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl md:text-6xl text-gradient-gold font-bold">{n}</div>
              <div className="uppercase tracking-widest text-sm mt-2 text-gold-light">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-5">Ready to grow with us?</h2>
        <p className="text-muted-foreground mb-8">Join hundreds of retailers across India who trust Pragati Sarees as their wholesale partner.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
          Become a Partner <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
