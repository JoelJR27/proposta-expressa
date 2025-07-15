import { useState } from "react";
import type { ProposalFormData } from "../types/ProposalFormData";
import type { Item } from "../types/Item";

export const useProposalForm = () => {
  const [proposalFormData, setProposalFormData] = useState<ProposalFormData>({
    clientName: "",
    freelancerName: "",
    projectDescription: "",
    items: [],
    deadline: "",
    totalPrice: "",
    paymentTerms: "",
    notes: "",
  });

  const updateField = (field: string, value: string | Item[]) => {
    setProposalFormData({ ...proposalFormData, [field]: value });
  };

  const updateItem = (index: number, value: string) => {
    const updated = proposalFormData.items.map((item, i) =>
      i === index ? { ...item, content: value } : item
    );
    setProposalFormData({ ...proposalFormData, items: updated });
  };

  return {
    proposalFormData,
    setProposalFormData,
    updateField,
    updateItem,
  };
};
