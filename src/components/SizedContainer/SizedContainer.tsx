import styles from './sized-container.module.css'

export default function SizedContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return <div className={`${styles.maxWidth} ${className}`}>{children}</div>
}
