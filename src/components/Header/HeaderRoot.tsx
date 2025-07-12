type HeaderRootProps = {
  children: React.ReactNode;
};
export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="bg-white p-7 text-xs border-border border xs:text-sm sm:text-base md:flex md:gap-5 md:items-center xl:px-30 lg:text-lg 2xl:px-50">
      {children}
    </header>
  );
}
