import { NavigationItem } from './NavigationItem';
import { NavLink } from 'react-router-dom';
import { routes } from '#/config/routes';
import CalendarIcon from '#/assets/svg/calendar-regular.svg?react';
import CheckoutIcon from '#/assets/svg/money-bills-solid.svg?react';
import ClientsIcon from '#/assets/svg/address-book-regular.svg?react';
import ProductIcon from '#/assets/svg/products-solid.svg?react';
import ServicesIcon from '#/assets/svg/scissors-solid.svg?react';
import FormsIcon from '#/assets/svg/paste-regular.svg?react';
import MarketingIcon from '#/assets/svg/bullhorn-solid.svg?react';
import ReportIcon from '#/assets/svg/square-poll-vertical-solid.svg?react';
import SettingIcon from '#/assets/svg/gear-solid.svg?react';
import styles from './styles.module.css';

export function Navigation () {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink to={routes.calendar}>
            <NavigationItem icon={<CalendarIcon height={24} />}>
              Calendar
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.checkout}>
            <NavigationItem icon={<CheckoutIcon width={30} />}>
              Checkout
            </NavigationItem>
          </NavLink>
        </li>
        <div className={styles.separator} />
        <li>
          <NavLink to={routes.clients}>
            <NavigationItem icon={<ClientsIcon width={24} />}>
              Clients
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.products}>
            <NavigationItem icon={<ProductIcon width={24} />}>
              Products
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.services}>
            <NavigationItem icon={<ServicesIcon width={24} />}>
              Services
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.forms}>
            <NavigationItem icon={<FormsIcon width={24} />}>
              Forms
            </NavigationItem>
          </NavLink>
        </li>
        <div className={styles.separator} />
        <li>
          <NavLink to={routes.marketing}>
            <NavigationItem icon={<MarketingIcon width={24} />}>
              Marketing
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.reports}>
            <NavigationItem icon={<ReportIcon width={24} />}>
              Reports
            </NavigationItem>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.settings}>
            <NavigationItem icon={<SettingIcon width={24} />}>
              Settings
            </NavigationItem>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}