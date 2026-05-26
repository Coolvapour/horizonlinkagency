import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Destinations — Canada, UK, USA & Australia" },
      { name: "description", content: "Explore study and work destinations: Canada, UK, USA, Australia, Germany, Ireland, Dubai, Malaysia, Malta and Qatar — curated universities by field of study." },
      { property: "og:title", content: "A World of Opportunity — Our Destinations" },
      { property: "og:description", content: "From North America to the Gulf, Europe and Asia — pathways to over 300 universities across 25+ countries." },
      { property: "og:url", content: "https://horizonlinkagency.com/destinations" },
    ],
    links: [{ rel: "canonical", href: "https://horizonlinkagency.com/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Destinations
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl sm:text-6xl">
            A world of <span className="text-gold">opportunity</span> — choose your horizon.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            We connect African families to over 300 accredited universities across 25+
            countries. Click any destination to explore reputable institutions grouped by
            field of study.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => {
              const uniCount = d.groups.reduce(
                (n, g) => n + g.universities.length,
                0,
              );
              return (
                <Link
                  key={d.slug}
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={d.image}
                      alt={`${d.name} landmark`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        <MapPin className="h-3 w-3" /> {d.region}
                      </div>
                      <h2 className="mt-1 font-display text-3xl text-white">{d.name}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{d.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {d.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-navy"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                      <span className="text-muted-foreground">
                        {uniCount}+ partner institutions
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-gold transition-transform group-hover:translate-x-1">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-16">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Not sure which country fits you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Book a free guidance session — we'll match you to the destination that fits
              your goals, budget and timeline.
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
