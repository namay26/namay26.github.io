export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
        <div className="space-y-6 text-gray-300 text-lg">
          <p>
            I’m a software engineer who enjoys working close to the foundations of networking, distributed systems, and infrastructure.
            My journey started with curiosity about how things work under the hood, and has grown into building scalable systems that bridges fun and functionality. :))
          </p>
          <p>
            I work across the stack, with hands-on experience in Node.js, Golang, Python, and modern frontend frameworks, but mostly I love working with system design, concurrency, networking, and automation. I’ve contributed to open-source ecosystems like libp2p, working on cross-language interoperability and tooling.
          </p>
          <p>
            Outside of coding, you’ll find me exploring technical rabbit holes (:P), playing guitar or chess or watching football.
          </p>
          <div className="pt-6">
            <h3 className="text-2xl mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Golang', 'Node.js', 'Python', 'SQL', 'Git', 'Docker', 'Networking', 'Distributed Systems'].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
