export type BasicInvoice = {
  id: string,
  clientName: string,
  description: string,
  type: 'poduct' | 'service' | 'voucher',
  bookingDate: string,
  purchaseTime?: string,
  price: number,
  status: 'draft' | 'updaid' | 'paid',
}
