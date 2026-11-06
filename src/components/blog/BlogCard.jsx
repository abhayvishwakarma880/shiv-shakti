import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { formatDate } from "../../data/blogs";

export default function BlogCard({ post }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-brand-50">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 font-hindi text-xs font-semibold text-white">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-brand-900/60">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <h3 className="font-hindi text-lg font-semibold leading-snug text-brand-700 transition-colors group-hover:text-accent-500">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 font-hindi text-sm leading-relaxed text-brand-900/70">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-500 transition-all group-hover:gap-2"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
