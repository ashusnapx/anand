"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Building2,
} from "lucide-react";

import Image from "next/image";

interface Event {
  id: string;
  title: string;
  client: string;
  date: string;
  guests: string;
  description: string;
  image?: string;
  tags: string[];
}

interface EventsSectionProps {
  data: Event[];
}

export function EventsSection({ data }: EventsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentEvent = data[currentIndex];

  return (
    <SectionWrapper
      id='events'
      className='bg-ink-black text-off-white overflow-hidden py-24'
    >
      <div className='flex flex-col md:flex-row gap-20 items-center'>
        {/* Left Side: Content */}
        <div className='w-full md:w-1/2 space-y-10 z-10'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-8 h-[2px] bg-swiss-red'></span>
              <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
                Selected Works
              </h2>
            </div>
            <h3 className='text-5xl md:text-7xl font-display font-bold mb-6 leading-none text-off-white'>
              Memorable <br />
              <span className='text-swiss-red font-serif italic'>
                Execution
              </span>
            </h3>
          </motion.div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className='space-y-8'
            >
              <div className='border-l-2 border-swiss-red pl-6'>
                <h4 className='text-3xl font-display font-bold text-white mb-2 leading-tight lowercase first-letter:uppercase'>
                  {currentEvent?.title}
                </h4>
                <p className='text-cool-grey-400 font-mono text-sm flex items-center gap-2'>
                  <Building2 size={14} /> {currentEvent?.client}
                </p>
              </div>

              <p className='text-xl leading-relaxed text-cool-grey-200 font-serif'>
                {currentEvent?.description}
              </p>

              <div className='flex gap-8 text-sm text-cool-grey-400 font-sans border-t border-white/10 pt-6'>
                <span className='flex items-center gap-2'>
                  <Calendar size={16} className='text-swiss-red' />{" "}
                  {currentEvent?.date}
                </span>
                <span className='flex items-center gap-2'>
                  <Users size={16} className='text-swiss-red' />{" "}
                  {currentEvent?.guests}
                </span>
              </div>

              <div className='flex gap-2 flex-wrap'>
                {currentEvent?.tags.map((tag) => (
                  <span
                    key={tag}
                    className='border border-white/20 px-3 py-1 text-xs text-white uppercase tracking-wider hover:bg-white hover:text-ink-black transition-colors'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className='flex gap-0 pt-4'>
            <Button
              variant='outline'
              size='icon'
              onClick={prevSlide}
              className='border-white/20 text-white hover:bg-swiss-red hover:text-white hover:border-swiss-red rounded-none w-14 h-14'
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={nextSlide}
              className='border-white/20 text-white hover:bg-swiss-red hover:text-white hover:border-swiss-red rounded-none w-14 h-14 border-l-0'
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Right Side: Visual Representation */}
        <div className='w-full md:w-1/2 h-[500px] relative overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className='w-full h-full relative group'
            >
              {currentEvent?.image ?
                <>
                  <Image
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    fill
                    className='object-cover transition-all duration-700 opacity-80 group-hover:opacity-100'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/20 to-transparent'></div>
                </>
              : <div className='w-full h-full bg-ink-black-400 relative overflow-hidden shadow-2xl border border-white/5'>
                  {/* Abstract Pattern Fallback */}
                  <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-red via-transparent to-transparent'></div>
                </div>
              }

              <div className='absolute top-8 right-8 text-right pointer-events-none'>
                <div className='text-8xl font-display font-bold text-white/5 select-none leading-none'>
                  0{currentIndex + 1}
                </div>
              </div>

              {/* Data Overlay */}
              <div className='absolute bottom-0 left-0 w-full p-10'>
                <div className='flex items-end justify-between'>
                  <div className='space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <span className='text-swiss-red font-mono text-xs uppercase tracking-[0.3em] font-bold'>
                      Case Study
                    </span>
                    <h3 className='text-white font-display text-2xl uppercase tracking-widest'>
                      Live Event
                    </h3>
                  </div>
                  <ArrowRight
                    className='text-swiss-red opacity-0 group-hover:opacity-100 transition-opacity duration-700 mb-2'
                    size={32}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
