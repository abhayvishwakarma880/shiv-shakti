import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import SocialIcon from "../ui/SocialIcons";
import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="h-1 bg-gradient-to-r from-accent-500 via-brand-400 to-accent-500" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block rounded-2xl bg-white p-3">
            <img src={logo} alt={site.name} className="h-16 w-auto" />
          </span>
          <p className="mt-5 text-sm leading-relaxed text-brand-200">
            {site.tagline}. Authentic Vedic astrology, Vastu and certified gemstones guided by{" "}
            {site.astrologer}.
          </p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 transition-colors hover:bg-accent-500 hover:text-white"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl text-white">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link to="/services" className="transition-colors hover:text-accent-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span className="flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-white">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span>{site.addresses[0].text}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Astrology guidance is based on traditional belief and is not a substitute for professional advice.</p>
        </div>
      </div>
    </footer>
  );
}
