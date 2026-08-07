import { Link } from "@tanstack/react-router";
import type { PrivacyPolicy } from "@/lib/privacy-policies";

export function PrivacyPolicyPage({ policy }: { policy: PrivacyPolicy }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14" lang={policy.language}>
      <Link
        to="/privacy"
        className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary hover:bg-secondary/80"
      >
        {policy.backLabel}
      </Link>

      <p className="mt-8 text-xs font-extrabold tracking-widest text-joy-pink">LEGAL</p>
      <h1 className="mt-3 text-3xl md:text-5xl">{policy.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{policy.effectiveDate}</p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{policy.introduction}</p>

      <div className="mt-8 space-y-6">
        {policy.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-card"
          >
            <h2 className="text-xl text-primary">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.email && (
              <a
                href={`mailto:${section.email}`}
                className="mt-3 inline-block font-bold text-primary hover:underline"
              >
                {section.email}
              </a>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
