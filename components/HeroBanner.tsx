const messages = [
  "SURVEY",
  "SEGMENT",
  "MESSAGE",
  "MINI PAGE",
  "AI ANALYSIS",
  "RESERVATION",
  "SUPPORT",
];

export default function HeroBanner() {
  const loop = [...messages, ...messages, ...messages, ...messages];

  return (
    <section data-page-reveal className="overflow-hidden bg-white py-5">
      <div className="relative overflow-hidden border-y border-brand-100 bg-[#fbf8ff] py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fbf8ff] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fbf8ff] to-transparent" aria-hidden="true" />
        <div className="flex w-max items-center whitespace-nowrap hero-marquee">
          {loop.map((message, index) => (
            <div key={`${message}-${index}`} className="flex items-center">
              <span className="px-8 text-xs font-bold uppercase tracking-[0.24em] text-brand-900 sm:text-sm">
                {message}
              </span>
              <span className="text-brand-300" aria-hidden="true">・</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
