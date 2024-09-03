# QR vCard Generator

A package for generating QR codes with embedded vCard information, with options to customize the design, add a logo, and save as PNG.

## Installation

```bash
npm install qr-vcard-generator

```
## Usage

```bash
const {
  generateVCard,
  generateQRCode,
  addLogoToQRCode,
  saveQRCodeAsPNG,
} = require('qr-vcard-generator');

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
```

## License
MIT

#### `package.json`
Assurez-vous que le fichier `package.json` reflète les dépendances installées.

```json
{
  "name": "qr-vcard-generator",
  "version": "1.0.0",
  "description": "A package for generating QR codes with embedded vCard information.",
  "main": "src/index.js",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "qrcode": "^1.5.0",
    "sharp": "^0.29.0"
  },
  "devDependencies": {
    "jest": "^26.6.3"
  },
  "keywords": [
    "qr-code",
    "vcard",
    "qr",
    "generator"
  ],
  "author": "Ezin Léonce KOUSSE",
  "license": "MIT"
}