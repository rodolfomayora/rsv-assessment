import styles from './styles.module.css';

type Props = {
  quantityItems?: number
}

export function SuspenseCheckoutTable ({ quantityItems = 10 }: Props) {
  const tableRows = Array(quantityItems).fill(0).map((_, index) => (
    <tr key={index} className={styles.x}>
      <td><div className={styles.loading} /></td>
    </tr>
  ))

  return (
    <table className={styles.SuspenseCheckoutTable}>
      <thead className={styles.thead}>
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
      <tbody className={styles.tbody}>{tableRows}</tbody>
    </table>
  )
}