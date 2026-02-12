import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import meImage from "../assets/me.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <ImageWithFallback
            src={meImage}
            alt="Profile picture"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">Hi, I'm Namay Rohatgi</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Software Developer
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
         I build fun, scalable projects and contribute to open source.
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-gray-600 px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
