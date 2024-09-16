import EditIcon from '#/assets/svg/pen-solid.svg?react';
// import BillIcon from '#/assets/';
import styles from './styles.module.css';

// type BasicInvoice = {
//   id: string,
//   clientName: string,
//   description: string,
//   type: 'poduct' | 'service' | 'voucher',
//   bookingDate: string,
//   purchaseTime: string,
//   price: number,
//   status: 'draft' | 'updaid' | 'paid',
// }

export function CheckoutTable () {

  const tableRows = Array(20).fill(0).map((_, index) => (
    <tr key={index}>
      <td scope="row">{index}</td>
      <td>Tony Alarez</td>
      <td>Express Food</td>
      <td>Service</td>
      <td>11/08/22/ 13:00 - 13:30</td>
      <td>-</td>
      <td>25.000</td>
      <td>Draft</td>
      <td className={styles.actions}>
        <button className={styles.button}>
          <EditIcon height={24} />
        </button>
      </td>
    </tr>
  ))

  return (
    <table className={styles.CheckoutTable}>
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
      <tbody>{tableRows}</tbody>
    </table>
  )
}