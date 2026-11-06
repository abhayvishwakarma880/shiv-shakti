import { CalendarCheck, FileText, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Consultation",
    text: "Call or WhatsApp us and pick a convenient time — in person at our centres or over a call.",
  },
  {
    icon: FileText,
    title: "Kundali Analysis",
    text: "Share your birth details. Your chart is studied carefully to understand your current planetary periods.",
  },
  {
    icon: Sparkles,
    title: "Get Remedies",
    text: "Receive clear guidance with simple remedies — mantra, puja, Vastu or gemstone — that fit your life.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Three Simple Steps to Clarity"
          description="No confusion, no unnecessary rituals — just honest guidance."
        />
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-px border-t-2 border-dashed border-brand-200 md:block" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120} className="relative text-center">
              <span className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30">
                <Icon className="h-10 w-10" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-bold">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-2xl text-brand-700">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-brand-900/70">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
