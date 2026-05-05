import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Globe, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative gradient-royal text-primary-foreground pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, hsl(var(--gold)/0.4), transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--gold)/0.3), transparent 40%)" }} />
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <span className="font-display text-2xl text-primary font-bold">P</span>
              </div>
              <div>
                <div className="font-display text-xl font-bold">Pragati Sarees</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-light">Banktesh Creation Pvt Ltd</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed font-serif italic">
              "Direct from Manufacturer. Trusted by Retailers. Loved by Women."
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-gold-light">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([to, l]) => (
                <li key={to}><Link to={to} className="text-primary-foreground/80 hover:text-gold-light transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-gold-light">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold-light shrink-0" /><div>+91 9328015392<br />+91 6355459390</div></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold-light shrink-0" /><span className="break-all">bankteshcreationpvtltd@gmail.com</span></li>
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold-light shrink-0" /><span>B4201 Kohinoor Textile Market, Ring Road, Surat, 395001</span></li>
              <li className="flex gap-3"><Globe className="w-4 h-4 mt-0.5 text-gold-light shrink-0" /><span>bankteshcreations.com</span></li>
            </ul>
          </div>

          <div>
  <h4 className="font-display text-lg mb-5 text-gold-light">Connect</h4>
  <div className="flex gap-3">
    <a href="https://www.facebook.com/profile.php?id=61580419684127" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-gold-light/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:scale-110">
      <Facebook className="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/pragati.saree/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-gold-light/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:scale-110">
      <Instagram className="w-5 h-5" />
    </a>
    <a href="https://twitter.com/pragatisarees" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-gold-light/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:scale-110">
      <Twitter className="w-5 h-5" />
    </a>
    <a href="https://www.youtube.com/@PragatiSarees" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-gold-light/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:scale-110">
      <Youtube className="w-5 h-5" />
    </a>
  </div>
  <p className="mt-6 text-xs text-primary-foreground/70">Follow us for the latest collections, festive launches and wholesale offers.</p>
        </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Banktesh Creation Pvt Ltd. All rights reserved.</p>
          <p>Crafted with love for retailers across India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
