import Icon from '#/assets/svg/cube-solid.svg?react';
import { NavigationItem } from './NavigationItem';
import styles from './styles.module.css';

export function Navigation () {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.list}>
        <li><a><NavigationItem >Calendar</NavigationItem></a></li>
        <li><a><NavigationItem icon={<Icon width={30} />}>Checkout</NavigationItem></a></li>
        <div className={styles.separator} />
        <li><a><NavigationItem>Charts</NavigationItem></a></li>
        <li><a><NavigationItem>Proucts</NavigationItem></a></li>
        <li><a><NavigationItem>Services</NavigationItem></a></li>
        <li><a><NavigationItem>Forms</NavigationItem></a></li>
        <li><a><NavigationItem>Marketing</NavigationItem></a></li>
        <li><a><NavigationItem>Forms</NavigationItem></a></li>
        <div className={styles.separator} />
        <li><a><NavigationItem>Reports</NavigationItem></a></li>
        <li><a><NavigationItem>Settings</NavigationItem></a></li>
      </ul>
    </nav>
  )
}