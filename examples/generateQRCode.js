const {
  generateVCard,
  generateQRCode,
  addLogoToQRCode,
  saveQRCodeAsPNG,
} = require('../src');

(async () => {
  const vCard = generateVCard({
    name: 'Jane Doe',
    phone: '+0987654321',
    email: 'jane.doe@example.com',
    organization: 'Example Corp',
  });

  const qrCode = await generateQRCode(vCard);

  const logoPath = './path/to/logo.png';
  const outputPath = './path/to/output.png';

  const qrCodeWithLogo = await addLogoToQRCode(qrCode, logoPath);
  await saveQRCodeAsPNG(qrCodeWithLogo, outputPath);

  console.log('QR code with vCard and logo saved to', outputPath);
})();
