import { WaitlistForm } from "@/components/WaitlistForm";

const previewTabs = [
  ["Must Visit", "Fushimi Inari at first light"],
  ["Local Food", "Obanzai lunch near Nishiki"],
  ["Hidden Spots", "Lantern alleys after dinner"],
  ["Souvenirs", "Kiyomizu-yaki ceramic cups"],
  ["Map Plan", "18 stops ready for Google Maps"]
];

const useCases = [
  "Weekend escapes",
  "Solo travel",
  "Couple trips",
  "First-time city visits",
  "Food-focused trips"
];

const features = [
  "Real traveler-backed recommendations",
  "Tourist vs Local filter",
  "Must-try food and shops",
  "Souvenir suggestions",
  "Map-ready itinerary",
  "Save places for later"
];

const faqs = [
  [
    "What is RoamList?",
    "RoamList turns real traveler tips, local recommendations, discussions and curated sources into clean, map-ready trip plans."
  ],
  [
    "Is this available on Android?",
    "Android is planned for beta. Join the waitlist and share your destination interest so we can prioritize access."
  ],
  [
    "How is it different from Google Maps?",
    "Google Maps is great for finding places. RoamList helps decide what is worth your time, why it matters, and how to group it into a real itinerary."
  ],
  [
    "Will it be free?",
    "The private beta will start free for early users while we refine destination coverage and planning tools."
  ],
  [
    "When will beta access start?",
    "We are inviting early travelers in small waves soon, starting with people who share high-intent destination interests."
  ]
];

function PhonePreview({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`phone-shell relative mx-auto rounded-[48px] p-[10px] ${
        large
          ? "h-[560px] w-[280px] sm:h-[640px] sm:w-[318px]"
          : "h-[500px] w-[250px] sm:h-[540px] sm:w-[270px]"
      }`}
    >
      <div className="phone-screen grain relative h-full overflow-hidden rounded-[38px] border border-white/10 p-5 text-porcelain">
        <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="route-line" />
        <div className="absolute left-8 top-[25%] h-2.5 w-2.5 rounded-full bg-porcelain" />
        <div className="absolute right-10 top-[47%] h-2.5 w-2.5 rounded-full bg-[#d5a25d]" />
        <div className="absolute bottom-[22%] left-16 h-2.5 w-2.5 rounded-full bg-[#8aa07d]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mt-8 flex items-center justify-between">
            <button
              aria-label="Back"
              className="grid h-11 w-11 place-items-center rounded-[16px] border border-white/12 bg-white/[0.04] text-2xl"
            >
              ‹
            </button>
            <button
              aria-label="Settings"
              className="grid h-11 w-11 place-items-center rounded-[16px] border border-white/12 bg-white/[0.04] text-lg"
            >
              *
            </button>
          </div>

          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/44">
              3 day plan
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.88]">
              Kyoto, Japan
            </h2>
            <p className="mt-4 max-w-[13rem] text-sm leading-6 text-white/56">
              Temples before crowds, market food, quiet ceramics and an evening
              river walk.
            </p>
          </div>

          <div className="mt-auto space-y-2">
            {previewTabs.map(([label, detail]) => (
              <div
                key={label}
                className="rounded-[18px] border border-white/10 bg-black/38 p-3 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="text-right text-[11px] leading-4 text-white/48">
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#070707] text-porcelain">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070707]/78 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-porcelain text-lg font-black text-ink">
              R
            </span>
            <span className="font-serif text-3xl leading-none">RoamList</span>
          </a>
          <div className="hidden items-center gap-10 text-xs font-bold uppercase tracking-[0.32em] text-white md:flex">
            <a className="transition hover:text-[#d5a25d]" href="#how">
              How it Works
            </a>
            <a className="transition hover:text-[#d5a25d]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#d5a25d]" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-porcelain px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#d9c7a9]"
          >
            Android Waitlist
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen px-5 pb-20 pt-28 sm:px-8 lg:pt-36">
        <div className="absolute inset-0 -z-10 map-paper opacity-70" />
        <div className="mx-auto max-w-7xl text-center">
          <p className="mx-auto mb-8 max-w-xl text-xs font-bold uppercase tracking-[0.36em] text-white/46">
            Private beta for travelers who plan with feeling
          </p>
          <h1 className="mx-auto max-w-6xl font-serif text-[clamp(4.4rem,9.8vw,10.5rem)] leading-[0.82] tracking-normal">
            Travel plans built from real traveler tips.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/58 sm:text-xl">
            Enter a destination and get must-visit places, hidden spots, local
            food, souvenirs and map-ready itineraries powered by real
            experiences, not generic lists.
          </p>
          <div id="waitlist" className="mx-auto mt-9 flex justify-center">
            <WaitlistForm />
          </div>

          <div className="relative mt-16 min-h-[520px] sm:mt-20 lg:min-h-[610px]">
            <div className="absolute left-1/2 top-20 hidden h-64 w-[46rem] -translate-x-1/2 rounded-[40px] border border-white/10 bg-white/[0.035] blur-sm lg:block" />
            <div className="absolute left-[8%] top-32 hidden w-60 rotate-[-8deg] rounded-[26px] border border-white/10 bg-white/[0.055] p-4 text-left shadow-2xl backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                Traveler note
              </p>
              <p className="mt-8 font-serif text-3xl leading-none">
                &quot;Go before 8am, then eat near Nishiki.&quot;
              </p>
            </div>
            <div className="absolute right-[7%] top-40 hidden w-64 rotate-[7deg] rounded-[26px] border border-white/10 bg-white/[0.055] p-4 text-left shadow-2xl backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                Map cluster
              </p>
              <div className="mt-9 space-y-2">
                {["Shrine", "Lunch", "Ceramics", "River walk"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-full bg-black/30 px-3 py-2 text-sm"
                  >
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-[#d5a25d]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <PhonePreview large />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-serif text-6xl leading-[0.9] sm:text-8xl">
            For trips that deserve better than random blog lists.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((useCase) => (
              <article
                key={useCase}
                className="glass-card rounded-[30px] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-16 h-24 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_30%_25%,rgba(213,162,93,0.32),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))]" />
                <h3 className="text-xl font-semibold">{useCase}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="border-y border-white/10 bg-[#0d0d0d] px-5 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.36em] text-white/34">
            How it works
          </p>
          <h2 className="max-w-5xl font-serif text-6xl leading-[0.9] sm:text-8xl">
            How a trip becomes a plan.
          </h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              ["Step 01", "Enter your destination"],
              ["Step 02", "We scan real traveler recommendations"],
              ["Step 03", "Get a clean itinerary with Google Maps links"]
            ].map(([step, title], index) => (
              <article
                key={step}
                className="glass-card overflow-hidden rounded-[34px] p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
                  {step}
                </p>
                <div className="mt-8 flex justify-center">
                  {index === 1 ? (
                    <PhonePreview />
                  ) : (
                    <div className="relative h-[410px] w-full overflow-hidden rounded-[30px] border border-white/10 bg-black">
                      <div className="absolute inset-0 map-paper opacity-50" />
                      <div className="absolute left-8 top-12 h-32 w-32 rounded-[26px] border border-white/10 bg-white/[0.06]" />
                      <div className="absolute bottom-16 right-8 h-40 w-32 rounded-[26px] border border-white/10 bg-[#d5a25d]/20" />
                      <div className="absolute left-10 top-56 max-w-xs font-serif text-4xl leading-none">
                        {index === 0 ? "Kyoto in October" : "Open in Maps"}
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.36em] text-white/34">
              Features
            </p>
            <h2 className="font-serif text-6xl leading-[0.9] sm:text-8xl">
              Made for the messy middle of planning.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature}
                className="glass-card rounded-[30px] p-6"
              >
                <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#d5a25d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-16 text-2xl font-semibold leading-tight">
                  {feature}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-6xl leading-[0.9] sm:text-8xl">
            Questions before boarding.
          </h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold sm:text-2xl">
                  {question}
                  <span className="text-3xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl leading-7 text-white/54">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8">
        <div className="glass-card mx-auto max-w-7xl rounded-[40px] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h2 className="font-serif text-7xl leading-[0.82] sm:text-9xl">
                Stop planning from 20 tabs.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
                Join the waitlist and be first to try RoamList.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <WaitlistForm compact />
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 text-sm text-white/44 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif text-3xl text-porcelain">RoamList</span>
          <span>Real traveler tips, shaped into actual plans.</span>
        </div>
      </footer>
    </main>
  );
}
