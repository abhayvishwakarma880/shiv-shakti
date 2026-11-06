import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";

export default function GemCard({ gem }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-brand-50">
        <img
          src={gem.image}
          alt={gem.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
          {gem.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">{gem.planet}</p>
        <h3 className="mt-1 text-xl text-brand-700">{gem.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/70">{gem.description}</p>
        <a
          href={whatsappLink(`Namaste, I would like to enquire about: ${gem.name}`)}
          target="_blank"
          rel="noreferrer"
          className="btn-outline-dark mt-5 w-full"
        >
          <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
