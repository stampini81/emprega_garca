/* eslint-disable react-refresh/only-export-components */
import { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "disabled:opacity-50 font-medium rounded-md text-white duration-300",

  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary",
      success:
        "bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700",
      danger:
        "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
      secondary: "bg-secondary hover:bg-secondary",
      outline: "bg-transparent border-primary hover:bg-foreground",
    },
    size: {
      sm: "p-1.5 h-8 text-xs",
      md: "p-2.5 h-10 text-sm",
      lg: "p-4 h-10 text-md",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ variant, size, className })}>
      {children}
    </button>
  );
}
