const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    show:false,
    width:1024,
    height:760,
    backgroundColor: '#343a40',
    icon: `file://${__dirname}/dist/.icon-ico/icon.ico`,
  })
  win.once('ready-to-show', () =>{
    win.show();
    win.maximize();
  })
  win.loadURL(`http://localhost:4200`)
  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'dist/Sagittarius/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }));
  // uncomment below to open the DevTools.
   win.webContents.openDevTools() 
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
   }
})

require("./api/dbService/dbControll");