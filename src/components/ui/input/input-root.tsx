import { forwardRef } from 'react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        id={props.name}
        ref={ref}
        className={twMerge(
          'relative w-full h-11 p-2.5 z-50 overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
          className,
        )}
        {...props}
      />
    );
  },
);

export { InputRoot };
