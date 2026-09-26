const SKILLS = [
  'Go',
  'Python',
  'C++',
  'TypeScript',
  'Distributed Systems',
  'Kubernetes',
  'AWS',
  'Networking',
  'LangGraph',
  'LangChain',
  'Knowledge Graphs',
  'RAG',
];

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 pb-20">
      <h1 className="mb-6 text-[40px] leading-[1.25] font-medium tracking-[-0.01em] md:text-5xl">
        Software engineer working on distributed systems, networking, and lately, AI
        infrastructure.
      </h1>
      <p className="mb-3 max-w-[56ch] text-lg leading-relaxed text-text-muted">
        I'm Namay. I like to work on scalable systems and infrastructure. <br />
        Currently building knowledge graphs and hybrid RAG systems as a Machine Learning Engineer at Athira, before
        that, agent orchestration and inference infrastructure at Nava, and protocol-level networking work through
        Google Summer of Code.
      </p>
      <p className="text-[15px] leading-relaxed text-text-muted">
        Based in Delhi, India · <a href="mailto:namayrohatgi@gmail.com">namayrohatgi@gmail.com</a>
      </p>

      <div className="mt-10 border-t border-border pt-6">
        <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-text-dim">
          {SKILLS.map((skill, i) => (
            <span key={skill}>
              {skill}
              {i < SKILLS.length - 1 && <span className="ml-3 text-border-muted">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
