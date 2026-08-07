import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { speakFallEnglish } from "@/lib/privacy-policies";

export const Route = createFileRoute("/privacy_/speakfall/en")({
  head: () => ({ meta: [{ title: "SpeakFall Privacy Policy — JOYgle Studio" }] }),
  component: () => <PrivacyPolicyPage policy={speakFallEnglish} />,
});
