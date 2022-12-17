'use client'

import { CardSkeleton } from '@/ui/card'
import { SkeletonList } from '@/ui/skeleton'

export default function Loading() {
  return (
    <>
      <CardSkeleton current />
      <SkeletonList count={3} spaceY>
        <CardSkeleton />
      </SkeletonList>
    </>
  )
}
