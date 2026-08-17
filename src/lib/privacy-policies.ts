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
  effectiveDate: "최종 개정일: 2026년 8월 17일",
  introduction:
    "말해봐! 영단어 구조대는 어린이를 포함한 사용자가 안전하게 이용할 수 있도록 설계된 영어 학습 게임입니다. 본 방침은 앱에서 사용하는 정보와 제3자 서비스가 정보를 처리할 수 있는 방식을 설명합니다.",
  sections: [
    {
      title: "1. 앱에서 사용하는 정보",
      paragraphs: ["앱은 기능 제공을 위해 다음 정보를 사용할 수 있습니다."],
      bullets: [
        "음성(마이크) 데이터: 게임 플레이 중 영어 단어 발음을 인식하기 위해 사용됩니다. 음성 입력은 사용자 기기에 설정된 음성 인식 서비스에서 처리됩니다. 서비스 제공업체와 기기 설정에 따라 음성 데이터가 서비스 제공업체의 서버로 전송되어 처리될 수 있습니다. JOYgle Studio는 자체 서버에서 사용자의 음성 녹음을 수집하거나 저장하지 않습니다.",
        "음성 인식 결과: 인식된 텍스트는 발음 평가와 게임 내 피드백에 사용됩니다. JOYgle Studio는 자체 서버에 음성 인식 결과 텍스트를 저장하지 않습니다.",
        "기기 저장소: 게임 진행도, 코인, 획득한 스킨 및 설정은 localStorage를 사용하여 기기에 저장되며 JOYgle Studio 서버로 업로드되지 않습니다.",
        "계정 정보: 앱은 회원가입이나 로그인을 요구하지 않으며, 게임 이용을 위해 이름, 이메일 주소, 생년월일 등의 계정 정보를 요구하지 않습니다.",
      ],
    },
    {
      title: "2. 이용 목적",
      paragraphs: [],
      bullets: [
        "음성 인식을 이용한 영어 발음 학습 게임 제공",
        "발음 평가 및 게임 내 피드백 제공",
        "게임 진행도, 보상 및 사용자 설정 저장",
        "선택형 보상 광고 제공",
        "서비스 안정성, 보안 및 오류 진단 지원",
      ],
    },
    {
      title: "3. 광고 및 Google Mobile Ads",
      paragraphs: [
        "말해봐! 영단어 구조대는 선택형 보상 광고를 제공하기 위해 Google Mobile Ads(AdMob)를 사용합니다. 광고 시청 여부는 사용자가 선택하며, 보상 광고를 시청하지 않아도 앱의 기본 기능을 이용할 수 있습니다.",
        "광고 제공, 측정, 보안 및 부정행위 방지를 위해 Google은 IP 주소, IP 주소로부터 파악한 대략적인 위치, 광고 조회·클릭 등의 앱 상호작용 데이터, 진단 정보, 기기 또는 기타 식별자 등을 처리할 수 있습니다.",
        "Android 출시 빌드는 최종 Release Manifest에 AD_ID 및 ACCESS_ADSERVICES_AD_ID 광고 식별자 권한이 포함되지 않도록 설정되어 있습니다.",
        "아동 사용자와 관련된 광고 요청에는 Google Play 가족 정책에 따라 필요한 경우 아동 대상 처리, 연령 관련 동의 설정, 전체이용가 광고 콘텐츠 및 개인 맞춤이 아닌 광고 설정을 적용합니다.",
      ],
    },
    {
      title: "4. 음성 인식 서비스",
      paragraphs: [
        "Android 기기에서 말해봐! 영단어 구조대는 기기에 설치되거나 설정된 음성 인식 서비스를 사용할 수 있습니다. 서비스 제공업체, 기기 설정 및 네트워크 상태에 따라 음성 입력이 외부 서버에서 처리될 수 있습니다.",
        "JOYgle Studio는 자체 서버에 음성 녹음이나 음성 인식 결과 텍스트를 저장하지 않습니다.",
        "제3자 음성 인식 서비스가 처리하는 정보에는 해당 서비스 제공업체의 개인정보처리방침이 적용될 수 있습니다.",
      ],
    },
    {
      title: "5. 보관 및 삭제",
      paragraphs: [
        "JOYgle Studio는 자체 서버에 사용자의 음성 녹음이나 음성 인식 결과를 보관하지 않습니다.",
        "게임 진행도, 코인, 스킨 및 설정은 사용자의 기기에 저장되며 앱을 삭제하면 제거될 수 있습니다.",
        "Google Mobile Ads, 음성 인식 제공업체 및 앱스토어 등의 제3자 서비스가 처리하는 정보는 각 제공업체의 정책에 따라 보관 및 삭제됩니다.",
      ],
    },
    {
      title: "6. 제3자 서비스 및 정보 제공",
      paragraphs: [
        "JOYgle Studio는 사용자의 개인정보를 판매하지 않습니다.",
        "앱 기능 제공을 위해 Google Mobile Ads, 기기의 음성 인식 서비스 및 Google Play 등의 제3자 서비스를 사용할 수 있습니다. 이러한 제공업체는 본 방침에 설명된 정보를 처리할 수 있습니다.",
        "제3자 서비스의 정보 처리에는 각 제공업체의 개인정보처리방침과 약관이 적용될 수 있습니다.",
      ],
    },
    {
      title: "7. 아동 개인정보 보호",
      paragraphs: [
        "말해봐! 영단어 구조대는 어린이를 포함한 사용자를 대상으로 할 수 있습니다. 앱은 게임 이용을 위해 아동에게 계정 생성이나 이름, 이메일 주소, 전화번호 등의 계정 정보 제공을 요구하지 않습니다.",
        "아동과 관련된 광고 요청에는 필요한 경우 아동 대상 및 개인 맞춤이 아닌 광고 보호 설정을 적용합니다.",
        "음성 입력은 발음 인식 기능 제공에만 사용됩니다. JOYgle Studio는 자체 서버에 아동의 음성 녹음이나 음성 인식 결과를 저장하지 않습니다.",
        "부모 또는 보호자는 아래 이메일을 통해 아동 개인정보에 관한 문의나 요청을 할 수 있습니다.",
      ],
    },
    {
      title: "8. 사용자의 선택 및 권리",
      paragraphs: ["사용자는 다음과 같은 선택을 할 수 있습니다."],
      bullets: [
        "마이크 권한을 허용 또는 거부하고 기기 설정에서 언제든 변경",
        "선택형 보상 광고 시청 여부 선택",
        "앱 삭제를 통한 기기 내 게임 데이터 제거",
        "개인정보 관련 문의 또는 요청 제출",
      ],
    },
    {
      title: "9. 문의처",
      paragraphs: [
        "본 개인정보처리방침 또는 정보 처리에 관한 문의와 요청은 이메일로 보내주시기 바랍니다.",
      ],
      email: EMAIL,
    },
    {
      title: "10. 방침 변경",
      paragraphs: [
        "법률, 정책 또는 앱 기능 변경에 따라 본 개인정보처리방침을 개정할 수 있습니다. 중요한 변경 사항은 위의 최종 개정일에 반영하며 필요한 경우 앱 또는 웹사이트를 통해 안내합니다.",
      ],
    },
  ],
};

