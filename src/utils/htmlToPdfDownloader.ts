import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const htmlToPdfDownloader = (id: string) => {
  const input: any = document.getElementById("pdf-content");
  // Specify the id of the element you want to convert to PDF
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf: any = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, 200);
    pdf.save("downloaded-file.pdf");
  });
};
