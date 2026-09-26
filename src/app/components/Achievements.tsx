const WINS = [
  {
    text: (
      <>
        Won <strong className="font-medium text-text">DIMO — Best Gig Economy Solution</strong> and the Sign
        Protocol Pool Prize at EthOnline 2024
      </>
    ),
  },
  {
    text: (
      <>
        Won <strong className="font-medium text-text">Best Use of Anon Aadhar</strong> (PSE) at EthIndia 2024
      </>
    ),
  },
  {
    text: (
      <>
        Ranked <strong className="font-medium text-text">51st worldwide, 6th nationwide</strong> at UIUCTF 2024 —
        team ky$l
      </>
    ),
  },
  {
    text: (
      <>
        Ranked <strong className="font-medium text-text">8th nationwide</strong> at HackCTF 2024 — team ky$l
      </>
    ),
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-2 font-mono text-xs tracking-wide text-text-dim uppercase">Wins &amp; rankings</div>

      <div className="flex flex-col">
        {WINS.map((win, i) => (
          <div
            key={i}
            className="flex items-baseline gap-4 border-b border-border py-4 first:pt-4 last:border-b-0 text-[15px] leading-relaxed text-text-muted"
          >
            <span className="font-mono text-xs text-text-dim">{String(i + 1).padStart(2, '0')}</span>
            <span>{win.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
