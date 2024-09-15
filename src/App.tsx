import { Dashboard } from '#/layouts/Dashboard';
import './App.css'

export function App () {
  return (
    <Dashboard>
      <main className="main">
        <div className="filters">
          <input type="text" className="input" />
          <button className="button">Filter</button>
          <button className="button">Sort</button>
          <button className="button">Calendar</button>
          <button className="button">Create New Checkout</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ref<br />#</th>
              <th scope="col">Client</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Purchase Time</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              Array(20).fill(0).map((_, index) => (
                <tr key={index}>
                  <td scope="row">{index}</td>
                  <td>Tony Alarez</td>
                  <td>Express Food</td>
                  <td>Service</td>
                  <td>11/08/22/ 13:00 - 13:30</td>
                  <td>-</td>
                  <td>25.000</td>
                  <td>Draft</td>
                  <td><button>action</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </Dashboard>
  )
}