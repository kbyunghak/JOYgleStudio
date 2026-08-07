import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { readTheRoomEnglish } from "@/lib/privacy-policies";

export const Route = createFileRoute("/privacy_/read-the-room/en")({
  head: () => ({ meta: [{ title: "Read The Room Privacy Policy — JOYgle Studio" }] }),
  component: () => <PrivacyPolicyPage policy={readTheRoomEnglish} />,
});
