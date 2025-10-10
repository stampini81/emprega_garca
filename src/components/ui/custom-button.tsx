import { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";
import { button } from "./custom-button-variants";

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
