import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-400" />
                <a 
                  href="mailto:namayrohatgi@gmail.com" 
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  namayrohatgi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-gray-400" />
                <span className="text-lg">Delhi, India</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl mb-6">Connect with me</h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/namay26" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="text-lg">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/NamayRohatgi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
