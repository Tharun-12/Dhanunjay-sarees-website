import React from "react";
import { Calendar, Sparkles, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// 👉 Replace with your real images
import s1 from "@/assets/saree-1.jpg";
import s2 from "@/assets/saree-2.jpg";
import s3 from "@/assets/saree-3.jpg";
import s4 from "@/assets/saree-4.jpg";

const FestiveGallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT (UNCHANGED) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-gold" />
              <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">
                Plan Ahead
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Festive <span className="text-gradient-royal">Collection Launches</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Get exclusive early access to our festive collections before they hit the market.
              Diwali, Durga Puja, Wedding Season, and more — we have special designs for every occasion.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Diwali Special Collection (Aug launch)",
                "Wedding Season Exclusive (Oct launch)",
                "New Year Wedding Line (Dec launch)",
                "Summer Festive Range (Mar launch)"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:gap-3 transition-all"
            >
              View Launch Calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT SIDE - 4 IMAGE GALLERY */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              {/* IMAGE 1 */}
              <img
                src={s1}
                alt="Festive saree 1"
                className="rounded-2xl shadow-lg h-56 w-full object-cover hover:scale-105 transition duration-300"
              />

              {/* IMAGE 2 */}
              <img
                src={s2}
                alt="Festive saree 2"
                className="rounded-2xl shadow-lg h-56 w-full object-cover hover:scale-105 transition duration-300"
              />

              {/* IMAGE 3 */}
              <img
                src={s3}
                alt="Festive saree 3"
                className="rounded-2xl shadow-lg h-56 w-full object-cover hover:scale-105 transition duration-300"
              />

              {/* IMAGE 4 */}
              <img
                src={s4}
                alt="Festive saree 4"
                className="rounded-2xl shadow-lg h-56 w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* BADGE */}
            <div className="absolute -top-4 -right-4 bg-gold text-primary px-4 py-2 rounded-full font-bold shadow-lg">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 fill-primary" /> Early Access
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FestiveGallerySection;