import type { ReactNode } from 'react';
import PlaceholderIcon from '#/assets/svg/cube-solid.svg?react';
import styles from './styles.module.css';

type Props = {
  children: string,
  icon?: ReactNode,
}

export function NavigationItem ({ children, icon = <PlaceholderIcon width={30} /> }: Props) {
  return (
    <div className={styles.NavigationItem}>
      {icon}
      <span>{children}</span>
    </div>
  )
}