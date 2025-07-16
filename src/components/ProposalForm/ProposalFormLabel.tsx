type ProposalFormLabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};
export function ProposalFormLabel({
  children,
  htmlFor,
}: ProposalFormLabelProps) {
  return (
    <label
      className="font-secondary text-primary-text font-light italic text-sm max-xs:text-[10px] md:text-base"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
