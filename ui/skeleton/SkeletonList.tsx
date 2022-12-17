'use client'

import styles from './Skeleton.module.css'

export function SkeletonList({
  children,
  count,
  spaceY = false,
}: {
  children: JSX.Element
  count: number
  spaceY?: boolean
}) {
  return (
    <ul className={styles.list}>
      {new Array(count).fill(0).map((city, i) => (
        <li key={i} className={spaceY ? styles.space_y : ''}>
          {children}
        </li>
      ))}
    </ul>
  )
}
