import React from "react";
import sareeVideo from "../../assets/homevideo.mp4"; // adjust path if needed

const VideoSection = () => {
  return (
    <section className="w-full relative">

      {/* VIDEO BACKGROUND */}
      <div className="w-full h-[350px] md:h-[500px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={sareeVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      

    </section>
  );
};

export default VideoSection;