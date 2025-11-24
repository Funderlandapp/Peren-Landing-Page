import { createElement } from 'react'
import clsx from 'clsx'

const baseClass = 'mx-auto w-full px-6 sm:px-10 lg:px-16'

const Container = ({ as = 'div', className, children, ...props }) => {
  return createElement(as, { className: clsx(baseClass, className), ...props }, children)
}

export default Container

