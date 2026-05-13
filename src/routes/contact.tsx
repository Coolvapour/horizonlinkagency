import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Horizon Link Agency — Free Consultation" },
      { name: "description", content: "Book a free consultation with Horizon Link Agency. Call +254 722 496 897 or email info@horizonlinkagency.com — Eldoret, Kenya." },
      { property: "og:title", content: "Contact Horizon Link Agency" },
      { property: "og:description", content: "Reach our team and start your global study or migration journey today." },
      { property: "og:url", content: "https://horizonlinkagency.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://horizonlinkagency.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://horizonlinkagency.com/contact#contactpage",
          url: "https://horizonlinkagency.com/contact",
          name: "Contact Horizon Link Agency",
          description: "Get in touch with Horizon Link Agency for study abroad and skilled migration consultations.",
          inLanguage: "en",
          isPartOf: { "@type": "WebSite", url: "https://horizonlinkagency.com/", name: "Horizon Link Agency" },
          about: { "@id": "https://horizonlinkagency.com/#organization" },
          mainEntity: {
            "@type": "Organization",
            "@id": "https://horizonlinkagency.com/#organization",
            name: "Horizon Link Agency",
            url: "https://horizonlinkagency.com/",
            email: "info@horizonlinkagency.com",
            telephone: "+254722496897",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Next to Ukerio Motors, Opposite Mediheal Hospital, Along Eldoret-Nakuru Highway",
              addressLocality: "Eldoret",
              addressRegion: "Uasin Gishu",
              addressCountry: "KE",
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "17:00" },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                name: "Director — Jonathan K. Kiplagat",
                telephone: "+254722496897",
                email: "jonathankiplagat@horizonlinkagency.com",
                contactType: "executive office",
                areaServed: "KE",
                availableLanguage: ["English", "Swahili"],
              },
              {
                "@type": "ContactPoint",
                name: "Office — General Inquiries",
                telephone: "+254728444030",
                email: "info@horizonlinkagency.com",
                contactType: "customer service",
                areaServed: "KE",
                availableLanguage: ["English", "Swahili"],
              },
            ],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Study Abroad & Education", url: "https://horizonlinkagency.com/services" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Work & Skilled Migration", url: "https://horizonlinkagency.com/services" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Consultation", description: "For families still exploring options across study and migration pathways." } },
            ],
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

type SendMethod = "email" | "whatsapp";

const WHATSAPP_NUMBER = "254722496897";
const CONTACT_EMAIL = "info@horizonlinkagency.com";
const SECONDARY_PHONE_DISPLAY = "0728 444 030";
const SECONDARY_PHONE_LINK = "+254728444030";

function ContactPage() {
  const [sendMethod, setSendMethod] = useState<SendMethod>("email");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Inquiry: ${service} — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `${message}`;

    if (sendMethod === "whatsapp") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp...");
    } else {
      const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      toast.success("Opening your email app...");
    }
  }

  const details: { icon: typeof Phone; label: string; lines: { value: string; href?: string }[] }[] = [
    {
      icon: Phone,
      label: "Director — Jonathan K. Kiplagat",
      lines: [
        { value: "+254 722 496 897 (Call / WhatsApp)", href: "tel:+254722496897" },
        { value: "jonathankiplagat@horizonlinkagency.com", href: "mailto:jonathankiplagat@horizonlinkagency.com" },
      ],
    },
    {
      icon: Mail,
      label: "Office — General Inquiries",
      lines: [
        { value: `${SECONDARY_PHONE_DISPLAY} (Call / WhatsApp)`, href: `tel:${SECONDARY_PHONE_LINK}` },
        { value: "info@horizonlinkagency.com", href: "mailto:info@horizonlinkagency.com" },
      ],
    },
    { icon: Clock, label: "Hours", lines: [{ value: "Mon – Fri · 9:00 – 17:00" }] },
    { icon: MapPin, label: "Location", lines: [{ value: "Next to Ukerio Motors, Opposite Mediheal Hospital, Along Eldoret-Nakuru Highway, Eldoret" }] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Toaster />
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            Let's start your <span className="text-gold">journey</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Share a few details and our advisors will reach out personally — within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl text-navy">Reach our team</h2>
            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, lines }) => (
                <li key={label} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</div>
                    <div className="mt-1 space-y-1">
                      {lines.map((l) =>
                        l.href ? (
                          <a key={l.value} href={l.href} className="block text-foreground hover:text-navy">{l.value}</a>
                        ) : (
                          <div key={l.value} className="text-foreground">{l.value}</div>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-secondary p-6">
              <p className="font-display text-xl italic text-navy">"By Grace, From Sacrifice to Success."</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">God First. Legacy Always.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label htmlFor="contact-service" className="text-xs font-semibold uppercase tracking-wider text-navy">Service of Interest</label>
                <select id="contact-service" name="service" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                  <option>Study Abroad & Education</option>
                  <option>Work & Skilled Migration</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-navy">How can we help?</label>
              <textarea id="contact-message" name="message" rows={5} required className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-navy">Send via</div>
              <div className="mt-2 inline-flex rounded-full border border-border bg-background p-1">
                <button
                  type="button"
                  onClick={() => setSendMethod("email")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${sendMethod === "email" ? "bg-navy text-primary-foreground shadow-elegant" : "text-navy/70 hover:text-navy"}`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setSendMethod("whatsapp")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${sendMethod === "whatsapp" ? "bg-navy text-primary-foreground shadow-elegant" : "text-navy/70 hover:text-navy"}`}
                >
                  WhatsApp
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-elegant"
            >
              {sendMethod === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
            </button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy">Find Us</h2>
          <p className="mt-2 text-muted-foreground">
            Visit our office in Eldoret — Next to Ukerio Motors, Opposite Mediheal Hospital, Along Eldoret-Nakuru Highway.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8304270176347!2d35.295016747873504!3d0.5086453677941448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810131b4a63f67%3A0x8bf78f197eb7b865!2sGlobal%20Link%20Migration%20and%20Education%20Agency!5e0!3m2!1sen!2ske!4v1776603716874!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Horizon Link Agency Office Location"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-navy">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
