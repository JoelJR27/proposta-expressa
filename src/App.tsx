import { useRef } from "react";
import { Header } from "./components/Header";
import { CallToAction } from "./components/CallToAction";
import { ProposalForm } from "./components/ProposalForm";
import { useProposalForm } from "./hooks/useProposalForm";
import { createNewItem } from "./utils/createNewItem";
import { Button } from "./components/Button";

function App() {
  const { proposalFormData, setProposalFormData, updateField, updateItem } =
    useProposalForm();
  const formRef = useRef<HTMLFormElement | null>(null);
  console.log(proposalFormData);
  console.log(proposalFormData.items);
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
        <section className="lg:grid grid-cols-2">
          <ProposalForm.Root ref={formRef}>
            <div className="grid grid-cols-2 gap-4">
              <span>
                <ProposalForm.Label htmlFor="clientName">
                  Nome do cliente
                </ProposalForm.Label>
                <ProposalForm.Input
                  id="clientName"
                  proposalFormData={proposalFormData}
                  setProposalFormData={setProposalFormData}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateField("clientName", event.target.value)
                  }
                />
              </span>
              <span>
                <ProposalForm.Label htmlFor="freelancerName">
                  Nome do Freelancer
                </ProposalForm.Label>
                <ProposalForm.Input
                  id="freelancerName"
                  proposalFormData={proposalFormData}
                  setProposalFormData={setProposalFormData}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateField("freelancerName", event.target.value)
                  }
                />
              </span>
            </div>
            <span className="lg:max-w-[80%]">
              <ProposalForm.Label htmlFor="projectDescription">
                Projeto / serviço
              </ProposalForm.Label>
              <ProposalForm.Textarea
                id="projectDescription"
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateField("projectDescription", event.target.value)
                }
              ></ProposalForm.Textarea>
            </span>
            <div className="flex flex-col">
              <ProposalForm.Label htmlFor="">
                Itens / entregas
              </ProposalForm.Label>
              <div className="w-full flex gap-4 flex-wrap">
                {proposalFormData.items.map((item, index) => (
                  <span key={index} className="w-[46%] relative">
                    <ProposalForm.Input
                      key={item.id}
                      id={item.id}
                      hasDeleteButton
                      placeholder={`Item ${index + 1}`}
                      proposalFormData={proposalFormData}
                      setProposalFormData={setProposalFormData}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateItem(index, event.target.value)
                      }
                      value={item.content}
                    />
                  </span>
                ))}
                <div className="flex gap-2">
                  <Button
                    buttonType="add"
                    actions={(event: React.MouseEvent) => {
                      event.preventDefault();
                      const newItem = createNewItem();
                      setProposalFormData({
                        ...proposalFormData,
                        items: [...proposalFormData.items, newItem],
                      });
                    }}
                  >
                    Adicionar novo item +
                  </Button>
                  {proposalFormData.items.length > 0 && (
                    <Button
                      buttonType="remove"
                      actions={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProposalFormData({ ...proposalFormData, items: [] });
                      }}
                    >
                      Remover todos os items
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <span className="w-1/2">
              <ProposalForm.Label htmlFor="deadline">Prazo</ProposalForm.Label>
              <ProposalForm.Input
                id="deadline"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateField("deadline", event.target.value)
                }
                placeholder="Ex: 15 dias"
              />
            </span>
            <span className="w-1/2">
              <ProposalForm.Label htmlFor="totalPrice">
                Valor total
              </ProposalForm.Label>
              <ProposalForm.Input
                id="totalPrice"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateField("totalPrice", event.target.value)
                }
              />
            </span>
            <span className="lg:max-w-[80%]">
              <ProposalForm.Label htmlFor="paymentTerms">
                Condições de pagamento
              </ProposalForm.Label>
              <ProposalForm.Textarea
                id="paymentTerms"
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateField("paymentTerms", event.target.value)
                }
              />
            </span>
            <span className="lg:max-w-[80%]">
              <ProposalForm.Label htmlFor="notes">
                Condições de pagamento
              </ProposalForm.Label>
              <ProposalForm.Textarea
                id="notes"
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateField("notes", event.target.value)
                }
              />
            </span>
          </ProposalForm.Root>
        </section>
      </main>
    </>
  );
}

export default App;
