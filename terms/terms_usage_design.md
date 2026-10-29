# 会社サイト利用規約 使用設計

- 実装担当AI: Codex / 日付時間: 2026-09-10 JST / 変更箇所: `terms/index.html`, `update_legal.js` / 変更理由: AdryアプリとWebのContext条項を会社サイトの公開規約にも同一内容で反映するため / 変更内容: 改定日とContext機能・AI生成内容の条項を追加し、生成元の`update_legal.js`と生成済みHTMLを一致させた / 補足: 他の法務ページとスタイルは変更しない。公開には会社サイトのデプロイが必要。
- 検証結果: `node --check update_legal.js`、生成元テンプレートと`terms/index.html`本文の正規化比較、`git diff --check`がすべて成功。公開サイトの実ブラウザ表示はデプロイ前のため未検証。

## 2026-10-09 📜 現行機能に合わせ一般規約を同期

実装担当AI: Codex / 日付時間: 2026-10-09 JST / 変更箇所: `terms/index.html`、生成元`update_legal.js`のtermsHtmlだけ / 変更理由: Web／iOSと規約を揃え、旧Context説明と新機能の説明不足を解消するため / 変更内容: 改定日2026-10-09・共通12条を同期 / 補足: 調査・権利・データ境界の正本は `/Users/kent/Adry_Project/adry-web-app/app/terms/terms_usage_design.md`。他の法務ページ・色・ナビを変更しない。生成スクリプトは一時コピーだけで実行し、他のHTMLを上書きしない。構文・日本語本文一致・実生成HTML一致（空白除外）・差分検査成功。375px幅の会社規約表示を確認。会社サイトはmainへコミット／push。ホスティング完了と公開URLの新規約表示は別途確認。本番Firestore Read/Write 0、listenerなし、常駐再起動・バックフィル不要。


## 2026-10-24 📜 利用規約更新

実装担当AI: Codex / 日付時間: 2026-10-24 19:31 JST / 変更箇所: update_legal.jsのtermsHtml・terms/index.html / 変更理由: 本人依頼の三掲載面更新と配布後の再同意 / 変更内容: 第6・7・11条にB面を追加、改定日10/24。日本語本文をWeb/iOSと一致。他法務HTMLを再生成しない。node構文・一時実生成一致・375px表示を確認。今回はcommitのみ、push/公開なし / 補足: 調査・検証・互換性・未検証・公開手順は `/Users/kent/Adry_Project/adry-web-app/app/terms/terms_usage_design.md` の同日節を正本とする。追加listener・Read/Write・Rules/Functions/バックフィル不要。


実装担当AI: Codex / 日付時間: 2026-10-24 20:32 JST / 変更箇所: 規約第6条 / 変更理由: 追加B面実装の説明補完 / 変更内容: 第6条8・9項の日本語を生成元とHTMLへ同期。訂正・報告・外部AI照合・結果通知を明示 / 補足: 正本 `/Users/kent/Adry_Project/adry-web-app/app/terms/terms_usage_design.md` の同日「追加B面機能の照合」節。データ権限・同意保存処理は不変。


実装担当AI: Codex / 日付時間: 2026-10-24 20:48 JST / 変更箇所: 公開記録 / 変更理由: 本人の必要デプロイ指示 / 変更内容: 20ea399をmainへpushしhttps://adry.jp/terms/のHTTP直接取得で10/24改定日と訂正条項を確認 / 補足: 他の法務HTML変更なし。iOSの同版は4.3.8(19)upload成功。法務専門家レビューは未実施。


## 2026-10-29 📜 機能調査に基づく利用規約の更新

実装担当AI: Codex / 日付時間: 2026-10-29 JST / 変更箇所: 同階層の今回対象ファイル / 変更理由: 現行表示名、Tokyo Twilight、memo in memoと規約の差を解消 / 変更内容: 日英韓の一般規約全12条を維持して本文・改定日・同意版を2026-10-29へ同期。Post/Account/Board/Adry IDと旧称の対応、夜間の表示制限と活動通知保留、語句・文脈の外部AI処理と公開/非公開メモを明記 / 補足: 横断調査・検証・反映・未検証事項の正本は `/Users/kent/Adry_Project/adry-web-app/app/terms/terms_usage_design.md` の同日節。既存の再同意・保存/公開権限・基盤モデル非学習方針・料金/賠償条件は不変。本文I/O 0、旧版初回は既存最大1 Read、本人同意は既存merge 1 Write。listener・Functions/Rules/Index変更・バックフィル・Python常駐再起動不要。
