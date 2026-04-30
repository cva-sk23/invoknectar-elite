import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-dark-900 text-white hover:bg-dark-800 active:scale-95 dark:bg-white dark:text-dark-900 dark:hover:bg-gray-100',
    secondary:
      'border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark-900',
    accent:
      'bg-gold-300 text-white hover:bg-gold-400 active:scale-95',
    outline:
      'border-2 border-current hover:bg-current hover:text-white',
    ghost:
      'text-dark-900 hover:bg-gray-100 dark:text-white dark:hover:bg-dark-800',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  )
}