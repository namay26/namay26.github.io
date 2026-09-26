const EXPERIENCES = [
  {
    company: 'Athira',
    role: 'Machine Learning Engineer',
    period: 'JUL 2026 — PRESENT',
    bullets: [
      'Architected a knowledge graph and hybrid RAG system integrating heterogeneous data sources with vector embeddings, confidence scoring, and lexical, fuzzy, and semantic retrieval for context-aware AI applications.',
      'Designed and owned modular multi-stage LLM orchestration workflows, with independently validated and extensible stages for scalable, reliable execution of complex tasks.',
    ],
    stack: 'Knowledge Graphs · Hybrid RAG · LLM Orchestration',
  },
  {
    company: 'Nava (formerly Kluisz.ai)',
    role: 'AI Infra Intern',
    period: 'MAY — JUL 2026',
    bullets: [
      'Refactored agent orchestration into a single-loop runtime backed by context-graph capability retrieval, replacing multi-handoff prompts with compact service/action context.',
      'Designed a Git-like temporal memory for knowledge graphs, cutting historical entity growth from O(N²) to O(cadence × N) via diff-based versioning, while supporting temporal queries and scoped retrieval.',
      'Integrated DCIM entities, Redfish observability, and event-driven state ingestion into the knowledge layer.',
      'Researched LLM inference systems, building simulators to analyze TTFT, TPOT, throughput, KV-cache behavior, and serving tradeoffs.',
    ],
    stack: 'LangGraph · Knowledge Graphs · Context Engineering · Inference Engineering',
  },
  {
    company: 'Google Summer of Code',
    role: 'Software Developer Intern, The Honeynet Project',
    period: 'MAY — SEP 2025',
    bullets: [
      'Enhanced Glutton, an open-source honeypot used for large-scale threat intelligence — built structured iSCSI protocol parsers to extract high-fidelity request metadata for downstream analytics.',
      'Implemented a TProxy-based streaming passthrough, capturing metadata without disrupting active sessions.',
      'Built protocol-aware request parsers and live packet introspection modules in a high-throughput honeypot.',
    ],
    stack: 'Golang · Linux Fundamentals · Networking',
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-2 font-mono text-xs tracking-wide text-text-dim uppercase">Where I've worked</div>

      <div className="flex flex-col">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-2.5 border-b border-border py-7 first:pt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="text-lg font-medium">{exp.company}</div>
              <div className="font-mono text-xs whitespace-nowrap text-text-dim">{exp.period}</div>
            </div>
            <div className="text-sm text-accent">{exp.role}</div>
            {exp.bullets.map((bullet) => (
              <div key={bullet} className="flex max-w-[58ch] gap-2.5 text-[15px] leading-relaxed text-text-muted">
                <span className="text-border-muted">—</span>
                <span>{bullet}</span>
              </div>
            ))}
            <div className="mt-0.5 font-mono text-xs text-text-dim">{exp.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
