import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageCircle, Send, Facebook, Instagram } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { toast } from "sonner";
import heroImg from "@/assets/hero-contact.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  message: z.string().trim().min(5, "Please share a few details").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Wholesale Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:bankteshcreationpvtltd@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app — your enquiry is ready to send!");
      setSubmitting(false);
      setForm({ name: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Let's grow your saree business together."
        image={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-card p-8 md:p-12 rounded-3xl shadow-luxury border border-border">
            <span className="text-gold-dark uppercase tracking-[0.3em] text-sm font-medium">Enquiry Form</span>
            <h2 className="font-display text-3xl md:text-4xl text-primary mt-2 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Your Name</label>
                <input
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100} placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Phone Number</label>
                <input
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={20} placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000} rows={5} placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-xl bg-muted border border-border focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit" disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-royal text-primary-foreground font-semibold shadow-luxury hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                {submitting ? "Sending..." : <>Send Enquiry <Send className="w-5 h-5" /></>}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-7 rounded-2xl gradient-royal text-primary-foreground shadow-luxury">
              <h3 className="font-display text-2xl mb-5 text-gold-light">Reach Us Directly</h3>
              <div className="space-y-5">
                <a href="tel:+919328015392" className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-light">Phone</div>
                    <div className="font-medium">+91 9328015392</div>
                    <div className="font-medium">+91 6355459390</div>
                  </div>
                </a>
                <a href="mailto:bankteshcreationpvtltd@gmail.com" className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-light">Email</div>
                    <div className="font-medium break-all text-sm">bankteshcreationpvtltd@gmail.com</div>
                  </div>
                </a>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-light">Address</div>
                    <div className="font-medium text-sm leading-relaxed">B4201 Kohinoor Textile Market, Ring Road, Surat, 395001</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/916355459390?text=Hello%20Pragati%20Sarees%2C%20I%20want%20to%20enquire%20about%20wholesale%20sarees." target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-green-500 text-white shadow-luxury hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="w-6 h-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest opacity-80">WhatsApp Chat</div>
                <div className="font-display text-xl">+91 6355459390</div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs uppercase tracking-widest text-gold-dark mb-3">Follow Us</div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61580419684127" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full gradient-royal text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/pragati.saree/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full gradient-royal text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-gold/30">
            <iframe
              title="Pragati Sarees Location"
              src="https://www.google.com/maps?q=Kohinoor+Textile+Market+Ring+Road+Surat+395001&output=embed"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
