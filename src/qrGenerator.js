const QRCode = require('qrcode');

// Polyfill for TextEncoder if it's not available
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}

const generateVCard = ({ name, phone, email, organization }) => {
  return `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
ORG:${organization}
END:VCARD`;
};

const generateQRCode = async (vCardData, options = {}) => {
  try {
    return await QRCode.toDataURL(vCardData, options);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  generateVCard,
  generateQRCode,
};
