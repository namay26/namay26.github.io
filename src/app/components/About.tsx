export function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-6 font-mono text-xs tracking-wide text-text-dim uppercase">About</div>
      <p className="max-w-[58ch] text-[17px] leading-relaxed text-text-muted">
        A software engineer who enjoys working close to the foundations of{' '}
        <em className="text-text not-italic">agent orchestration, context layer optimisations</em> and{' '}
        <em className="text-text not-italic">distributed systems</em>. Started with curiosity about how things work
        under the hood and honestly, it's grown into building systems that are both fun and functional. Exploring a bit of inferencing and hardware acceleration.
      </p>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-text-muted">
        Off duty: playing guitar, losing at chess, and shouting at football.
      </p>
    </section>
  );
}
