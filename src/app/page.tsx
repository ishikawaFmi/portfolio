import Image from "next/image";
import { WORKS } from "@/lib/works";

const SERVICES = [
  {
    title: "AI組み込み開発",
    desc: "RAG・チャットボット・レポート自動生成など、Claude APIを使った機能を既存・新規のWebアプリに組み込みます。",
  },
  {
    title: "業務自動化ツール",
    desc: "CSV集計・定型レポート作成・データ整形など、毎月の手作業をWebツール化して自動化します。",
  },
  {
    title: "Webアプリ開発",
    desc: "Next.js + TypeScriptでの小規模Webアプリ・社内ツール・LPの設計から公開までを一貫して対応します。",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20">
      <section className="py-16 text-center">
        <p className="text-sm font-medium text-blue-600">AI組み込み・業務自動化のWeb開発</p>
        <h1 className="mt-2 text-3xl font-bold leading-snug sm:text-4xl">
          「AIで何ができるか」を、
          <br className="sm:hidden" />
          動くデモでお見せします。
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          Web開発の実務経験をベースに、Claude APIを組み込んだアプリと業務自動化ツールを開発しています。
          以下の3つのデモはすべて実際に触れます(APIキー不要のデモモード付き)。
        </p>
      </section>

      <section id="works">
        <h2 className="mb-6 text-xl font-bold">制作デモ</h2>
        <div className="space-y-8">
          {WORKS.map((work) => (
            <article
              key={work.slug}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <a href={work.demoUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={work.image}
                  alt={`${work.title}のスクリーンショット`}
                  width={1280}
                  height={800}
                  className="w-full border-b border-gray-100"
                />
              </a>
              <div className="p-6">
                <h3 className="text-lg font-bold">{work.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{work.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {work.points.map((p) => (
                    <li key={p}>・{p}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-400">{work.tech.join(" / ")}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={work.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    デモを試す
                  </a>
                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    コードを見る(GitHub)
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mt-16">
        <h2 className="mb-6 text-xl font-bold">対応できること</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-bold">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-1 text-sm text-gray-600">
          <li>・すべての納品物にユニットテスト・型チェック・コードレビューを実施</li>
          <li>・訪問者に費用が発生しない「デモモード」設計など、公開前提の安全設計が得意です</li>
          <li>・要件が固まっていない段階からの壁打ち・提案も歓迎です</li>
        </ul>
      </section>

      <section id="contact" className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
        <h2 className="text-xl font-bold">お問い合わせ</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
          お仕事のご相談は、下のお問い合わせフォームからお気軽にどうぞ。
          「こんなことはできる?」という段階のご相談も歓迎です。通常2営業日以内にメールでご返信します。
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="https://forms.gle/QHiJfezcPgqWX5eb6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            お問い合わせフォーム
          </a>
          <a
            href="https://github.com/ishikawaFmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
          >
            GitHub: ishikawaFmi
          </a>
        </div>
      </section>

      <footer className="mt-16 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
        © 2026 ishikawaFmi — このサイト自体もNext.jsで構築しています(
        <a href="https://github.com/ishikawaFmi/portfolio" className="underline">
          ソースコード
        </a>
        )
      </footer>
    </main>
  );
}
