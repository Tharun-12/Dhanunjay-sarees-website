import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Gupta",
    shop: "Gupta Saree House",
    text: "Margins improved a lot. Customers love the designs!",
    image: "https://i.pinimg.com/1200x/9d/7e/85/9d7e85a684df83e917f694a07eeee582.jpg",
    big: true,
  },
  {
    name: "Anjali Verma",
    shop: "Verma Fashion Store",
    text: "Trending collections always.",
    image: "https://i.pinimg.com/1200x/1f/db/b0/1fdbb078b8fba286ea141a665490b13f.jpg",
  },
  {
    name: "Suresh Patel",
    shop: "Patel Textiles",
    text: "Reliable delivery and premium quality fabrics.",
    image: "https://i.pinimg.com/736x/c9/36/09/c93609be5d19cb3a39a4d39affff66dc.jpg",
  },
  {
    name: "Meena Sharma",
    shop: "Sharma Saree Centre",
    text: "Affordable pricing with luxury feel.",
    image: "https://i.pinimg.com/736x/be/27/b0/be27b04c74386bd7ed10d027b3bf7e83.jpg",
    big: true,
  },
  {
    name: "Kiran Rao",
    shop: "Rao Collections",
    text: "Professional service and beautiful saree collections.",
    image: "https://i.pinimg.com/736x/88/0b/93/880b93d54d4ba9a9a61f9eb154f6b3d4.jpg",
  },

  // 👇 Must appear below Kiran Rao
  {
    name: "Rahul Jain",
    shop: "Jain Saree World",
    text: "Amazing collection and great support. Highly recommended!",
    image: "https://i.pinimg.com/1200x/99/88/41/99884121b9df0f2fc491359b7d623740.jpg",
  },

  {
    name: "Priya Agarwal",
    shop: "Agarwal Fashion Hub",
    text: "Excellent quality and fast delivery.",
    image: "https://i.pinimg.com/736x/fa/e1/70/fae170cd9de68f3a2953d329289e8f36.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#faf7f5]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-pink-600 uppercase">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-800">
          Loved by Retailers
        </h2>
      </div>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto auto-rows-[200px] [grid-auto-flow:dense]">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`
              relative rounded-2xl overflow-hidden shadow-lg group
              ${t.big ? "row-span-2" : ""}
              ${t.name === "Rahul Jain" ? "lg:col-start-3" : ""}
            `}
          >

            {/* IMAGE */}
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-5 text-white">

              {/* STARS */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-sm italic mb-3">
                "{t.text}"
              </p>

              {/* NAME */}
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-xs text-gray-300">{t.shop}</p>
            </div>

            {/* QUOTE ICON */}
            <Quote className="absolute top-3 right-3 w-8 h-8 text-white/30" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;