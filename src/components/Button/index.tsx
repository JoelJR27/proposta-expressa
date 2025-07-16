type ButtonProps = {
  children: React.ReactNode;
  buttonType: "add" | "remove" | "export";
  actions: (event: React.MouseEvent) => void;
};
export function Button({ children, buttonType, actions }: ButtonProps) {
  const buttonTypeOptions = {
    add: "primary-blue",
    remove: "red-500",
    export: "secondary-blue",
  };
  return (
    <button
      className={`text-${buttonTypeOptions[buttonType]} font-medium p-2 cursor-pointer max-xs:text-[10px]`}
      onClick={actions}
    >
      {children}
    </button>
  );
}
