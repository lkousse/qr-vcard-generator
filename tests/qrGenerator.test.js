const { generateVCard, generateQRCode } = require('../src/qrGenerator');
const { addLogoToQRCode, saveQRCodeAsPNG } = require('../src/utils/imageUtils');
const fs = require('fs');
const path = require('path');

describe('QR vCard Generator', () => {
  test('should generate a valid vCard string', () => {
    const vCard = generateVCard({
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john.doe@example.com',
      organization: 'Example Corp',
    });

    expect(vCard).toContain('BEGIN:VCARD');
    expect(vCard).toContain('FN:John Doe');
  });

  test('should generate a QR code from vCard data', async () => {
    const vCard = generateVCard({
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john.doe@example.com',
      organization: 'Example Corp',
    });

    const qrCode = await generateQRCode(vCard);
    expect(qrCode).toContain('data:image/png;base64');
  });

  test('should add a logo to the QR code', async () => {
    const vCard = generateVCard({
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john.doe@example.com',
      organization: 'Example Corp',
    });

    const qrCode = await generateQRCode(vCard);
    const logoPath = path.join(__dirname, 'logo.png');

    // Ensure logo file exists before running the test
    if (fs.existsSync(logoPath)) {
      const qrCodeWithLogo = await addLogoToQRCode(qrCode, logoPath);
      expect(qrCodeWithLogo).toBeInstanceOf(Buffer);
    } else {
      console.warn('Logo file not found, skipping addLogoToQRCode test');
    }
  });

  test('should save the QR code as a PNG file', async () => {
    const vCard = generateVCard({
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john.doe@example.com',
      organization: 'Example Corp',
    });

    const qrCode = await generateQRCode(vCard);
    const logoPath = path.join(__dirname, 'logo.png');
    const outputPath = path.join(__dirname, 'output.png');

    if (fs.existsSync(logoPath)) {
      const qrCodeWithLogo = await addLogoToQRCode(qrCode, logoPath);
      await saveQRCodeAsPNG(qrCodeWithLogo, outputPath);
      expect(fs.existsSync(outputPath)).toBe(true);
    } else {
      console.warn('Logo file not found, skipping saveQRCodeAsPNG test');
    }
  });
});
