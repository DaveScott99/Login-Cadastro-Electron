const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 768,
        resizable: false
    })

    win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
    createWindow();
})