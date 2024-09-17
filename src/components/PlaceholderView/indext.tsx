import { Dashboard } from '#/layouts/Dashboard';
import { Link } from 'react-router-dom';

export function PlaceholderPage ({ pageTitle }: { pageTitle: string }) {
  return (
    <Dashboard pageTitle={pageTitle}>
      <main style={{ display: 'grid', placeContent: 'center center', placeItems: 'center' }}>
        <h2>🚧 Work in Progress 🚧</h2>
        <p>This will be available soon</p>
        <Link to="/checkout">Go to checkout</Link>
      </main>  
    </Dashboard>
  )
}