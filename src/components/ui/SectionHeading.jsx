import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`mb-12 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-accent-300" : "text-accent-500"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
          <span className="h-px w-8 bg-current" />
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-brand-700"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-brand-100" : "text-brand-900/70"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
