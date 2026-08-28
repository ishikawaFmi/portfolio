# ポートフォリオサイト

AI組み込み・業務自動化のWeb開発ポートフォリオ。3つの動くデモ(RAG・チャットウィジェット・ダッシュボード)への入口サイトです。

**公開URL:** https://aikobo.dev

## 掲載デモ

| デモ | 内容 |
|---|---|
| [ドキュメントQAボット](https://github.com/ishikawaFmi/ai-doc-qa) | PDF/テキストにAIが出典付きで回答(RAG) |
| [AIチャットウィジェット](https://github.com/ishikawaFmi/ai-chat-widget) | scriptタグ1行で設置できるAIサポート |
| [業務自動化ダッシュボード](https://github.com/ishikawaFmi/ai-report-dashboard) | CSV自動集計+AI月次レポート生成 |

## 技術構成

Next.js(App Router)+ TypeScript + Tailwind CSS。静的1ページ(APIなし)。スクリーンショットはPlaywrightで撮影。

## ローカルでの起動

```bash
npm install
npm run dev
```
