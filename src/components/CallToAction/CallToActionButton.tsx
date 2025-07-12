type CallToActionButtonProps = {
  children: React.ReactNode;
};
export function CallToActionButton({ children }: CallToActionButtonProps) {
  return (
    <button className="p-3 bg-primary-blue w-fit font-primary text-base text-white text-center text-pretty rounded-default-radius hover:bg-secondary-blue transition-colors delay-[10ms] cursor-pointer">
      {children}
    </button>
  );
}
