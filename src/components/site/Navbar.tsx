import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full gradient-royal flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <span className="font-display text-xl text-primary-foreground font-bold">P</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display text-xl md:text-2xl font-bold ${scrolled ? "text-primary" : "text-primary-foreground drop-shadow"}`}>Pragati Sarees</div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-gold-dark" : "text-gold-light"}`}>Banktesh Creation</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
              `relative text-sm uppercase tracking-widest font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-gold-light"
              } ${isActive ? "after:scale-x-100" : ""} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100`
            }>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+919328015392" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
          <Phone className="w-4 h-4" /> +91 93280 15392
        </a>

        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-primary-foreground"}`} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-luxury animate-fade-in">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-border/50 ${isActive ? "text-primary" : "text-foreground"}`
              }>{l.label}</NavLink>
            ))}
            <a href="tel:+919328015392" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-gold text-primary-foreground font-medium">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
