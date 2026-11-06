import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Check, Clock, Link2, MessageCircle, Phone } from "lucide-react";
import BlogCard from "../components/blog/BlogCard";
import SectionHeading from "../components/ui/SectionHeading";
import { blogs, formatDate, getBlogBySlug } from "../data/blogs";
import { primaryPhone, site, whatsappLink } from "../data/site";

/** Thin bar at the top of the viewport showing reading progress. */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div className="h-full bg-accent-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mb-3 mt-10 font-hindi text-2xl font-semibold text-brand-700">{block.text}</h2>;
    case "list":
      return (
        <ul className="my-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-accent-500 bg-brand-50 p-6 text-lg font-semibold text-brand-700">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="my-4">{block.text}</p>;
  }
}

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const shareUrl = window.location.href;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <>
      <ReadingProgress />

      <header className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 pb-32 pt-32 text-white sm:pt-40">
        <div className="container-x max-w-4xl">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="mb-4 block w-fit rounded-full bg-accent-500 px-4 py-1 font-hindi text-xs font-semibold">
            {post.category}
          </span>
          <h1 className="font-hindi text-3xl font-bold leading-snug sm:text-5xl sm:leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
            <span>By {site.astrologer}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="container-x -mt-20 grid max-w-6xl gap-10 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-3xl border-4 border-white bg-white object-contain shadow-2xl shadow-brand-900/20"
          />

          <div className="mt-8 font-hindi text-lg leading-loose text-brand-900/85">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Share */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-brand-100 pt-6">
            <span className="text-sm font-semibold text-brand-700">Share this article:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !px-4 !py-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button type="button" onClick={copyLink} className="btn-outline-dark !px-4 !py-2">
              {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-3xl bg-brand-700 p-7 text-center text-white shadow-xl">
            <h3 className="text-2xl">Need Personal Guidance?</h3>
            <p className="mt-3 text-sm text-brand-100">
              Get a Kundali-based consultation from {site.astrologer}.
            </p>
            <a href={`tel:${primaryPhone.tel}`} className="btn-primary mt-6 w-full">
              <Phone className="h-4 w-4" /> {primaryPhone.display}
            </a>
            <a href={whatsappLink(`Namaste, I read your article "${post.title}" and want a consultation.`)} target="_blank" rel="noreferrer" className="btn-outline mt-3 w-full">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <h3 className="mb-4 text-xl text-brand-700">More Articles</h3>
            <ul className="space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}`} className="font-hindi text-sm font-semibold leading-snug text-brand-700 hover:text-accent-500">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
