import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full border border-ink-black/10 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-ink-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-red disabled:cursor-not-allowed disabled:opacity-50 font-sans transition-all text-ink-black rounded-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
