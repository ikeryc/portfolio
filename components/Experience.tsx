"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio-data";

const workItems = experience.filter((item) => item.type === "work");
const educationItems = experience.filter((item) => item.type === "education");

function Timeline({
  items,
}: {
  items: typeof experience;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-card-border" />

      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${item.period}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative flex gap-4 mb-10 last:mb-0"
        >
          <div className="absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center z-10">
            {item.type === "work" ? (
              <Briefcase size={14} className="text-accent" />
            ) : (
              <GraduationCap size={14} className="text-accent" />
            )}
          </div>

          <div className="ml-16 flex-1 bg-card border border-card-border rounded-xl p-6">
            <span className="text-accent font-mono text-xs">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-accent/80 text-sm">{item.company}</p>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Experiencia & <span className="text-accent">Educación</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiencia laboral */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xl font-semibold mb-8"
            >
              <Briefcase size={20} className="text-accent" />
              Experiencia
            </motion.h3>
            <Timeline items={workItems} />
          </div>

          {/* Educación */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xl font-semibold mb-8"
            >
              <GraduationCap size={20} className="text-accent" />
              Educación
            </motion.h3>
            <Timeline items={educationItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
