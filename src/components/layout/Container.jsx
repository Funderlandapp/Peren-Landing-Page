import { createElement } from 'react'
import clsx from 'clsx'

const Container = ({ as = 'div', className, children, style, ...props }) => {
  // Dynamic padding that scales smoothly from mobile to desktop
  // clamp(12px, 4vw, 64px) provides:
  // - 12px minimum (good for < 370px)
  // - Scales smoothly with viewport width (4vw)
  // - 64px maximum (good for desktop)
  const dynamicPadding = {
    paddingLeft: 'clamp(12px, 4vw, 64px)',
    paddingRight: 'clamp(12px, 4vw, 64px)'
  }

  return createElement(
    as,
    {
      className: clsx('mx-auto w-full', className),
      style: { ...dynamicPadding, ...style },
      ...props
    },
    children
  )
}

export default Container

