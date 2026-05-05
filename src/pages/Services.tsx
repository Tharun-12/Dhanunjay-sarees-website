import { Link } from "react-router-dom";
import { Factory, Truck, Package, Boxes, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import heroImg from "@/assets/hero-services.jpg";
import s1 from "@/assets/saree-1.jpg";

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

const Services = () => (
  <Layout>
    <PageHero
      eyebrow="What We Offer"
      title="Our Services"
      subtitle="End-to-end manufacturing, wholesale, and delivery — built around your retail business."
      image={heroImg}
    />

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

    <section className="section-padding gradient-cream">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-3 gradient-gold rounded-3xl opacity-20 blur-2xl" />
          <img src={s1} alt="Banarasi saree" loading="lazy" className="relative rounded-3xl shadow-luxury w-full h-[600px] object-cover" />
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
  </Layout>
);

export default Services;
