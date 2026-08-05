import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Gamepad2, Heart } from "lucide-react";
import mascot from "@/assets/mascot.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JOYgle Studio" },
      {
        name: "description",
        content:
          "JOYgle Studio is a small studio building playful experiences that help people understand, connect, and grow.",
      },
      { property: "og:title", content: "About — JOYgle Studio" },
      {
        property: "og:description",
        content: "Our mission, values, and the people behind JOYgle Studio.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Empathy",
    body: "We design experiences that encourage understanding and compassion.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    body: "We make learning natural, engaging, and meaningful through play.",
  },
  {
    icon: Gamepad2,
    title: "Playfulness",
    body: "We believe play sparks creativity, joy, and lasting connections.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-sky-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-extrabold tracking-widest text-joy-pink">ABOUT US</p>
            <h1 className="mt-3 text-3xl md:text-5xl">
              A small studio with a big soft spot for people.
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              JOYgle Studio is an independent digital studio founded by Andrew Kim. We create
              playful products that help people understand social situations, learn through stories,
              and connect with others.
            </p>
          </div>
          <img
            src={mascot}
            alt="JOYgle Studio mascot"
            width={420}
            height={420}
            loading="lazy"
            className="float-slow mx-auto w-56 object-contain md:w-72"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl">What we care about</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            We started JOYgle Studio because we kept noticing the same thing: the hardest part of
            everyday life isn't solving puzzles, it's reading people. So we build interactive
            stories where the puzzle is a conversation, and the reward is understanding someone a
            little better.
          </p>
        </div>
      </section>
    </div>
  );
}
