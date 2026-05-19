import * as React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "ui-input flex h-11 w-full rounded-xl px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
