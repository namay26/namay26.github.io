import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Distributed Key-Value Server',
      description: 'Designed a single-node linearizable KV store and a distributed lock using conditional updates, retry logic, and failure-aware client semantics.',
      technologies: ['Golang', 'Distributed Systems'],
      github: 'https://github.com/namay26/key-val',
    },
    {
      title: 'IRMUN Website',
        description: 'Built and deployed a production-grade event platform handling payments and concurrent traffic for 1,000+ users.',
      technologies: ['React', 'Golang', 'Tailwind'],
      demo: 'https://irmun.iitr.ac.in/'
    },
    {
      title: 'Quizio',
      description: 'An in-house quizzing platform built within SDSLabs, enabling users to create and participate in quizzes with video monitoring.',
      technologies: ['TypeScript', 'React', 'MongoDB', 'Tailwind'],
      demo: 'https://quizio.sdslabs.co/'
    },
    {
      title: 'Controlled Multi-Agent Task Orchestrator',
        description: 'A multi-agent system that orchestrates task execution with a central controller, ensuring task completion and autonomous agent workflow.',
      technologies: ['Python', 'LangChain'],
      github: 'https://github.com/namay26/Multi_Agent-Ochestrator',
    },
    {
      title: 'ch3ckm8',
      description: 'A chess engine written in Go, leveraging bitboards for efficient move generation and alpha-betapruning to optimize move search performance',
      technologies: ['Golang'],
      github: 'https://github.com/ashpect/ch3ckm8',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl mb-12">Projects</h2>
        <Slider {...settings} className="projects-slider">
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 h-auto">
                <h3 className="text-3xl mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-900 border border-gray-600 px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
