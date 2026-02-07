"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientsSectionProps {
  logos?: ClientLogo[];
}

export function ClientsSection({ logos = [] }: ClientsSectionProps) {
  // Use provided logos or fallback to empty (since user wanted to remove placeholders)
  const displayLogos = logos.length > 0 ? logos : [];

  return (
    <SectionWrapper id='clients' className='bg-off-white py-24'>
      <div className='text-center mb-16'>
        <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold mb-4'>
          Trusted Partners
        </h2>
      </div>

      {displayLogos.length > 0 ?
        <div className='flex flex-wrap justify-center gap-px bg-ink-black/5 border border-ink-black/5'>
          {displayLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='w-32 h-32 md:w-48 md:h-48 bg-white flex items-center justify-center p-8 hover:bg-cool-grey-50 transition-colors group relative'
            >
              <div className='w-full h-full relative'>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className='object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500'
                  unoptimized // Clearbit URLs might need this if not in next.config
                />
              </div>
              {/* Corner Accent */}
              <div className='absolute top-0 right-0 w-0 h-0 border-t-[6px] border-r-[6px] border-transparent group-hover:border-swiss-red transition-all duration-300'></div>
            </motion.div>
          ))}
        </div>
      : <div className='text-center text-ink-black/40 font-mono text-sm'>
          No partners to display currently.
        </div>
      }
    </SectionWrapper>
  );
}
