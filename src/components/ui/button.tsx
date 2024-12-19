import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

const variants = {
  primary: 'bg-white text-blue-600 hover:bg-white/30',
  secondary: 'bg-blue-600 text-zinc-100 hover:bg-blue-600/80 focus-visible:ring-offset-2',
  danger: 'text-red-600',
};

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
  fullWidth?: boolean;
  isLarge?: boolean;
  variant?: keyof typeof variants;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  isLarge,
  fullWidth,
  className,
  children,
  asChild,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={twMerge(
        'inline-flex items-center justify-center rounded px-2 py-1 shadow transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:cursor-not-allowed',
        variants[variant],
        fullWidth && 'w-full',
        isLarge && 'p-2',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};
