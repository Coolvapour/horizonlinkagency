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
