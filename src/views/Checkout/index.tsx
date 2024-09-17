import { Suspense } from 'react';
import { Dashboard } from '#/layouts/Dashboard';
import { CheckoutTable } from './CheckoutTable';
import { SuspenseCheckoutTable } from './SuspenseCheckoutTable';
import { CheckoutFilters } from './CheckoutFilters';
import { CheckoutSummary } from './CheckoutSummary';
import styles from './styles.module.css';

export function Checkout () {
  return (
    <Dashboard pageTitle="Checkout">
      <main className={styles.Checkout}>
        <div className={styles.table}>
          <CheckoutFilters />
          <Suspense fallback={<SuspenseCheckoutTable />}>
            <CheckoutTable />
          </Suspense>
        </div>
        <CheckoutSummary />
      </main>
    </Dashboard>
  )
}