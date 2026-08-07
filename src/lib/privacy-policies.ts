export interface PrivacySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  email?: string;
}

export interface PrivacyPolicy {
  language: "en" | "ko";
  backLabel: string;
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: PrivacySection[];
}

const EMAIL = "joygle.dev@gmail.com";

export const readTheRoomEnglish: PrivacyPolicy = {
  language: "en",
  backLabel: "← Back to privacy policies",
  title: "Read The Room Privacy Policy",
  effectiveDate: "Effective date: August 5, 2026",
  introduction: "This policy applies specifically to the JOYgle Studio game Read The Room.",
  sections: [
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
        "We may update this policy as the app evolves. Material changes will be reflected in the effective date above and, where appropriate, announced in the app.",
      ],
    },
    {
      title: "11. Contact",
      paragraphs: ["Questions about this policy? Email us and we will respond as soon as we can."],
      email: EMAIL,
    },
  ],
};

export const readTheRoomKorean: PrivacyPolicy = {
  language: "ko",
  backLabel: "← 개인정보처리방침 목록으로 돌아가기",
  title: "눈치게임: 캐나다편 개인정보처리방침",
  effectiveDate: "시행일: 2026년 8월 5일",
  introduction: "본 방침은 JOYgle Studio의 게임 눈치게임: 캐나다편(Read The Room)에 적용됩니다.",
  sections: readTheRoomEnglish.sections.map((section, index) => {
    const translations: PrivacySection[] = [
      {
        title: "1. 수집하는 정보",
        paragraphs: [
          "JOYgle Studio는 게임 이용을 위해 계정을 요구하지 않으며, 게임 내에서 이름, 이메일 주소, 전화번호 또는 연락처 목록을 요청하지 않습니다.",
          "당사는 자체 분석 서버를 운영하지 않습니다. 아래에 설명된 제한적인 데이터는 당사가 직접 수집하는 것이 아니라 제3자 제공업체(광고 및 앱스토어 플랫폼)가 처리합니다.",
        ],
      },
      {
        title: "2. 광고",
        paragraphs: [
          "눈치게임: 캐나다편은 선택형 보상 광고를 제공하기 위해 Google Mobile Ads(AdMob)를 사용합니다. 보상 광고 시청 여부는 항상 플레이어가 선택하며, 광고를 시청하지 않아도 게임을 이용할 수 있습니다.",
          "광고 제공, 측정 및 부정행위 방지를 위해 Google은 다음 정보를 처리할 수 있습니다.",
        ],
        bullets: [
          "광고 ID 및 기타 기기 식별자",
          "IP 주소 및 이를 통해 파악한 대략적인 위치",
          "앱 상호작용 데이터(예: 광고 조회 및 클릭)",
          "진단 및 기기 정보(기기 모델, 운영체제 버전, 충돌 데이터)",
        ],
      },
      {
        title: "3. 제3자 제공업체 Google",
        paragraphs: [
          "Google의 데이터 처리는 Google 개인정보처리방침(https://policies.google.com/privacy) 및 Google 광고 약관(https://policies.google.com/technologies/ads)의 적용을 받습니다.",
          "기기 설정(Android: 설정 › Google › 광고)에서 광고 ID를 재설정 또는 삭제하거나 맞춤 광고를 선택 해제할 수 있습니다.",
        ],
      },
      {
        title: "4. EEA, 영국 및 스위스의 동의",
        paragraphs: [
          "유럽경제지역, 영국 또는 스위스에 있는 경우 맞춤 광고가 표시되기 전에 Google User Messaging Platform을 통한 동의 메시지가 제공됩니다. 동의하거나 거부할 수 있으며, 이후 게임 내 설정에서 선택을 변경할 수 있습니다.",
        ],
      },
      {
        title: "5. 기기 내 데이터 저장",
        paragraphs: [
          "스토리 진행도, 언어 설정 및 기타 설정은 기기에 저장됩니다. 이 데이터는 당사에 업로드되지 않으며 앱을 삭제하면 함께 삭제됩니다.",
        ],
      },
      {
        title: "6. 제3자 서비스",
        paragraphs: [
          "Google Play 및 Amazon Appstore와 같은 배포 플랫폼은 다운로드, 구매 및 개발자에게 제공하는 충돌·성능 보고서에 자체 개인정보처리방침을 적용합니다. 당사는 해당 플랫폼으로부터 집계된 비식별 보고서만 받습니다.",
        ],
      },
      {
        title: "7. 아동 개인정보 보호",
        paragraphs: [
          "당사의 콘텐츠는 가족 친화적이지만 13세 미만 아동을 대상으로 하지 않습니다. 당사는 아동의 개인정보를 의도적으로 수집하지 않습니다. 아동이 개인정보를 제공했다고 판단되는 경우 문의해 주시면 삭제하겠습니다.",
        ],
      },
      {
        title: "8. 해외 사용자",
        paragraphs: [
          "JOYgle Studio는 캐나다에서 운영됩니다. 제3자 제공업체는 자체 보호조치에 따라 미국을 포함한 다른 국가의 서버에서 데이터를 처리할 수 있습니다.",
        ],
      },
      {
        title: "9. 데이터 보관",
        paragraphs: [
          "당사는 자체 시스템에 개인정보를 보관하지 않습니다. 광고 및 앱스토어 제공업체가 처리하는 데이터는 각 제공업체의 공개 정책에 따라 보관됩니다. 문의 이메일은 요청에 답변하는 데 필요한 기간 동안만 보관됩니다.",
        ],
      },
      {
        title: "10. 방침 변경",
        paragraphs: [
          "앱의 변경에 따라 본 방침을 개정할 수 있습니다. 중요한 변경 사항은 위 시행일에 반영되며 필요한 경우 앱에서 안내합니다.",
        ],
      },
      {
        title: "11. 문의",
        paragraphs: [
          "본 방침에 관한 문의는 이메일로 보내주시면 가능한 한 신속하게 답변하겠습니다.",
        ],
        email: EMAIL,
      },
    ];
    return translations[index] ?? section;
  }),
};

