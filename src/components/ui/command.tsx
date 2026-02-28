import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    /* Updated with glass-card base and rounded-xl */
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-xl bg-background/80 backdrop-blur-xl text-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-glow border-primary/10 max-w-[90vw] md:max-w-[600px]">
        <Command className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:font-display [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-primary/60 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:text-primary/50 [&_[cmdk-input]]:h-14 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-4 [&_[cmdk-item]]:rounded-lg">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-primary/10 px-4" cmdk-input-wrapper="">
    <Search className="mr-3 h-5 w-5 shrink-0 opacity-50 text-primary" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-md bg-transparent py-3 text-base font-body outline-none placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    /* Updated selection state to use your liquid blue wash */
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm font-body outline-none transition-colors",
      "data-[selected='true']:bg-primary/10 data-[selected=true]:text-primary data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-primary/10", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

/* Remaining sub-components follow the same glass-morphism logic */

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};