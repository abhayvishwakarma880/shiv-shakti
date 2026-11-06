import { Link } from "react-router-dom";
import ZodiacWheel from "./ZodiacWheel";

/** Banner used at the top of inner pages. */
export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 py-20 text-white sm:py-28">
      <ZodiacWheel className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] opacity-15" />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-brand-200">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white">{breadcrumb || title}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-brand-100">{subtitle}</p>}
        <div className="mt-6 h-1 w-20 rounded-full bg-accent-500" />
      </div>
    </section>
  );
}
