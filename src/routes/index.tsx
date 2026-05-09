import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero.jpg";
import destCanada from "@/assets/destinations/canada.jpg";
import destUk from "@/assets/destinations/uk.jpg";
import destUsa from "@/assets/destinations/usa.jpg";
import destAustralia from "@/assets/destinations/australia.jpg";
import destGermany from "@/assets/destinations/germany.jpg";
import destIreland from "@/assets/destinations/ireland.jpg";
import destDubai from "@/assets/destinations/dubai.jpg";
import destMalaysia from "@/assets/destinations/malaysia.jpg";
import destMalta from "@/assets/destinations/malta.jpg";
import destQatar from "@/assets/destinations/qatar.jpg";
import studentsGraduation from "@/assets/students-graduation.jpg";
import studentsTravel from "@/assets/students-travel.jpg";
import studentsCampus from "@/assets/students-campus.jpg";
import consultation from "@/assets/consultation.jpg";
import { GraduationCap, Briefcase, Globe2, ShieldCheck, ArrowRight, Plane } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Link Agency — By Grace, From Sacrifice to Success" },
      { name: "description", content: "Trusted study abroad and skilled migration agency empowering African families to access global opportunities. God First. Legacy Always." },
      { property: "og:title", content: "Horizon Link Agency — Migration & Education" },
      { property: "og:description", content: "From Sacrifice to Success — global study and migration pathways for African families." },
      { property: "og:image", content: "/students-graduation.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Pillars />
      <MissionStrip />
      <JourneyGallery />
      <ServicesPreview />
      <Destinations />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-40" width={1600} height={1100} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            God First · Legacy Always
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            By Grace, <br />
            <span className="text-gold">From Sacrifice</span>
            <br />
            to Success.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We turn the sacrifices of African parents into global opportunities for
            their children — opening doors to world-class education and skilled
            migration pathways.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: ShieldCheck, title: "Trusted Guidance", text: "Faith-driven counsel rooted in integrity and family values." },
    { icon: Globe2, title: "Global Reach", text: "Pathways to Canada, UK, USA, Australia, Europe & Asia." },
    { icon: GraduationCap, title: "Proven Results", text: "End-to-end support — admissions, visa, settlement." },
  ];
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gold/15 text-navy">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl text-navy">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionStrip() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Our Mission
        </p>
        <p className="mt-6 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
          "To turn the sacrifices of African parents into global opportunities
          for their children, empowering a generation to uplift their families
          and communities, by God's grace."
        </p>
      </div>
    </section>
  );
}

function JourneyGallery() {
  const items = [
    {
      img: consultation,
      icon: ShieldCheck,
      title: "Personal Consultation",
      text: "Sit down with our advisors to map a pathway tailored to your goals and budget.",
    },
    {
      img: studentsCampus,
      icon: GraduationCap,
      title: "Life on Campus",
      text: "Join thriving international student communities at globally recognised universities.",
    },
    {
      img: studentsTravel,
      icon: Plane,
      title: "Ready to Travel",
      text: "From visa filing to airport pickup — we walk with you all the way to the gate.",
    },
    {
      img: studentsGraduation,
      icon: GraduationCap,
      title: "Graduation Day",
      text: "Celebrate the day every sacrifice was made for — diploma in hand, future wide open.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            From Sacrifice to Success
          </p>
          <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
            The Horizon Link Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real moments along the path we walk with every student and family — from the first
            consultation to that long-awaited graduation photograph.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ img, icon: Icon, title, text }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-2 font-display text-xl">{title}</h3>
                </div>
              </div>
              <p className="px-5 py-4 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      icon: GraduationCap,
      title: "Study Abroad & Education",
      text: "University placement, scholarships, student visas, and arrival support.",
    },
    {
      icon: Briefcase,
      title: "Work & Skilled Migration",
      text: "Skilled worker visas, work permits, and international job placement.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we do</p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Pathways We Build</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-navy hover:text-gold">
            View all services →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
              <Icon className="relative h-10 w-10 text-gold" />
              <h3 className="relative mt-6 font-display text-2xl text-navy">{title}</h3>
              <p className="relative mt-3 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const dests = [
    { name: "Canada", image: destCanada },
    { name: "United Kingdom", image: destUk },
    { name: "USA", image: destUsa },
    { name: "Australia", image: destAustralia },
    { name: "Germany", image: destGermany },
    { name: "Ireland", image: destIreland },
    { name: "Dubai", image: destDubai },
    { name: "Malaysia", image: destMalaysia },
    { name: "Malta", image: destMalta },
    { name: "Qatar", image: destQatar },
  ];
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Destinations</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">A World of Opportunity</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            We connect African families to leading destinations across four continents.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {dests.map((d) => (
            <Link
              key={d.name}
              to="/destinations"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 transition-all hover:border-gold hover:shadow-gold"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-center text-sm font-semibold text-white group-hover:text-gold">
                {d.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy-deep"
          >
            Explore all destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%)" }} />
          <h2 className="relative font-display text-4xl text-white sm:text-5xl">
            Your child's future begins with one conversation.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">
            Book a free consultation with our migration and education advisors today.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.02]"
          >
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
