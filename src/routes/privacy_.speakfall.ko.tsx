import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { speakFallKorean } from "@/lib/privacy-policies";

export const Route = createFileRoute("/privacy_/speakfall/ko")({
  head: () => ({ meta: [{ title: "말해봐! 영단어 구조대 개인정보처리방침" }] }),
  component: () => <PrivacyPolicyPage policy={speakFallKorean} />,
});
