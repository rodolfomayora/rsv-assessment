import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from 'react-router-dom';
import { Checkout } from './views/Checkout';
import { PlaceholderPage } from './components/PlaceholderView/indext';
import { routes } from './config/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* temporal root routing to checkout */}
      <Route path={routes.root} element={<Navigate replace to={routes.checkout} />} />
      <Route index path={routes.checkout} element={<Checkout />} />
      <Route path={routes.calendar} element={<PlaceholderPage pageTitle="calendar" />} />
      <Route path={routes.clients} element={<PlaceholderPage pageTitle="Clients" />} />
      <Route path={routes.forms} element={<PlaceholderPage pageTitle="Forms" />} />
      <Route path={routes.marketing} element={<PlaceholderPage pageTitle="Marketing" />} />
      <Route path={routes.products} element={<PlaceholderPage pageTitle="Products" />} />
      <Route path={routes.reports} element={<PlaceholderPage pageTitle="Reports" />} />
      <Route path={routes.services} element={<PlaceholderPage pageTitle="Services" />} />
      <Route path={routes.settings} element={<PlaceholderPage pageTitle="Settings" />} />
    </>
  )
)

export function App () {
  return <RouterProvider router={router} />
}