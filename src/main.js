const path = require('path');
const { menubar } = require('menubar');

const mb = menubar({
  tooltip: 'sixtyfour - base64 encoder/decoder',
  icon: path.join(__dirname, 'iconTemplate@2x.png'),
  index: path.join('file://', __dirname, 'index.html'),
  preloadWindow: true,
});
