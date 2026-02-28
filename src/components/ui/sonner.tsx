import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          /* Updated to use your glass-card and primary branding */
          toast:
            "group toast group-[.toaster]:glass-card group-[.toaster]:text-foreground group-[.toaster]:border-primary/20 group-[.toaster]:shadow-glow rounded-xl p-4",
          description: "group-[.toast]:text-muted-foreground font-body text-xs",
          actionButton: 
            "group-[.toast]:btn-water group-[.toast]:text-primary-foreground text-xs h-8",
          cancelButton: 
            "group-[.toast]:bg-muted/50 group-[.toast]:text-muted-foreground text-xs h-8",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };