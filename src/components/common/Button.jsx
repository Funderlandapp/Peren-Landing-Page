import { createElement } from 'react'
import clsx from 'clsx'

const baseClasses =
  'inline-flex items-center justify-center rounded-10 border text-body-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants = {
  primary:
    'border-transparent bg-peren-ink text-peren-white hover:bg-peren-midnight focus-visible:ring-peren-midnight focus-visible:ring-offset-peren-white',
  secondary:
    'border-peren-ink text-peren-ink hover:bg-peren-ink hover:text-peren-white focus-visible:ring-peren-ink focus-visible:ring-offset-peren-white',
  ghost:
    'border-transparent bg-peren-white text-peren-ink hover:bg-peren-sun/70 focus-visible:ring-peren-sun focus-visible:ring-offset-peren-ink',
}

const Button = ({ as = 'button', variant = 'primary', className, children, ...props }) => {
  return createElement(
    as,
    { className: clsx(baseClasses, variants[variant], className), ...props },
    children
  )
}

export default Button

