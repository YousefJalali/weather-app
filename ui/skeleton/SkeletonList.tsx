'use client'

export function SkeletonList({
  children,
  count,
  className,
}: {
  children: JSX.Element
  count: number
  className?: string
}) {
  return (
    <ul className={className}>
      {new Array(count).fill(0).map((city, i) => (
        <li key={i}>{children}</li>
      ))}
    </ul>
  )
}
