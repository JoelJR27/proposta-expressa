type CallToActionTextProps = {
  children: React.ReactNode;
};
export function CallToActionText({ children }: CallToActionTextProps) {
  return (
    <h3 className="italic text-wrap font-primary text-primary-text font-bold 2xl:w-3/4">
      {children}
    </h3>
  );
}
