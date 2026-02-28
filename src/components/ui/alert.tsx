import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  /* Base styles updated with glass-morphism and rounded-xl */
  "relative w-full rounded-xl border p-4 transition-all [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-primary",
  {
    variants: {
      variant: {
        /* Default alert now feels like clear water */
        default: "bg-background/60 backdrop-blur-md border-primary/10 text-foreground shadow-sm shadow-primary/5",
        /* Destructive alert uses a soft red 'warning' glass look */
        destructive: "border-red-500/20 bg-red-50/50 backdrop-blur-md text-red-600 dark:border-red-500/30 [&>svg]:text-red-600",
        /* Added an 'info' variant for water-quality updates */
        info: "border-primary/20 bg-primary/5 backdrop-blur-md text-primary shadow-glow [&>svg]:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    /* Using font-display (Outfit) for clear, bold headers */
    <h5 ref={ref} className={cn("mb-1 font-display font-bold leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    /* Using font-body (Space Grotesk) for readable details */
    <div ref={ref} className={cn("text-sm font-body opacity-90 [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };