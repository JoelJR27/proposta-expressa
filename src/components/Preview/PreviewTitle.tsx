type PreviewTitleProps = {
  children: React.ReactNode;
};

export function PreviewTitle({ children }: PreviewTitleProps) {
  return <h2 className="text-secondary-blue text-xl font-bold font-primary">{children}</h2>;
}
