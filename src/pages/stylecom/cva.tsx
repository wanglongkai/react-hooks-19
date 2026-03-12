import { cva } from 'class-variance-authority';
import { cn } from '@/lib/stylelib';

const button = cva('text-16px', {
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-red-500 text-white',
    },
    size: {
      sm: 'p-2',
      md: 'p-6',
      lg: 'p-10',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      size: 'md',
      rounded: 'md',
      className: 'font-bold',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    rounded: 'md',
  },
});

export default function Button() {
  const customClass = 'shadow-[10px_10px_10px_rgba(0,0,0,0.5)]';
  const color = 'primary';
  const size = 'md';
  const rounded = 'md';
  const classes = cn(button({ color, size, rounded }), customClass);

  return <button className={classes}>测试Cva,clsx,twMerge</button>;
}
