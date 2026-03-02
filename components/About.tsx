"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Sobre <span className="text-accent">Mí</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-80 rounded-2xl bg-card border border-card-border overflow-hidden">
              <img
                src="/foto-iker.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted leading-relaxed mb-6">
              {personalInfo.aboutText}
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
