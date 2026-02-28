import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      /* Using a subtle primary tint for the shimmer effect */
      className={cn(
        "animate-pulse rounded-xl bg-primary/5 backdrop-blur-[2px] border border-primary/5", 
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };