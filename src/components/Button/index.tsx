import type { ComponentProps, ReactNode } from 'react';
import styles from './styles.module.css';

type Props = ComponentProps<'button'> & {
  children: ReactNode,
}

export function Button ({
  className = styles.Button,
  children,
  ...props
}: Props) {

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}