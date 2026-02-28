import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          /* The 'glass-card' utility from index.css makes these toasts look premium */
          <Toast key={id} {...props} className="glass-card border-primary/20 shadow-glow">
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="font-display font-bold text-primary">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="font-body text-sm opacity-90">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-primary/50 hover:text-primary transition-colors" />
          </Toast>
        );
      })}
      {/* ToastViewport determines where on the screen the notifications appear */}
      <ToastViewport />
    </ToastProvider>
  );
}