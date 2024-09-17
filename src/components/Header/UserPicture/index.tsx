import { useState } from 'react';
import styles from './styles.module.css';

type Props = {
  src: string,
}

export function UserPicture ({ src = "" }: Props) {
  const [error, setError] = useState(false);
  if (error) return <div className={styles.UserPicture}>JM</div>; // placeholder
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