import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Gamepad2,
  Heart,
  MapPin,
  Megaphone,
  Star,
} from "lucide-react";
import mascot from "@/assets/mascot.png";
import { StoreButtons } from "@/components/store-buttons";

import shotChoice from "../../assets/Projects/ReadTheRoom/Play_Ken_en.jpg";
import shotFeedback from "../../assets/Projects/ReadTheRoom/feedback_en.jpg";
import shotStoryMap from "../../assets/Projects/ReadTheRoom/storymap_en.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOYgle Studio — Connect to Joy, Learn through Play" },
      {
        name: "description",
        content:
          "JOYgle Studio builds playful games and learning experiences, including the interactive story game Read The Room.",
      },
      { property: "og:title", content: "JOYgle Studio — Connect to Joy, Learn through Play" },
      {
        property: "og:description",
        content:
          "Playful digital experiences that bring people, learning, and imagination together.",
      },
    ],
  }),
  component: Index,
});

const values = [
  {
    icon: Heart,
    title: "Empathy",
    body: "We design experiences that encourage understanding and compassion.",
    tint: "bg-accent text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "Learning",
    body: "We make learning natural, engaging, and meaningful through play.",
    tint: "bg-joy-mint/40 text-foreground",
  },
  {
    icon: Gamepad2,
    title: "Playfulness",
    body: "We believe play sparks creativity, joy, and lasting connections.",
    tint: "bg-joy-yellow/40 text-foreground",
  },
];

const steps = [
  {
    title: "Make Choices",
    body: "Every choice shapes the story.",
    src: shotChoice,
    alt: "Read The Room choice screen with three dialogue options",
  },
  {
    title: "See the Result",
    body: "Your choices lead to realistic outcomes.",
    src: shotFeedback,
    alt: "Read The Room feedback screen showing result and stat changes",
  },
  {
    title: "Discover the Story",
    body: "Every path opens a new chapter.",
    src: shotStoryMap,
    alt: "Read The Room StoryMap screen showing episode cards",
  },
];

function Index() {
  return (
    <>
      <section className="bg-sky-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cta-gradient px-4 py-1.5 text-xs font-bold text-primary-foreground">
              <Star className="h-3.5 w-3.5" aria-hidden /> JOYGLE Studio
            </span>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
              Connect to <span className="text-primary">Joy.</span>
              <br />
              Learn through <span className="text-joy-pink">Play.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              We create playful digital experiences that bring people, learning, and imagination
              together.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-cta-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
              >
                <Gamepad2 className="h-4 w-4" aria-hidden /> Explore Our Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-card transition-colors hover:bg-secondary"
              >
                <BookOpen className="h-4 w-4" aria-hidden /> About JOYgle
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img
              src={mascot}
              alt="JOYgle Studio blue bear mascot hugging a golden star"
              width={520}
              height={520}
              className="float-slow w-[78%] max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-6xl px-4">
        <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-10">
            <div className="flex flex-col">
              <p className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-joy-pink">
                <Star className="h-4 w-4" aria-hidden /> FEATURED PRODUCT
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Read The Room
              </h2>
              <p className="mt-2 text-lg font-medium text-primary">
                Bilingual Interactive Story Game
              </p>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                Navigate everyday situations in Canada, make meaningful choices, and learn how to
                read social cues through interactive stories.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Learn English</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Improve naturally through real-life conversations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Gamepad2 className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Make Choices</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Every decision shapes the story and your relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Life in Canada</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Experience Canadian culture, campus life, and more.
                    </p>
                  </div>
                </div>
              </div>

              <StoreButtons className="mt-8" />
            </div>

            <div className="grid gap-6 sm:grid-cols-3 lg:border-l lg:border-border/60 lg:pl-10">
              {steps.map((s, i) => (
                <div key={s.title} className="flex flex-col">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold leading-tight">{s.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>

                  <div className="relative mx-auto w-full max-w-[260px] rounded-[2.25rem] bg-foreground p-[10px] shadow-xl">
                    <div className="absolute left-1/2 top-[10px] z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-foreground" />
                    <div className="overflow-hidden rounded-[1.75rem] bg-background">
                      <img
                        src={s.src}
                        alt={s.alt}
                        width={709}
                        height={1500}
                        loading="lazy"
                        className="aspect-[9/19.5] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t border-border/60 pt-4 text-right">
            <Link
              to="/products/read-the-room"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Learn more about Read The Room <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-xs font-extrabold tracking-widest text-joy-pink">OUR MISSION</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl md:text-4xl">
            Building experiences that help people understand, connect, and grow.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body, tint }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 text-left shadow-card"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${tint}`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-sky p-6 sm:flex-row md:p-8">
          <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-primary-foreground">
            <Megaphone className="h-7 w-7" aria-hidden />
          </span>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-extrabold tracking-widest text-primary">LATEST NEWS</p>
            <h3 className="mt-1 text-xl md:text-2xl">More exciting updates coming soon!</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Stay tuned for new products and stories.
            </p>
          </div>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold shadow-card hover:bg-secondary"
          >
            View News <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
