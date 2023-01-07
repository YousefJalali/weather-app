// 'use client'

// import { Card } from '@/ui/card'
import { Spinner } from '@/ui/spinner'

// import { SkeletonList } from '@/ui/skeleton'

// export default function Loading() {
//   return <div>Loading...</div>
// }

export default function Loading() {
  return <Spinner />
}
// export default function Loading() {
//   return (
//     <SkeletonList count={3} className="space-y-5">
//       <Card city={undefined} />
//     </SkeletonList>
//   )
// }
