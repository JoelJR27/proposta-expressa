type CallToActionGridProps = {
  children: React.ReactNode;
};
export function CallToActionGrid({ children }: CallToActionGridProps) {
  return (
    <div className="h-1/2 md:grid md:grid-cols-2 md:place-items-center lg:h-3/4">
      {children}
    </div>
  );
}
