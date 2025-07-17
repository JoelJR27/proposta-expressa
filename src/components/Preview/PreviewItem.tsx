import checkSVG from "../../assets/check-mark-circle-2-svgrepo-com.svg";
type PreviewItemProps = { children: React.ReactNode };
export function PreviewItem({ children }: PreviewItemProps) {
  return (
    <li className="pl-5 py-1 flex items-center gap-5 font-primary capitalize w-fit">
      <img src={checkSVG} alt="List checkmark" />
      {children}
    </li>
  );
}
