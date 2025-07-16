import { forwardRef } from "react";

type ProposalFormRootProps = {
  children: React.ReactNode;
};

export const ProposalFormRoot = forwardRef<
  HTMLFormElement,
  ProposalFormRootProps
>((props, ref) => {
  return (
    <form
      className="flex flex-col gap-5 bg-white border border-border p-4 m-2 rounded-default-radius lg:p-8"
      ref={ref}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "Enter") return;
      }}
    >
      {props.children}
    </form>
  );
});
