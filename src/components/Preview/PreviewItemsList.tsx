type PreviewItemsListProps = {
  children: React.ReactNode;
};
export function PreviewItemsList({ children }: PreviewItemsListProps) {
  return <ul className="flex flex-col flex-wrap truncate px-4 gap-2 divide-y divide-gray-300 max-h-100">{children}</ul>;
}
