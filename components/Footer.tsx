import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-accent font-bold text-lg">IYC</p>
          <p className="text-muted text-sm mt-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos los
            derechos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
