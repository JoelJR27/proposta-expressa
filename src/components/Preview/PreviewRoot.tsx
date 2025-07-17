type PreviewRootProps = {
  children: React.ReactNode;
};
export function PreviewRoot({ children }: PreviewRootProps) {
  return (
    <div id="preview">
      {children}
    </div>
  );
}
