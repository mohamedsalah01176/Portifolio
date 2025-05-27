export const handleDownload = () => {
    const pdfURL = "/Mohamed Salah Hanafi CV.pdf";
    
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Mohamed Salah Hanafi CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };