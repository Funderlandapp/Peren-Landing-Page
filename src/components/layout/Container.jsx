import { createElement } from 'react'
import clsx from 'clsx'

const baseClass = 'mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8'

const Container = ({ as = 'div', className, children, ...props }) => {
  return createElement(as, { className: clsx(baseClass, className), ...props }, children)
}

export default Container

