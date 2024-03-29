import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const htmlToPdfDownloader = (id: string) => {
  const input: any = document.getElementById("pdf-content");
  // Specify the id of the element you want to convert to PDF
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf: any = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("downloaded-file.pdf");
  });
};
