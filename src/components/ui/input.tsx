import { useId } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}

export const Input = ({ label, className, ...rest }: InputProps) => {
  const id = useId();

  return (
    <div className="flex w-full items-center gap-x-5">
      {label && (
        <label className="min-w-28" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={twMerge(
          'w-full text-ellipsis rounded bg-white px-2 py-1 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600',
          className,
        )}
        {...rest}
      />
    </div>
  );
};
