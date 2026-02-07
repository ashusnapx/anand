"use client";

import React, { useEffect, useRef } from "react";
import { useStore } from "@/store/useStore";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function SoundController() {
  const { isSoundEnabled, toggleSound } = useStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In a real implementation, we would host a file in public/sounds
    // For now, this is a placeholder to demonstrate the UI and logic
    audioRef.current = new Audio("/ambient-hospitality.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
  }, []);

  useEffect(() => {
    if (isSoundEnabled) {
      // audioRef.current?.play().catch(() => {});
      // Auto-play policies differ, usually requires interaction first
    } else {
      audioRef.current?.pause();
    }
  }, [isSoundEnabled]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='fixed bottom-6 right-6 z-50 p-3 rounded-full bg-charcoal/80 text-gold border border-gold/20 backdrop-blur-md hover:bg-gold hover:text-charcoal transition-colors shadow-xl'
      onClick={toggleSound}
      aria-label={isSoundEnabled ? "Mute sound" : "Enable sound"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isSoundEnabled ?
        <Volume2 size={20} />
      : <VolumeX size={20} />}
    </motion.button>
  );
}
