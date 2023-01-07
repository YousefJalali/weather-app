'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowLeft } from 'react-icons/fi'

export function Modal({
  children,
  clearModal,
}: {
  children: ReactNode
  clearModal: () => void
}) {
  return createPortal(
    <div className="fixed top-0 left-0 z-30 h-screen w-screen overflow-x-hidden overflow-y-scroll bg-layout-level0 p-6">
      <header className="mb-4 flex items-center justify-between text-2xl">
        <a onClick={clearModal}>
          <FiArrowLeft />
        </a>
      </header>

      <div>{children}</div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}
