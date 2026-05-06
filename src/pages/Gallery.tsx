// import { useState } from "react";
// import Layout from "@/components/site/Layout";
// import PageHero from "@/components/site/PageHero";
// import heroImg from "@/assets/hero-gallery.jpg";
// import s1 from "@/assets/saree-1.jpg";
// import s2 from "@/assets/saree-2.jpg";
// import s3 from "@/assets/saree-3.jpg";
// import s4 from "@/assets/saree-4.jpg";
// import s5 from "@/assets/saree-5.jpg";
// import s6 from "@/assets/saree-6.jpg";
// import { X } from "lucide-react";

// const items = [
//   { img: s1, name: "Royal Maroon Banarasi", category: "Banarasi Silk" },
//   { img: s2, name: "Festive Pink Silk", category: "Festive Collection" },
//   { img: s3, name: "Royal Blue Heritage", category: "Banarasi Silk" },
//   { img: s4, name: "Cream & Gold Bridal", category: "Festive Collection" },
//   { img: s5, name: "Emerald Peacock", category: "Banarasi Silk" },
//   { img: s6, name: "Wholesale Bundles", category: "Wholesale Bundles" },
//   { img: s2, name: "Rose Festive Pick", category: "Festive Collection" },
//   { img: s1, name: "Maroon Heritage Weave", category: "Banarasi Silk" },
//   { img: s6, name: "Multi-Colour Bundle", category: "Wholesale Bundles" },
// ];

// const categories = ["All", "Banarasi Silk", "Festive Collection", "Wholesale Bundles"] as const;

// const Gallery = () => {
//   const [active, setActive] = useState<typeof categories[number]>("All");
//   const [zoom, setZoom] = useState<string | null>(null);
//   const filtered = active === "All" ? items : items.filter((i) => i.category === active);

//   return (
//     <Layout>
//       <PageHero
//         eyebrow="Our Collections"
//         title="Saree Gallery"
//         subtitle="Explore our curated range of Banarasi Satin Silk Sarees — every weave a story."
//         image={heroImg}
//       />

//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setActive(c)}
//                 className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all ${
//                   active === c
//                     ? "gradient-royal text-primary-foreground shadow-luxury"
//                     : "bg-muted text-foreground hover:bg-gold/20"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setZoom(item.img)}
//                 className="group relative rounded-2xl overflow-hidden shadow-soft hover-lift cursor-zoom-in bg-muted"
//               >
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//                   <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{item.category}</div>
//                   <div className="font-display text-2xl text-primary-foreground">{item.name}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {zoom && (
//         <div onClick={() => setZoom(null)} className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
//           <button className="absolute top-6 right-6 text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/20" onClick={() => setZoom(null)}>
//             <X className="w-7 h-7" />
//           </button>
//           <img src={zoom} alt="Zoom" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-luxury" />
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default Gallery;





// import { useState } from "react";
// import Layout from "@/components/site/Layout";
// import PageHero from "@/components/site/PageHero";
// import heroImg from "@/assets/hero-gallery.jpg";
// import s1 from "@/assets/saree-1.jpg";
// import s2 from "@/assets/saree-2.jpg";
// import s3 from "@/assets/saree-3.jpg";
// import s4 from "@/assets/saree-4.jpg";
// import s5 from "@/assets/saree-5.jpg";
// import s6 from "@/assets/saree-6.jpg";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const items = [
//   { 
//     img: s1, 
//     name: "Royal Maroon Banarasi", 
//     category: "Banarasi Silk",
//     carouselImages: [s1, s2, s3] // Add related images
//   },
//   { 
//     img: s2, 
//     name: "Festive Pink Silk", 
//     category: "Festive Collection",
//     carouselImages: [s2, s1, s4]
//   },
//   { 
//     img: s3, 
//     name: "Royal Blue Heritage", 
//     category: "Banarasi Silk",
//     carouselImages: [s3, s5, s1]
//   },
//   { 
//     img: s4, 
//     name: "Cream & Gold Bridal", 
//     category: "Festive Collection",
//     carouselImages: [s4, s2, s6]
//   },
//   { 
//     img: s5, 
//     name: "Emerald Peacock", 
//     category: "Banarasi Silk",
//     carouselImages: [s5, s3, s2]
//   },
//   { 
//     img: s6, 
//     name: "Wholesale Bundles", 
//     category: "Wholesale Bundles",
//     carouselImages: [s6, s4, s1]
//   },
//   { 
//     img: s2, 
//     name: "Rose Festive Pick", 
//     category: "Festive Collection",
//     carouselImages: [s2, s4, s6]
//   },
//   { 
//     img: s1, 
//     name: "Maroon Heritage Weave", 
//     category: "Banarasi Silk",
//     carouselImages: [s1, s3, s5]
//   },
//   { 
//     img: s6, 
//     name: "Multi-Colour Bundle", 
//     category: "Wholesale Bundles",
//     carouselImages: [s6, s2, s4]
//   },
// ];

