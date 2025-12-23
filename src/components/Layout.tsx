import clsx from 'clsx'
import React from 'react'

const Layout = ({
    children,
    className,
    inputClassName,
}: {
    children: React.ReactNode,
    className?: string,
    inputClassName?: string,
}) => {
  return (
    <div className={clsx('h-full w-full bg-white', className)}>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout