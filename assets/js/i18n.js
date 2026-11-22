/* 📘 使用設計: /Users/kent/Adry_Project/adry-company-site/commerce/commerce_usage_design.md */
(function () {
  'use strict';

  var translations = {
    ja: {
      siteTitleSuffix: " | Ａｕｄｒｅｙ合同会社",
      navHome: "ホーム",
      navAdry: "Adry",
      navTerms: "利用規約",
      navGuidelines: "ガイドライン",
      navPrivacy: "プライバシーポリシー",
      navDataAi: "データ・AI",
      navCommerce: "特定商取引法に基づく表記",
      navSupport: "問い合わせ",
      footerCopyright: "© 2025 Ａｕｄｒｅｙ合同会社. All rights reserved.",

      // 特定商取引法に基づく表記
      commercePageTitle: "特定商取引法に基づく表記",
      commerceSellerNameLabel: "販売事業者名",
      commerceSellerNameValue: "Ａｕｄｒｅｙ合同会社",
      commerceRepLabel: "代表者名 または 通信販売に関する業務責任者名",
      commerceRepValue: "中村研斗",
      commerceAddressLabel: "所在地",
      commerceAddressValue: "大阪府吹田市山手町3−9−13-207",
      commercePhoneLabel: "電話番号",
      commercePhoneValue: "請求があった場合、遅滞なく開示します。（アプリ内お問い合わせフォームまたはメールよりご請求ください）",
      commerceContactLabel: "お問い合わせ先",
      commerceContactValue: 'お問い合わせフォームまたはメールにてご連絡ください。<br>フォームURL：<a href="/support/">https://adry.jp/support/</a><br>メール：support@adry.jp',
      commerceProductLabel: "販売商品・サービス",
      commerceProductValue: "Adry内で提供するデジタルサービス「Compass Plus」",
      commercePriceLabel: "販売価格",
      commercePriceValue: "アプリ内またはApp Storeの購入画面に表示される金額に準じます。",
      commerceAdditionalFeesLabel: "商品代金以外の必要料金",
      commerceAdditionalFeesValue: "インターネット接続に必要な通信料等は、お客様のご負担となります。",
      commercePaymentMethodLabel: "支払方法",
      commercePaymentMethodValue: "Apple Inc.（App Store）が提供する決済手段（StoreKit）",
      commercePaymentTimingLabel: "支払時期",
      commercePaymentTimingValue: "初回は申込時に課金されます。<br>以後は契約開始日を基準として、1か月ごとに自動的に課金されます。<br>実際の引落日は、ご利用の決済手段またはカード会社の定めによります。",
      commerceServiceStartLabel: "サービス利用開始時期",
      commerceServiceStartValue: "決済完了後、直ちにご利用いただけます。",
      commerceReturnCancelLabel: "返品・キャンセル・解約に関する事項",
      commerceReturnCancelValue: "デジタルサービスの性質上、当社の責めに帰すべき不具合その他法令上返金が必要となる場合を除き、決済完了後の返品および返金には原則として応じておりません。<br>定期購入の解約は、次回の自動更新が行われる時間の24時間前までに、Apple IDのアカウント設定から自動更新をオフにすることで行ってください。<br>次回更新日前までに解約手続が完了している場合、次回以降の自動課金は行われません。",
      commerceRecurringBillingLabel: "継続課金について",
      commerceRecurringBillingValue: "Compass Plusは月額770円（税込）の継続課金サービスです。<br>契約は1か月ごとに自動更新され、次回更新日前までに解約しない限り同一条件で更新されます。",
      commerceOperatingEnvLabel: "動作環境",
      commerceOperatingEnvValue: "AdryのiOSアプリ上で提供するデジタルサービスとしてご利用いただけます。<br>推奨環境の詳細は、アプリストア表示または当社が別途定める案内をご確認ください。",
      commerceSpecialTermsLabel: "特別な販売条件",
      commerceSpecialTermsValue: "未成年の方は、法定代理人の同意を得たうえでお申し込みください。",

      // ホーム
      heroTitle1: "強く、楽しく",
      heroSubtitle1: "Adryは人生を通して、夢中を提供します",
      heroSlide2: "穏やかに興味にふれる",
      heroSlide3: "他の興味も探せる",
      heroSlide4: "興味が共有される",
      companyTitle: "会社概要",
      companyNameLabel: "社名",
      companyNameValue: "Ａｕｄｒｅｙ合同会社",
      companyLocationLabel: "所在地",
      companyLocationValue: "大阪府吹田市山手町3−9−13-207",
      companyFoundedLabel: "設立",
      companyFoundedValue: "2024年4月17日",
      companyRepLabel: "代表",
      companyRepValue: "中村研斗",
      companyBizLabel: "事業内容",
      companyBizValue: "モバイルアプリケーションの企画・開発・運営",

      // 問い合わせ
      supportPageTitle: "問い合わせ",
      supportPageLead: "サービスに関するご質問やご要望は、下記フォームよりお送りください。",
      supportNameLabel: "お名前",
      supportNamePlaceholder: "例：山田 太郎",
      supportEmailLabel: "メールアドレス",
      supportEmailPlaceholder: "例：name@example.com",
      supportCategoryLabel: "お問い合わせ項目",
      supportCategoryOptionDefault: "選択してください",
      supportCategoryOption1: "サービスについて",
      supportCategoryOption2: "不具合・障害の報告",
      supportCategoryOption3: "ご意見・ご要望",
      supportCategoryOption4: "取材・協業・その他",
      supportContentLabel: "お問い合わせ内容",
      supportContentPlaceholder: "お問い合わせ内容を詳しくご記入ください",
      supportSubmitBtn: "送信する",
      thanksTitle: "送信が完了しました",
      thanksMessage: "お問い合わせいただき、ありがとうございます。<br>内容を確認のうえ、担当者よりご連絡いたします。",
      thanksBackHome: "トップページへ戻る"
    },

    en: {
      siteTitleSuffix: " | Audrey LLC",
      navHome: "Home",
      navAdry: "Adry",
      navTerms: "Terms",
      navGuidelines: "Guidelines",
      navPrivacy: "Privacy",
      navDataAi: "Data & AI",
      navCommerce: "Legal Notice",
      navSupport: "Support",
      footerCopyright: "© 2025 Audrey LLC. All rights reserved.",

      // Specified Commercial Transactions Act
      commercePageTitle: "Legal Notice (Specified Commercial Transactions Act)",
      commerceSellerNameLabel: "Distributor / Seller Name",
      commerceSellerNameValue: "Audrey LLC",
      commerceRepLabel: "Representative / Operation Manager",
      commerceRepValue: "Kento Nakamura",
      commerceAddressLabel: "Address",
      commerceAddressValue: "3-9-13-207 Yamate-cho, Suita-shi, Osaka 565-0845, Japan",
      commercePhoneLabel: "Phone Number",
      commercePhoneValue: "Will be disclosed promptly without delay upon request. (Please request via the in-app inquiry form or email)",
      commerceContactLabel: "Contact Information",
      commerceContactValue: 'Please contact us via the inquiry form or email.<br>Form URL: <a href="/support/">https://adry.jp/support/</a><br>Email: support@adry.jp',
      commerceProductLabel: "Products / Services",
      commerceProductValue: 'Digital service "Compass Plus" provided within Adry',
      commercePriceLabel: "Sales Price",
      commercePriceValue: "As indicated within the app or on the App Store purchase screen.",
      commerceAdditionalFeesLabel: "Additional Fees",
      commerceAdditionalFeesValue: "Internet connection fees, telecommunication fees, etc. are to be borne by the customer.",
      commercePaymentMethodLabel: "Payment Methods",
      commercePaymentMethodValue: "Payment methods provided by Apple Inc. (App Store) via StoreKit",
      commercePaymentTimingLabel: "Payment Timing",
      commercePaymentTimingValue: "Billed immediately upon initial purchase.<br>Subsequent renewals are billed automatically every month based on the contract start date.<br>Actual withdrawal dates depend on your payment method or credit card company.",
      commerceServiceStartLabel: "Service Commencement",
      commerceServiceStartValue: "Immediately available upon completion of payment.",
      commerceReturnCancelLabel: "Returns, Cancellations, and Terminations",
      commerceReturnCancelValue: "Due to the nature of digital services, returns or refunds are generally not accepted once payment is complete, except in cases of defect attributable to our company or where required by law.<br>To cancel subscription renewal, please turn off auto-renewal in your Apple ID account settings at least 24 hours before the next scheduled renewal time.<br>If cancellation is completed prior to the renewal date, no subsequent charges will occur.",
      commerceRecurringBillingLabel: "About Recurring Billing",
      commerceRecurringBillingValue: "Compass Plus is a recurring subscription service at ¥770/month (tax included).<br>The contract automatically renews monthly under the same terms unless cancelled prior to the renewal date.",
      commerceOperatingEnvLabel: "Operating Environment",
      commerceOperatingEnvValue: "Available as a digital service provided on the Adry iOS application.<br>Please refer to the App Store listing or our notices for recommended environment details.",
      commerceSpecialTermsLabel: "Special Sales Conditions",
      commerceSpecialTermsValue: "Minors must obtain the consent of a parent or legal guardian before purchasing.",

      // Home
      heroTitle1: "Strong and Joyful",
      heroSubtitle1: "Adry provides genuine fascination throughout life",
      heroSlide2: "Gently explore interests",
      heroSlide3: "Discover other perspectives",
      heroSlide4: "Share interests together",
      companyTitle: "Company Overview",
      companyNameLabel: "Company Name",
      companyNameValue: "Audrey LLC",
      companyLocationLabel: "Location",
      companyLocationValue: "3-9-13-207 Yamate-cho, Suita-shi, Osaka, Japan",
      companyFoundedLabel: "Founded",
      companyFoundedValue: "April 17, 2024",
      companyRepLabel: "Representative",
      companyRepValue: "Kento Nakamura",
      companyBizLabel: "Business",
      companyBizValue: "Planning, development, and operation of mobile applications",

      // Support
      supportPageTitle: "Support",
      supportPageLead: "Please submit your questions or requests regarding our service using the form below.",
      supportNameLabel: "Name",
      supportNamePlaceholder: "e.g., Jane Doe",
      supportEmailLabel: "Email Address",
      supportEmailPlaceholder: "e.g., name@example.com",
      supportCategoryLabel: "Inquiry Category",
      supportCategoryOptionDefault: "Please select",
      supportCategoryOption1: "About the service",
      supportCategoryOption2: "Bug / issue report",
      supportCategoryOption3: "Feedback / feature request",
      supportCategoryOption4: "Press / partnership / other",
      supportContentLabel: "Inquiry Details",
      supportContentPlaceholder: "Please enter your message in detail",
      supportSubmitBtn: "Submit",
      thanksTitle: "Message Sent",
      thanksMessage: "Thank you for contacting us.<br>We will review your inquiry and get back to you shortly.",
      thanksBackHome: "Back to Home"
    },

    ko: {
      siteTitleSuffix: " | 오드리 합동회사",
      navHome: "홈",
      navAdry: "Adry",
      navTerms: "이용약관",
      navGuidelines: "가이드라인",
      navPrivacy: "개인정보처리방침",
      navDataAi: "데이터・AI",
      navCommerce: "특정상거래법 표기",
      navSupport: "문의",
      footerCopyright: "© 2025 Audrey LLC. All rights reserved.",

      // 특정상거래법 표기
      commercePageTitle: "특정상거래법에 따른 표기",
      commerceSellerNameLabel: "판매 사업자명",
      commerceSellerNameValue: "오드리 합동회사 (Audrey LLC)",
      commerceRepLabel: "대표자명 또는 업무책임자",
      commerceRepValue: "나카무라 켄토",
      commerceAddressLabel: "소재지",
      commerceAddressValue: "일본 오사카부 스이타시 야마테초 3-9-13-207",
      commercePhoneLabel: "전화번호",
      commercePhoneValue: "청구가 있을 경우 지체 없이 공개합니다. (앱 내 문의 양식 또는 이메일로 요청해 주십시오)",
      commerceContactLabel: "문의처",
      commerceContactValue: '문의 양식 또는 이메일로 연락해 주십시오.<br>양식 URL: <a href="/support/">https://adry.jp/support/</a><br>이메일: support@adry.jp',
      commerceProductLabel: "판매 상품 및 서비스",
      commerceProductValue: "Adry 내에서 제공하는 디지털 서비스 'Compass Plus'",
      commercePriceLabel: "판매 가격",
      commercePriceValue: "앱 내 또는 App Store 구매 화면에 표시된 금액에 따릅니다.",
      commerceAdditionalFeesLabel: "상품 대금 외 필요 요금",
      commerceAdditionalFeesValue: "인터넷 접속 등에 필요한 통신 요금 등은 고객 부담입니다.",
      commercePaymentMethodLabel: "결제 방법",
      commercePaymentMethodValue: "Apple Inc.(App Store)가 제공하는 결제 수단 (StoreKit)",
      commercePaymentTimingLabel: "결제 시기",
      commercePaymentTimingValue: "최초 신청 시 즉시 결제됩니다.<br>이후 계약 시작일을 기준으로 1개월마다 자동 결제됩니다.<br>실제 출금일은 이용하시는 결제 수단 또는 카드사의 규정에 따릅니다.",
      commerceServiceStartLabel: "서비스 이용 개시 시기",
      commerceServiceStartValue: "결제 완료 후 즉시 이용 가능합니다.",
      commerceReturnCancelLabel: "반품·취소·해지에 관한 사항",
      commerceReturnCancelValue: "디지털 서비스의 특성상 당사의 귀책사유로 인한 결함이나 관련 법령상 환불이 요구되는 경우를 제외하고는 결제 완료 후 반품 및 환불이 불가능합니다.<br>정기 결제 해지는 다음 자동 갱신 시간 최소 24시간 전까지 Apple ID 계정 설정에서 자동 갱신을 해제해 주십시오.<br>다음 갱신일 전에 해지 절차가 완료되면 다음 회차부터는 요금이 청구되지 않습니다.",
      commerceRecurringBillingLabel: "정기 결제에 관하여",
      commerceRecurringBillingValue: "Compass Plus는 월 770엔(세금 포함)의 정기 결제 서비스입니다.<br>계약은 1개월마다 자동 갱신되며, 다음 갱신일 전에 해지하지 않는 한 동일한 조건으로 갱신됩니다.",
      commerceOperatingEnvLabel: "동작 환경",
      commerceOperatingEnvValue: "Adry의 iOS 앱에서 제공하는 디지털 서비스로 이용하실 수 있습니다.<br>권장 환경의 자세한 내용은 앱스토어 표시 또는 당사가 별도로 정하는 안내를 확인해 주십시오.",
      commerceSpecialTermsLabel: "특별 판매 조건",
      commerceSpecialTermsValue: "미성년자는 법정대리인의 동의를 얻은 후 신청해 주십시오.",

      // 홈
      heroTitle1: "강하고 즐겁게",
      heroSubtitle1: "Adry는 인생을 통해 진정한 몰입을 제공합니다",
      heroSlide2: "차분하게 관심사를 마주하다",
      heroSlide3: "다른 시선도 탐색하다",
      heroSlide4: "관심사를 함께 공유하다",
      companyTitle: "회사 개요",
      companyNameLabel: "회사명",
      companyNameValue: "오드리 합동회사 (Audrey LLC)",
      companyLocationLabel: "소재지",
      companyLocationValue: "일본 오사카부 스이타시 야마테초 3-9-13-207",
      companyFoundedLabel: "설립",
      companyFoundedValue: "2024년 4월 17일",
      companyRepLabel: "대표",
      companyRepValue: "나카무라 켄토",
      companyBizLabel: "사업 내용",
      companyBizValue: "모바일 애플리케이션 기획·개발·운영",

      // 문의
      supportPageTitle: "문의",
      supportPageLead: "서비스에 대한 질문이나 요청 사항은 아래 양식을 통해 보내주십시오.",
      supportNameLabel: "성명",
      supportNamePlaceholder: "예: 홍길동",
      supportEmailLabel: "이메일 주소",
      supportEmailPlaceholder: "예: name@example.com",
      supportCategoryLabel: "문의 항목",
      supportCategoryOptionDefault: "선택해 주십시오",
      supportCategoryOption1: "서비스 관련",
      supportCategoryOption2: "오류 및 장애 신고",
      supportCategoryOption3: "의견 및 제안",
      supportCategoryOption4: "취재 및 제휴, 기타",
      supportContentLabel: "문의 내용",
      supportContentPlaceholder: "문의 내용을 상세히 작성해 주십시오",
      supportSubmitBtn: "보내기",
      thanksTitle: "전송이 완료되었습니다",
      thanksMessage: "문의해 주셔서 감사합니다.<br>내용 확인 후 담당자가 신속히 연락드리겠습니다.",
      thanksBackHome: "홈으로 돌아가기"
    }
  };

  function getSavedLanguage() {
    var params = new URLSearchParams(window.location.search);
    var langParam = params.get('lang');
    if (langParam && (langParam === 'ja' || langParam === 'en' || langParam === 'ko')) {
      return langParam;
    }
    var stored = localStorage.getItem('adry_company_lang');
    if (stored && (stored === 'ja' || stored === 'en' || stored === 'ko')) {
      return stored;
    }
    var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (navLang.indexOf('ko') === 0) return 'ko';
    if (navLang.indexOf('ja') === 0) return 'ja';
    return 'en';
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'ja';
    localStorage.setItem('adry_company_lang', lang);
    document.documentElement.lang = lang;

    var dict = translations[lang];

    // data-i18n テキスト置換
    var textElements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textElements.length; i++) {
      var el = textElements[i];
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    }

    // data-i18n-html HTML置換
    var htmlElements = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlElements.length; j++) {
      var hEl = htmlElements[j];
      var hKey = hEl.getAttribute('data-i18n-html');
      if (dict[hKey] !== undefined) {
        hEl.innerHTML = dict[hKey];
      }
    }

    // data-i18n-placeholder プレースホルダー置換
    var phElements = document.querySelectorAll('[data-i18n-placeholder]');
    for (var k = 0; k < phElements.length; k++) {
      var pEl = phElements[k];
      var pKey = pEl.getAttribute('data-i18n-placeholder');
      if (dict[pKey] !== undefined) {
        pEl.placeholder = dict[pKey];
      }
    }

    // 言語ボタンのアクティブ状態更新
    var langButtons = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < langButtons.length; b++) {
      var btn = langButtons[b];
      if (btn.getAttribute('data-lang-target') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    }

    // URL更新（リロードなし）
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {}

    // カスタムリスナー呼出
    if (typeof window.onAdryLanguageChange === 'function') {
      window.onAdryLanguageChange(lang, dict);
    }
  }

  function setupLanguageSwitcher() {
    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetLang = this.getAttribute('data-lang-target');
        applyLanguage(targetLang);
      });
    }
  }

  function setupThemeToggle() {
    var params = new URLSearchParams(window.location.search);
    var themeParam = params.get('theme');
    if (themeParam === 'light' || themeParam === 'dark') {
      document.documentElement.setAttribute('data-theme', themeParam);
      localStorage.setItem('adry_company_theme', themeParam);
    } else {
      var savedTheme = localStorage.getItem('adry_company_theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }

    var toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    for (var i = 0; i < toggleButtons.length; i++) {
      toggleButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute('data-theme');
        var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
        var next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('adry_company_theme', next);
      });
    }
  }

  // 初期化
  document.addEventListener('DOMContentLoaded', function () {
    setupLanguageSwitcher();
    setupThemeToggle();
    var currentLang = getSavedLanguage();
    applyLanguage(currentLang);
  });

  window.adryI18n = {
    setLanguage: applyLanguage,
    getLanguage: getSavedLanguage,
    translations: translations
  };
})();
