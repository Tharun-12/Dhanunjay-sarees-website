import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/916355459390?text=Hello%20Pragati%20Sarees%2C%20I%20want%20to%20enquire%20about%20wholesale%20sarees."
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-luxury hover:scale-110 transition-transform">
      <MessageCircle className="w-7 h-7" />
    </span>
  </a>
);

export default WhatsAppFloat;
