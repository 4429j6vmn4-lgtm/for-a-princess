import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const DATES = [
  { city: "Skopje", when: "14 Nov" },
  { city: "Belgrade", when: "29 Nov" },
  { city: "Sofia", when: "06 Dec" },
];

function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <section className="relative flex min-h-screen flex-col justify-end bg-bg">
        <img
          src="/iva-portrait.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
        <div className="relative px-6 pb-16 sm:px-12">
          <p className="mb-4 text-xs tracking-[0.35em] text-primary uppercase">Iva</p>
          <h1 className="font-display text-6xl leading-none sm:text-8xl">Zafirofska</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <ul>
          {DATES.map((date) => (
            <li key={date.city} className="flex justify-between border-t border-line py-5 text-lg">
              <span>{date.city}</span>
              <span className="text-muted">{date.when}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
