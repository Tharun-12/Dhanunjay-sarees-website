// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Menu, X, Phone } from "lucide-react";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => { setOpen(false); }, [location.pathname]);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"}`}>
//       <div className="container mx-auto flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3 group">
//           <div className="w-11 h-11 rounded-full gradient-royal flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
//             <span className="font-display text-xl text-primary-foreground font-bold">P</span>
//           </div>
//           <div className="leading-tight">
//             <div className={`font-display text-xl md:text-2xl font-bold ${scrolled ? "text-primary" : "text-primary-foreground drop-shadow"}`}>Pragati Sarees</div>
//             <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-gold-dark" : "text-gold-light"}`}>Banktesh Creation</div>
//           </div>
//         </Link>

//         <nav className="hidden lg:flex items-center gap-9">
//           {links.map((l) => (
//             <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
//               `relative text-sm uppercase tracking-widest font-medium transition-colors ${
//                 scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-gold-light"
//               } ${isActive ? "after:scale-x-100" : ""} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100`
//             }>
//               {l.label}
//             </NavLink>
//           ))}
//         </nav>

//         <a href="tel:+919328015392" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
//           <Phone className="w-4 h-4" /> +91 93280 15392
//         </a>

//         <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-primary-foreground"}`} aria-label="Menu">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-luxury animate-fade-in">
//           <nav className="flex flex-col p-6 gap-4">
//             {links.map((l) => (
//               <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
//                 `text-base font-medium py-2 border-b border-border/50 ${isActive ? "text-primary" : "text-foreground"}`
//               }>{l.label}</NavLink>
//             ))}
//             <a href="tel:+919328015392" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-gold text-primary-foreground font-medium">
//               <Phone className="w-4 h-4" /> Call Us
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;





import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Menu, X, Phone, Mail, Clock, Facebook, Instagram, Twitter, 
  Youtube, Home, Info, Briefcase, Images, Contact
} from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/contact", label: "Contact", icon: Contact },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-[#1877f2]" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-[#e4405f]" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1da1f2]" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-[#ff0000]" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Navbar - Always visible */}
      <div className="fixed top-0 inset-x-0 z-50">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-b border-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between py-2.5 text-sm gap-3 md:gap-0">
              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a href="tel:+919328015392" className="flex items-center gap-2 hover:text-gold transition-colors group">
                  <div className="p-1 rounded-full bg-gold/10">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span>+91 9328015392</span>
                </a>
                
                <a href="mailto:bankteshcreationpvtltd@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors group">
                  <div className="p-1 rounded-full bg-gold/10">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span>bankteshcreationpvtltd@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-gold/10">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-white hidden md:inline">  Follow Us:</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-full bg-white/5 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Below top navbar */}
      <header className={`fixed top-10 inset-x-0 z-40 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-md" 
          : "bg-white shadow-sm"
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
              <span className="font-display text-xl text-white font-bold">P</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl md:text-2xl font-bold text-gray-900">
                Pragati Sarees
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-600">
                Banktesh Creation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - No hover effects */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <NavLink 
                  key={l.to} 
                  to={l.to} 
                  end={l.to === "/"} 
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-sm uppercase tracking-widest font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive 
                        ? "bg-amber-50 text-amber-600" 
                        : "text-gray-700"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{l.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a 
            href="tel:+919328015392" 
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Phone className="w-4 h-4" /> 
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors" 
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
            <div className="max-h-[80vh] overflow-y-auto">
              {/* Mobile Contact Info */}
              <div className="p-4 bg-gray-50 border-b border-gray-100 space-y-3">
                <a href="tel:+919328015392" className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors">
                  <Phone className="w-4 h-4 text-amber-600" /> +91 93280 15392
                </a>
                <a href="mailto:info@pragatisarees.com" className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors">
                  <Mail className="w-4 h-4 text-amber-600" /> info@pragatisarees.com
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-4 h-4 text-amber-600" /> Mon-Sat: 10AM - 8PM
                </div>
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-4 gap-1">
                {links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <NavLink 
                      key={l.to} 
                      to={l.to} 
                      end={l.to === "/"} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 text-base font-medium px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive 
                            ? "bg-amber-50 text-amber-600" 
                            : "text-gray-700"
                        }`
                      }
                    >
                      <Icon className="w-5 h-5" />
                      <span>{l.label}</span>
                    </NavLink>
                  );
                })}
              </nav>
              
              {/* Mobile CTA */}
              <div className="p-4 border-t border-gray-100">
                <a 
                  href="tel:+919328015392" 
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium shadow-md"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>
              
              {/* Mobile Social Links */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-100 transition-colors duration-200 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed navbars */}
      <div className="h-[88px] md:h-[88px] lg:h-[88px]" />
    </>
  );
};

export default Navbar;