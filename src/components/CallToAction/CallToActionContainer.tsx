type CallToActionContainerProps = {
  children: React.ReactNode;
};
export function CallToActionContainer({
  children,
}: CallToActionContainerProps) {
  return <div className="flex flex-col gap-4 lg:text-lg">{children}</div>;
}
