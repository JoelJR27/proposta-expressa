import { useRef } from "react";
import type { ProposalFormData } from "../../types/FormData";

type ProposalFormTextareaProps = {
  id: string;
  field: string;
  proposalFormData: ProposalFormData;
  setProposalFormData: (ProposalFormData: ProposalFormData) => void;
};
export function ProposalFormTextarea({
  id,
  field,
  proposalFormData,
  setProposalFormData,
}: ProposalFormTextareaProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      ref={textRef}
      className="w-full bg-border rounded-default-radius border border-secondary-blue outline-0 p-2 text-secondary-text"
      id={id}
      rows={3}
      onChange={() => {
        setProposalFormData({
          ...proposalFormData,
          [field]: textRef.current?.value,
        });
      }}
    ></textarea>
  );
}
