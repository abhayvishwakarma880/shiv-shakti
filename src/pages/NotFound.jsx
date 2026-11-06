import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x py-12 text-center">
        <p className="font-display text-8xl text-accent-500 sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl text-brand-700 sm:text-4xl">This page is not in your stars</h1>
        <p className="mt-3 text-brand-900/70">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
