// import React from "react";

// const SareeVideoSection = () => {
//   return (
//     <section className="w-full relative">

//       {/* VIDEO BACKGROUND */}
//       <div className="w-full h-[350px] md:h-[500px] overflow-hidden">
//         <video
//           className="w-full h-full object-cover"
//           src="https://v.ftcdn.net/15/58/63/41/700_F_1558634115_qTIWuXlBMyPHnY1YRUiCRE3d6SV51tv7_ST.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* OVERLAY CONTENT */}
//       <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
//         <div className="max-w-3xl text-white">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             Pragati Sarees
//           </h2>
//           <p className="text-lg md:text-xl mb-4">
//             Direct from Manufacturer. Trusted by Retailers. Loved by Women.
//           </p>
//           <p className="text-sm md:text-base text-gray-200">
//             15+ Years of weaving trust, tradition & timeless saree collections.
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default SareeVideoSection;





// import React from "react";

// const SareeVideoSection = () => {
//   return (
//     <section className="w-full py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col items-center justify-between h-full gap-6">

//           {/* Vertical Video */}
//           <div className="w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-2xl shadow-xl">
//             <video
//               className="w-full h-full object-cover"
//               src="https://www.pexels.com/download/video/36419491/"
//               autoPlay
//               muted
//               playsInline
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Elegant Saree Collection
//           </h2>

//           <p className="text-gray-600 mb-4 leading-relaxed">
//             Discover the timeless beauty of sarees crafted with elegance and
//             tradition. Our collection features luxurious silk, designer wear,
//             and festive sarees perfect for every occasion.
//           </p>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             From vibrant colors to intricate designs, each saree tells a story
//             of craftsmanship and culture. Elevate your wardrobe with styles that
//             blend tradition with modern trends.
//           </p>

//           <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-md transition w-fit">
//             Explore Collection
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SareeVideoSection;




import React from "react";
import { Link } from "react-router-dom";

const SareeVideoSection = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {/* Vertical Video */}
          <div className="w-full max-w-[420px] h-[460px] overflow-hidden rounded-2xl shadow-xl mx-auto">
            <video
              className="w-full h-full object-cover"
              src="https://www.pexels.com/download/video/36419491/"
              autoPlay
              muted
              playsInline
              loop
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elegant Saree Collection
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Discover the timeless beauty of sarees crafted with elegance and
            tradition. Our collection features luxurious silk, designer wear,
            and festive sarees perfect for every occasion.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From vibrant colors to intricate designs, each saree tells a story
            of craftsmanship and culture. Elevate your wardrobe with styles that
            blend tradition with modern trends.
          </p>

         <Link to="/gallery">
  <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-md transition w-fit">
    Explore Collection
  </button>
    </Link>
        </div>

      </div>
    </section>
  );
};

export default SareeVideoSection;