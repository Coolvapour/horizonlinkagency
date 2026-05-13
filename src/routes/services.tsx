import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GraduationCap, Briefcase, FileCheck, Plane, BookOpen, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Study Abroad & Skilled Migration" },
      { name: "description", content: "Study abroad & skilled migration services: university admissions, scholarships, student visas, work permits, job placement and settlement support." },
      { property: "og:title", content: "Our Services — Horizon Link Agency" },
      { property: "og:description", content: "Study abroad and skilled migration pathways across Canada, UK, USA, Australia, Europe & Asia." },
      { property: "og:url", content: "https://horizonlinkagency.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://horizonlinkagency.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://horizonlinkagency.com/services#study-abroad",
            name: "Study Abroad & Education",
            serviceType: "Study Abroad Consultancy",
            description: "University admissions, scholarships, student visas, pre-departure briefings and settlement support for African students pursuing global education.",
            provider: { "@type": "Organization", "@id": "https://horizonlinkagency.com/#organization", name: "Horizon Link Agency", url: "https://horizonlinkagency.com/" },
            areaServed: ["KE", "UG", "TZ", "RW", "ET", "Africa"],
            availableChannel: { "@type": "ServiceChannel", serviceUrl: "https://horizonlinkagency.com/services", servicePhone: "+254722496897" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Study Abroad Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "University Admissions" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scholarships & Funding" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Student Visas" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Departure & Settlement" } },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://horizonlinkagency.com/services#skilled-migration",
            name: "Work & Skilled Migration",
            serviceType: "Skilled Migration Consultancy",
            description: "Skilled worker visas, work permits, job placement assistance and relocation support for professionals seeking careers abroad.",
            provider: { "@type": "Organization", "@id": "https://horizonlinkagency.com/#organization", name: "Horizon Link Agency", url: "https://horizonlinkagency.com/" },
            areaServed: ["KE", "UG", "TZ", "RW", "ET", "Africa"],
            availableChannel: { "@type": "ServiceChannel", serviceUrl: "https://horizonlinkagency.com/services", servicePhone: "+254722496897" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Skilled Migration Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skilled Worker Visas" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Work Permits" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Job Placement Assistance" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relocation Support" } },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Study Abroad & Education",
    icon: GraduationCap,
    intro: "We open the door to world-class education for African students — from application to arrival.",
    items: [
      { icon: BookOpen, title: "University Admissions", text: "Course matching and applications to leading universities and colleges worldwide." },
      { icon: FileCheck, title: "Scholarships & Funding", text: "Identifying scholarships, grants and tuition support tailored to your profile." },
      { icon: Plane, title: "Student Visas", text: "Complete visa documentation, interview prep and submission support." },
      { icon: Users, title: "Pre‑Departure & Settlement", text: "Briefings, accommodation, airport pickup and orientation in your destination country." },
    ],
  },
  {
    title: "Work & Skilled Migration",
    icon: Briefcase,
    intro: "Pathways for skilled professionals seeking career growth and a better life abroad.",
    items: [
      { icon: FileCheck, title: "Skilled Worker Visas", text: "Express Entry, Skilled Worker and points-based visa applications." },
      { icon: Briefcase, title: "Work Permits", text: "Employer sponsorship, LMIA support and work authorization processing." },
      { icon: Users, title: "Job Placement Assistance", text: "CV optimization, employer matching and interview coaching." },
      { icon: Plane, title: "Relocation Support", text: "Travel logistics, family reunification and settlement guidance." },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            End-to-end pathways. <span className="text-gold">Honest counsel.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Whether your goal is global education or a new career abroad, we provide
            structured, faith-driven guidance every step of the way.
          </p>
        </div>
      </section>

      {groups.map(({ title, icon: Icon, intro, items }) => (
        <section key={title} className="border-b border-border py-20 last:border-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gold/15 text-navy">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-3xl text-navy sm:text-4xl">{title}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">{intro}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map(({ icon: I, title: t, text }) => (
                <div key={t} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-elegant">
                  <I className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-lg text-navy">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Common questions</h2>
            <p className="mt-3 text-muted-foreground">Quick answers about study abroad and skilled migration with Horizon Link.</p>
          </div>
          <dl className="mt-10 space-y-4">
            {SERVICES_FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 open:shadow-elegant">
                <summary className="cursor-pointer list-none font-display text-lg text-navy marker:hidden">
                  {f.q}
                </summary>
                <dd className="mt-3 text-sm text-muted-foreground">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">Ready to begin?</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your goals — we'll map the right pathway for your family.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const SERVICES_FAQS = [
  {
    q: "How much does it cost to study abroad through Horizon Link Agency?",
    a: "Initial consultations are free. Service fees depend on the destination country and the package you choose (admissions only, full visa support, or end-to-end with settlement). Tuition and living costs vary by country — for example, Germany has very low public tuition, while Canada, the UK, USA and Australia range from roughly USD 12,000 to USD 45,000 per year. We give you a transparent written quote before you commit.",
  },
  {
    q: "Which countries can you place students and skilled workers in?",
    a: "We currently support 10 destinations: Canada, United Kingdom, United States, Australia, Germany, Ireland, Dubai (UAE), Malaysia, Malta and Qatar — covering both study abroad and skilled migration pathways.",
  },
  {
    q: "Do you help with scholarships?",
    a: "Yes. We actively identify scholarships, grants and tuition discounts you qualify for and help you build a competitive application — personal statement, references and supporting documents included.",
  },
  {
    q: "What documents do I need to start a student visa application?",
    a: "Typically: a valid passport, academic transcripts and certificates, English proficiency results (IELTS/TOEFL where required), proof of funds, statement of purpose and your admission letter. We give you a personalised checklist after your first consultation.",
  },
  {
    q: "Can I work while studying abroad?",
    a: "In most of our destinations — Canada, UK, Australia, Ireland, Germany, Malta — yes. Students are typically allowed 20 hours per week during semester and full-time during breaks. Specific rules vary by country and visa type, and we walk you through them in detail.",
  },
  {
    q: "What is the difference between a study visa and skilled migration?",
    a: "A study visa lets you enrol in a recognised institution abroad, often with the right to work part-time and apply for post-study work permits. Skilled migration is for qualified professionals (nurses, engineers, IT, trades, etc.) moving abroad to work directly, usually through points-based systems like Canada Express Entry or the UK Skilled Worker visa.",
  },
  {
    q: "How long does the whole process take?",
    a: "From first consultation to boarding the plane, most students take 3–9 months depending on intake dates and visa processing times. Skilled migration cases (Canada Express Entry, UK Skilled Worker) typically take 6–12 months. We give you a realistic timeline at the start.",
  },
  {
    q: "Do you support the family after the student arrives abroad?",
    a: "Yes. Our Pre-Departure & Settlement service includes airport pickup arrangements, accommodation guidance, orientation and a direct line back to our Eldoret office whenever the student or family needs support.",
  },
];
