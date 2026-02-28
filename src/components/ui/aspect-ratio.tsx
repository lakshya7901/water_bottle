import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";
import * as React from "react";

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
  /* Added a subtle glass-like container overflow hidden for smooth corners */
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn("overflow-hidden rounded-2xl border border-primary/5 shadow-sm", className)}
    {...props}
  />
));
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };