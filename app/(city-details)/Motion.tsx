'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Motion({
  children,
  ...props
}: {
  children: ReactNode
}) {
  return (
    <motion.div className="absolute h-fit w-fit" {...props}>
      {children}
    </motion.div>
  )
}
