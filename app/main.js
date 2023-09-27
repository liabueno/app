const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
  //  frame: false,
   resizable: false,
    width: 1000,
    height: 650
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})