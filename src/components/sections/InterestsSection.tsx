"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Train, Utensils, Activity, LucideIcon } from "lucide-react";

interface Interest {
  title: string;
  description: string;
  icon: LucideIcon;
  style: string;
  iconStyle: string;
}

const interests: Interest[] = [
  {
    title: "Indian Railways",
    description:
      "An encyclopedic knowledge of train routes and a passion for the engineering marvel of Indian Railways.",
    icon: Train,
    style: "bg-ink-black text-off-white",
    iconStyle: "text-swiss-red",
  },
  {
    title: "Culinary Explorer",
    description:
      "Curating a journey through India's diverse cuisines via YouTube, finding inspiration for F&B trends.",
    icon: Utensils,
    style: "bg-swiss-red text-white",
    iconStyle: "text-white",
  },
  {
    title: "Cricket",
    description:
      "Analyzing the game with the same precision applied to event logistics. A strategic observer.",
    icon: Activity,
    style: "bg-white text-ink-black border border-ink-black/10",
    iconStyle: "text-ink-black",
  },
];

interface InterestsSectionProps {
  data: Array<{
    title: string;
    description: string;
    icon: string;
    style: string;
    iconStyle: string;
  }>;
}

export function InterestsSection({ data }: InterestsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Train":
        return Train;
      case "Utensils":
        return Utensils;
      case "Activity":
        return Activity;
      default:
        return Activity;
    }
  };

  return (
    <SectionWrapper id='interests' className='bg-white py-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        <div className='sticky top-24'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='w-8 h-[2px] bg-swiss-red'></span>
            <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
              Beyond Work
            </h2>
          </div>
          <h3 className='text-5xl md:text-7xl font-display font-bold text-ink-black mb-8 leading-none'>
            The Person <br />
            <span className='text-ink-black/30'>Behind the Role</span>
          </h3>
          <p className='text-lg text-ink-black/70 leading-relaxed max-w-md font-serif'>
            My passion for detail isn&apos;t limited to events. Whether
            it&apos;s mapping complex railway networks or deconstructing a
            cricket match, I bring an analytical yet enthusiastic perspective to
            everything I love.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-0'>
          {data.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${item.style} p-10 flex flex-col md:flex-row items-start md:items-center gap-6 group transition-transform duration-300`}
              >
                <div
                  className={`p-4 rounded-none border border-current/20 ${item.iconStyle}`}
                >
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className='text-2xl font-bold font-display mb-2 uppercase tracking-wide'>
                    {item.title}
                  </h4>
                  <p className='text-sm opacity-80 font-sans leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
