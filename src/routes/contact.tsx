import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import mascot from "@/assets/mascot.png";
import { buildContactMailto, CONTACT_EMAIL, validateContactFields } from "@/lib/contact";

const EMAIL = CONTACT_EMAIL;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JOYgle Studio" },
      {
        name: "description",
        content: "Say hello to JOYgle Studio about games, feedback, partnerships, or press.",
      },
      { property: "og:title", content: "Contact — JOYgle Studio" },
      {
        property: "og:description",
        content: "Reach the JOYgle Studio team for feedback, partnerships, and press.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fields = { name, email, message };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateContactFields(fields);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    window.location.href = buildContactMailto(fields);
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-xs font-extrabold tracking-widest text-joy-pink">CONTACT</p>
        <h1 className="mt-3 text-3xl md:text-5xl">Let's connect.</h1>
        <p className="mt-4 text-muted-foreground">
          Feedback on a story, an idea for a collaboration, or just a hello — we read everything.
        </p>
        <div className="mt-6 space-y-3">
          <a
            href={buildContactMailto(fields)}
            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-card hover:bg-secondary"
          >
            <Mail className="h-5 w-5 text-primary" aria-hidden />
            <span className="text-sm font-bold">{EMAIL}</span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-card">
            <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
            <span className="text-sm text-muted-foreground">
              We usually reply within 2 business days.
            </span>
          </div>
        </div>
        <img
          src={mascot}
          alt="JOYgle Studio mascot waving"
          width={320}
          height={320}
          loading="lazy"
          className="float-slow mt-8 hidden w-44 object-contain md:block"
        />
      </div>

      <form
        className="rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="grid gap-4">
          <label className="grid gap-1.5 text-sm font-bold" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            value={name}
            maxLength={100}
            onChange={(e) => setName(e.target.value)}
            className="-mt-3 rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />

          <label className="grid gap-1.5 text-sm font-bold" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            maxLength={255}
            onChange={(e) => setEmail(e.target.value)}
            className="-mt-3 rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="you@example.com"
          />

          <label className="grid gap-1.5 text-sm font-bold" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            maxLength={1000}
            onChange={(e) => setMessage(e.target.value)}
            className="-mt-3 rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="How can we help?"
          />

          {error && (
            <p role="alert" className="text-sm font-bold text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" aria-hidden /> Open email to send
          </button>

          <p className="text-xs text-muted-foreground">
            This form opens your email app with the message pre-filled and sends it to {EMAIL}. By
            sending it, you agree that JOYgle Studio may use your email address to respond to your
            inquiry. See our{" "}
            <Link to="/privacy" className="font-bold text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
