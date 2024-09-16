import { Dashboard } from '#/layouts/Dashboard';
import { CheckoutTable } from './CheckoutTable';
import { CheckoutFilters } from './CheckoutFilters';
import styles from './styles.module.css';

export function Checkout () {
  return (
    <Dashboard>
      <main className={styles.Checkout}>
        <CheckoutFilters />
        <CheckoutTable />
      </main>
    </Dashboard>
  )
}