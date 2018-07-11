const Database = require('nedb');
const {ipcMain} =  require('electron');
const db = new Database({
    filename: './data/sagittarius.db',
    autoload:true
});

ipcMain.on('insert',(event, arg) =>{
    db.insert(arg, (err,docs) => {
        event.sender.send('insert',docs);
    })
});

ipcMain.on('delect',(event, arg) =>{
    console.log(arg);
});

ipcMain.on('update',(event, arg) =>{
    console.log(arg);
});

ipcMain.on('select',(event, arg) =>{
    db.find(arg, (err, docs) =>{
       event.sender.send('select',docs);
    })
})