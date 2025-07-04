import backgroundImage from "../assets/background-image.png";
import handleScrollTo from "../utils/handleScrollTo";
export default function Cta() {
  return (
    <section className="p-5 h-screen  items-start md:px-7 md:py-0 xl:px-30 2xl:px-50">
      <div className="h-1/2 md:grid md:grid-cols-2 md:place-items-center lg:h-3/4">
        <div className="flex flex-col gap-4 lg:text-lg">
          <h3 className="italic text-wrap font-primary text-primary-text font-bold 2xl:w-3/4">
            Pare de perder tempo formatando propostas. Com o PropostaExpress,
            você preenche os dados e exporta em PDF com um design profissional e
            direto do navegador!
          </h3>
          <button
            className="p-3 bg-primary-blue w-fit font-primary text-base text-white text-center text-pretty rounded-default-radius hover:bg-secondary-blue transition-colors delay-[10ms] cursor-pointer"
            onClick={() => handleScrollTo<HTMLFormElement>("#proposal-form")}
          >
            Crie sua primeira proposta!
          </button>
        </div>
        <img
          className="w-1/1 mt-8 md:mt-0 "
          src={backgroundImage}
          alt="Call-to-action image background."
        />
      </div>
    </section>
  );
}
