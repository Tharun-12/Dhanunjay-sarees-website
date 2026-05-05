import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import heroImg from "@/assets/hero-gallery.jpg";
import s1 from "@/assets/saree-1.jpg";
import s2 from "@/assets/saree-2.jpg";
import s3 from "@/assets/saree-3.jpg";
import s4 from "@/assets/saree-4.jpg";
import s5 from "@/assets/saree-5.jpg";
import s6 from "@/assets/saree-6.jpg";
import { X } from "lucide-react";

const items = [
  { img: s1, name: "Royal Maroon Banarasi", category: "Banarasi Silk" },
  { img: s2, name: "Festive Pink Silk", category: "Festive Collection" },
  { img: s3, name: "Royal Blue Heritage", category: "Banarasi Silk" },
  { img: s4, name: "Cream & Gold Bridal", category: "Festive Collection" },
  { img: s5, name: "Emerald Peacock", category: "Banarasi Silk" },
  { img: s6, name: "Wholesale Bundles", category: "Wholesale Bundles" },
  { img: s2, name: "Rose Festive Pick", category: "Festive Collection" },
  { img: s1, name: "Maroon Heritage Weave", category: "Banarasi Silk" },
  { img: s6, name: "Multi-Colour Bundle", category: "Wholesale Bundles" },
];

const categories = ["All", "Banarasi Silk", "Festive Collection", "Wholesale Bundles"] as const;

const Gallery = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const [zoom, setZoom] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <Layout>
      <PageHero
        eyebrow="Our Collections"
        title="Saree Gallery"
        subtitle="Explore our curated range of Banarasi Satin Silk Sarees — every weave a story."
        image={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all ${
                  active === c
                    ? "gradient-royal text-primary-foreground shadow-luxury"
                    : "bg-muted text-foreground hover:bg-gold/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={i}
                onClick={() => setZoom(item.img)}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover-lift cursor-zoom-in bg-muted"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{item.category}</div>
                  <div className="font-display text-2xl text-primary-foreground">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {zoom && (
        <div onClick={() => setZoom(null)} className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <button className="absolute top-6 right-6 text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/20" onClick={() => setZoom(null)}>
            <X className="w-7 h-7" />
          </button>
          <img src={zoom} alt="Zoom" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-luxury" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
