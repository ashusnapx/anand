"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useStore } from "@/store/useStore";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuOpen, toggleMenu, closeMenu } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ?
          "bg-off-white/90 backdrop-blur-md shadow-sm border-b border-ink-black/5 py-4"
        : "bg-transparent py-6",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between'>
        <Link
          href='/'
          className='text-2xl font-display font-bold text-ink-black flex items-center gap-1.5'
        >
          <span className='text-swiss-red'>AP</span>
          <span
            className={cn(
              "hidden sm:inline-block transition-opacity font-serif italic text-xl",
              scrolled ? "opacity-100" : "opacity-90",
            )}
          >
            Anand Prakash
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-medium text-ink-black/80 hover:text-swiss-red transition-colors relative group font-sans tracking-wide uppercase'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-swiss-red transition-all duration-300 group-hover:w-full' />
            </Link>
          ))}
          <Button variant='gold' size='sm' asChild className='rounded-none'>
            <Link href='#contact'>Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden p-2 text-ink-black hover:text-swiss-red transition-colors'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ?
            <X size={24} />
          : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-off-white border-b border-ink-black/10 overflow-hidden'
          >
            <nav className='flex flex-col p-6 space-y-6'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-2xl font-serif font-medium text-ink-black hover:text-swiss-red transition-colors'
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant='gold'
                className='w-full rounded-none'
                onClick={closeMenu}
                asChild
              >
                <Link href='#contact'>Get in Touch</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
