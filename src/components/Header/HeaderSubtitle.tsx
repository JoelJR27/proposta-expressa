type HeaderSubtitleProps = {
  children: React.ReactNode;
};
export function HeaderSubtitle({ children }: HeaderSubtitleProps) {
  return <h2 className="font-times italic text-secondary-text">{children}</h2>;
}
