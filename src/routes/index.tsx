import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Students Club — Room 505, Tuesdays at Lunch" },
      {
        name: "description",
        content:
          "Organize events, solve everyday problems, and make school more fun. Drop in Room 505 on Tuesday lunch — anyone can join, no commitment required.",
      },
      { property: "og:title", content: "The Students Club — Make school better for everyone" },
      {
        property: "og:description",
        content:
          "Meet Tuesdays at lunch in Room 505. Events, ideas and fixes run by students, for students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const doings = [
  {
    title: "Organize events",
    body: "Spirit days, tournaments, scavenger hunts, business workshop — if it sounds fun, we plan it and pull it off together.",
  },
  {
    title: "Solve everyday problems",
    body: "No healthy food, long lunch queues, nowhere to sit. Bring the annoying stuff and we find solutions - we don't depend on other people.",
  },
  {
    title: "Make school more fun",
    body: "Small ideas count. Decorated hallways, recognizing awareness days, a corner that finally feels cozy.",
  },
];

const steps = [
  { n: "1", text: "Show up at Room 505 on Tuesday lunch. Bring a friend." },
  { n: "2", text: "Say one idea, one problem, or nothing at all. Listening is allowed." },
  { n: "3", text: "Help us with something you care about, or just come back next week." },
];

function Index() {
  return (
    <main className="paper min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-16">
        <div
          className="stripe-circle float-slow pointer-events-none absolute -left-24 -top-24 size-72 opacity-60"
          aria-hidden
        />
        <div className="relative">
          <img
            src={logo.url}
            alt="The Students Club logo"
            className="drop-in float-slow mx-auto w-full max-w-2xl"
          />

          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-xl text-center text-xl sm:text-2xl">
              Organize events, solve everyday problems, and find new ways to make school more fun.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#join"
                className="ink-border pop-shadow rounded-full bg-primary px-8 py-3 font-display text-lg font-extrabold text-primary-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-ink)] active:translate-y-0"
              >
                Drop in this Tuesday
              </a>
              <a
                href="#what-we-do"
                className="ink-border pop-shadow-sky rounded-full bg-card px-8 py-3 font-display text-lg font-extrabold transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-sky)] active:translate-y-0"
              >
                See what we do
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Band */}
      <section className="ink-border marquee-band border-x-0 bg-accent py-4">
        <p className="text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          Make school better for everyone!
        </p>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl">What happens in the room</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {doings.map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <article className="ink-border pop-shadow h-full rounded-3xl bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0_var(--color-ink)]">
                <h3 className="text-2xl">{d.title}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Students Hub */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <Reveal>
          <a
            href="https://the-students-hub-isgj.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="ink-border pop-shadow-sky group flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-secondary p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[10px_10px_0_var(--color-sky)]"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl">The Students Hub</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                We take notes and plan everything here.
              </p>
            </div>
            <span className="font-display text-lg font-extrabold transition-transform duration-300 group-hover:translate-x-1.5">
              Open the Hub →
            </span>
          </a>
        </Reveal>
      </section>

      {/* How to join */}
      <section id="join" className="mx-auto max-w-4xl px-5 pb-16">
        <Reveal>
          <div className="ink-border pop-shadow-sky relative rounded-[2rem] bg-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl">How to join</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Anyone can join or drop in anytime, no commitment required.
            </p>
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                  <li className="group flex list-none items-start gap-4">
                    <span className="ink-border grid size-11 shrink-0 place-items-center rounded-full bg-accent font-display text-xl font-extrabold transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {s.n}
                    </span>
                    <span className="pt-1.5 text-lg">{s.text}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="ink-border rounded-2xl bg-secondary p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-sm font-extrabold uppercase tracking-wide">Where</p>
                <p className="text-2xl">Room 505 (Ms. El Mir's room)</p>
              </div>
              <div className="ink-border rounded-2xl bg-secondary p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-sm font-extrabold uppercase tracking-wide">When</p>
                <p className="text-2xl">Tuesdays, lunchtime (11:05 - 11:20)</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="ink-border border-x-0 border-b-0 bg-card py-8">
        <p className="text-center text-lg">
          The Students Club · Room 505 · Tuesday lunch · Everyone welcome
        </p>
      </footer>
    </main>
  );
}
