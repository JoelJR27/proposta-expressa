type CallToActionRootProps = {
  children: React.ReactNode;
};

export function CallToActionRoot({ children }: CallToActionRootProps) {
  return (
    <section className="p-5 h-screen  items-start md:px-7 md:py-0 xl:px-30 2xl:px-50">
      {children}
    </section>
  );
}