// const categories = ["All", "Banarasi Silk", "Festive Collection", "Wholesale Bundles"] as const;

// const Gallery = () => {
//   const [active, setActive] = useState<typeof categories[number]>("All");
//   const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   const filtered = active === "All" ? items : items.filter((i) => i.category === active);

//   const openCarousel = (item: typeof items[0]) => {
//     setSelectedItem(item);
//     setCurrentImageIndex(0);
//   };

//   const closeCarousel = () => {
//     setSelectedItem(null);
//     setCurrentImageIndex(0);
//   };

//   const nextImage = () => {
//     if (selectedItem) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedItem.carouselImages.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedItem) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedItem.carouselImages.length - 1 : prev - 1
//       );
//     }
//   };

//   // Handle keyboard navigation
//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'ArrowLeft') prevImage();
//     if (e.key === 'ArrowRight') nextImage();
//     if (e.key === 'Escape') closeCarousel();
//   };

//   return (
//     <Layout>
//       <PageHero
//         eyebrow="Our Collections"
//         title="Saree Gallery"
//         subtitle="Explore our curated range of Banarasi Satin Silk Sarees — every weave a story."
//         image={heroImg}
//       />

//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setActive(c)}
//                 className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all ${
//                   active === c
//                     ? "bg-primary text-primary-foreground shadow-luxury"
//                     : "hover:bg-muted text-foreground"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//             {filtered.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => openCarousel(item)}
//                 className="group relative rounded-2xl overflow-hidden shadow-soft hover-lift cursor-zoom-in flex flex-col h-full"
//               >
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img 
//                     src={item.img} 
//                     alt={item.name} 
//                     loading="lazy" 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//                   <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{item.category}</div>
//                   <div className="font-display text-2xl text-white">{item.name}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Carousel Modal */}
//       {selectedItem && (
//         <div 
//           onClick={closeCarousel}
//           onKeyDown={handleKeyDown}
//           className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
//           tabIndex={0}
//         >
//           {/* Close button */}
//           <button 
//             className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition-all z-10"
//             onClick={closeCarousel}
//           >
//             <X className="w-7 h-7" />
//           </button>

//           {/* Left navigation button */}
//           <button 
//             className="absolute left-6 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
//             onClick={(e) => {
//               e.stopPropagation();
//               prevImage();
//             }}
//           >
//             <ChevronLeft className="w-8 h-8" />
//           </button>

//           {/* Right navigation button */}
//           <button 
//             className="absolute right-6 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImage();
//             }}
//           >
//             <ChevronRight className="w-8 h-8" />
//           </button>

//           {/* Main content */}
//           <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
//             {/* Main image */}
//             <div className="relative rounded-2xl overflow-hidden bg-black/50">
//               <img 
//                 src={selectedItem.carouselImages[currentImageIndex]} 
//                 alt={`${selectedItem.name} - view ${currentImageIndex + 1}`}
//                 className="w-full h-auto max-h-[70vh] object-contain"
//               />
//             </div>

//             {/* Thumbnails */}
//             <div className="flex justify-center gap-3 mt-6">
//               {selectedItem.carouselImages.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentImageIndex(idx)}
//                   className={`relative rounded-lg overflow-hidden transition-all ${
//                     currentImageIndex === idx 
//                       ? 'ring-2 ring-gold-light scale-105' 
//                       : 'opacity-60 hover:opacity-100'
//                   }`}
//                 >
//                   <img 
//                     src={img} 
//                     alt={`Thumbnail ${idx + 1}`}
//                     className="w-20 h-20 object-cover"
//                   />
//                 </button>
//               ))}
//             </div>

//             {/* Product info */}
//             <div className="text-center mt-6">
//               <div className="text-gold-light text-xs uppercase tracking-widest mb-2">
//                 {selectedItem.category}
//               </div>
//               <div className="font-display text-2xl text-white">
//                 {selectedItem.name}
//               </div>
//               <div className="text-white/60 text-sm mt-2">
//                 {currentImageIndex + 1} / {selectedItem.carouselImages.length}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default Gallery;





import { useState, useEffect } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import heroImg from "@/assets/hero-gallery.jpg";
import s1 from "@/assets/saree-1.jpg";
import s2 from "@/assets/saree-2.jpg";
import s3 from "@/assets/saree-3.jpg";
import s4 from "@/assets/saree-4.jpg";
import s5 from "@/assets/saree-5.jpg";
import s6 from "@/assets/saree-6.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Define the GalleryItem type
type GalleryItem = {
  img: string;
  name: string;
  category: string;
  carouselImages: string[];
  aspect: "portrait" | "landscape";
};

