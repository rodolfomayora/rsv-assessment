import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Dashboard } from '#/layouts/Dashboard';
import { CheckoutTable } from './CheckoutTable';
import { SuspenseCheckoutTable } from './SuspenseCheckoutTable';
import { ErrorCheckoutTable } from './ErrorCheckoutTable';
import { CheckoutFilters } from './CheckoutFilters';
import { CheckoutSummary } from './CheckoutSummary';
import styles from './styles.module.css';

export function Checkout () {
  return (
    <Dashboard pageTitle="Checkout">
      <main className={styles.Checkout}>
        <div className={styles.table}>
          <CheckoutFilters />
          <ErrorBoundary fallback={<ErrorCheckoutTable />}>
            <Suspense fallback={<SuspenseCheckoutTable />}>
              <CheckoutTable />
            </Suspense>
          </ErrorBoundary>
        </div>
        <CheckoutSummary />
      </main>
    </Dashboard>
  )
}