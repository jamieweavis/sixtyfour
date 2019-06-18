const path = require('path');
const { menubar } = require('menubar');

menubar({
  tooltip: 'sixtyfour - base64 encoder/decoder',
  icon: path.join(__dirname, 'iconTemplate@2x.png'),
  index: path.join('file://', __dirname, 'window', 'index.html'),
  preloadWindow: true,
});
