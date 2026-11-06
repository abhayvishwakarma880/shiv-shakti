import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="card group h-full p-7">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-xl text-brand-700">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-900/70">{service.short}</p>
      <Link
        to="/contact"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-500 transition-all group-hover:gap-2"
      >
        Consult Now <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
