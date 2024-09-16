import type { ReactNode } from 'react';
import { Header } from '#/components/Header';
import { Navigation } from '#/components/Navigation';
import { useTabTitle } from '#/hooks/useTabTitle';
import styles from './styles.module.css';

type Props = {
  children: ReactNode,
  pageTitle: string,
}

export function Dashboard ({ children, pageTitle }: Props) {
  useTabTitle(pageTitle);
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className={styles.Layout}>
        <Navigation />
        {children}
      </div>
    </>
  )
}