const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    show:false,
    backgroundColor: '#343a40',
    icon: `file://${__dirname}/dist/assets/logo.png`  
  })
  win.once('ready-to-show', () =>{
    win.maximize();
  })
  //win.loadURL(`file://${__dirname}/dist/Sagittarius/index.html`)
  win.loadURL(`http://localhost:4200`)
  //// uncomment below to open the DevTools.
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