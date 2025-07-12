import { forwardRef } from "react";

type ProposalFormRootProps = {
  children: React.ReactNode;
};

export const ProposalFormRoot = forwardRef<
  HTMLFormElement,
  ProposalFormRootProps
>((props, ref) => {
  return (
    <form className="border border-border p-4 m-2 rounded-[3px]" ref={ref}>
      {props.children}
    </form>
  );
});
