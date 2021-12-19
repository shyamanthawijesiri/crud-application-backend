const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/crudDB';
mongoose.connect(url,(err)=>{
    if(!err){
        console.log('connected successuflly.............')
      
    }else{
        console.log('error in connection: ' +JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;