import { cn } from "@/utils/cn";
import { brand } from "@/data/brand";

const sizeMap = {
  sm: { full: "h-8", mark: "h-8 w-8" },
  md: { full: "h-9 sm:h-10", mark: "h-9 w-9 sm:h-10 sm:w-10" },
  lg: { full: "h-11 sm:h-12", mark: "h-11 w-11 sm:h-12 sm:w-12" },
};

/**
 * @param {"full" | "mark"} variant — wordmark lockup or CH icon only
 * @param {"sm" | "md" | "lg"} size
 */
export function BrandLogo({ variant = "full", size = "md", className }) {
  const src = variant === "full" ? brand.logo : brand.logoMark;
  const alt =
    variant === "full" ? `${brand.name} — ${brand.monogram} logo` : `${brand.monogram} logo`;

  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-auto object-contain shrink-0", sizeMap[size][variant], className)}
      height={variant === "full" ? 48 : 40}
      decoding="async"
    />
  );
}
