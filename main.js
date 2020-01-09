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
    icon: path.join(__dirname, 'assets/icon.png'),
  });

  win.loadURL('https://app.clubhouse.io');

  win.on('closed', () => {
    win = null;
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
