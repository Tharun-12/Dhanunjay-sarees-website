// import { ArrowRight } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const collections = [
//   {
//     name: "Banarasi Silk",
//     tag: "Heritage Weave",
//     images: [
//       "https://i.pinimg.com/564x/71/08/93/71089353aa2d00ebf3f50e42d5a88129.jpg",
//       "https://i.pinimg.com/564x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg",
//       "https://i.pinimg.com/1200x/86/c2/9b/86c29b2fa8019b8de111772840b5c7b4.jpg",
//       "https://i.pinimg.com/1200x/0d/15/bc/0d15bcb481f4ab9a906f2dbd37cd5074.jpg",
//     ],
//   },
//   {
//     name: "Festive Pink",
//     tag: "Bestseller",
//     images: [
//       "https://i.pinimg.com/1200x/35/fa/23/35fa237a369eaa82ee3348b873aa17de.jpg",
//       "https://i.pinimg.com/1200x/9a/06/d6/9a06d62fded76da0e3bd0326bdd4df3d.jpg",
//       "https://i.pinimg.com/1200x/95/30/5c/95305cb6b90a654db96aa4f8a06db426.jpg",
//       "https://i.pinimg.com/736x/8a/5c/44/8a5c44044e6ee6e6e55936370840921f.jpg",
//     ],
//   },
//   {
//     name: "Royal Blue",
//     tag: "Wedding Pick",
//     images: [
//       "https://i.pinimg.com/736x/d6/5d/ce/d65dced264b85ef1ed76678416aeb2f6.jpg",
//       "https://i.pinimg.com/1200x/e4/9b/67/e49b67325feb2780298a740f7712d922.jpg",
//       "https://i.pinimg.com/1200x/8c/fa/3d/8cfa3dda56346075f314170f053f77ff.jpg",
//       "https://i.pinimg.com/1200x/f8/24/38/f82438acdded887e18262818cb71c421.jpg",
//     ],
//   },
//   {
//     name: "Cream & Gold",
//     tag: "Bridal",
//     images: [
//       "https://i.pinimg.com/1200x/29/a9/f8/29a9f852d4b42ec8ff9751b688f637ed.jpg",
//       "https://i.pinimg.com/736x/05/df/0d/05df0dc2fcff3609b9a6608ccaef10eb.jpg",
//       "https://i.pinimg.com/1200x/8a/c8/6c/8ac86c770a7a051957d39bbc5ec79198.jpg",
//       "https://i.pinimg.com/1200x/f2/b9/24/f2b92422a41a621b0fc8ccdf24c8f5d3.jpg",
//     ],
//   },
// ];

// const SignatureCollections = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [imageIndex, setImageIndex] = useState<number[]>([0, 0, 0, 0]);

//   // Auto slide images when hovering
//   useEffect(() => {
//     let interval: any;

//     if (hoveredIndex !== null) {
//       interval = setInterval(() => {
//         setImageIndex((prev) => {
//           const newIndexes = [...prev];
//           newIndexes[hoveredIndex] =
//             (newIndexes[hoveredIndex] + 1) % collections[hoveredIndex].images.length;
//           return newIndexes;
//         });
//       }, 1000); // change every 1 sec
//     }

//     return () => clearInterval(interval);
//   }, [hoveredIndex]);

//   return (
//     <section className="min-h-screen py-16 bg-[#faf7f2]">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* HEADER */}
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <span className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-medium">
//             Featured
//           </span>

//           <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mt-3 mb-4">
//             Signature Collections
//           </h2>

//           <p className="text-gray-500 mt-3">
//             Handpicked Banarasi Satin Silk sarees — the styles your customers love most.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

//           {collections.map((c, i) => (
//             <div
//               key={c.name}
//               onMouseEnter={() => setHoveredIndex(i)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
//             >
              
//               {/* IMAGE SLIDER */}
//               <div className="aspect-[3/4] overflow-hidden">
//                 <img
//                   src={c.images[imageIndex[i]]}
//                   alt={c.name}
//                   className="w-full h-full object-cover transition-all duration-500"
//                 />
//               </div>

//               {/* HOVER OVERLAY */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
//                 <span className="text-yellow-300 text-xs uppercase tracking-widest">
//                   {c.tag}
//                 </span>
//                 <h3 className="text-white text-lg font-semibold">{c.name}</h3>

              
//               </div>

