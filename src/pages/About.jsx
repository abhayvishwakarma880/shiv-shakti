import { Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaBanner from "../components/ui/CtaBanner";
import StatsBar from "../components/home/StatsBar";
import pendant from "../assets/images/pendant-om.jpg";
import rudraksha from "../assets/images/rudraksha-cards.jpg";
import { site } from "../data/site";

const values = [
  { icon: ShieldCheck, title: "Honesty", text: "We tell you what the chart really shows — no fear, no false promises." },
  { icon: HeartHandshake, title: "Care", text: "Every family is treated with respect, patience and privacy." },
  { icon: Target, title: "Practical Remedies", text: "Simple, affordable upay you can actually follow in daily life." },
  { icon: Eye, title: "Authenticity", text: "Classical Vedic principles and certified gemstones, nothing artificial." },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Shiv Shakti Jyotish Kendra"
        subtitle="A trusted name in Vedic astrology, Vastu and gemstone consultation in Lucknow."
        breadcrumb="About"
      />
      <StatsBar />

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl text-brand-700 sm:text-4xl">Guided by {site.astrologer}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-brand-900/75">
              <p>
                {site.name} is led by {site.astrologer}, widely known as one of the most trusted astrologers in
                Lucknow. For years, families have come to the Kendra for clarity about marriage, career, children,
                health, property and business decisions.
              </p>
              <p>
                Our approach is simple: study the Kundali carefully, explain the findings in plain language, and
                suggest only those remedies that are genuinely useful — whether a mantra, a puja, a Vastu correction or
                a certified gemstone.
              </p>
              <p>
                With centres in Indira Nagar, Gomti Nagar and Eldeco Udyan in Lucknow, and a branch in Noida, expert
                guidance is always close to you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            <img src={pendant} alt="Om gold pendant" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
            <img src={rudraksha} alt="Rudraksha collection" loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand-50">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="card p-7 text-center">
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-white">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="text-xl text-brand-700">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16 sm:pt-24">
        <CtaBanner />
      </div>
    </>
  );
}
