const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'assets/playstore.png'),
  });

  win.loadURL('https://app.clubhouse.io');

  win.on('closed', () => {
    win = null;
  });

  win.webContents.on('did-finish-load', function() {
    win.webContents.insertCSS(
      '#footer .footer-links {display: none !important;}',
    );
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    return;
  }

  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
