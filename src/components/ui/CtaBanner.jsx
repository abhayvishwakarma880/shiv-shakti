import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import ZodiacWheel from "./ZodiacWheel";
import Reveal from "./Reveal";
import { primaryPhone, whatsappLink } from "../../data/site";

export default function CtaBanner() {
  return (
    <section className="container-x pb-16 sm:pb-24">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-600 to-brand-700 px-6 py-14 text-center text-white sm:px-14 sm:py-20">
        <ZodiacWheel className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 opacity-15" />
        <ZodiacWheel className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 opacity-10" spin={false} />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-5xl">Ready to Know What the Stars Hold for You?</h2>
          <p className="mt-4 text-brand-100 sm:text-lg">
            Speak to Dr. Virendra Verma today and get clear, practical guidance for your career, marriage, health and
            wealth.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${primaryPhone.tel}`} className="btn-primary">
              <Phone className="h-4 w-4" /> {primaryPhone.display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/contact" className="text-sm font-semibold underline-offset-4 hover:underline">
              Send an enquiry
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
