import { createFileRoute } from "@tanstack/react-router";
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

function Star({ top, bottom, children, className = "" }: { top?: string; bottom?: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`star-badge grid size-32 place-items-center bg-primary text-center leading-none text-background sm:size-40 ${className}`}
      style={{ top, bottom }}
    >
      {children}
    </div>
  );
}

const doings = [
  {
    title: "Organize events",
    body: "Spirit days, tournaments, movie nights, bake sales — if it sounds fun, we plan it and pull it off together.",
  },
  {
    title: "Solve everyday problems",
    body: "Broken lockers, long lunch queues, nowhere to sit. Bring the annoying stuff and we take it to the people who can fix it.",
  },
  {
    title: "Make school more fun",
    body: "Small ideas count. A new noticeboard, a study playlist, a corner that finally has beanbags in it.",
  },
];

const steps = [
  { n: "1", text: "Show up at Room 505 on Tuesday lunch. Bring your food." },
  { n: "2", text: "Say one idea, one problem, or nothing at all. Listening is allowed." },
  { n: "3", text: "Pick something you want to help with. Or just come back next week." },
];

function Index() {
  return (
    <main className="paper min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-16">
        <div className="stripe-circle pointer-events-none absolute -left-24 -top-24 size-72 opacity-60" aria-hidden />
        <div className="relative">
          <img
            src={logo.url}
            alt="The Students Club logo"
            className="mx-auto w-full max-w-2xl"
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <Star>
              <div>
                <div className="font-display text-xl font-extrabold sm:text-2xl">ROOM</div>
                <div className="font-display text-4xl font-extrabold sm:text-5xl">505</div>
              </div>
            </Star>
            <p className="max-w-md text-center text-xl sm:text-2xl">
              Organize events, solve everyday problems, and find new ways to make school more fun.
            </p>
            <Star>
              <div>
                <div className="font-display text-4xl font-extrabold sm:text-5xl">TUE</div>
                <div className="font-display text-xl font-extrabold sm:text-2xl">LUNCH</div>
              </div>
            </Star>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#join"
              className="ink-border pop-shadow rounded-full bg-primary px-8 py-3 font-display text-lg font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Drop in this Tuesday
            </a>
            <a
              href="#what-we-do"
              className="ink-border pop-shadow-sky rounded-full bg-card px-8 py-3 font-display text-lg font-extrabold transition-transform hover:-translate-y-0.5"
            >
              See what we do
            </a>
          </div>
        </div>
      </section>

      {/* Band */}
      <section className="ink-border border-x-0 bg-accent py-4">
        <p className="text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          Make school better for everyone!
        </p>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl sm:text-4xl">What happens in the room</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {doings.map((d) => (
            <article key={d.title} className="ink-border pop-shadow rounded-3xl bg-card p-6">
              <h3 className="text-2xl">{d.title}</h3>
              <p className="mt-3 text-lg text-muted-foreground">{d.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How to join */}
      <section id="join" className="mx-auto max-w-4xl px-5 pb-16">
        <div className="ink-border pop-shadow-sky relative rounded-[2rem] bg-card p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl">How to join</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Anyone can join or drop in anytime, no commitment required.
          </p>
          <ol className="mt-8 space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4">
                <span className="ink-border grid size-11 shrink-0 place-items-center rounded-full bg-accent font-display text-xl font-extrabold">
                  {s.n}
                </span>
                <span className="pt-1.5 text-lg">{s.text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="ink-border rounded-2xl bg-secondary p-5">
              <p className="font-display text-sm font-extrabold uppercase tracking-wide">Where</p>
              <p className="text-2xl">Room 505</p>
            </div>
            <div className="ink-border rounded-2xl bg-secondary p-5">
              <p className="font-display text-sm font-extrabold uppercase tracking-wide">When</p>
              <p className="text-2xl">Tuesdays, lunchtime</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="ink-border border-x-0 border-b-0 bg-card py-8">
        <p className="text-center text-lg">
          The Students Club · Room 505 · Tuesday lunch · Everyone welcome
        </p>
      </footer>
    </main>
  );
}
