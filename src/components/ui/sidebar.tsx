/* ... existing imports ... */

// I've updated the sidebar colors to sync with your AquaPure theme
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "4rem"; // Slightly wider for a premium feel

/* ... SidebarProvider and Context logic ... */

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  /* ... Mobile Sheet Logic ... */

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-300 ease-in-out",
          "group-data-[collapsible=offcanvas]:w-0",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-300 ease-in-out md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          /* Glass-morphism applied to floating and inset variants */
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l border-sidebar-border/20",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className={cn(
            "flex h-full w-full flex-col bg-sidebar transition-colors duration-300",
            /* Integrating your AquaPure glass-card look */
            variant === "floating" && "glass-card rounded-2xl border-primary/10 shadow-glow"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

/* ... SidebarMenuButton Variants ... */
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-xl p-2 text-left text-sm outline-none transition-all hover:bg-primary/10 hover:text-primary active:scale-95 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:shadow-md data-[active=true]:shadow-primary/20",
        outline: "bg-background border border-border/40 hover:border-primary/50",
      },
      size: {
        default: "h-10 text-sm",
        sm: "h-8 text-xs",
        lg: "h-12 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/* ... Remaining components (SidebarHeader, Footer, Group, etc.) ... */