const { generateVCard, generateQRCode } = require('./qrGenerator');
const { addLogoToQRCode, saveQRCodeAsPNG } = require('./utils/imageUtils');

module.exports = {
  generateVCard,
  generateQRCode,
  addLogoToQRCode,
  saveQRCodeAsPNG,
};
