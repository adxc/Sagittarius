const Database = require('nedb');
const {ipcMain} =  require('electron');
const db = new Database({
    filename: './data/sagittarius.db',
    autoload:true
});

ipcMain.on('insert',(event, arg) =>{
    db.insert(arg, (err,docs) => {
        if(err){
            event.sender.send('insert', err);
        }else {
            event.sender.send('insert','success');
        }
    })
});

ipcMain.on('delete',(event, arg) =>{
    db.remove({ _id: arg._id}, {}, (err,numRemoved) => {
        if(err){
            event.sender.send('delete', err);
        }else {
            event.sender.send('delete','success');
        }
    })
});

ipcMain.on('update',(event, arg) =>{
    console.log(arg);
});

ipcMain.on('select',(event, arg) =>{
    db.find(arg, (err, docs) =>{
       event.sender.send('select',docs);
    })
})