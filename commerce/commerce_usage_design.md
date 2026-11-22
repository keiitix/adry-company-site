# 特定商取引法に基づく表記・会社サイトUI刷新 使用設計

- 実装担当AI: Gemini 3.8 Flash (Antigravity) / 日付時間: 2026-11-22 18:30 JST / 変更箇所: `commerce/index.html`, `index.html`, `terms/index.html`, `guidelines/index.html`, `privacy/index.html`, `data-ai/index.html`, `support/index.html`, `support/thanks.html`, `assets/css/style.css`, `assets/js/i18n.js`, `assets/icons/chop-wh.png`, `assets/icons/chop-bl.png` / 変更理由: 研斗さん指示「会社用のホームページのUIも今くらいシンプルにしたい。ここまでの実装のルールを守りながら全画面をチェックしてダークモードライトモード 三つの言語対応 英語はHelvetica 日本はヒラギノ」 / 変更内容:
1. フォントルール適用:
   - `font-family: Helvetica, "Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Apple SD Gothic Neo", sans-serif;` を適用。英語はHelvetica、日本語はヒラギノ。
   - 外部Google Fonts（Poppins）の読み込みを全ページから撤去。
2. 角丸禁止:
   - 全要素 `border-radius: 0 !important;` を徹底（ボタン、入力欄、カード、画像、モーダル等すべて直角）。
3. 太文字禁止:
   - 見出し（h1〜h6, .page-title, .hero-title, .commerce-term等）、ボタン、リンク、ラベル、テキストすべて細文字・レギュラー（`font-weight: 400`）へ統一。
4. ロゴ刷新:
   - 旧緑ロゴ（`greenLogo.png`）を全廃し、チョップロゴ（`chop-wh.png` mask によるベクター風描画 `.chop-logo`）へ変更。テーマ（ダーク/ライト）に応じた文字色（白/黒）で自動レンダリング。
5. ボタンと枠線のシンプル化:
   - カード（.legal-card, .form-card, .company-card）の外枠線・角丸・影を撤去し、背景同化（transparentまたはsurface）。
   - ボタン（.btn-primary, .adry-home-button, .adry-store-button等）の枠線を撤去し、背景同化またはフラットsurface、ホバーで薄く色が変わる（文字色は不変）フラットボタンへ変更。
6. ダークモード／ライトモード完全対応:
   - システム設定（`prefers-color-scheme: light/dark`）および手動属性（`[data-theme="light/dark"]`）、URLパラメータ（`?theme=light/dark`）に対応。
   - ダーク時: 背景 `#17181C`, surface `#1E1F24`, 文字 `#F7F7F8`。
   - ライト時: 背景 `#F7F7F8`, surface `#F0F1F3`, 文字 `#17181C`。
7. 3言語対応（日本語・英語・韓国語）:
   - `assets/js/i18n.js` による動的言語切り替え（URLクエリ `?lang=ja|en|ko`、`localStorage`、ブラウザ言語判定）を導入。
   - 全画面のヘッダー・フッターに言語切替UI（`日本語 / English / 한국어`）を設置。
   - 特定商取引法に基づく表記（`commerce/index.html`）の全15項目（販売事業者名、代表者、所在地、電話番号、連絡先、販売商品、価格、追加費用、支払方法、支払時期、利用開始時期、解約返品、継続課金、動作環境、特別条件）を3言語で完全翻訳表示。
   - ホーム・Adry紹介、問い合わせフォーム・完了画面も3言語対応。
8. ヘッダーナビ整理:
   - 研斗さん指示「これ非表示」に基づき、全画面のヘッダーナビゲーションから「特定商取引法に基づく表記」リンクを非表示化（削除）。フッターのリンクには残存。
/ 補足:
- 外部API/Firestore Read/Write: 0件（静的HTML/CSS/JS）。
- 互換性: 法務条文・記述内容および外部リンク・フォーム送信（web3forms）は完全維持。
- 検証結果:
  - ブラウザサブエージェントにて全条件の実機スクリーンショット取得・目視確認完了。
  - デスクトップ（1280×800 / 日本語）: `commerce_ja_desktop.png`
  - デスクトップ（1280×800 / English）: `commerce_en_desktop.png`
  - デスクトップ（1280×800 / 한국어）: `commerce_ko_desktop.png`
  - モバイル（390×844 / 日本語）: `commerce_ja_mobile.png`
  - デスクトップ（1280×800 / ライトモード）: `commerce_light_desktop.png`
  - デスクトップ（1280×800 / トップページ）: `home_desktop.png`
  - 全画面でチョップロゴ、Helvetica/ヒラギノフォント、細文字、角丸なし、枠線なし、言語切替が正常に動作することを確認。