//               {/* NORMAL TEXT */}
//               <div className="p-3 group-hover:opacity-0 transition duration-300">
//                 <span className="text-yellow-700 text-xs uppercase tracking-widest">
//                   {c.tag}
//                 </span>
//                 <h3 className="text-base font-medium text-gray-800">
//                   {c.name}
//                 </h3>
//               </div>

//             </div>
//           ))}

//         </div>

//         {/* BUTTON */}
//         <div className="text-center mt-12">
//             <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-luxury transition-all hover:scale-105">
//             View Full Gallery <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SignatureCollections;



import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    name: "Banarasi Silk",
    tag: "Heritage Weave",
    images: [
      "https://i.pinimg.com/564x/71/08/93/71089353aa2d00ebf3f50e42d5a88129.jpg",
      "https://i.pinimg.com/564x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg",
      "https://i.pinimg.com/1200x/86/c2/9b/86c29b2fa8019b8de111772840b5c7b4.jpg",
      "https://i.pinimg.com/1200x/0d/15/bc/0d15bcb481f4ab9a906f2dbd37cd5074.jpg",
    ],
  },
  {
    name: "Festive Pink",
    tag: "Bestseller",
    images: [
      "https://i.pinimg.com/1200x/35/fa/23/35fa237a369eaa82ee3348b873aa17de.jpg",
      "https://i.pinimg.com/1200x/9a/06/d6/9a06d62fded76da0e3bd0326bdd4df3d.jpg",
      "https://i.pinimg.com/1200x/95/30/5c/95305cb6b90a654db96aa4f8a06db426.jpg",
      "https://i.pinimg.com/736x/8a/5c/44/8a5c44044e6ee6e6e55936370840921f.jpg",
    ],
  },
  {
    name: "Royal Blue",
    tag: "Wedding Pick",
    images: [
      "https://i.pinimg.com/736x/d6/5d/ce/d65dced264b85ef1ed76678416aeb2f6.jpg",
      "https://i.pinimg.com/1200x/e4/9b/67/e49b67325feb2780298a740f7712d922.jpg",
      "https://i.pinimg.com/1200x/8c/fa/3d/8cfa3dda56346075f314170f053f77ff.jpg",
      "https://i.pinimg.com/1200x/f8/24/38/f82438acdded887e18262818cb71c421.jpg",
    ],
  },
  {
    name: "Cream & Gold",
    tag: "Bridal",
    images: [
      "https://i.pinimg.com/1200x/29/a9/f8/29a9f852d4b42ec8ff9751b688f637ed.jpg",
      "https://i.pinimg.com/736x/05/df/0d/05df0dc2fcff3609b9a6608ccaef10eb.jpg",
      "https://i.pinimg.com/1200x/8a/c8/6c/8ac86c770a7a051957d39bbc5ec79198.jpg",
      "https://i.pinimg.com/1200x/f2/b9/24/f2b92422a41a621b0fc8ccdf24c8f5d3.jpg",
    ],
  },
];

const SignatureCollections = () => {
  const [imageIndex, setImageIndex] = useState<number[]>([0, 0, 0, 0]);

  // 🔥 Auto-slide all cards
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) =>
        prev.map((val, i) => (val + 1) % collections[i].images.length)
      );
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-16 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-medium">
            Featured
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mt-3 mb-4">
            Signature Collections
          </h2>

          <p className="text-gray-500 mt-3">
            Handpicked Banarasi Satin Silk sarees — the styles your customers love most.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {collections.map((c, i) => (
            <div
              key={c.name}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              
              {/* IMAGE */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.images[imageIndex[i]]}
                  alt={c.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <span className="text-yellow-300 text-xs uppercase tracking-widest">
                  {c.tag}
                </span>
                <h3 className="text-white text-lg font-semibold">
                  {c.name}
                </h3>
              </div>

              {/* NORMAL TEXT */}
              <div className="p-3 group-hover:opacity-0 transition duration-300">
                <span className="text-yellow-700 text-xs uppercase tracking-widest">
                  {c.tag}
                </span>
                <h3 className="text-base font-medium text-gray-800">
                  {c.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-luxury transition-all hover:scale-105"
          >
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SignatureCollections;