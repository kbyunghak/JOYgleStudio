export const CONTACT_EMAIL = "joygle.dev@gmail.com";

export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export function validateContactFields({ name, email, message }: ContactFields): string | null {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || trimmedName.length > 100) {
    return "Please enter your name (up to 100 characters).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedEmail.length > 255) {
    return "Please enter a valid email address.";
  }
  if (!trimmedMessage || trimmedMessage.length > 1000) {
    return "Please enter a message (up to 1000 characters).";
  }

  return null;
}

export function buildContactMailto({ name, email, message }: ContactFields): string {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const subject = encodeURIComponent(
    trimmedName ? `JOYgle Studio inquiry from ${trimmedName}` : "JOYgle Studio inquiry",
  );
  const sender = trimmedName ? `— ${trimmedName}${trimmedEmail ? ` (${trimmedEmail})` : ""}` : "";
  const body = encodeURIComponent([trimmedMessage, sender].filter(Boolean).join("\n\n"));

  return `mailto:${CONTACT_EMAIL}?subject=${subject}${body ? `&body=${body}` : ""}`;
}
