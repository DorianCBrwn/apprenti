interface Invoice {
  createdAt: string;
  dueDate: string;
  id: string;
  invoiceNumber: string;
  invoiceStatus: InvoicesStatus;
  lineItems?: lineItem[];
  notes?: string;
  repairDescription: string;
  subject?: string;
  terms?: string;
  vendor: Vendor;
}

interface Vendor {
  vendorStatus: VendorStatus;
  city: string;
  email: string;
  name: string;
  state: string;
  street: string;
  zip: string;
}

interface lineItem {
  amount: number;
  description?: string;
  id: string;
  quantity: number;
}

interface Column {
  id: number;
  title: string;
  cards: Card[];
}

interface Card {
  id: number;
  title: string;
  details: string;
}
