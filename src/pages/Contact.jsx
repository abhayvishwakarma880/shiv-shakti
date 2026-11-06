import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SocialIcon from "../components/ui/SocialIcons";
import { services } from "../data/services";
import { site, whatsappLink } from "../data/site";

const initialForm = { name: "", phone: "", service: "", message: "" };

const fieldClass =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const mapQuery = encodeURIComponent(site.addresses[0].text);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the enquiry is sent to the Kendra via WhatsApp.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "Namaste, I would like to book a consultation.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
    setForm(initialForm);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call, WhatsApp or visit any of our centres — we are happy to help."
        breadcrumb="Contact"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Details */}
          <Reveal className="space-y-6 lg:col-span-2">
            <div className="card space-y-5 p-7">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg text-brand-700">Phone</h3>
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block text-sm text-brand-900/75 hover:text-accent-500">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg text-brand-700">Email</h3>
                  <a href={`mailto:${site.email}`} className="break-all text-sm text-brand-900/75 hover:text-accent-500">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-brand-100 pt-5">
                <span className="text-sm font-semibold text-brand-700">Follow us</span>
                {Object.entries(site.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-accent-500 hover:text-white"
                  >
                    <SocialIcon name={name} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card space-y-5 p-7">
              <h3 className="text-xl text-brand-700">Our Centres</h3>
              {site.addresses.map((a) => (
                <div key={a.label} className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-semibold text-brand-700">{a.label}</p>
                    <p className="text-sm leading-relaxed text-brand-900/70">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-brand-50 p-7 sm:p-10">
              <h2 className="text-3xl text-brand-700">Book a Consultation</h2>
              <p className="mt-2 text-sm text-brand-900/70">
                Fill in the details and your enquiry will open in WhatsApp, ready to send.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-brand-700">
                  Your Name
                  <input name="name" value={form.name} onChange={update} required placeholder="Full name" className={`${fieldClass} mt-2 font-normal`} />
                </label>
                <label className="block text-sm font-semibold text-brand-700">
                  Phone Number
                  <input name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+91" className={`${fieldClass} mt-2 font-normal`} />
                </label>
                <label className="block text-sm font-semibold text-brand-700 sm:col-span-2">
                  Service
                  <select name="service" value={form.service} onChange={update} className={`${fieldClass} mt-2 font-normal`}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-brand-700 sm:col-span-2">
                  Message
                  <textarea name="message" value={form.message} onChange={update} rows={4} placeholder="Tell us briefly about your concern" className={`${fieldClass} mt-2 font-normal`} />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
                <a href={`tel:${site.phones[0].tel}`} className="btn-outline-dark">
                  <Phone className="h-4 w-4" /> Call Instead
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-24">
        <Reveal className="overflow-hidden rounded-3xl border-4 border-brand-100 shadow-xl">
          <iframe
            title="Shiv Shakti Jyotish Kendra location"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            className="h-96 w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
