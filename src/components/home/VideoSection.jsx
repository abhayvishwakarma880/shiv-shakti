import { Link } from "react-router-dom";
import { Gem, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "../ui/Reveal";
import reel from "../../assets/video/reel.mp4";
import poster from "../../assets/images/reel-poster.jpg";
import { whatsappLink } from "../../data/site";

const perks = [
  { icon: ShieldCheck, title: "Certified & Genuine", text: "Lab-certified stones and Rudraksha with authenticity proof." },
  { icon: Sparkles, title: "Energised with Vidhi", text: "Stones are purified and energised before they reach you." },
  { icon: Gem, title: "Chart-Based Selection", text: "Recommended only after a proper Kundali analysis." },
];

export default function VideoSection() {
  return (
    <section className="section relative overflow-hidden bg-brand-900 text-white">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">
            <span className="h-px w-8 bg-current" /> See the Quality
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Real Stones. Real Certification. Real Trust.</h2>
          <p className="mt-5 leading-relaxed text-brand-100">
            Watch a natural emerald from our collection. We show every stone exactly as it is — no filters, no tricks —
            so you can buy with complete confidence.
          </p>
          <ul className="mt-8 space-y-5">
            {perks.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <strong className="block text-lg font-semibold">{title}</strong>
                  <span className="text-sm text-brand-200">{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappLink("Namaste, I want to know about gemstones.")} target="_blank" rel="noreferrer" className="btn-primary">
              Enquire About Gemstones
            </a>
            <Link to="/gemstones" className="btn-outline">
              View Collection
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-xs">
          <div className="rounded-[2.5rem] border-4 border-accent-500 bg-brand-950 p-2 shadow-2xl shadow-black/50">
            <video
              src={reel}
              poster={poster}
              controls
              playsInline
              preload="none"
              className="aspect-[9/16] w-full rounded-[2rem] bg-black object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
