"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  LucideIcon,
} from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  icon: LucideIcon;
  type: "education" | "work" | "achievement";
}

const milestones: Milestone[] = [
  {
    id: "1",
    year: "Early Life",
    title: "Roots & Foundation",
    organization: "Delhi Public School",
    location: "Vindhyanagar, MP",
    description:
      "Commerce & Hindi focus. Developed a strong foundation in cultural values and discipline.",
    icon: MapPin,
    type: "education",
  },
  {
    id: "2",
    year: "2019 - 2022",
    title: "B.Sc. Hospitality",
    organization: "IHM Mumbai",
    location: "Mumbai, MH",
    description:
      "Comprehensive training in F&B production, service, and front office operations. NCHMCT affiliated.",
    icon: GraduationCap,
    type: "education",
  },
  {
    id: "3",
    year: "2022",
    title: "FSSAI Certification",
    organization: "Food Safety Authority",
    location: "India",
    description: "Certified in food safety standards and hygiene protocols.",
    icon: Award,
    type: "achievement",
  },
  {
    id: "4",
    year: "2022 - 2023",
    title: "Hospitality Trainee",
    organization: "Grand Hyatt",
    location: "Mumbai",
    description:
      "Intensive industrial training across all major hotel departments. Hystar Award winner.",
    icon: Briefcase,
    type: "work",
  },
  {
    id: "5",
    year: "2023 - Present",
    title: "Event Sales & F&B",
    organization: "Chefworks Hospitality",
    location: "Mumbai/Bangalore",
    description:
      "Coordinating premium events for clients like Amazon and Krafton. Managing logistics for 200+ guests.",
    icon: Briefcase,
    type: "work",
  },
];

export function JourneySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <div id='journey' className='relative bg-ink-black'>
      {/* Desktop Perspective: Horizontal Scroll */}
      <div ref={targetRef} className='hidden md:block relative h-[300vh]'>
        <div className='sticky top-0 h-screen flex flex-col justify-center overflow-hidden'>
          <SectionWrapper className='!py-0 !max-w-none'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-16 px-16 max-w-4xl'
            >
              <div className='flex items-center gap-4 mb-4'>
                <span className='w-12 h-[1px] bg-swiss-red'></span>
                <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
                  Chronology
                </h2>
              </div>
              <h3 className='text-7xl font-display font-bold text-off-white leading-none'>
                A Journey of{" "}
                <span className='text-swiss-red font-serif italic'>Growth</span>
              </h3>
            </motion.div>

            <motion.div
              style={{ x }}
              className='flex gap-12 px-16 items-center'
            >
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className='relative group min-w-[500px]'
                >
                  <div className='absolute top-1/2 left-0 w-full h-[1px] bg-ink-black-300 -z-10 group-hover:bg-swiss-red/50 transition-colors'></div>
                  <div className='bg-ink-black-400 border border-ink-black-300 p-10 shadow-2xl hover:border-swiss-red transition-all duration-300 group-hover:-translate-y-4 relative'>
                    <div className='absolute -top-6 -right-6 w-12 h-12 bg-swiss-red flex items-center justify-center text-white shadow-lg'>
                      <milestone.icon size={20} />
                    </div>
                    <div className='mb-8'>
                      <span className='font-mono text-swiss-red text-sm tracking-widest uppercase'>
                        {milestone.year}
                      </span>
                    </div>
                    <h4 className='text-3xl font-display font-bold text-off-white mb-2 leading-tight'>
                      {milestone.title}
                    </h4>
                    <p className='text-lg font-serif italic text-cool-grey-400 mb-6'>
                      {milestone.organization}
                    </p>
                    <div className='w-8 h-[2px] bg-swiss-red/50 mb-6'></div>
                    <p className='text-cool-grey-200 text-base leading-relaxed mb-6 font-sans font-light'>
                      {milestone.description}
                    </p>
                    <div className='flex items-center text-xs text-cool-grey-500 gap-2 font-mono uppercase tracking-wider'>
                      <MapPin size={12} className='text-swiss-red' />
                      {milestone.location}
                    </div>
                  </div>
                </div>
              ))}
              <div className='min-w-[100px]'></div>
            </motion.div>
          </SectionWrapper>
        </div>
      </div>

      {/* Mobile Perspective: Vertical Stack */}
      <div className='md:hidden py-20 px-4'>
        <div className='mb-12'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='w-8 h-[1px] bg-swiss-red'></span>
            <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
              Chronology
            </h2>
          </div>
          <h3 className='text-4xl font-display font-bold text-off-white leading-tight'>
            A Journey of{" "}
            <span className='text-swiss-red font-serif italic'>Growth</span>
          </h3>
        </div>

        <div className='space-y-8 relative'>
          {/* Vertical Line */}
          <div className='absolute left-0 top-2 bottom-2 w-[1px] bg-ink-black-300 ml-[1.65rem]'></div>

          {milestones.map((milestone) => (
            <div key={milestone.id} className='relative pl-16'>
              {/* Timeline Dot */}
              <div className='absolute left-0 top-0 w-14 h-14 bg-ink-black text-swiss-red border border-ink-black-300 flex items-center justify-center z-10'>
                <milestone.icon size={20} />
              </div>

              <div className='bg-ink-black-400 border border-ink-black-300 p-6 shadow-xl'>
                <span className='font-mono text-swiss-red text-xs tracking-widest uppercase block mb-2'>
                  {milestone.year}
                </span>
                <h4 className='text-2xl font-display font-bold text-off-white mb-1'>
                  {milestone.title}
                </h4>
                <p className='text-base font-serif italic text-cool-grey-400 mb-4'>
                  {milestone.organization}
                </p>
                <p className='text-cool-grey-300 text-sm leading-relaxed mb-4'>
                  {milestone.description}
                </p>
                <div className='flex items-center text-xs text-cool-grey-500 gap-2 font-mono uppercase'>
                  <MapPin size={10} className='text-swiss-red' />
                  {milestone.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
