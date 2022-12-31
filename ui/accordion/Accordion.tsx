'use client'

import { Children, cloneElement, ReactNode } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AccordionCtxProvider, useAccordion } from './AccordionContext'

export function Accordion({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return (
    <AccordionCtxProvider>
      <div className={className}>
        {Children.map(children, (child, i) =>
          cloneElement(child, { index: i })
        )}
      </div>
    </AccordionCtxProvider>
  )
}

export function AccordionItem({
  children,
  index,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  index?: number
  className?: string
}) {
  return (
    <div className={className}>
      {Children.map(children, (child) => cloneElement(child, { index }))}
    </div>
  )
}

export function AccordionTitle({
  children,
  index,
  className,
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const { open, setOpen } = useAccordion()

  return (
    <div className={className} onClick={() => setOpen(index)}>
      {children}

      <div className="ml-4">
        {open === index ? <FiChevronUp /> : <FiChevronDown />}
      </div>
    </div>
  )
}

export function AccordionContent({
  children,
  index,
  className,
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const { open } = useAccordion()

  return open === index ? <div className={className}>{children}</div> : null
}
