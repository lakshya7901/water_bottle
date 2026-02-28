import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ 
  className, 
  ...props 
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col", 
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      /* Swapped bg-border for a subtle primary tint for a water-themed look */
      "relative flex w-px items-center justify-center bg-primary/10 transition-all duration-300 hover:bg-primary/30",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
      "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
      "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full",
      "data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1",
      "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      /* Handle pill is now rounded-full and glass-themed */
      <div className="z-10 flex h-6 w-4 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm shadow-primary/10">
        <GripVertical className="h-3 w-3 text-primary/60" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };