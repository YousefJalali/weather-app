'use client'

import useWindowSize from '@/hooks/useWindowSize'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function Modal({
  children,
  clearModal,
}: {
  children: ReactNode
  clearModal: () => void
}) {
  const { height } = useWindowSize()

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 z-30  h-screen w-screen overflow-x-hidden overflow-y-scroll bg-layout-level0 p-6"
      style={{ height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container relative mx-auto max-w-2xl">
        <header className="mb-4 flex cursor-pointer items-center justify-between text-2xl">
          <a
            onClick={clearModal}
            className="-mt-3 -ml-3 rounded-full p-3 hover:bg-layout-level0accent active:bg-layout-level1accent"
          >
            <FiArrowLeft />
          </a>
        </header>

        <div>{children}</div>
      </div>
    </motion.div>,
    document.getElementById('modal') as HTMLDivElement
  )
}
