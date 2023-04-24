'use client'

import { Children, cloneElement, ReactNode } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import { AccordionCtxProvider, useAccordion } from './AccordionContext'
import { motion, AnimatePresence } from 'framer-motion'

export function Accordion({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return (
    <AccordionCtxProvider>
      <motion.div
        className={className}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {Children.map(children, (child, i) =>
          cloneElement(child, { index: i })
        )}
      </motion.div>
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
    <div
      className={`cursor-pointer select-none ${className}`}
      onClick={() => setOpen(index)}
    >
      {children}

      <div className="ml-4">
        <FiChevronUp
          className={`${open === index ? '' : 'rotate-180'} transition-all`}
        />
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

  return (
    <AnimatePresence>
      {open === index && (
        <motion.div
          className={`overflow-hidden ${className}`}
          initial={{ height: 0 }}
          animate={{ height: 'fit-content' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
