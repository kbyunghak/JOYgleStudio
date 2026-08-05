import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import icon from "../../assets/Projects/ReadTheRoom/ReadTheRoom.png";
import shotChoiceEn from "../../assets/Projects/ReadTheRoom/1000031299.jpg";
import shotFeedback from "../../assets/Projects/ReadTheRoom/1000031301.jpg";
import shotSummary from "../../assets/Projects/ReadTheRoom/1000031303.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — JOYgle Studio" },
      {
        name: "description",
        content:
          "Explore JOYgle Studio products, including Read The Room, a bilingual choice-driven story game about everyday life in Canada.",
      },
      { property: "og:title", content: "Products — JOYgle Studio" },
      {
        property: "og:description",
        content: "Interactive story games and playful learning experiences from JOYgle Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const features = [
  {
    title: "Meaningful choices",
    body: "Every reply changes how the conversation — and the relationship — unfolds.",
  },
  {
    title: "Bilingual by design",
    body: "Play in English or Korean and switch languages at any point in the story.",
  },
  { title: "Offline-first", body: "No account needed. Chapters and progress live on your device." },
];

const shots = [
  { src: shotChoiceEn, alt: "Read The Room choice screen" },
  { src: shotFeedback, alt: "Read The Room feedback screen" },
  { src: shotSummary, alt: "Read The Room chapter summary screen" },
];

function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-extrabold tracking-widest text-joy-pink">OUR PRODUCTS</p>
      <h1 className="mt-3 text-3xl md:text-5xl">Playful things we've made.</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        We build small, warm experiences about people — how we talk, listen, and understand each
        other.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
        <div className="grid gap-6 p-6 md:grid-cols-[180px_1fr] md:p-8">
          <img
            src={icon}
            alt="Read The Room app icon"
            width={512}
            height={512}
            loading="lazy"
            className="h-44 w-44 rounded-3xl object-cover"
          />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> In testing
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl">Read The Room</h2>
            <p className="mt-1 font-bold text-primary">Bilingual Interactive Story Game</p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              A bilingual, choice-driven story game about everyday situations, cultural differences,
              and communication in Canada. Read the mood, pick your words carefully, and see where
              the story goes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/products/read-the-room"
                className="inline-flex items-center gap-2 rounded-full bg-cta-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105"
              >
                View details <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <span className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold text-muted-foreground">
                Google Play — Coming soon
              </span>
              <span className="rounded-xl border border-border px-5 py-2.5 text-xs font-bold text-muted-foreground">
                Amazon Appstore — In review
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-3 px-6 pb-6 sm:grid-cols-3 md:px-8 md:pb-8">
          {shots.map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={709}
              height={1500}
              loading="lazy"
              className="w-full rounded-2xl border border-border/60 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-card"
          >
            <h3 className="text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-sky p-8 text-center">
        <h2 className="text-2xl">More games are in the workshop.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Want to hear first when the next one ships?
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cta-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105"
        >
          Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
