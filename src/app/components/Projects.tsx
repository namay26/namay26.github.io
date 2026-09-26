const PROJECTS = [
  {
    title: 'Keystone',
    date: 'Jan 2026',
    description:
      'A Go-based distributed key-value store with versioned conditional writes, atomic reads, and compare-and-swap semantics; a resilient client abstraction handling RPC retries, network failures, and ambiguous operation outcomes; a client-side distributed lock built on CAS-style conditional updates.',
    stack: 'Go · RPC · Concurrency',
    href: 'https://github.com/namay26/keystone',
  },
  {
    title: 'Controlled Multi-Agent Task Orchestrator',
    date: 'Jan 2026',
    description:
      'A state-driven plan-and-execute agent runtime with a central orchestrator controlling task decomposition, execution flow, and completion criteria — specialized agents for clarification, planning, and execution, with phase transitions and deterministic orchestration boundaries.',
    stack: 'Python · Agentic AI · Orchestration',
    href: 'https://github.com/namay26/Multi_Agent-Ochestrator',
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-2 font-mono text-xs tracking-wide text-text-dim uppercase">Things I've built</div>

      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex items-start justify-between gap-5 border-b border-border py-6 first:pt-4"
          >
            <div className="flex max-w-[46ch] flex-col gap-1.5">
              <div className="text-[17px] font-medium text-text">
                {project.title}{' '}
                <span className="font-mono text-xs font-normal text-text-dim">— {project.date}</span>
              </div>
              <div className="text-[14.5px] leading-relaxed text-text-muted">{project.description}</div>
              <div className="font-mono text-xs text-text-dim">{project.stack}</div>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-1 font-mono text-sm whitespace-nowrap text-accent"
            >
              code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
