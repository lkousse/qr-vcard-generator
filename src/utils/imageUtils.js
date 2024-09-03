const sharp = require('sharp');

const addLogoToQRCode = async (qrCodeDataUrl, logoPath) => {
  const qrImageBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');
  const logoBuffer = await sharp(logoPath).resize(50, 50).toBuffer();

  return await sharp(qrImageBuffer)
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .toBuffer();
};

const saveQRCodeAsPNG = async (qrCodeBuffer, outputPath) => {
  await sharp(qrCodeBuffer).toFile(outputPath);
};

module.exports = {
  addLogoToQRCode,
  saveQRCodeAsPNG,
};
