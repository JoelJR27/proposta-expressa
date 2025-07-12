import { useRef } from "react";
import { Header } from "./components/Header";
import { CallToAction } from "./components/CallToAction";
import { ProposalForm } from "./components/ProposalForm";

function App() {
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <>
      <Header.Root>
        <Header.Title>PropostaExpressa</Header.Title>
        <Header.Subtitle>
          Gere propostas profissionais em minutos, direto do navegador.
        </Header.Subtitle>
      </Header.Root>
      <main className="min-h-screen w-full bg-background">
        <CallToAction.Root>
          <CallToAction.Grid>
            <CallToAction.Container>
              <CallToAction.Text>
                Pare de perder tempo formatando propostas. Com o
                PropostaExpress, você preenche os dados e exporta em PDF com um
                design profissional e direto do navegador!
              </CallToAction.Text>
              <CallToAction.Button scrollToRef={formRef}>
                Crie sua primeira proposta!
              </CallToAction.Button>
            </CallToAction.Container>
            <CallToAction.Image />
          </CallToAction.Grid>
        </CallToAction.Root>
        <ProposalForm.Root ref={formRef}>Scroll to Form</ProposalForm.Root>
      </main>
    </>
  );
}

export default App;
