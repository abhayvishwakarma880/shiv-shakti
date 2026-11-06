import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import BlogCard from "../blog/BlogCard";
import { blogs } from "../../data/blogs";

export default function BlogSection() {
  return (
    <section className="section bg-brand-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="From Our Blog"
          title="Astrology Tips & Simple Upay"
          description="Easy-to-follow remedies and knowledge you can start using today."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/blog" className="btn-secondary">
            Read All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
