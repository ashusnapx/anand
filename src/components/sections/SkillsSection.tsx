"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsSectionProps {
  data: SkillCategory[];
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <SectionWrapper id='skills' className='bg-cool-grey-100 py-24'>
      <div className='max-w-6xl mx-auto mb-20 flex flex-col md:flex-row items-end justify-between gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-4 mb-4'>
            <span className='w-8 h-[2px] bg-swiss-red'></span>
            <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
              Core Competencies
            </h2>
          </div>
          <h3 className='text-5xl md:text-6xl font-display font-bold text-ink-black leading-none'>
            Expertise <br />
            <span className='text-ink-black/20'>in Action</span>
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='max-w-md text-ink-black/70 font-serif text-lg leading-relaxed text-right md:text-left'
        >
          A multidisciplinary skillset honed in high-pressure environments,
          ensuring every detail contributes to the bigger picture.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-ink-black/10'>
        {data.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='group relative bg-off-white border-r border-b border-ink-black/10 p-10 hover:bg-white hover:z-10 hover:shadow-2xl transition-all duration-500'
          >
            <div className='mb-8'>
              <h4 className='text-3xl font-display font-bold text-ink-black mb-2 group-hover:text-swiss-red transition-colors'>
                {category.title}
              </h4>
              <div className='w-12 h-[2px] bg-ink-black/10 group-hover:bg-swiss-red/50 transition-colors'></div>
            </div>

            <ul className='space-y-4'>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className='flex items-start gap-3 text-ink-black/80 group-hover:translate-x-1 transition-transform'
                >
                  <CheckCircle2
                    size={16}
                    className='text-swiss-red mt-1 opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                  <span className='text-base font-sans font-medium group-hover:font-bold transition-all'>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>

            <div className='absolute bottom-4 right-4 text-[10px] font-mono text-ink-black/20 uppercase tracking-widest group-hover:text-swiss-red/40 transition-colors'>
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
