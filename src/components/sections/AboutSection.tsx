"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

interface AboutSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    stats: Array<{ label: string; value: string }>;
    current_role: { title: string; organization: string };
  };
}

export function AboutSection({ data }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionWrapper id='about' className='bg-off-white py-24'>
      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto'
        ref={containerRef}
      >
        <motion.div
          style={{ y, opacity }}
          className='relative z-10 order-2 md:order-1'
        >
          {/* Magazine Style Image Frame */}
          <div className='relative aspect-[4/5] overflow-hidden shadow-2xl border-2 border-ink-black bg-cool-grey-200'>
            {/* Decorative lines */}
            <div className='absolute top-4 left-4 right-4 bottom-4 border border-ink-black/20 z-20 pointer-events-none'></div>

            {/* Placeholder for Image */}
            {/* Image of Anand */}
            <div className='w-full h-full bg-ink-black relative group'>
              <Image
                src='/images/anand-about-v2.png'
                alt='Anand Prakash'
                fill
                className='object-cover transition-all duration-500 hover:scale-105'
              />
            </div>

            {/* Floating badge - Clean & Sharp */}
            <motion.div
              className='absolute bottom-0 right-0 z-30 bg-swiss-red text-white p-6 border-t-2 border-l-2 border-ink-black max-w-[220px]'
              whileHover={{ scale: 1.02 }}
            >
              <p className='text-[10px] font-sans uppercase tracking-[0.2em] mb-2 opacity-80'>
                Current Role
              </p>
              <p className='font-display font-bold text-xl leading-none mb-1'>
                {data.current_role.title}
              </p>
              <p className='text-sm font-serif italic'>
                {data.current_role.organization}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className='space-y-8 order-1 md:order-2'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-8 h-[2px] bg-swiss-red'></span>
              <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
                {data.subtitle}
              </h2>
            </div>
            <h3 className='text-5xl md:text-6xl font-display font-bold text-ink-black leading-tight'>
              {data.title.split(" ")[0]} <br />
              <span className='font-serif italic text-swiss-red'>
                {data.title.split(" ").slice(1).join(" ")}
              </span>
            </h3>
          </motion.div>

          <motion.div
            className='space-y-6 text-lg text-ink-black/80 font-serif leading-relaxed'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <div className='grid grid-cols-2 gap-px bg-ink-black/10 border border-ink-black/10 mt-8'>
            {data.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, backgroundColor: "#F9F9F9" }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className='bg-off-white p-6 hover:bg-white transition-colors'
                whileHover={{ backgroundColor: "#FFFFFF" }}
              >
                <p className='text-3xl font-display font-bold text-swiss-red mb-1'>
                  {stat.value}
                </p>
                <p className='text-[10px] font-sans uppercase tracking-widest text-ink-black/60'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
