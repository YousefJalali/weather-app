import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type Props = {
  children: JSX.Element | JSX.Element[] | string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  )
}
