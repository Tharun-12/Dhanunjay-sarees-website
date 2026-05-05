interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
}

const PageHero = ({ title, subtitle, image, eyebrow }: PageHeroProps) => (
  <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-overlay" />
    </div>
    <div className="relative z-10 container mx-auto text-center px-6 pt-20">
      {eyebrow && (
        <div className="inline-block animate-fade-up">
          <span className="text-gold-light tracking-[0.3em] text-xs md:text-sm uppercase font-medium">{eyebrow}</span>
        </div>
      )}
      <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mt-4 mb-5 animate-fade-up delay-100">
        <span className="text-gradient-gold">{title}</span>
      </h1>
      <div className="ornament-divider max-w-md mx-auto mb-5 animate-fade-up delay-200">
        <span className="text-gold text-xl">❋</span>
      </div>
      {subtitle && (
        <p className="text-primary-foreground/90 text-base md:text-xl max-w-2xl mx-auto font-serif italic animate-fade-up delay-300">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
