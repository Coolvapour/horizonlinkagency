import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import processHero from "@/assets/students-travel.jpg";
import processConsult from "@/assets/consultation.jpg";
import {
  Monitor,
  Languages,
  Handshake,
  BookMarked,
  Globe2,
  GraduationCap,
  Wallet,
  FileCheck,
  Home,
  Ticket,
  Luggage,
  Car,
  ArrowRight,
  FileText,
  CheckCircle2,
} from "lucide-react";

const requiredDocuments = [
  { name: "Valid Passport", note: "Bio-data page, valid 6+ months beyond travel" },
  { name: "Birth Certificate", note: "Original or certified copy" },
  { name: "KCSE Certificate / Result Slip", note: "Plus all academic transcripts" },
  { name: "University / College Transcripts & Certificates", note: "Where applicable" },
  { name: "Recommendation Letters", note: "Academic and/or employer (2 preferred)" },
  { name: "Short Courses Certificates", note: "Any additional training or skills" },
  { name: "Marriage Certificate", note: "Optional — if applicable" },
  { name: "Police Clearance / Good Conduct", note: "Issued within the last 6 months" },
  { name: "CV / Résumé", note: "Updated, with employment & education history" },
  { name: "Statement of Purpose (SOP)", note: "Personal study/career statement" },
  { name: "Bank Statement", note: "With ID copy, KRA PIN — KES 2.5M to 5M proof of funds" },
  { name: "IELTS / PTE / TOEFL Results", note: "Minimum 6.5 / 60 / 94 (varies by school)" },
  { name: "Travel & Health Insurance", note: "Overseas student health cover" },
  { name: "Identification Documents", note: "National ID, KRA PIN certificate" },
] as const;

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — From Zero to Abroad | Horizon Link Agency" },
      { name: "description", content: "Our 4-step pathway: digital readiness, university admissions, visa & travel, and arrival support. We guide every step from sacrifice to success." },
      { property: "og:title", content: "From Zero to Abroad — Our 4-Step Process" },
      { property: "og:description", content: "Step-by-step guidance from foundation building to landing safely in your new country." },
      { property: "og:url", content: "https://horizonlinkagency.com/process" },
    ],
    links: [{ rel: "canonical", href: "https://horizonlinkagency.com/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    label: "Start Here",
    title: "Build your foundation",
    intro:
      "Lay the groundwork before applications begin — skills, language and a clear plan.",
    items: [
      {
        icon: Monitor,
        title: "Digital Readiness",
        text: "Basic computer skills, email setup and online form navigation.",
      },
      {
        icon: Languages,
        title: "English Training",
        text: "IELTS preparation and speaking confidence for interviews and study.",
      },
      {
        icon: Handshake,
        title: "Guidance Session",
        text: "Free counseling to identify the pathway best suited to your goals.",
      },
      {
        icon: BookMarked,
        title: "Passport Support",
        text: "Application assistance for first-time passport holders.",
      },
    ],
  },
  {
    n: "02",
    label: "Prepare to Go",
    title: "Get accepted & approved",
    intro: "Match with the right institution and submit a strong application.",
    items: [
      {
        icon: Globe2,
        title: "Country & School Selection",
        text: "We match you to affordable, reputable options that fit your profile.",
      },
      {
        icon: GraduationCap,
        title: "University Applications",
        text: "Forms, personal statements and deadlines handled end-to-end.",
      },
      {
        icon: Wallet,
        title: "Financial Literacy",
        text: "Proof of funds, budgeting and bank statement preparation.",
      },
    ],
  },
  {
    n: "03",
    label: "Travel Ready",
    title: "Paperwork & logistics",
    intro: "Every document checked, every booking confirmed — no surprises.",
    items: [
      {
        icon: FileCheck,
        title: "Visa Filing",
        text: "Documents reviewed, applications lodged and follow-ups managed.",
      },
      {
        icon: Home,
        title: "Insurance & Accommodation",
        text: "Safe, vetted housing and student health cover arranged.",
      },
      {
        icon: Ticket,
        title: "Air Ticketing",
        text: "Best routes and student fares booked for a smooth journey.",
      },
    ],
  },
  {
    n: "04",
    label: "Airport to Arrival",
    title: "We don't leave you at the gate",
    intro: "Support continues from check-in until you've settled in abroad.",
    items: [
      {
        icon: Luggage,
        title: "Pre-Departure",
        text: "Packing list, airport process briefing and check-in support.",
      },
      {
        icon: Car,
        title: "Post-Departure",
        text: "Airport pickup coordination and a clear settling-in checklist.",
      },
    ],
  },
] as const;

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <img
          src={processHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Process
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            From Zero to Abroad — <span className="text-gold">we guide every step.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            A clear, four-stage pathway designed for African families. No guesswork,
            no shortcuts — just structured, faith-driven guidance from your first
            question to your first day abroad.
          </p>
        </div>
      </section>

      {/* Consultation visual band */}
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <img
            src={processConsult}
            alt="Horizon Link Agency advisor reviewing visa documents with a student and parent"
            loading="lazy"
            width={1600}
            height={900}
            className="rounded-2xl object-cover shadow-elegant"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Step One — Always
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
              It begins around our table.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every successful journey starts with one honest conversation. Bring your
              dreams, your questions and your documents — we'll bring the roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.n} className="relative">
                <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                  {/* Step header */}
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <div className="flex items-center gap-4 lg:block">
                      <div className="font-display text-7xl font-semibold leading-none text-gold/90">
                        {step.n}
                      </div>
                      <div className="lg:mt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                          Step {idx + 1} · {step.label}
                        </p>
                        <h2 className="mt-2 font-display text-3xl text-navy sm:text-4xl">
                          {step.title}
                        </h2>
                        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                          {step.intro}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {step.items.map(({ icon: Icon, title, text }) => (
                      <div
                        key={title}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-elegant"
                      >
                        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-navy">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="relative mt-4 font-display text-lg text-navy">
                          {title}
                        </h3>
                        <p className="relative mt-2 text-sm text-muted-foreground">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-navy-deep shadow-gold">
                <FileText className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Application Checklist
              </p>
              <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
                Required Documents
              </h2>
              <p className="mt-4 text-muted-foreground">
                A complete document file makes the difference between a smooth
                approval and a costly delay. Below is the standard checklist —
                we'll help you gather, verify and certify every item.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Specific countries (Australia, Canada, Germany, Malta, etc.) may
                request additional documents — your advisor will confirm.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {requiredDocuments.map((doc) => (
                <li
                  key={doc.name}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-gold hover:shadow-elegant"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-gold" />
                  <div>
                    <p className="font-semibold text-navy">{doc.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{doc.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-16">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Not sure where you fit on the pathway?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Book a free guidance session and we'll map your next step together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
