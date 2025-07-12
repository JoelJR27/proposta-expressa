type HeaderTitleProps = {
  children: React.ReactNode;
};
export function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <h1 className="text-2xl font-bold font-primary text-primary-color pb-1">
        {children}
    </h1>
  );
}
