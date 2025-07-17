type PreviewFieldTitleProps = {
  children: React.ReactNode;
};
export function PreviewFieldTitle({ children }: PreviewFieldTitleProps) {
  return <h3 className="font-primary font-normal text-secondary-blue text-lg">{children}</h3>;
}
