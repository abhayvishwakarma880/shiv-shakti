import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    q: "What details do I need for a Kundali reading?",
    a: "Your date of birth, exact time of birth and place of birth. If you do not know the exact time, we can still guide you with the information available.",
  },
  {
    q: "Can I consult online or over the phone?",
    a: "Yes. You can call or WhatsApp us on +91 84008 95414 and book a phone or video consultation, or visit any of our centres in Lucknow and Noida.",
  },
  {
    q: "Should I wear a gemstone without consulting an astrologer?",
    a: "No. A gemstone suits you only if it supports a planet in your chart. We recommend stones after studying the Kundali, never by guesswork.",
  },
  {
    q: "Are your gemstones and Rudraksha certified?",
    a: "Yes. Our stones and Rudraksha come with laboratory certification so you can be sure of authenticity.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions We Often Hear" />
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 60} className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-brand-700"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-6 text-sm leading-relaxed text-brand-900/70">
                    <span className="block pb-5">{faq.a}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
