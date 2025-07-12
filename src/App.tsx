import { Header } from "./components/Header";
import { CallToAction } from "./components/CallToAction";

function App() {
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
              <CallToAction.Button>
                Crie sua primeira proposta!
              </CallToAction.Button>
            </CallToAction.Container>
            <CallToAction.Image />
          </CallToAction.Grid>
        </CallToAction.Root>
      </main>
    </>
  );
}

export default App;