export const speakFallEnglish: PrivacyPolicy = {
  language: "en",
  backLabel: "← Back to privacy policies",
  title: "SpeakFall Privacy Policy",
  effectiveDate: "Last updated: August 17, 2026",
  introduction:
    "SpeakFall is an English learning game designed to be used safely by users, including children. This policy explains the information used by the app and how third-party services may process information.",
  sections: [
    {
      title: "1. Information used by the app",
      paragraphs: ["The app may use the following information to provide its features:"],
      bullets: [
        "Voice (microphone) data: Used during gameplay to recognize English word pronunciation. Voice input is processed by the speech recognition service configured on the user's device. Depending on the service provider and device settings, voice data may be transmitted to and processed on the service provider's servers. JOYgle Studio does not collect or store users' voice recordings on its own servers.",
        "Speech recognition results: Recognized text is used for pronunciation evaluation and in-game feedback. JOYgle Studio does not store recognized text on its own servers.",
        "Device storage: Game progress, coins, unlocked skins, and settings are stored locally on the device using localStorage and are not uploaded to JOYgle Studio servers.",
        "Account information: The app does not require registration or sign-in and does not require names, email addresses, birth dates, or similar account information to play.",
      ],
    },
    {
      title: "2. Purposes",
      paragraphs: [],
      bullets: [
        "Provide an English pronunciation learning game using speech recognition",
        "Provide pronunciation evaluation and in-game feedback",
        "Save game progress, rewards, and user settings",
        "Provide optional rewarded advertisements",
        "Support service reliability, security, and error diagnosis",
      ],
    },
    {
      title: "3. Advertising and Google Mobile Ads",
      paragraphs: [
        "SpeakFall uses Google Mobile Ads (AdMob) to provide optional rewarded advertisements. Watching an advertisement is the user's choice, and the app's basic functionality can be used without watching rewarded ads.",
        "For ad delivery, measurement, security, and fraud prevention, Google may process information such as IP address, approximate location derived from IP address, app interaction data such as ad views and clicks, diagnostic information, and device or other identifiers.",
        "The Android release build is configured so that the AD_ID and ACCESS_ADSERVICES_AD_ID advertising identifier permissions are not included in the final Release Manifest.",
        "For advertising requests involving child users, the app applies child-directed treatment, age-related consent settings, General-rated ad content, and non-personalized advertising settings as applicable under Google Play Families requirements.",
      ],
    },
    {
      title: "4. Speech recognition services",
      paragraphs: [
        "On Android devices, SpeakFall may use the speech recognition service installed or configured on the device. Depending on the service provider, device settings, and network conditions, voice input may be processed on external servers.",
        "JOYgle Studio does not store voice recordings on its own servers and does not store speech recognition result text on its own servers.",
        "Information processed by a third-party speech recognition service may be subject to that service provider's privacy policy.",
      ],
    },
    {
      title: "5. Retention and deletion",
      paragraphs: [
        "JOYgle Studio does not retain users' voice recordings or speech recognition results on its own servers.",
        "Game progress, coins, skins, and settings are stored locally on the user's device and may be removed when the app is uninstalled.",
        "Information processed by third-party services such as Google Mobile Ads, speech recognition providers, and app stores is retained and deleted according to the policies of those providers.",
      ],
    },
    {
      title: "6. Third-party services and sharing",
      paragraphs: [
        "JOYgle Studio does not sell users' personal information.",
        "The app may use third-party services including Google Mobile Ads, the device's speech recognition service, and Google Play to provide app functionality. These providers may process information as described in this policy.",
        "The processing of information by third-party services may be governed by their respective privacy policies and terms.",
      ],
    },
    {
      title: "7. Children's privacy",
      paragraphs: [
        "SpeakFall may be directed to users including children. The app does not require children to create an account or provide a name, email address, phone number, or similar account information to play.",
        "Advertising requests involving children are configured with child-directed and non-personalized advertising protections as applicable.",
        "Voice input is used only to provide pronunciation recognition features. JOYgle Studio does not store children's voice recordings or speech recognition results on its own servers.",
        "Parents or guardians may contact us using the email address below with questions or requests concerning children's privacy.",
      ],
    },
    {
      title: "8. User choices and rights",
      paragraphs: ["Users have the following choices:"],
      bullets: [
        "Allow or deny microphone permission and change it at any time in device settings",
        "Choose whether to watch optional rewarded advertisements",
        "Remove locally stored game data by uninstalling the app",
        "Contact us with privacy-related questions or requests",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        "For questions or requests regarding this privacy policy or the handling of information, contact us by email.",
      ],
      email: EMAIL,
    },
    {
      title: "10. Changes to this policy",
      paragraphs: [
        "We may update this privacy policy when laws, policies, or app features change. Material changes will be reflected in the last updated date above and, where appropriate, announced in the app or on the website.",
      ],
    },
  ],
};
