import {Header} from "./components/Header";
import Cta from "./components/Cta";

function App() {
  return (
    <>
      <Header.Root>
        <Header.Title>
          PropostaExpressa
        </Header.Title>
        <Header.Subtitle>
              Gere propostas profissionais em minutos, direto do navegador.
        </Header.Subtitle>
      </Header.Root>
      <main className="min-h-screen w-full bg-background">
        <Cta />
      </main>
    </>
  );
}

export default App;
