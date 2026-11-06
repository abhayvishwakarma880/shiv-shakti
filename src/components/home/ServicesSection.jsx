import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import Reveal from "../ui/Reveal";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Astrology Solutions for Every Part of Life"
          description="From love and marriage to career and wealth — personalised guidance rooted in classical Vedic knowledge."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
