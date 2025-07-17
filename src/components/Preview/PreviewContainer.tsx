type PreviewContainerProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
};
export function PreviewContainer({ children, ref }: PreviewContainerProps) {
  return (
    <div
      ref={ref}
      className="flex flex-col bg-white border border-border gap-4 p-8 m-2 rounded-default-radius lg:p-8"
    >
      {children}
    </div>
  );
}
