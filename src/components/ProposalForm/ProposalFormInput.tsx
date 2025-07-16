import { useRef } from "react";
import type { ProposalFormData } from "../../types/ProposalFormData";

type ProposalFormInputProps = {
  hasDeleteButton?: boolean;
  id: string | undefined;
  proposalFormData?: ProposalFormData;
  setProposalFormData?: (ProposalFormData: ProposalFormData) => void;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | undefined;
};
export function ProposalFormInput({
  hasDeleteButton,
  id,
  proposalFormData,
  setProposalFormData,
  placeholder,
  onChange,
  value,
}: ProposalFormInputProps) {
  const textRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        ref={textRef}
        className="w-full bg-border rounded-default-radius p-1 text-secondary-text border-none outline-0 max-xs:placeholder:text-[10px] max-xs:text-xs"
        type="text"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {hasDeleteButton && (
        <button
          className="cursor-pointer absolute right-1.5 top-1 font-bold text-red-500 max-xs:text-sm max-xs:font-mono max-xs:top-2"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            console.log(textRef.current?.id);
            if (proposalFormData) {
              setProposalFormData?.({
                ...proposalFormData,
                items: [
                  ...proposalFormData.items.filter(
                    (item) => item.id != textRef.current?.id
                  ),
                ],
              });
            }
          }}
        >
          X
        </button>
      )}
    </>
  );
}
