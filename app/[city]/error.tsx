'use client'

import { useEffect } from 'react'
import { ErrorMessage } from '@/ui/error-message'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('error', error)
  }, [error])

  return <ErrorMessage />
}
