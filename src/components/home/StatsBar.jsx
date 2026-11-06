import Reveal from "../ui/Reveal";
import { site } from "../../data/site";

export default function StatsBar() {
  return (
    <section className="container-x relative z-10 -mt-10 sm:-mt-14">
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-brand-100 shadow-2xl shadow-brand-900/15 lg:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="bg-white px-4 py-8 text-center">
            <p className="font-display text-4xl text-accent-500 sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-brand-700">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
