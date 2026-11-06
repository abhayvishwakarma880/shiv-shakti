import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import whiteSapphire from "../../assets/images/white-sapphire.jpg";
import rudraksha from "../../assets/images/rudraksha-certified.jpg";
import { site } from "../../data/site";

const points = [
  "Personalised Kundali reading — no generic predictions",
  "Simple, practical and affordable remedies",
  "Certified gemstones & Rudraksha, energised with vidhi",
  "Four consultation centres in Lucknow and Noida",
];

export default function AboutSection() {
  return (
    <section className="section bg-brand-50">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-lg">
          <img
            src={whiteSapphire}
            alt="White sapphire gemstone"
            loading="lazy"
            className="aspect-[4/5] w-4/5 rounded-3xl object-cover shadow-xl"
          />
          <img
            src={rudraksha}
            alt="Certified Rudraksha"
            loading="lazy"
            className="absolute -bottom-8 -right-2 aspect-square w-1/2 rounded-3xl border-8 border-brand-50 object-cover shadow-xl"
          />
          <span className="absolute -left-3 top-8 rounded-2xl bg-accent-500 px-5 py-4 text-center text-white shadow-xl">
            <span className="block font-display text-3xl leading-none">25+</span>
            <span className="text-xs font-semibold">Years</span>
          </span>
        </Reveal>

        <Reveal delay={150}>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-500">
            <span className="h-px w-8 bg-current" /> About Us
          </span>
          <h2 className="text-3xl text-brand-700 sm:text-4xl lg:text-5xl">
            Trusted Guidance by {site.astrologer}
          </h2>
          <p className="mt-5 leading-relaxed text-brand-900/70">
            Shiv Shakti Jyotish Kendra has been guiding families across Lucknow with honest, practical astrology. We
            believe the stars show the path — and the right remedy, taken with faith, helps you walk it with confidence.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-brand-900/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-secondary mt-8">
            Know More About Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
