import CalendarIcon from '#/assets/svg/calendar-regular.svg?react';
import CheckoutIcon from '#/assets/svg/money-bills-solid.svg?react';
import ClientsIcon from '#/assets/svg/address-book-regular.svg?react';
import ProductIcon from '#/assets/svg/products-solid.svg?react';
import ServicesIcon from '#/assets/svg/scissors-solid.svg?react';
import FormsIcon from '#/assets/svg/paste-regular.svg?react';
import MarketingIcon from '#/assets/svg/bullhorn-solid.svg?react';
import ReportIcon from '#/assets/svg/square-poll-vertical-solid.svg?react';
import SettingIcon from '#/assets/svg/gear-solid.svg?react';
import { NavigationItem } from './NavigationItem';
import styles from './styles.module.css';

export function Navigation () {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.list}>
        <li><a>
          <NavigationItem icon={<CalendarIcon height={24} />}>
            Calendar
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<CheckoutIcon width={30} />}>
            Checkout
          </NavigationItem>
        </a></li>
        <div className={styles.separator} />
        <li><a>
          <NavigationItem icon={<ClientsIcon width={24} />}>
            Clients
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<ProductIcon width={24} />}>
            Proucts
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<ServicesIcon width={24} />}>
            Services
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<FormsIcon width={24} />}>
            Forms
          </NavigationItem>
        </a></li>
        <div className={styles.separator} />
        <li><a>
          <NavigationItem icon={<MarketingIcon width={24} />}>
            Marketing
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<ReportIcon width={24} />}>
            Reports
          </NavigationItem>
        </a></li>
        <li><a>
          <NavigationItem icon={<SettingIcon width={24} />}>
            Settings
          </NavigationItem>
        </a></li>
      </ul>
    </nav>
  )
}