import { useRef } from "react";
import type { ProposalFormData } from "../../types/FormData";

type ProposalFormInputProps = {
  hasDeleteButton?: boolean;
  id: string;
  proposalFormData : ProposalFormData;
  setFormData: (ProposalFormData : ProposalFormData ) => void;
  field: string;
};
export function ProposalFormInput({
  hasDeleteButton,
  id,
  proposalFormData ,
  setFormData,
  field,
}: ProposalFormInputProps) {
  const textRef = useRef<HTMLInputElement>(null);
  console.log(textRef.current?.value);
  return (
    <>
      <input
        ref={textRef}
        className="w-full bg-border rounded-default-radius p-1 text-secondary-text border-none outline-secondary-blue outline-1"
        type="text"
        id={id}
        onChange={() => {
          setFormData({ ...proposalFormData , [field]: textRef.current?.value });
        }}
      />
      {hasDeleteButton && <button>X</button>}
    </>
  );
}
