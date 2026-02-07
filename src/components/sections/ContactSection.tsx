"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Loader2,
  ArrowUpRight,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div
      id='contact'
      className='bg-ink-black text-off-white relative overflow-hidden pt-24 pb-12'
    >
      <SectionWrapper className='relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
          {/* Left: Contact Info & Journey Map Visualization */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className='flex items-center gap-4 mb-4'>
                <span className='w-8 h-[2px] bg-swiss-red'></span>
                <h2 className='text-swiss-red font-sans text-xs tracking-[0.2em] uppercase font-bold'>
                  Collaborate
                </h2>
              </div>
              <h3 className='text-5xl md:text-7xl font-display font-bold mb-8 leading-none'>
                Let's Create <br />
                <span className='text-swiss-red font-serif italic'>
                  Impact.
                </span>
              </h3>
              <p className='text-cool-grey-400 text-xl mb-16 max-w-md font-serif leading-relaxed'>
                Whether you need detailed event coordination or operational
                consultancy, I'm ready to bring precision and passion to your
                project.
              </p>
            </motion.div>

            <div className='space-y-8'>
              <a
                href='mailto:anandprakash6039@gmail.com'
                className='flex items-center gap-6 text-xl md:text-2xl hover:text-swiss-red transition-colors group font-display font-bold'
              >
                <span className='text-xs font-mono text-cool-grey-500 uppercase tracking-widest w-12 group-hover:text-swiss-red transition-colors'>
                  Mail
                </span>
                anandprakash6039@gmail.com
                <ArrowUpRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
              </a>
              <a
                href='tel:+919343915591'
                className='flex items-center gap-6 text-xl md:text-2xl hover:text-swiss-red transition-colors group font-display font-bold'
              >
                <span className='text-xs font-mono text-cool-grey-500 uppercase tracking-widest w-12 group-hover:text-swiss-red transition-colors'>
                  Call
                </span>
                +91-9343915591
                <ArrowUpRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
              </a>
              <div className='flex items-center gap-6 text-xl group font-display font-bold'>
                <span className='text-xs font-mono text-cool-grey-500 uppercase tracking-widest w-12'>
                  Base
                </span>
                <span>Mumbai, India</span>
                <span className='text-[10px] text-ink-black bg-swiss-red px-2 py-1 uppercase tracking-wider font-bold'>
                  Open to Relocation
                </span>
              </div>
            </div>

            <div className='mt-20 pt-10 border-t border-white/5'>
              <h4 className='font-sans text-xs uppercase tracking-widest mb-6 text-cool-grey-500'>
                Trajectory
              </h4>
              <div className='relative h-[2px] bg-white/10 overflow-hidden w-full'>
                <div className='absolute top-0 left-0 h-full w-3/4 bg-swiss-red'></div>
              </div>
              <div className='flex justify-between text-[10px] mt-4 text-cool-grey-500 font-mono uppercase tracking-wider'>
                <span className='text-white'>Singrauli</span>
                <span className='text-white'>Delhi</span>
                <span className='text-white'>Mumbai</span>
                <span className='opacity-50'>Global</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className='bg-ink-black-400 p-10 md:p-12 border border-white/5 shadow-2xl relative'>
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-swiss-red to-transparent'></div>

            <h4 className='text-2xl font-display font-bold mb-8'>
              Send a Message
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
              <div className='group'>
                <label className='block text-xs font-mono uppercase tracking-widest mb-2 text-cool-grey-500 group-focus-within:text-swiss-red transition-colors'>
                  Name
                </label>
                <input
                  {...register("name")}
                  className='w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-swiss-red transition-colors text-white font-serif text-lg placeholder:text-white/20'
                  placeholder='John Doe'
                />
                {errors.name && (
                  <p className='text-swiss-red text-xs mt-2 font-mono'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <label className='block text-xs font-mono uppercase tracking-widest mb-2 text-cool-grey-500 group-focus-within:text-swiss-red transition-colors'>
                  Email
                </label>
                <input
                  {...register("email")}
                  className='w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-swiss-red transition-colors text-white font-serif text-lg placeholder:text-white/20'
                  placeholder='john@example.com'
                />
                {errors.email && (
                  <p className='text-swiss-red text-xs mt-2 font-mono'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <label className='block text-xs font-mono uppercase tracking-widest mb-2 text-cool-grey-500 group-focus-within:text-swiss-red transition-colors'>
                  Subject
                </label>
                <input
                  {...register("subject")}
                  className='w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-swiss-red transition-colors text-white font-serif text-lg placeholder:text-white/20'
                  placeholder='Project Inquiry'
                />
                {errors.subject && (
                  <p className='text-swiss-red text-xs mt-2 font-mono'>
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <label className='block text-xs font-mono uppercase tracking-widest mb-2 text-cool-grey-500 group-focus-within:text-swiss-red transition-colors'>
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className='w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-swiss-red transition-colors resize-none text-white font-serif text-lg placeholder:text-white/20'
                  placeholder='Tell me about your event...'
                />
                {errors.message && (
                  <p className='text-swiss-red text-xs mt-2 font-mono'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                variant='gold'
                className='w-full rounded-none h-16 text-lg tracking-widest uppercase font-bold'
                disabled={isSubmitting}
              >
                {isSubmitting ?
                  <Loader2 className='animate-spin mr-2' />
                : <Send className='mr-2' size={18} />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center font-mono'
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className='relative z-10 border-t border-white/5 mt-20 py-12 text-center text-cool-grey-500 text-sm'>
        <div className='flex justify-center gap-8 mb-6'>
          <a href='#' className='hover:text-swiss-red transition-colors'>
            <Linkedin size={24} />
          </a>
          <a
            href='mailto:anandprakash6039@gmail.com'
            className='hover:text-swiss-red transition-colors'
          >
            <Mail size={24} />
          </a>
        </div>
        <p className='font-mono uppercase tracking-widest text-xs'>
          © {new Date().getFullYear()} Anand Prakash. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
