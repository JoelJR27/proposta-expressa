import { forwardRef } from "react";

type ProposalFormRootProps = {
  children: React.ReactNode;
};

export const ProposalFormRoot = forwardRef<
  HTMLFormElement,
  ProposalFormRootProps
>((props, ref) => {
  return (
    <form className="flex flex-col gap-10 bg-white border border-border p-4 m-2 rounded-default-radius" ref={ref}>
      {props.children}
    </form>
  );
});
