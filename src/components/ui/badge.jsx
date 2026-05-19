import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors", {
  variants: {
    variant: {
      default: "ui-badge-default",
      secondary: "ui-badge-secondary",
      outline: "ui-badge-outline",
      cyan: "ui-badge-cyan",
    },
  },
  defaultVariants: { variant: "default" },
});

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
