import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ComponentProps<'div'> {}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        'max-w-[1280px] md:min-h-screen mx-auto grid grid-cols-12 gap-3 md:gap-0',
        props.className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
