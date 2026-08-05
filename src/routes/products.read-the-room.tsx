import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Languages, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import { StoreButtons } from "@/components/store-buttons";
import icon from "../../assets/Projects/ReadTheRoom/ReadTheRoom.png";
import amy from "../../assets/Projects/ReadTheRoom/amy.png";
import ken from "../../assets/Projects/ReadTheRoom/ken.png";
import sora from "../../assets/Projects/ReadTheRoom/sora.png";
import amyProfile from "../../assets/Projects/ReadTheRoom/amy_profile.png";
import kenProfile from "../../assets/Projects/ReadTheRoom/ken_profile.png";
import soraProfile from "../../assets/Projects/ReadTheRoom/sora_profile.png";

import shotChoiceKo from "../../assets/Projects/ReadTheRoom/1000031295.jpg";
import shotChoiceEn from "../../assets/Projects/ReadTheRoom/1000031299.jpg";
import shotFeedback from "../../assets/Projects/ReadTheRoom/1000031301.jpg";
import shotSummary from "../../assets/Projects/ReadTheRoom/1000031303.jpg";

export const Route = createFileRoute("/products/read-the-room")({
  head: () => ({
    meta: [
      { title: "Read The Room — Bilingual Story Game | JOYgle Studio" },
      {
        name: "description",
        content:
          "Read The Room is a bilingual, choice-driven story game about communication, cultural differences, and everyday life in Canada. Currently in testing on Android.",
      },
      { property: "og:title", content: "Read The Room — Bilingual Story Game" },
      {
        property: "og:description",
        content:
          "A choice-driven story game about culture, communication, and starting a new life in Canada.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReadTheRoomPage,
});

const features = [
  {
    icon: Languages,
    title: "Bilingual",
    body: "Play fully in English or Korean, switchable at any time in-story.",
  },
  {
    icon: WifiOff,
    title: "Offline-first",
    body: "Chapters run on-device. Progress is saved locally, no account needed.",
  },
  {
    icon: Sparkles,
    title: "Choice-driven",
    body: "Each reply changes the scene, your stats, and how the story unfolds.",
  },
];

const characters = [
  { src: amy, name: "Amy", role: "A barista starting over in a new country." },
  { src: ken, name: "Ken", role: "A student learning to speak up for himself." },
  { src: sora, name: "Sora", role: "A caregiver balancing kindness and boundaries." },
];

const profiles = [
  { src: amyProfile, name: "Amy" },
  { src: kenProfile, name: "Ken" },
  { src: soraProfile, name: "Sora" },
];

const shots = [
  { src: shotChoiceKo, alt: "Read The Room choice screen in Korean" },
  { src: shotChoiceEn, alt: "Read The Room choice screen in English" },
  { src: shotFeedback, alt: "Read The Room feedback screen with stat changes and a tip" },
  { src: shotSummary, alt: "Read The Room chapter summary screen with retry options" },
];

function ReadTheRoomPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Products
      </Link>

      <section className="mt-6 grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
        <img
          src={icon}
          alt="Read The Room app icon"
          width={512}
          height={512}
          className="h-36 w-36 rounded-3xl object-cover shadow-card"
        />
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> In testing — Android
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl">Read The Room</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A bilingual, choice-driven story game about communication, cultural differences, and
            everyday life in Canada. Read the mood, pick your words, and see where the conversation
            takes you.
          </p>
          <StoreButtons className="mt-5" />
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-lg">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Screenshots</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Choice, feedback, and chapter summary screens.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={709}
              height={1500}
              loading="lazy"
              className="w-full rounded-2xl border border-border/60 object-cover shadow-card"
            />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Characters</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {characters.map((c) => (
            <figure
              key={c.name}
              className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card"
            >
              <div className="aspect-[2/3] w-full overflow-hidden">
                <img
                  src={c.src}
                  alt={`${c.name} from Read The Room`}
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-lg">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Character details</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Personality notes and the six in-game expressions for each character.
        </p>
        <div className="mt-6 space-y-6">
          {profiles.map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={`${p.name} character profile sheet`}
              width={1200}
              height={1280}
              loading="lazy"
              className="w-full rounded-2xl border border-border/60 bg-card shadow-card"
            />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
          <h2 className="text-lg">Languages & availability</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>English and Korean, switchable in-game</li>
            <li>Android phones and tablets</li>
            <li>Free to play, with optional rewarded ads</li>
            <li>Currently in private testing</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
          <h2 className="flex items-center gap-2 text-lg">
            <ShieldCheck className="h-5 w-5 text-primary" aria-hidden /> Privacy
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            No account is required and story progress stays on your device. Optional rewarded ads
            are served by Google Mobile Ads (AdMob).
          </p>
          <Link
            to="/privacy"
            className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
          >
            Read the Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
}
