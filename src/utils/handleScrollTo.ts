export default function handleScrollTo<E>(selector: string): void {
  const htmlElement: E = document.querySelector(selector);
  window.scrollTo({
    top: htmlElement.offsetTop,
    behavior: "smooth",
  });
}
