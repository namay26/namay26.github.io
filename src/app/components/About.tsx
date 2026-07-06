export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
        <div className="space-y-6 text-gray-300 text-lg">
          <p> I’m a software engineer interested in the foundations of networking, distributed systems, cloud infrastructure, and agentic systems. I enjoy building systems that connect low-level infrastructure with higher-level intelligence- from agentic runtimes and context layers to scalable backend services, Kubernetes-native platforms, and distributed protocol tooling. </p>
          
          <p> I work across the stack with Golang, Python, Rust, and modern frameworks, but I’m most excited by system design, concurrency, networking, automation, cloud-native engineering, and infrastructure tooling. I’ve also contributed to open-source ecosystems like libp2p, focusing on cross-language interoperability and tooling for distributed systems. </p>
          
          <p> Outside of coding, you’ll usually find me exploring technical rabbit holes, reading random articles, meddling with my guitar, playing chess, or watching football. </p>  
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
