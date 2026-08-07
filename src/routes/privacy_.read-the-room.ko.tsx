import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { readTheRoomKorean } from "@/lib/privacy-policies";

export const Route = createFileRoute("/privacy_/read-the-room/ko")({
  head: () => ({ meta: [{ title: "눈치게임: 캐나다편 개인정보처리방침" }] }),
  component: () => <PrivacyPolicyPage policy={readTheRoomKorean} />,
});
