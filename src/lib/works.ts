export interface Work {
  slug: string;
  title: string;
  desc: string;
  points: string[];
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
}

export const WORKS: Work[] = [
  {
    slug: "ai-doc-qa",
    title: "ドキュメントQAボット",
    desc: "PDF・テキストをアップロードすると、AIが内容に基づいて出典付きで回答するRAGアプリ。",
    points: ["軽量RAG(ベクトルDB不要のバイグラム検索)", "出典チャンクID付き回答", "APIキー不要のデモモード搭載"],
    tech: ["Next.js", "TypeScript", "Claude API", "pdfjs-dist", "Vitest"],
    demoUrl: "https://ai-doc-qa-kappa.vercel.app",
    repoUrl: "https://github.com/ishikawaFmi/ai-doc-qa",
    image: "/shots/ai-doc-qa.png",
  },
  {
    slug: "ai-chat-widget",
    title: "埋め込み型AIチャットウィジェット",
    desc: "scriptタグ1行で任意のWebサイトに設置できるAIカスタマーサポート。架空ECサイトでの設置デモ付き。",
    points: ["設置はscriptタグ1行(iframe方式で非干渉)", "店舗情報に基づくマルチターン応答", "ホストページのCSS・JSに干渉しないiframe分離設計"],
    tech: ["Next.js", "TypeScript", "Claude API", "Vanilla JS", "Vitest"],
    demoUrl: "https://ai-chat-widget-xi.vercel.app",
    repoUrl: "https://github.com/ishikawaFmi/ai-chat-widget",
    image: "/shots/ai-chat-widget.png",
  },
  {
    slug: "ai-report-dashboard",
    title: "業務自動化ダッシュボード",
    desc: "売上CSVを自動集計してグラフ化し、AIが経営者向けの月次レポートを文章で生成。",
    points: ["CSV解析・集計の完全テスト", "集計サマリーのみ送信で低コスト・低リスク", "デモ数値はテストで実データと一致を担保"],
    tech: ["Next.js", "TypeScript", "Claude API", "Recharts", "Vitest"],
    demoUrl: "https://ai-report-dashboard-five.vercel.app",
    repoUrl: "https://github.com/ishikawaFmi/ai-report-dashboard",
    image: "/shots/ai-report-dashboard.png",
  },
];
