import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { CallToAction } from "./components/CallToAction";
import { ProposalForm } from "./components/ProposalForm";
import type { ProposalFormData } from "./types/FormData";

function App() {
  const [proposalFormData, setProposalFormData] = useState<ProposalFormData>({
    clientName: "",
    freelancerName: "",
    projectDescription: "",
    items: [""],
    deadline: "",
    totalPrice: "",
    paymentTerms: "",
    notes: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  console.log(proposalFormData);
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
        <ProposalForm.Root ref={formRef}>
          <div className="grid grid-cols-2 gap-4">
            <span>
              <ProposalForm.Label htmlFor="clientName">
                Nome do cliente
              </ProposalForm.Label>
              <ProposalForm.Input
                id="clientName"
                setFormData={setProposalFormData}
                field="clientName"
                proposalFormData={proposalFormData}
              />
            </span>
            <span>
              <ProposalForm.Label htmlFor="freelancerName">
                Nome do Freelancer
              </ProposalForm.Label>
              <ProposalForm.Input
                id="freelancerName"
                setFormData={setProposalFormData}
                field="freelancerName"
                proposalFormData={proposalFormData}
              />
            </span>
          </div>
          <span>
            <ProposalForm.Label htmlFor="projectDescription">
              Projeto / serviço
            </ProposalForm.Label>
            <ProposalForm.Textarea
              id="projectDescription"
              field="projectDescription"
              proposalFormData={proposalFormData}
              setProposalFormData={setProposalFormData}
            ></ProposalForm.Textarea>
          </span>
          
        </ProposalForm.Root>
      </main>
    </>
  );
}

export default App;
