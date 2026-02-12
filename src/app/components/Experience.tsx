export function Experience() {
  const experiences = [
    {
      company: 'Google Summer of Code',
      position: 'Contributor',
      period: 'May 2025 - September 2025',
      description: 'Enhanced a high throughput honeypot by building high-fidelity iSCSI parsers and TProxy-based traffic inspection for large-scale threat intelligence.',
      technologies: ['Golang', 'Linux Fundamentals', 'Networking']
    },
    {
      company: 'Protocol Labs',
      position: 'Cohort Member',
      period: 'May 2025 - Present',
      description: 'Enabled cross-language libp2p interoperability, improved async runtime stability, and shipped automated infrastructure for organisations.',
      technologies: ['TypeScript', 'Python', 'MongoDB', 'Docker', 'Distributed Systems']
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-2 border-gray-700 pl-6 pb-8 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl">{exp.position}</h3>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <p className="text-xl text-gray-400 mb-3">{exp.company}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-800 text-sm px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