const items: GalleryItem[] = [
  { 
    img: s1, 
    name: "Royal Maroon Banarasi", 
    category: "Banarasi Silk",
    carouselImages: [s1, s2, s3],
    aspect: "portrait"
  },
  { 
    img: s2, 
    name: "Festive Pink Silk", 
    category: "Festive Collection",
    carouselImages: [s2, s1, s4],
    aspect: "landscape"
  },
  { 
    img: s3, 
    name: "Royal Blue Heritage", 
    category: "Banarasi Silk",
    carouselImages: [s3, s5, s1],
    aspect: "portrait"
  },
  { 
    img: s4, 
    name: "Cream & Gold Bridal", 
    category: "Festive Collection",
    carouselImages: [s4, s2, s6],
    aspect: "portrait"
  },
  { 
    img: s5, 
    name: "Emerald Peacock", 
    category: "Banarasi Silk",
    carouselImages: [s5, s3, s2],
    aspect: "landscape"
  },
  { 
    img: s6, 
    name: "Wholesale Bundles", 
    category: "Wholesale Bundles",
    carouselImages: [s6, s4, s1],
    aspect: "portrait"
  },
  { 
    img: s2, 
    name: "Rose Festive Pick", 
    category: "Festive Collection",
    carouselImages: [s2, s4, s6],
    aspect: "portrait"
  },
  { 
    img: s1, 
    name: "Maroon Heritage Weave", 
    category: "Banarasi Silk",
    carouselImages: [s1, s3, s5],
    aspect: "landscape"
  },
  { 
    img: s6, 
    name: "Multi-Colour Bundle", 
    category: "Wholesale Bundles",
    carouselImages: [s6, s2, s4],
    aspect: "portrait"
  },
  { 
    img: s3, 
    name: "Navy Blue Zari", 
    category: "Banarasi Silk",
    carouselImages: [s3, s5, s1],
    aspect: "portrait"
  },
  { 
    img: s4, 
    name: "Ivory Wedding Silk", 
    category: "Festive Collection",
    carouselImages: [s4, s2, s6],
    aspect: "landscape"
  },
  { 
    img: s5, 
    name: "Green Peacock Motif", 
    category: "Banarasi Silk",
    carouselImages: [s5, s3, s2],
    aspect: "portrait"
  },
];

const categories = ["All", "Banarasi Silk", "Festive Collection", "Wholesale Bundles"] as const;
type Category = typeof categories[number];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [columns, setColumns] = useState(3);
  
  const filtered: GalleryItem[] = active === "All" ? items : items.filter((i) => i.category === active);

  // Responsive column count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute items into columns for masonry layout
  const getColumnItems = (): GalleryItem[][] => {
    const columnArrays: GalleryItem[][] = Array.from({ length: columns }, () => []);
    filtered.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
    return columnArrays;
  };

  const openCarousel = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeCarousel = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.carouselImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.carouselImages.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeCarousel();
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Our Collections"
        title="Saree Gallery"
        subtitle="Explore our curated range of Banarasi Satin Silk Sarees — every weave a story."
        image={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-luxury"
                    : "bg-white/80 hover:bg-muted text-foreground backdrop-blur-sm"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="flex gap-6">
            {getColumnItems().map((column, colIdx) => (
              <div key={colIdx} className="flex-1 flex flex-col gap-6">
                {column.map((item, idx) => (
                  <div
                    key={`${colIdx}-${idx}`}
                    onClick={() => openCarousel(item)}
                    className="group relative rounded-2xl overflow-hidden shadow-soft hover-lift cursor-zoom-in"
                  >
                    <div 
                      className={`overflow-hidden ${
                        item.aspect === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"
                      }`}
                    >
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        loading="lazy" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                      <div className="text-gold-light text-xs uppercase tracking-widest mb-1">{item.category}</div>
                      <div className="font-display text-xl text-white">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Carousel Modal - Centered */}
      {selectedItem && (
        <div 
          onClick={closeCarousel}
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          tabIndex={0}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition-all z-10"
            onClick={closeCarousel}
          >
            <X className="w-7 h-7" />
          </button>

          {/* Left navigation button */}
          <button 
            className="absolute left-6 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right navigation button */}
          <button 
            className="absolute right-6 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Content - Centered */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Main Image Container */}
            <div className="flex items-center justify-center w-full">
              <div className="relative rounded-2xl overflow-hidden bg-black/50">
                <img 
                  src={selectedItem.carouselImages[currentImageIndex]} 
                  alt={`${selectedItem.name} - view ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              {selectedItem.carouselImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative rounded-lg overflow-hidden transition-all ${
                    currentImageIndex === idx 
                      ? 'ring-2 ring-gold-light scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Product Info */}
            <div className="text-center mt-6">
              <div className="text-gold-light text-xs uppercase tracking-widest mb-2">
                {selectedItem.category}
              </div>
              <div className="font-display text-xl sm:text-2xl text-white">
                {selectedItem.name}
              </div>
              <div className="text-white/60 text-sm mt-2">
                {currentImageIndex + 1} / {selectedItem.carouselImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;