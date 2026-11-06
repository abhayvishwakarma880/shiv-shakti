import PageHeader from "../components/ui/PageHeader";
import ServiceCard from "../components/ui/ServiceCard";
import Reveal from "../components/ui/Reveal";
import CtaBanner from "../components/ui/CtaBanner";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Astrology Services"
        subtitle="Personalised Vedic guidance for love, marriage, career, health, wealth and home."
        breadcrumb="Services"
      />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
