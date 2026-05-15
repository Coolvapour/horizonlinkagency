import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { destinations, getDestination, type Destination } from "@/data/destinations";

export const Route = createFileRoute("/destinations_/$slug")({
  loader: ({ params }): { dest: Destination } => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.dest;
    if (!d) return { meta: [{ title: "Destination — Horizon Link Agency" }] };
    const url = `https://horizonlinkagency.com/destinations/${d.slug}`;
    const universities = d.groups.flatMap((g) =>
      g.universities.map((u) => ({ name: u.name, city: u.city, field: g.field })),
    );
    return {
      meta: [
        { title: `Study in ${d.name} — Top Universities | Horizon Link Agency` },
        { name: "description", content: `Explore reputable universities in ${d.name} for international students across engineering, business, IT, medicine and more.` },
        { property: "og:title", content: `Study in ${d.name} — Top Universities` },
        { property: "og:description", content: d.blurb },
        { property: "og:url", content: url },
        { property: "og:image", content: d.image },
        { property: "twitter:image", content: d.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `Study in ${d.name} — Top Universities`,
            description: d.overview,
            url,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: universities.map((u, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "CollegeOrUniversity",
                  name: u.name,
                  address: { "@type": "PostalAddress", addressLocality: u.city },
                  description: `${u.field} — located in ${u.city}.`,
                },
              })),
            },
          }),
        },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl p-10 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">Unable to load this destination. Please try again.</p>
        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 overflow-auto rounded bg-muted p-3 text-left text-xs">{error.message}</pre>
        )}
        <Link to="/destinations" className="mt-6 inline-flex text-gold underline">
          Back to destinations
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl p-10 text-center">
        <h1 className="font-display text-3xl">Destination not found</h1>
        <Link to="/destinations" className="mt-6 inline-flex text-gold underline">
          Back to all destinations
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: DestinationDetail,
});

function DestinationDetail() {
  const { dest } = Route.useLoaderData() as { dest: Destination };
  const others = destinations.filter((d) => d.slug !== dest.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden bg-navy text-white">
        <img
          src={dest.image}
          alt={`${dest.name} landscape`}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <Link
            to="/destinations"
            className="mb-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-3 w-3" /> All Destinations
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <MapPin className="h-3 w-3" /> {dest.region}
          </div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Study in <span className="text-gold">{dest.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">{dest.overview}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {dest.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Universities by field */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Partner & Recommended Institutions
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Universities by field of study
            </h2>
            <p className="mt-4 text-muted-foreground">
              A curated list of internationally accredited institutions in {dest.name} that
              actively welcome international students. Talk to our advisors to match the
              right campus to your goals and budget.
            </p>
          </div>

          <div className="space-y-12">
            {dest.groups.map((group) => (
              <div key={group.field}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-navy sm:text-3xl">
                    {group.field}
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.universities.map((u) => (
                    <article
                      key={u.name}
                      className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-elegant"
                    >
                      <h4 className="font-semibold text-navy">{u.name}</h4>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {u.city}
                      </p>
                      {u.note && (
                        <p className="mt-2 text-xs font-medium text-gold">{u.note}</p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy">Explore other destinations</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/destinations/$slug"
                params={{ slug: o.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {o.region}
                    </div>
                    <h3 className="font-display text-2xl text-white">{o.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center shadow-elegant sm:p-14">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Ready to apply to {dest.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Book a free guidance session — we'll shortlist universities that match your
              grades, field of interest and budget.
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
