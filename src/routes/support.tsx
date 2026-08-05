import { createFileRoute, Link } from "@tanstack/react-router";
import { LifeBuoy, Mail, Megaphone } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & News — JOYgle Studio" },
      {
        name: "description",
        content:
          "Get help with JOYgle Studio games, read frequently asked questions, and follow the latest studio news.",
      },
      { property: "og:title", content: "Support & News — JOYgle Studio" },
      {
        property: "og:description",
        content: "FAQs, help requests, and the latest updates from JOYgle Studio.",
      },
    ],
  }),
  component: SupportPage,
});

const faqs = [
  {
    q: "Which devices are supported?",
    a: "Read The Room is currently being tested on Android phones and tablets.",
  },
  {
    q: "Is my progress saved?",
    a: "Yes. Progress is stored locally on your device and restored the next time you play.",
  },
  {
    q: "Is there a cost?",
    a: "The current version is free to play and may include optional rewarded advertisements.",
  },
  {
    q: "Which languages are available?",
    a: "The story can be played in English or Korean, and you can switch languages at any time.",
  },
  {
    q: "How do I report a bug?",
    a: "Email joygle.dev@gmail.com with your device model and a short description — we usually reply within two business days.",
  },
];

const news = [
  {
    date: "In testing",
    title: "Read The Room RC1 is now in testing",
    body: "Private beta testing is underway on Android devices.",
  },
  {
    date: "Coming soon",
    title: "More exciting updates coming soon!",
    body: "Stay tuned for new products and stories.",
  },
];

function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-extrabold tracking-widest text-joy-pink">SUPPORT</p>
      <h1 className="mt-3 text-3xl md:text-5xl">We're here to help.</h1>
      <p className="mt-4 text-muted-foreground">
        Questions about a game, a purchase, or your saved progress? Start here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
          <LifeBuoy className="h-6 w-6 text-primary" aria-hidden />
          <h2 className="mt-3 text-lg">Player help</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Bugs, crashes, or lost progress — send us the details.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
          >
            Contact support
          </Link>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
          <Mail className="h-6 w-6 text-primary" aria-hidden />
          <h2 className="mt-3 text-lg">Business & press</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Partnerships, press kits, and collaborations.
          </p>
          <a
            href="mailto:joygle.dev@gmail.com"
            className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
          >
            joygle.dev@gmail.com
          </a>
        </div>
      </div>

      <h2 className="mt-12 text-2xl">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-border rounded-2xl border border-border/60 bg-card shadow-card">
        {faqs.map((f) => (
          <div key={f.q} className="p-5">
            <h3 className="text-base">{f.q}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 flex items-center gap-2 text-2xl">
        <Megaphone className="h-5 w-5 text-primary" aria-hidden /> Latest news
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {news.map((n) => (
          <article key={n.title} className="rounded-2xl bg-sky p-6">
            <p className="text-xs font-extrabold tracking-widest text-primary">{n.date}</p>
            <h3 className="mt-2 text-lg">{n.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
