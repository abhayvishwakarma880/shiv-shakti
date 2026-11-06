import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import SocialIcon from "../ui/SocialIcons";
import { navLinks, primaryPhone, site } from "../../data/site";

const linkClass = ({ isActive }) =>
  `relative px-1 py-2 text-sm font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent-500 after:transition-transform hover:text-accent-500 hover:after:scale-x-100 ${
    isActive ? "text-accent-500 after:scale-x-100" : "text-brand-700"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact strip */}
      <div className="hidden bg-brand-700 text-xs text-brand-100 md:block">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${primaryPhone.tel}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-accent-300" /> {primaryPhone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-accent-300" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(site.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="hover:text-white">
                <SocialIcon name={name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-white transition-shadow ${scrolled ? "shadow-lg shadow-brand-900/10" : "border-b border-brand-100"}`}>
        <div className="container-x flex items-center justify-between py-2">
          <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
            <img src={logo} alt={site.name} className="h-14 w-auto sm:h-16" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden sm:inline-flex">
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 text-brand-700 hover:bg-brand-50 lg:hidden"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-brand-950/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-80 max-w-[85vw] flex-col bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between">
          <img src={logo} alt="" className="h-14 w-auto" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full p-2 hover:bg-brand-50">
            <X className="h-6 w-6 text-brand-700" />
          </button>
        </div>
        <nav className="flex flex-col" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-brand-100 py-4 text-lg font-semibold ${isActive ? "text-accent-500" : "text-brand-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a href={`tel:${primaryPhone.tel}`} className="btn-primary mt-auto">
          <Phone className="h-4 w-4" /> Call {primaryPhone.display}
        </a>
      </aside>
    </header>
  );
}
