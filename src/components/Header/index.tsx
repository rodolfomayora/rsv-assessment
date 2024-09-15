import { useState } from 'react';
import Logo from '#/assets/svg/reservi-logo.svg?react';
import Icon from '#/assets/svg/cube-solid.svg?react';
import styles from './styles.module.css';

type Props = {
  src: string,
}

function UserPicture ({ src = "" }: Props) {
  const [error, setError] = useState(false);
  if (error) return <div className={styles.picture}>JM</div>; // placeholder
  return (
    <img className={styles.picture}
      src={src}
      alt="User Profile Picture"
      loading="eager"
      decoding="sync"
      width={50}
      height={50}
      onError={() => setError(true)}
    />
  )
}

export function Header () {
  return (
    <header className={styles.Header}>
      <Logo className={styles.logo} />
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.wrapper}>
        <Icon height={20} />
        <div className={styles.messages}>
          <div className={styles.platform}>
            <Icon height={20} />
            <span>1000</span>
          </div>
          <div className={styles.platform}>
            <Icon height={20} />
            <span>400</span>
          </div>
          <div className={styles.platform}>
            <Icon height={20} />
            <span>200</span>
          </div>
        </div>
        <button className={styles.wallet}>
          <Icon height={20} />
          <span>wallet</span>
        </button>
        <Icon height={30} />
        <Icon height={30} />
        {/* <UserPicture src="https://flagcdn.com/ch.svg" /> */}
        <UserPicture src="" />
      </div>
    </header>
  )
}