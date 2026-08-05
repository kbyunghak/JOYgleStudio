import { Link } from "@tanstack/react-router";
import { Github, Mail } from "lucide-react";
import mascot from "@/assets/mascot.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={mascot}
            alt="JOYgle Studio mascot"
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-9 object-contain"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold">JOYgle</span>
            <span className="block text-[11px] font-bold text-primary">Studio</span>
          </span>
        </Link>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} JOYgle Studio. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            {
              href: "https://github.com/kbyunghak/JOYgleStudio",
              label: "GitHub",
              Icon: Github,
              external: true,
            },
            {
              href: "mailto:joygle.dev@gmail.com",
              label: "Email",
              Icon: Mail,
              external: false,
            },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
