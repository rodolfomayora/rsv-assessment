import type { ReactNode } from 'react';
import { Header } from '#/components/Header';
import { Navigation } from '#/components/Navigation';
import styles from './styles.module.css';

type Props = {
  children: ReactNode,
}

export function Dashboard ({ children }: Props) {
  return (
    <>
      <Header />
      <div className={styles.Layout}>
        <Navigation />
        {children}
      </div>
    </>
  )
}