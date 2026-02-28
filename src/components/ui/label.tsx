import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Updated variants to use your display font and a cleaner tracking */
const labelVariants = cva(
  "text-sm font-display font-bold leading-none tracking-tight text-foreground/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root 
    ref={ref} 
    /* Adding a slight primary tint when the associated input is hovered/focused */
    className={cn(labelVariants(), "peer-focus:text-primary", className)} 
    {...props} 
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };