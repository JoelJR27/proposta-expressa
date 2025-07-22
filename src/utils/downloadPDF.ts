import html2pdf from "html2pdf.js";
export function downloadPDF<E extends HTMLElement>(element: E | null) {
  const opt = {
    margin: 0,
    filename: "proposta.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf.set(opt).from(element).saveAs();
}
