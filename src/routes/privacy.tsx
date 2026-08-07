import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Read The Room Privacy Policy — JOYgle Studio" },
      {
        name: "description",
        content:
          "How Read The Room handles data, advertising via Google Mobile Ads, local storage, and your privacy choices.",
      },
      { property: "og:title", content: "Read The Room Privacy Policy" },
      {
        property: "og:description",
        content: "Privacy practices for the JOYgle Studio game Read The Room.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const EMAIL = "joygle.dev@gmail.com";

const sections: { title: string; paragraphs: string[]; bullets?: string[] }[] = [
  {
    title: "1. Information we collect",
    paragraphs: [
      "JOYgle Studio does not require an account to play our games, and we do not ask for your name, email address, phone number, or contact list inside the game.",
      "We do not operate our own analytics servers. The limited data described below is processed by third-party providers (advertising and app store platforms) rather than collected directly by us.",
    ],
  },
  {
    title: "2. Advertising",
    paragraphs: [
      "Read The Room uses Google Mobile Ads (AdMob) to provide optional rewarded advertisements. Watching a rewarded ad is always the player's choice; the game can be played without watching ads.",
      "For ad delivery, measurement, and fraud prevention, Google may process:",
    ],
    bullets: [
      "Advertising ID and other device identifiers",
      "IP address and approximate location derived from it",
      "App interaction data (for example, ad views and clicks)",
      "Diagnostic and device information (device model, OS version, crash data)",
    ],
  },
  {
    title: "3. Google as a third-party provider",
    paragraphs: [
      "Google's handling of this data is governed by Google's Privacy Policy at https://policies.google.com/privacy and the Google Advertising terms at https://policies.google.com/technologies/ads.",
      "You can reset or delete your Advertising ID, or opt out of ad personalisation, in your device settings (Android: Settings › Google › Ads).",
    ],
  },
  {
    title: "4. Consent in the EEA, UK, and Switzerland",
    paragraphs: [
      "If you are located in the European Economic Area, the United Kingdom, or Switzerland, the game presents a consent message (Google User Messaging Platform) before personalised ads are shown. You may accept, refuse, or change your choice later from the in-game settings.",
    ],
  },
  {
    title: "5. Local data storage",
    paragraphs: [
      "Story progress, language preference, and settings are stored locally on your device. This data is not uploaded to us. Uninstalling the app removes it.",
    ],
  },
  {
    title: "6. Third-party services",
    paragraphs: [
      "Distribution platforms such as Google Play and the Amazon Appstore apply their own privacy policies to downloads, purchases, and the crash or performance reports they generate for developers. We only receive aggregated, non-identifying reports from those platforms.",
    ],
  },
  {
    title: "7. Children's privacy",
    paragraphs: [
      "Our experiences are family friendly, but they are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information to us, contact us and we will delete it.",
    ],
  },
  {
    title: "8. International users",
    paragraphs: [
      "JOYgle Studio operates from Canada. Our third-party providers may process data on servers located in other countries, including the United States, under their own safeguards.",
    ],
  },
  {
    title: "9. Data retention",
    paragraphs: [
      "We do not retain personal data on our own systems. Data processed by advertising and store providers is retained according to their published policies. Emails you send us are kept only as long as needed to answer your request.",
    ],
  },
  {
    title: "10. Changes to this policy",
    paragraphs: [
      "We may update this policy as the app evolves. Material changes will be reflected in the effective date below and, where appropriate, announced in the app.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      `Questions about this policy? Email ${EMAIL} and we will respond as soon as we can.`,
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-extrabold tracking-widest text-joy-pink">LEGAL</p>
      <h1 className="mt-3 text-3xl md:text-5xl">Read The Room Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Effective date: August 5, 2026</p>
      <p className="mt-4 text-sm text-muted-foreground">
        This policy applies specifically to the JOYgle Studio game Read The Room.
      </p>

      <aside className="mt-6 rounded-2xl border border-primary/20 bg-secondary/60 p-5">
        <h2 className="text-lg">Other product policies</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Looking for the Korean privacy policy for our English learning game?
        </p>
        <Link
          to="/privacy/word-rescue"
          className="mt-3 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
        >
          말해봐! 영단어 구조대 개인정보처리방침
        </Link>
      </aside>

      <div className="mt-8 space-y-6">
        {sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-card"
          >
            <h2 className="text-lg">{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-2 text-sm text-muted-foreground">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        <a href={`mailto:${EMAIL}`} className="font-bold text-primary hover:underline">
          {EMAIL}
        </a>
      </p>
    </div>
  );
}
