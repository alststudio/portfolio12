import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#051A24] text-white shadow-primary',
  secondary: 'bg-white text-[#051A24] shadow-secondary',
  tertiary: 'bg-white text-[#051A24] shadow-tertiary',
};

export default function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
