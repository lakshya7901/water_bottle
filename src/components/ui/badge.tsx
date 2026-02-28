import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  /* Updated base with font-display and a more rounded, 'organic' feel */
  "inline-flex items-center rounded-full border px-3 py-0.5 text-[10px] font-display font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        /* Primary badge with a soft blue glow */
        default: "border-transparent bg-primary text-white shadow-glow hover:bg-primary/90",
        secondary: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        destructive: "border-transparent bg-red-500 text-white shadow-sm",
        /* Outline variant for technical specs */
        outline: "border-primary/20 text-primary bg-background/50 backdrop-blur-sm",
        /* New 'Aqua' variant for that premium look */
        aqua: "border-primary/30 bg-gradient-to-r from-primary/20 to-primary/5 text-primary shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };