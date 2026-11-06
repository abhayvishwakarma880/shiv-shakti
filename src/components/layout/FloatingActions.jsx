import { MessageCircle, Phone } from "lucide-react";
import { primaryPhone, whatsappLink } from "../../data/site";

/** Sticky call + WhatsApp buttons shown on every page. */
export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/40 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${primaryPhone.tel}`}
        aria-label="Call now"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-xl shadow-accent-500/40 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-accent-500/40" />
        <Phone className="relative h-6 w-6" />
      </a>
    </div>
  );
}
