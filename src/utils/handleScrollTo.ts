export default function handleScrollTo(ref: React.RefObject<HTMLElement | null>): void {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
}
