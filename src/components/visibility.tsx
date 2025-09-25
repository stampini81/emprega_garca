import { ReactNode } from "react";

interface VisibilityProps {
  condition: boolean;
  component: ReactNode;
  replacement?: ReactNode;
}

export function Visibility({
  condition,
  component,
  replacement = <></>,
}: VisibilityProps) {
  if (condition) {
    return component;
  }

  return replacement;
}
