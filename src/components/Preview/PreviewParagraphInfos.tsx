type PreviewParagraphInfosProps = {
  children: React.ReactNode;
};
export function PreviewParagraphInfos({
  children,
}: PreviewParagraphInfosProps) {
  return <p className="font-primary">{children}</p>;
}
