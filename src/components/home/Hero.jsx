import { Link } from "react-router-dom";
import { BadgeCheck, MessageCircle, Phone } from "lucide-react";
import ZodiacWheel from "../ui/ZodiacWheel";
import pendant from "../../assets/images/pendant-om.jpg";
import { primaryPhone, site, whatsappLink } from "../../data/site";

const highlights = ["Kundali & Matching", "Vastu Shastra", "Certified Gemstones"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 text-white">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-400/30 blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:grid-cols-2 lg:pb-28 lg:pt-44">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-accent-300" /> {site.tagline}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Discover Your Destiny with <span className="text-accent-300">Vedic Astrology</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            Authentic guidance from <strong className="text-white">{site.astrologer}</strong> for marriage, career, love,
            health and wealth — backed by Kundali analysis, Vastu and energised, certified gemstones.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3 text-sm">
            {highlights.map((item) => (
              <li key={item} className="rounded-full bg-white/10 px-4 py-1.5 text-brand-100">
                ✦ {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${primaryPhone.tel}`} className="btn-primary">
              <Phone className="h-4 w-4" /> Call {primaryPhone.display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/services" className="btn text-white hover:text-accent-300">
              Explore Services →
            </Link>
          </div>
        </div>

        {/* Zodiac wheel with featured gem */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <ZodiacWheel className="absolute inset-0 h-full w-full opacity-40" />
            <ZodiacWheel className="absolute inset-[12%] h-[76%] w-[76%] animate-spin-reverse opacity-20" spin={false} />
            <div className="absolute inset-[24%] animate-float overflow-hidden rounded-full border-4 border-accent-500 bg-white shadow-2xl shadow-black/40">
              <img src={pendant} alt="Om gold pendant with gemstones" className="h-full w-full object-cover" />
            </div>
            <span className="absolute bottom-[8%] left-[2%] rounded-2xl bg-white px-4 py-3 text-brand-700 shadow-xl">
              <span className="block text-2xl font-display leading-none text-accent-500">25+</span>
              <span className="text-xs font-semibold">Years of Experience</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
