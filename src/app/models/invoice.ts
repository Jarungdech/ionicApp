export class Invoice {
    id: number;
    invoiceNo: string;
    invoiceDate: Date;
    customerId: number;
    remark: string;
    subtotal: number;
    vat: number;
    discount: number;
    grandTotal: number;
    invoiceItems: InvoiceItems[];
}

export class InvoiceItems {
    id: number;
    invoiceId: number;
    lineNo: number;
    itemId: number;
    description: string;
    qty: number;
    uom: string;
    unitPrice: number;
    discount: number;
    vatId: number;
    lineTotal: number;
}
