import type { ComponentProps } from 'react';
import Icon from '#/assets/svg/cube-solid.svg?react';
import styles from './styles.module.css';

type Props = ComponentProps<'input'> & {
  onClick?: () => void,
}

export function SearchInput ({ onClick, ...props }: Props) {
  return (
    <form className={styles.SearchInput} role="search">
      <input className={styles.input} type="search" {...props} />
      <button type="button" className={styles.button} onClick={onClick}>
        <Icon width={30} />
      </button>
    </form>
  )
}