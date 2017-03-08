import { app, BrowserWindow, Menu } from 'electron';

const Tray = Menu.buildFromTemplate([
  {
    label: 'Open',
    click: () => {
      BrowserWindow.fromId(1).show();
    },
  },
  {
    label: 'Reload',
    click: () => {
      BrowserWindow.fromId(1).show();
      BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
    },
  },
  {
    label: 'Quit',
    click: () => {
      app.quit();
    },
  },
]);

export default Tray;
