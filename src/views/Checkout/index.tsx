import { Dashboard } from '#/layouts/Dashboard';
import { CheckoutTable } from './CheckoutTable';
import { CheckoutFilters } from './CheckoutFilters';
import { CheckoutSummary } from './CheckoutSummary';
import styles from './styles.module.css';

export function Checkout () {
  return (
    <Dashboard pageTitle="Checkout">
      <main className={styles.Checkout}>
        <div className={styles.table}>
          <CheckoutFilters />
          <CheckoutTable />
        </div>
        <CheckoutSummary />
      </main>
    </Dashboard>
  )
}