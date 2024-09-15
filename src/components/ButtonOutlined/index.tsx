import type { ComponentProps } from 'react';
import { Button } from '#/components/Button';
import styles from './styles.module.css';

type Props = ComponentProps<typeof Button>;

export function ButtonOutlined ({
  children,
  ...props
}: Props) {

  return (
    <Button className={styles.ButtonOutlined} {...props}>
      {children}
    </Button>
  )
}