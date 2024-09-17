import { useSuspenseQuery } from '@tanstack/react-query';
import { InvoicesApi } from '#/api/dummy/invoices';
import { BasicInvoice } from '#/types/BasicInvoice';
import EditIcon from '#/assets/svg/pen-solid.svg?react';
import BillIcon from '#/assets/svg/receipt-solid.svg?react';
import { NoResults } from './NoResults';
import styles from './styles.module.css';

// export function CheckoutTable ({ limit, offset }: Props) {
export function CheckoutTable () {
  const { data } = useSuspenseQuery<BasicInvoice[]>({
    queryKey: ['bills'],
    queryFn: () => InvoicesApi.getAll(),
    // queryFn: async () => {
    //   const result = await InvoicesApi.getAll();
    //   // throw new Error();
    //   // return [];
    //   return result;
    // }
  })

  if (!data || data.length === 0) return <NoResults />;

  const tableRows = data.map((bill) => {
    const isPaid = bill.status === 'paid';
    const icon = isPaid
      ? <BillIcon height={24} />
      : <EditIcon height={24} />
      ;

    return (
      <tr key={bill.id}>
        <td scope="row">{bill.id}</td>
        <td>{bill.clientName}</td>
        <td>{bill.description}</td>
        <td>{bill.type}</td>
        <td>{bill.bookingDate}</td>
        <td>{bill.purchaseTime}</td>
        <td>{bill.price}</td>
        <td>{bill.status}</td>
        <td className={styles.actions}>
          <button className={styles.button}>
            {icon} 
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className={styles.CheckoutTable}>
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