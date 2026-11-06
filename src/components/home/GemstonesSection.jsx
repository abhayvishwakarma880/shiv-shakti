import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import GemCard from "../ui/GemCard";
import Reveal from "../ui/Reveal";
import { gemstones } from "../../data/gemstones";

export default function GemstonesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gemstones & Rudraksha"
          title="Certified Stones, Energised for You"
          description="Every gemstone is recommended only after studying your Kundali — never by guesswork."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gemstones.slice(0, 4).map((gem, i) => (
            <Reveal key={gem.id} delay={i * 80}>
              <GemCard gem={gem} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/gemstones" className="btn-secondary">
            Browse All Gemstones
          </Link>
        </div>
      </div>
    </section>
  );
}
