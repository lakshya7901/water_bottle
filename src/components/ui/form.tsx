import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

/* ... Context and Hook Logic stays the same ... */

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();
    return (
      <FormItemContext.Provider value={{ id }}>
        {/* Increased spacing for a cleaner, high-end water brand feel */}
        <div ref={ref} className={cn("space-y-3", className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      /* error color tuned to be less 'harsh' and more professional */
      className={cn(error && "text-red-500 animate-pulse", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        /* Using font-body for descriptions */
        className={cn("text-[13px] font-body text-muted-foreground/70 leading-relaxed", className)}
        {...props}
      />
    );
  }
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) return null;

    return (
      <p
        ref={ref}
        id={formMessageId}
        /* Error message with a slight glow and clean weight */
        className={cn("text-xs font-bold text-red-500 drop-shadow-sm", className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

/* ... Exporting ... */
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };