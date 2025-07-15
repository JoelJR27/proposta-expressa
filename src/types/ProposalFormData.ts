import type { Item } from "./Item";

export type ProposalFormData = {
  clientName: string;
  freelancerName: string;
  projectDescription: string;
  items: Item[];
  deadline: string;
  totalPrice: string;
  paymentTerms: string;
  notes?: string;
};
