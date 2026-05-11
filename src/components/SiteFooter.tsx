import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-md" />
              <div>
                <div className="font-display text-xl">Horizon Link Agency</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">
                  Migration & Education
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md font-display text-lg italic text-white/80">
              "By Grace, From Sacrifice to Success."
            </p>
            <p className="mt-2 text-sm text-gold">God First. Legacy Always.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li>
                <div className="text-xs uppercase tracking-wider text-gold/80">Director — Jonathan K. Kiplagat</div>
                <a href="tel:+254722496897" className="mt-1 block hover:text-gold">+254 722 496 897</a>
                <a href="mailto:jonathankiplagat@horizonlinkagency.com" className="block hover:text-gold">jonathankiplagat@horizonlinkagency.com</a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-wider text-gold/80">Office</div>
                <a href="tel:+254728444030" className="mt-1 block hover:text-gold">0728 444 030</a>
                <a href="mailto:info@horizonlinkagency.com" className="block hover:text-gold">info@horizonlinkagency.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Horizon Link Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
