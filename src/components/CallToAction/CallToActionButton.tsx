import handleScrollTo from "../../utils/handleScrollTo";

type CallToActionButtonProps = {
  children: React.ReactNode;
  scrollToRef: React.RefObject<HTMLElement | null>;
};
export function CallToActionButton({ children, scrollToRef }: CallToActionButtonProps) {
  return (
    <button
      className="p-3 bg-primary-blue w-fit font-primary font-medium text-base text-white text-center text-pretty rounded-default-radius hover:bg-secondary-blue hover:rotate-[-4deg] transition-all delay-[30ms] cursor-pointer"
      onClick={(event) => {
        event.preventDefault();
        handleScrollTo(scrollToRef);
      }}
    >
      {children}
    </button>
  );
}
