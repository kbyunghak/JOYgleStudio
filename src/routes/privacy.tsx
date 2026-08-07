import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policies — JOYgle Studio" },
      {
        name: "description",
        content: "Product-specific privacy policies for JOYgle Studio games.",
      },
      { property: "og:title", content: "Privacy Policies — JOYgle Studio" },
      {
        property: "og:description",
        content: "Choose a JOYgle Studio product and language to read its privacy policy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyHubPage,
});

const products = [
  {
    name: "SpeakFall",
    localName: "말해봐! 영단어 구조대",
    description: "English pronunciation learning game",
    policies: [
      { label: "한국어 개인정보처리방침", to: "/privacy/speakfall/ko" as const },
      { label: "English Privacy Policy", to: "/privacy/speakfall/en" as const },
    ],
  },
  {
    name: "Read The Room",
    localName: "눈치게임: 캐나다편",
    description: "Bilingual narrative choice game",
    policies: [
      { label: "한국어 개인정보처리방침", to: "/privacy/read-the-room/ko" as const },
      { label: "English Privacy Policy", to: "/privacy/read-the-room/en" as const },
    ],
  },
] as const;

function PrivacyHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-extrabold tracking-widest text-joy-pink">LEGAL</p>
      <h1 className="mt-3 text-3xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
        Select a product and language to read the applicable JOYgle Studio privacy policy.
      </p>

      <h2 className="mt-10 text-2xl">Product-specific policies</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <section
            key={product.name}
            className="rounded-3xl border border-border/60 bg-card p-6 shadow-card"
          >
            <p className="text-xs font-extrabold tracking-widest text-primary">{product.name}</p>
            <h3 className="mt-2 text-xl">{product.localName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
            <div className="mt-5 grid gap-2">
              {product.policies.map((policy) => (
                <Link
                  key={policy.to}
                  to={policy.to}
                  className="rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {policy.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
