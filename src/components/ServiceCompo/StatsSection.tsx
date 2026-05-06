import React, { useEffect, useRef, useState } from "react";
import { Crown, Users, Award, MapPin } from "lucide-react";

const statsData = [
  { value: 50000, suffix: "+", label: "Sarees Sold", icon: Crown },
  { value: 2000, suffix: "+", label: "Retail Partners", icon: Users },
  { value: 25, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 50, suffix: "+", label: "Cities Served", icon: MapPin },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 👇 SCROLL OBSERVER (RUN EVERY TIME)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 👇 COUNT ANIMATION (RESTART EVERY TIME)
  useEffect(() => {
    if (!visible) {
      // reset when leaving viewport
      setCounts(statsData.map(() => 0));
      return;
    }

    const duration = 2000;
    const intervalTime = 20;

    const intervals = statsData.map((stat, index) => {
      let current = 0;
      const increment = stat.value / (duration / intervalTime);

      return setInterval(() => {
        current += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            current >= stat.value ? stat.value : Math.floor(current);
          return updated;
        });

        if (current >= stat.value) clearInterval(intervals[index]);
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 gradient-royal relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? "animate-fall" : "opacity-0 -translate-y-10"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* ICON */}
              <div className="flex justify-center mb-3">
                <stat.icon className="w-10 h-10 text-gold-light" />
              </div>

              {/* NUMBER */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[i].toLocaleString()}
                {stat.suffix}
              </div>

              {/* LABEL */}
              <div className="text-gold-light/90 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* FALL ANIMATION */}
      <style>
        {`
          .animate-fall {
            opacity: 0;
            transform: translateY(-60px);
            animation: fallDown 0.8s ease forwards;
          }

          @keyframes fallDown {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default StatsSection;