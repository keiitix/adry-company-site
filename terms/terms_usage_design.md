# 会社サイト利用規約 使用設計

- 実装担当AI: Codex / 日付時間: 2026-09-10 JST / 変更箇所: `terms/index.html`, `update_legal.js` / 変更理由: AdryアプリとWebのContext条項を会社サイトの公開規約にも同一内容で反映するため / 変更内容: 改定日とContext機能・AI生成内容の条項を追加し、生成元の`update_legal.js`と生成済みHTMLを一致させた / 補足: 他の法務ページとスタイルは変更しない。公開には会社サイトのデプロイが必要。
- 検証結果: `node --check update_legal.js`、生成元テンプレートと`terms/index.html`本文の正規化比較、`git diff --check`がすべて成功。公開サイトの実ブラウザ表示はデプロイ前のため未検証。
