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

interface Event {
  id: string;
  title: string;
  client: string;
  date: string;
  guests: string;
  description: string;
  tags: string[];
}

const events: Event[] = [
  {
    id: "1",
    title: "Nandi Hills Full-Day Corporate Retreat",
    client: "Confidential Tech Giant",
    date: "November 2023",
    guests: "200+ Pax",
    description:
      "Orchestrated a seamless 12-hour corporate offsite. Managed end-to-end logistics including transport, multiple F&B services (Breakfast, Lunch, High Tea, Dinner), and team-building activity coordination.",
    tags: ["Logistics", "F&B", "Large Scale"],
  },
  {
    id: "2",
    title: "Satva Northland Gala Dinner",
    client: "Satva Developers",
    date: "September 2023",
    guests: "150+ Pax",
    description:
      "Executed a premium sit-down dinner event. Focused on high-touch service, gold-standard table settings, and personalized guest experiences for VIP attendees.",
    tags: ["Premium Dining", "VIP", "Decor"],
  },
  {
    id: "3",
    title: "Harley-Davidson Model Launch",
    client: "Harley-Davidson India",
    date: "August 2023",
    guests: "600+ Attendees",
    description:
      "Managed crowd flow and F&B for a high-energy product launch. Ensured rapid service delivery during peak intervals and maintained brand vibe throughout the hospitality zone.",
    tags: ["Product Launch", "High Volume", "Brand Experience"],
  },
];

export function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

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
                <h4 className='text-3xl font-display font-bold text-white mb-2 leading-tight'>
                  {events[currentIndex].title}
                </h4>
                <p className='text-cool-grey-400 font-mono text-sm flex items-center gap-2'>
                  <Building2 size={14} /> {events[currentIndex].client}
                </p>
              </div>

              <p className='text-xl leading-relaxed text-cool-grey-200 font-serif'>
                {events[currentIndex].description}
              </p>

              <div className='flex gap-8 text-sm text-cool-grey-400 font-sans border-t border-white/10 pt-6'>
                <span className='flex items-center gap-2'>
                  <Calendar size={16} className='text-swiss-red' />{" "}
                  {events[currentIndex].date}
                </span>
                <span className='flex items-center gap-2'>
                  <Users size={16} className='text-swiss-red' />{" "}
                  {events[currentIndex].guests}
                </span>
              </div>

              <div className='flex gap-2 flex-wrap'>
                {events[currentIndex].tags.map((tag) => (
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

        {/* Right Side: Visual Abstract Representation */}
        <div className='w-full md:w-1/2 h-[500px] relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className='w-full h-full bg-ink-black-400 relative overflow-hidden group shadow-2xl border border-white/5'
            >
              {/* Abstract Pattern */}
              <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-red via-transparent to-transparent'></div>

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none'>
                <div className='text-[12rem] font-display font-bold text-white/5 select-none leading-none'>
                  0{currentIndex + 1}
                </div>
              </div>

              {/* Data Overlay */}
              <div className='absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ink-black to-transparent'>
                <div className='flex items-end justify-between'>
                  <h3 className='text-white font-display text-2xl uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500'>
                    View Case Study
                  </h3>
                  <ArrowRight
                    className='text-swiss-red opacity-0 group-hover:opacity-100 transition-opacity duration-700'
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
