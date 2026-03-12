import clsx from 'clsx';
import { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 合并tailWind和自定义变体
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
