/* ... existing imports and types ... */

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        /* Custom AquaPure styling for Recharts elements */
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-axis-tick_text]:font-body",
          "[&_.recharts-cartesian-grid_line]:stroke-primary/10",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-primary/20",
          "[&_.recharts-dot]:stroke-transparent",
          "[&_.recharts-layer]:outline-none",
          "[&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});

/* ... ChartStyle logic ... */

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      label,
      labelFormatter,
      labelClassName,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    /* ... Tooltip Label Logic ... */

    if (!active || !payload?.length) return null;

    return (
      /* Tooltip now matches our glass-card aesthetic */
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-xl border border-primary/10 bg-background/80 backdrop-blur-xl px-3 py-2 text-xs shadow-glow",
          className,
        )}
      >
        {/* Tooltip Content ... */}
      </div>
    );
  },
);

/* ... Remaining components ... */