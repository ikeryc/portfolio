"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - integrate with a service like Formspree, EmailJS, etc.
    alert(
      "Formulario enviado (demo). Integra con un servicio de email para hacerlo funcional."
    );
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-center"
        >
          <span className="text-accent">Contacto</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-center mb-12 max-w-lg mx-auto"
        >
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en
          contactarme.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-card border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-card border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              placeholder="Tu mensaje"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-card border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              <Send size={18} />
              Enviar Mensaje
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-6"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 text-muted hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border border-card-border flex items-center justify-center group-hover:border-accent transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-foreground">Email</p>
                <p className="text-sm">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border border-card-border flex items-center justify-center group-hover:border-accent transition-colors">
                <Github size={20} />
              </div>
              <div>
                <p className="text-sm text-foreground">GitHub</p>
                <p className="text-sm">github.com/ikeryanez</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border border-card-border flex items-center justify-center group-hover:border-accent transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-foreground">LinkedIn</p>
                <p className="text-sm">linkedin.com/in/ikeryc</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