export const speakFallKorean: PrivacyPolicy = {
  language: "ko",
  backLabel: "← 개인정보처리방침 목록으로 돌아가기",
  title: "말해봐! 영단어 구조대 개인정보처리방침",
  effectiveDate: "최종 개정일: 2026년 8월 7일",
  introduction:
    "말해봐! 영단어 구조대는 어린이를 포함한 모든 사용자가 안심하고 즐길 수 있는 영어 학습 게임입니다. 본 방침은 어떤 정보를 어떻게 사용하는지 설명합니다.",
  sections: [
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
      email: EMAIL,
    },
    {
      title: "8. 개정",
      paragraphs: [
        "본 개인정보처리방침은 법률 변경 또는 앱 기능 변경에 따라 수정될 수 있습니다. 중요한 변경 사항이 있을 경우 앱 내 공지 또는 웹사이트를 통해 안내하겠습니다.",
      ],
    },
  ],
};

export const speakFallEnglish: PrivacyPolicy = {
  language: "en",
  backLabel: "← Back to privacy policies",
  title: "SpeakFall Privacy Policy",
  effectiveDate: "Last updated: August 7, 2026",
  introduction:
    "SpeakFall is an English learning game designed to be enjoyed safely by users of all ages, including children. This policy explains what information the app uses and how it is handled.",
  sections: [
    {
      title: "1. Information used",
      paragraphs: ["The app may use the following information:"],
      bullets: [
        "Voice (microphone) data: Used in real time during gameplay to recognize word pronunciation. Voice data is processed only on the device and is not sent to a server as an audio recording or text.",
        "Device storage: Game progress, coins, and unlocked skins are saved locally on the device using localStorage. This data remains on the user's device and cannot be accessed by the developer.",
        "Device identifiers and advertising ID: Not collected.",
        "Account information: The app has no registration or login and does not collect email addresses, names, birth dates, or similar account information.",
      ],
    },
    {
      title: "2. Purposes",
      paragraphs: [],
      bullets: [
        "Provide an English pronunciation learning game using voice recognition",
        "Save game progress and rewards",
        "Identify errors and improve performance only when separate consent has been provided",
      ],
    },
    {
      title: "3. Retention and deletion",
      paragraphs: [
        "Voice data is discarded immediately after real-time processing. Game progress and similar information remain on the device and are deleted when the app is removed. We do not store personal information on a separate server.",
      ],
    },
    {
      title: "4. Sharing with third parties",
      paragraphs: [
        "The app does not provide or sell users' personal information to third parties. If analytics tools or advertising SDKs are added in the future, we will update this policy and provide notice in advance.",
      ],
    },
    {
      title: "5. Children's privacy (COPPA)",
      paragraphs: [
        "The app is designed for users of all ages, including children. We do not intentionally collect personal information from children under 13, and voice-recognition data is processed only on the device. We comply with COPPA and applicable laws.",
      ],
    },
    {
      title: "6. User rights",
      paragraphs: ["Users have the following choices:"],
      bullets: [
        "Allow or deny microphone permission and change it at any time in device settings",
        "Remove locally stored data by deleting the app",
        "Contact us with questions or comments about this policy",
      ],
    },
    {
      title: "7. Contact",
      paragraphs: ["For questions about this privacy policy, contact us by email."],
      email: EMAIL,
    },
    {
      title: "8. Changes",
      paragraphs: [
        "This policy may be updated when laws or app features change. Important changes will be announced in the app or on the website.",
      ],
    },
  ],
};
