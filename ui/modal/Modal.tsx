'use client'

import useWindowSize from '@/hooks/useWindowSize'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'

export function Modal({
  children,
  clearModal,
  modal,
}: {
  children: ReactNode
  clearModal: () => void
  modal: boolean
}) {
  const { height } = useWindowSize()

  if (typeof window === 'undefined') return null

  return (
    <AnimatePresence initial={false}>
      {modal && (
        <>
          {createPortal(
            <div
              className="fixed top-0 left-0 z-30  h-screen w-screen overflow-x-hidden overflow-y-scroll  p-6"
              style={{ height }}
            >
              <motion.div
                transition={{ type: 'spring', stiffness: 100 }}
                className="container relative mx-auto max-w-2xl"
              >
                <header className="relative z-20 mb-4 flex items-center justify-between text-2xl">
                  <a onClick={clearModal}>
                    <FiArrowLeft />
                  </a>
                </header>

                <div>{children}</div>
              </motion.div>
            </div>,
            document.getElementById('modal') as HTMLDivElement
          )}
        </>
      )}
    </AnimatePresence>
  )
}
