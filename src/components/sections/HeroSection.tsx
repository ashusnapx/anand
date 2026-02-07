"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/3d/HeroBackground";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-off-white'>
      {/* 
        In this Magazine theme, the HeroBackground (3D) might need to be subtle or removed/replaced 
        to fit the "clean/sharp" look. For now, we'll keep it but ensure it doesn't clash.
        Ideally, pass a 'theme="light"' prop if HeroBackground supports it, or use opacity.
       */}
      <div className='absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply'>
        <HeroBackground />
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 md:pt-0'>
        {/* Left: Text Content - Editorial Layout */}
        <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-8 order-2 md:order-1'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex items-center gap-4 justify-center md:justify-start mb-6'>
              <span className='h-[1px] w-12 bg-swiss-red'></span>
              <h2 className='text-swiss-red font-sans tracking-[0.2em] uppercase text-xs font-bold'>
                Hospitality & Experience Design
              </h2>
            </div>

            <h1 className='text-6xl md:text-8xl lg:text-9xl font-display font-bold text-ink-black leading-[0.9] -ml-1'>
              Anand <br />
              <span className='font-serif italic text-swiss-red ml-4 md:ml-12'>
                Prakash
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='max-w-md border-l-2 border-ink-black/10 pl-6 text-left'
          >
            <p className='text-xl md:text-2xl text-ink-black/80 font-serif leading-relaxed'>
              Orchestrating premium events and operational excellence from{" "}
              <span className='underline decoration-swiss-red decoration-2 underline-offset-4'>
                Singrauli
              </span>{" "}
              to{" "}
              <span className='underline decoration-swiss-red decoration-2 underline-offset-4'>
                Mumbai
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-6 mt-8'
          >
            <Button
              variant='default'
              size='lg'
              asChild
              className='text-lg px-10 rounded-none shadow-2xl hover:shadow-none transition-all'
            >
              <Link href='#journey'>The Journey</Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='text-lg px-10 rounded-none border-ink-black text-ink-black hover:bg-ink-black hover:text-white'
            >
              <Link href='#contact'>Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Image - Bold Magazine Cutout Style */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex-1 relative w-full max-w-[500px] order-1 md:order-2'
        >
          <div className='relative aspect-[4/5] md:aspect-[3/4] bg-cool-grey-100 shadow-[20px_20px_0px_0px_rgba(255,68,0,1)] border-2 border-ink-black overflow-hidden group'>
            {/* Image Placeholder */}
            <div className='w-full h-full bg-off-white relative flex items-center justify-center overflow-hidden'>
              <img
                src='/images/anand-hero-v2.png'
                alt='Anand Prakash'
                className='w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110'
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML =
                    '<div class="text-center p-6"><p class="font-display text-8xl text-swiss-red/20">AP</p><p class="text-ink-black/40 font-mono text-xs mt-4">IMG: /public/images/anand-hero-v2.png</p></div>';
                }}
              />
            </div>

            {/* Floating Badge */}
            <div className='absolute top-6 right-6 bg-swiss-red text-white p-4 rounded-full w-24 h-24 flex items-center justify-center text-center animate-spin-slow'>
              <p className='font-sans text-[10px] font-bold uppercase tracking-widest leading-tight'>
                Open To
                <br />
                Work
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-10 left-8 md:left-16 flex items-center gap-4 text-ink-black/40'
      >
        <span className='text-xs font-mono uppercase tracking-widest'>
          Scroll to Explore
        </span>
        <div className='h-[1px] w-12 bg-ink-black/20'></div>
      </motion.div>
    </section>
  );
}
