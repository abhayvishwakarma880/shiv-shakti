import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import BlogCard from "../components/blog/BlogCard";
import Reveal from "../components/ui/Reveal";
import CtaBanner from "../components/ui/CtaBanner";
import { blogs } from "../data/blogs";

const categories = ["All", ...new Set(blogs.map((b) => b.category))];

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter(
      (post) =>
        (category === "All" || post.category === category) &&
        (!q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <>
      <PageHeader
        title="Astrology Blog"
        subtitle="Simple upay, Vedic knowledge and positive habits to improve everyday life."
        breadcrumb="Blog"
      />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-5 py-2 font-hindi text-sm font-semibold transition-colors ${
                    category === cat
                      ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                      : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <label className="relative block w-full md:w-72">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-brand-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200"
              />
            </label>
          </div>

          {posts.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Reveal key={post.slug}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-brand-900/60">No articles found. Try a different search.</p>
          )}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
