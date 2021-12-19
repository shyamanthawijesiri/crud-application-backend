const express = require('express');
var { Employee } = require('../models/employee');


var router = express.Router();


router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retirveing employee: ' +JSON.stringify(err,undefined,2))}
    });
});

router.post('/',(req,res)=>{
    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary,
    });

    emp.save((err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('error in save employee: ' +JSON.stringify(err,undefined,2))}
    });
})

module.exports = router;