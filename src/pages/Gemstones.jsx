import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import GemCard from "../components/ui/GemCard";
import Reveal from "../components/ui/Reveal";
import CtaBanner from "../components/ui/CtaBanner";
import { gemCategories, gemstones } from "../data/gemstones";

export default function Gemstones() {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? gemstones : gemstones.filter((g) => g.category === category);

  return (
    <>
      <PageHeader
        title="Gemstones & Rudraksha"
        subtitle="Certified, energised and recommended only after studying your Kundali."
        breadcrumb="Gemstones"
      />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter by category">
            {gemCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  category === cat
                    ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((gem) => (
              <Reveal key={gem.id}>
                <GemCard gem={gem} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
