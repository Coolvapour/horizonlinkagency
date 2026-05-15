import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#0A1F44" },
      { name: "author", content: "Horizon Link Agency" },
      { name: "google-site-verification", content: "Kuf2iM9SnpwNpVgeWUDbrb36LXExXgUlv-qzfWWPTnY" },
      { name: "keywords", content: "study abroad agency Kenya, student visa Kenya, scholarships abroad, university admissions abroad, study in Canada, study in UK, study in USA, study in Australia, study in Germany, Eldoret education agency, Horizon Link Agency, Jonathan Kiplagat" },
      { title: "Horizon Link Agency — Study Abroad Consultancy" },
      { name: "description", content: "Trusted study abroad pathways for African families." },
      { property: "og:site_name", content: "Horizon Link Agency" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Horizon Link Agency — Study Abroad Consultancy" },
      { property: "og:description", content: "Trusted study abroad pathways for African families." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/054905fb-0f73-4ad3-9593-98d0311cc601" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Horizon Link Agency — Study Abroad Consultancy" },
      { name: "twitter:description", content: "Trusted study abroad pathways for African families." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/054905fb-0f73-4ad3-9593-98d0311cc601" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Horizon Link Agency",
          url: "https://horizonlinkagency.com",
          logo: "https://horizonlinkagency.com/favicon-512.png",
          founder: { "@type": "Person", name: "Jonathan K. Kiplagat" },
          slogan: "By Grace, From Sacrifice to Success.",
          email: "info@horizonlinkagency.com",
          telephone: ["+254722496897", "+254728444030"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Eldoret",
            addressCountry: "KE",
          },
          areaServed: "Africa",
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Horizon Link Agency",
          url: "https://horizonlinkagency.com",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
