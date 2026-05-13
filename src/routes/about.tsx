import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import about from "@/assets/about.jpg";
import graduation from "@/assets/students-graduation.jpg";
import campus from "@/assets/students-campus.jpg";
import travel from "@/assets/students-travel.jpg";
import { Heart, Compass, Award, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Horizon Link Agency — Faith-Driven Consultancy" },
      { name: "description", content: "Learn about Horizon Link Agency: faith-driven migration & education consultancy in Eldoret, Kenya, founded by Jonathan K. Kiplagat to serve African families." },
      { property: "og:title", content: "About Horizon Link Agency" },
      { property: "og:description", content: "God First. Legacy Always. — Our story, mission and values." },
      { property: "og:url", content: "https://horizonlinkagency.com/about" },
      { property: "og:image", content: "https://horizonlinkagency.com/students-graduation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://horizonlinkagency.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://horizonlinkagency.com/#organization",
          name: "Horizon Link Agency",
          url: "https://horizonlinkagency.com/",
          logo: "https://horizonlinkagency.com/favicon.ico",
          image: "https://horizonlinkagency.com/students-graduation.jpg",
          description: "Faith-driven study abroad and skilled migration consultancy based in Eldoret, Kenya, founded by Jonathan K. Kiplagat to serve African families.",
          slogan: "By Grace, From Sacrifice to Success.",
          founder: { "@type": "Person", name: "Jonathan K. Kiplagat", jobTitle: "Founder & Director" },
          foundingLocation: { "@type": "Place", name: "Eldoret, Kenya" },
          email: "info@horizonlinkagency.com",
          telephone: "+254722496897",
          address: { "@type": "PostalAddress", addressLocality: "Eldoret", addressCountry: "KE" },
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+254722496897", contactType: "customer service", email: "info@horizonlinkagency.com", areaServed: "KE", availableLanguage: ["English", "Swahili"] },
            { "@type": "ContactPoint", telephone: "+254728444030", contactType: "customer service", areaServed: "KE", availableLanguage: ["English", "Swahili"] },
          ],
          areaServed: ["KE", "UG", "TZ", "RW", "ET", "Africa"],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About Us</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            Built on faith. Driven by family. Devoted to legacy.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <img src={about} alt="An African family" loading="lazy" width={1200} height={900} className="rounded-2xl object-cover shadow-elegant" />
          <div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl">Our Story</h2>
            <p className="mt-5 text-muted-foreground">
              Horizon Link Agency was founded on a simple
              conviction: every African parent's sacrifice deserves a future worth fighting for.
              We exist to bridge the distance between hard-won dreams and global opportunity —
              guiding students and skilled professionals through study, work, and migration
              pathways with integrity, faith, and unwavering care.
            </p>
            <p className="mt-4 text-muted-foreground">
              From the first consultation to safe arrival abroad, we walk every step alongside
              the families we serve. By God's grace, we are turning sacrifices into success
              stories — one family, one passport, one legacy at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Image montage: students at every stage */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            <figure className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-elegant">
              <img src={graduation} alt="African graduates throwing caps in the air at sunset" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5 font-display text-xl text-white">
                Graduation — every sacrifice, redeemed.
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={campus} alt="Students walking together on a university campus" loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3 text-sm font-semibold text-white">
                Campus life
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={travel} alt="Student waiting at the airport with luggage, ready to travel abroad" loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3 text-sm font-semibold text-white">
                Ready to travel
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Foundation</p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">Mission, Vision, Motto & Promise</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: "Mission", text: "To turn the sacrifices of African parents into global opportunities for their children, empowering a generation to uplift their families and communities, by God's grace." },
              { icon: Eye, title: "Vision", text: "To become a leading education and migration agency across Africa." },
              { icon: Compass, title: "Motto", text: "God First. Legacy Always. — every decision rooted in faith; every outcome built to outlast us." },
              { icon: Award, title: "Promise", text: "By Grace, From Sacrifice to Success — relentless service, honest counsel, real results." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-8 shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <SiteFooter />
    </div>
  );
}

const ABOUT_FAQS = [
  {
    q: "Who founded Horizon Link Agency?",
    a: "Horizon Link Agency was founded by Jonathan K. Kiplagat, who serves as Founder & Director. The agency is based in Eldoret, Kenya, and was built to help African families turn parental sacrifice into global opportunity for their children.",
  },
  {
    q: "What does Horizon Link Agency actually do?",
    a: "We are a faith-driven study abroad and skilled migration consultancy. We guide students and skilled professionals through university admissions, scholarships, student visas, work permits, job placement and settlement support across 10+ destination countries.",
  },
  {
    q: "Is Horizon Link Agency a registered Kenyan company?",
    a: "Yes. Horizon Link Agency is a Kenyan-registered consultancy headquartered in Eldoret. Our director, Jonathan K. Kiplagat, signs all official documentation, contracts and reference letters.",
  },
  {
    q: "What does \"By Grace, From Sacrifice to Success\" mean?",
    a: "It is our promise to every family we serve. We believe African parents make extraordinary sacrifices, and our role is to convert those sacrifices into real, measurable success — admission letters, visas, jobs and graduations — by God's grace.",
  },
  {
    q: "Do I have to be a Christian to work with Horizon Link Agency?",
    a: "No. While our values are faith-driven, we serve families of every faith and background with the same integrity, honesty and commitment to results.",
  },
];

function FAQSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">FAQ</p>
          <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">About Horizon Link</h2>
        </div>
        <dl className="mt-10 space-y-4">
          {ABOUT_FAQS.map((f) => (
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
  );
}
