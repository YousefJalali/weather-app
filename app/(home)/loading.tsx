'use client';

import { Spinner } from '@/ui/spinner';

// import { CardSkeleton } from "@/ui/card";
// import { SkeletonList } from "@/ui/skeleton";

export default function Loading() {
  return <Spinner />;
}
// export default function Loading() {
//   return (
//     <>
//       <CardSkeleton current />
//       <SkeletonList count={3} spaceY>
//         <CardSkeleton />
//       </SkeletonList>
//     </>
//   )
// }
