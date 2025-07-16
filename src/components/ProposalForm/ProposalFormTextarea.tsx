import { useRef } from "react";

type ProposalFormTextareaProps = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export function ProposalFormTextarea({
  id,
  onChange,
}: ProposalFormTextareaProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      ref={textRef}
      className="w-full bg-border rounded-default-radius outline-0 p-2 text-secondary-text max-xs:text-xs"
      id={id}
      rows={4}
      onChange={onChange}
    ></textarea>
  );
}
