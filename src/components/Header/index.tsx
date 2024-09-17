import { Link } from 'react-router-dom';
import { routes } from '#/config/routes';
import Logo from '#/assets/svg/reservi-logo.svg?react';
import WhatsappIcon from '#/assets/svg/whatsapp-brands-solid.svg?react';
import EmailIcon from '#/assets/svg/envelope-regular.svg?react';
import MobileIcon from '#/assets/svg/mobile-screen-solid.svg?react';
import SearchIcon from '#/assets/svg/search-solid.svg?react';
import WalletIcon from '#/assets/svg/wallet-solid.svg?react';
import BellIcon from '#/assets/svg/bell-regular.svg?react';
import CloudIcon from '#/assets/svg/cloud-solid.svg?react';
import { UserPicture } from './UserPicture';
import styles from './styles.module.css';

type Props = {
  pageTitle: string
}

export function Header ({ pageTitle }: Props) {
  return (
    <header className={styles.Header}>
      <Link className={styles.link} to={routes.root}>
        <Logo className={styles.logo} />
      </Link>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.wrapper}>
        <CloudIcon height={24} fill="var(--color-gray-light)" />
        <div className={styles.messages}>
          <div className={styles.platform}>
            <EmailIcon width={18} />
            <span>1000</span>
          </div>
          <div className={styles.platform}>
            <MobileIcon height={18} />
            <span>400</span>
          </div>
          <div className={styles.platform}>
            <WhatsappIcon width={16} />
            <span>200</span>
          </div>
        </div>
        <button className={styles.wallet}>
          <WalletIcon height={20} />
          <span>wallet</span>
        </button>
        <button className={styles.search}>
          <SearchIcon height={30} />
        </button>
        <button className={styles.notifications}>
          <BellIcon height={30} />
        </button>
        {/* <UserPicture src="https://flagcdn.com/ch.svg" /> */}
        <UserPicture src="" />
      </div>
    </header>
  )
}