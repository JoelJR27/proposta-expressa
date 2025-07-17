type PreviewInfoContainerProps = {
  children: React.ReactNode;
};
export function PreviewInfoContainer({ children }: PreviewInfoContainerProps) {
  return <span className="flex items-center gap-2">{children}</span>;
}
