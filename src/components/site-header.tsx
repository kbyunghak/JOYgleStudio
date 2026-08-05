import { Link } from "@tanstack/react-router";
import { Star, Menu } from "lucide-react";
import { useState } from "react";
import mascot from "@/assets/mascot.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/privacy", label: "Privacy" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={mascot}
            alt="JOYgle Studio mascot"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold">JOYgle</span>
            <span className="block text-xs font-bold text-primary">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary border-primary" }}
              inactiveProps={{
                className: "text-foreground/80 border-transparent hover:text-primary",
              }}
              className="border-b-2 pb-1 text-sm font-bold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-cta-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:inline-flex"
          >
            <Star className="h-4 w-4" aria-hidden />
            Let's Connect
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="grid gap-1 border-t border-border/60 px-4 py-3 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-bold text-foreground/80 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
