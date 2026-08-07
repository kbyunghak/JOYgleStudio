import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy_/word-rescue")({
  head: () => ({
    meta: [
      { title: "말해봐! 영단어 구조대 개인정보처리방침 — JOYgle Studio" },
      {
        name: "description",
        content:
          "말해봐! 영단어 구조대의 음성 인식, 기기 내 저장 및 아동 개인정보 보호 방침입니다.",
      },
      { property: "og:title", content: "말해봐! 영단어 구조대 개인정보처리방침" },
      {
        property: "og:description",
        content: "말해봐! 영단어 구조대의 개인정보 처리 기준을 안내합니다.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WordRescuePrivacyPage,
});

const EMAIL = "joygle.dev@gmail.com";

const sections: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}[] = [
  {
    title: "1. 수집하는 정보",
    paragraphs: ["본 앱은 아래와 같은 정보를 수집할 수 있습니다."],
    bullets: [
      "음성(마이크) 데이터: 게임 플레이 중 단어 발음을 인식하기 위해 실시간으로 사용됩니다. 음성 데이터는 기기 내에서만 처리되며, 녹음 파일이나 텍스트로 서버에 전송되지 않습니다.",
      "기기 저장소: 게임 진행도, 코인, 획득한 스킨 등을 기기 내부(localStorage)에 저장합니다. 이 데이터는 사용자의 기기에만 남아 있으며 개발자가 접근할 수 없습니다.",
      "기기 식별자 및 광고 ID: 수집하지 않습니다.",
      "계정 정보: 별도의 회원가입이나 로그인이 없어 이메일, 이름, 생년월일 등을 수집하지 않습니다.",
    ],
  },
  {
    title: "2. 수집 목적",
    paragraphs: [],
    bullets: [
      "음성 인식을 통한 영어 발음 학습 게임 제공",
      "게임 진행도 및 보상 저장",
      "앱 사용 중 발생하는 오류 확인 및 성능 개선(별도 동의 시에 한함)",
    ],
  },
  {
    title: "3. 보관 및 삭제",
    paragraphs: [
      "음성 데이터는 실시간 처리 후 즉시 폐기됩니다. 게임 진행도 등은 기기 내부에 저장되며, 앱을 삭제하면 함께 삭제됩니다. 별도의 서버에 개인정보를 보관하지 않습니다.",
    ],
  },
  {
    title: "4. 제3자 제공",
    paragraphs: [
      "본 앱은 사용자의 개인정보를 외부에 제공하거나 판매하지 않습니다. 향후 분석 도구나 광고 SDK를 추가할 경우, 본 방침을 개정하고 사전에 안내하겠습니다.",
    ],
  },
  {
    title: "5. 아동 개인정보 보호 (COPPA)",
    paragraphs: [
      "본 앱은 어린이를 포함한 모든 연령이 이용할 수 있도록 설계되었습니다. 13세 미만 아동의 개인정보를 의도적으로 수집하지 않으며, 음성 인식 데이터도 기기 내에서만 처리됩니다. COPPA 및 관련 법규를 준수합니다.",
    ],
  },
  {
    title: "6. 사용자 권리",
    paragraphs: ["사용자는 다음과 같은 권리를 가집니다."],
    bullets: [
      "마이크 권한 허용 또는 거부(설정에서 언제든 변경 가능)",
      "앱 삭제를 통한 저장 데이터 제거",
      "개인정보처리방침에 대한 문의 및 의견 제시",
    ],
  },
  {
    title: "7. 문의처",
    paragraphs: ["개인정보처리방침에 대한 문의는 아래 이메일로 부탁드립니다."],
  },
  {
    title: "8. 개정",
    paragraphs: [
      "본 개인정보처리방침은 법률 변경 또는 앱 기능 변경에 따라 수정될 수 있습니다. 중요한 변경 사항이 있을 경우 앱 내 공지 또는 웹사이트를 통해 안내하겠습니다.",
    ],
  },
];

function WordRescuePrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14" lang="ko">
      <Link
        to="/privacy"
        className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary hover:bg-secondary/80"
      >
        ← 개인정보처리방침 목록으로 돌아가기
      </Link>

      <p className="mt-8 text-xs font-extrabold tracking-widest text-joy-pink">LEGAL</p>
      <h1 className="mt-3 text-3xl md:text-5xl">개인정보처리방침</h1>
      <p className="mt-4 text-sm font-bold text-primary">말해봐! 영단어 구조대</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        말해봐! 영단어 구조대는 어린이를 포함한 모든 사용자가 안심하고 즐길 수 있는 영어 학습
        게임입니다. 본 방침은 어떤 정보를 어떻게 사용하는지 설명합니다.
      </p>

      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-card"
          >
            <h2 className="text-xl text-primary">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.title === "7. 문의처" && (
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 inline-block font-bold text-primary hover:underline"
              >
                {EMAIL}
              </a>
            )}
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">최종 개정일: 2026년 8월 7일</p>
    </div>
  );
}
