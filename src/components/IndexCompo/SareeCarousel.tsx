// import React, { useEffect, useState } from "react";

// const images = [
//   "https://i.pinimg.com/1200x/71/08/93/71089353aa2d00ebf3f50e42d5a88129.jpg",
//   "https://i.pinimg.com/1200x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg",
//   "https://i.pinimg.com/1200x/3e/53/2e/3e532e6319c31fa764d6a7582639346a.jpg",
//   "https://i.pinimg.com/736x/a3/32/77/a33277e92ce7c9eabfff3a7a86d3c14e.jpg",
//   "https://i.pinimg.com/736x/59/b2/00/59b200e3da694e988f922376d15b5a96.jpg",
// ];

// const SareeCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto Slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <section className="w-full py-16 bg-gray-100">
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto px-6 text-center mb-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#0c2d67]">
//           Our Saree Collection
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Explore our latest designs and timeless styles
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative max-w-5xl mx-auto">
        
//         {/* Image Container */}
//         <div className="w-full h-[300px] md:h-[450px] bg-white flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
//           <img
//             src={images[current]}
//             alt="Saree"
//             className="max-w-full max-h-full object-contain transition duration-700"
//           />
//         </div>

//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full shadow-lg text-xl"
//         >
//           ‹
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full shadow-lg text-xl"
//         >
//           ›
//         </button>

//         {/* Dots */}
//         <div className="flex justify-center mt-4 gap-2">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition ${
//                 current === index ? "bg-[#0c2d67]" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SareeCarousel;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://i.pinimg.com/1200x/71/08/93/71089353aa2d00ebf3f50e42d5a88129.jpg",
  "https://i.pinimg.com/1200x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg",
  "https://i.pinimg.com/1200x/3e/53/2e/3e532e6319c31fa764d6a7582639346a.jpg",
  "https://i.pinimg.com/736x/a3/32/77/a33277e92ce7c9eabfff3a7a86d3c14e.jpg",
  "https://i.pinimg.com/736x/59/b2/00/59b200e3da694e988f922376d15b5a96.jpg",
];

const SareeCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full py-16 bg-gray-100">

      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c2d67]">
          Our Premium Saree Collection
        </h2>
        <p className="text-gray-600 mt-2">
          Tradition meets elegance in every drape
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - CAROUSEL */}
        <div className="relative w-full">
          <div className="w-full h-[300px] md:h-[380px] bg-white flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images[current]}
              alt="Saree"
              className="w-full h-full object-contain transition duration-700"
            />
          </div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-full shadow text-lg"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-full shadow text-lg"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-[#0c2d67]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0c2d67] mb-4">
            Discover Timeless Beauty
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Explore our exclusive saree collection designed to celebrate
            elegance, culture, and modern fashion. Each saree reflects
            craftsmanship and attention to detail.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether it’s a wedding, festival, or daily wear, our sarees bring
            out the best in every woman with comfort and style.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Handpicked premium fabrics</li>
            <li>✔ Unique and trending designs</li>
            <li>✔ Suitable for all occasions</li>
            <li>✔ Value for money</li>
          </ul>

        <Link to="/gallery">
  <button className="mt-6 w-fit px-6 py-2 bg-[#0c2d67] text-white rounded-lg shadow hover:bg-blue-900 transition">
    View Collection
  </button>
        </Link>
        </div>

      </div>
    </section>
  );
};

export default SareeCarousel;