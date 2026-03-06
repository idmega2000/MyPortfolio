const QRCode = require('qrcode');

const url = 'https://my-portfolio-navy.vercel.app/event';
const options = {
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
  width: 300,
  margin: 2,
};

QRCode.toFile('qrcode.png', url, options)
  .then(() => console.log('QR code saved to qrcode.png'))
  .catch((err) => console.error(err));
