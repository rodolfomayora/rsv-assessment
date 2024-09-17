import { BasicInvoice } from '#/types/BasicInvoice';

export class InvoicesApi {
  static async getAll (): Promise<BasicInvoice[]> {
    const bills = Array(30).fill(0).map((_, index) => {
      const status = ['draft', 'updaid', 'paid'][Math.floor(Math.random() * 3)];
      return {
        id: `${index + 1}`.padStart(3, "0"),
        clientName: 'Tony Alarez',
        description: 'Express Food',
        type: ['product', 'service', 'voucher'][Math.floor(Math.random() * 3)],
        bookingDate: '11/08/22/ 13:00 - 13:30',
        purchaseTime: status === 'paid' ? '11/08/22/ 13:00 - 13:30' : '-',
        price: 25000,
        status: status,
      }
    }) as BasicInvoice[];

    await new Promise((resolve) => setInterval(resolve, 3000)); // delay 3 seconds

    return bills;
  }
}