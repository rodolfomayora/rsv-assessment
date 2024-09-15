import Logo from '#/assets/svg/reservi-logo.svg?react';
import './App.css'

export function App () {
  return (
    <>
      <header className="header">
        <Logo className="logo" />
        <h1 className="title">Checkout</h1>
      </header>
      <div className="layout">
        <nav className="navigation">
          <ul className="list">
            <li><a><span>Calendar</span></a></li>
            <li><a><span>Checkout</span></a></li>
            <div><hr /></div>
            <li><a><span>Charts</span></a></li>
            <li><a><span>Proucts</span></a></li>
            <li><a><span>Services</span></a></li>
            <li><a><span>Forms</span></a></li>
            <li><a><span>Marketing</span></a></li>
            <li><a><span>Forms</span></a></li>
            <div><hr /></div>
            <li><a><span>Reports</span></a></li>
            <li><a><span>Settings</span></a></li>
          </ul>
        </nav>
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
                  <tr>
                    <td scope="row">{index}</td>
                    <td>Tony Alarez</td>
                    <td>Express Food</td>
                    <td>Service</td>
                    <td>11/08/22/ 13:00 - 13:30</td>
                    <td>-</td>
                    <td>25.000</td>
                    <td>Darf</td>
                    <td><button>action</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}