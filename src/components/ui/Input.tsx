import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <motion.div whileFocus={{ scale: 1.01 }}>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-none border border-ink-black/10 bg-white px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-red transition-all duration-300 text-ink-black font-sans",
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
