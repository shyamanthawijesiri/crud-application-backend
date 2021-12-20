const express = require('express');
var { Employee } = require('../models/employee');
var objectId = require('mongoose').Types.ObjectId;


var router = express.Router();


router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retirveing employee: ' +JSON.stringify(err,undefined,2))}
    });
});

router.get('/:id',(req,res) =>{
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id : ${req.params.id}`);
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc)}
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
});

router.put('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id : ${req.params.id}`);
    var emp = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary,
    };

    Employee.findByIdAndUpdate(req.params.id, {$set:emp},{new:true}, (err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('error in update employee: ' +JSON.stringify(err,undefined,2))}
    });
});

router.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id : ${req.params.id}`);
    Employee.findOneAndDelete(req.params.id, (err,doc) =>{
        if(!err){res.send(doc)}
        else{console.log('error in delete employee: ' +JSON.stringify(err,undefined,2))}
    });
});


module.exports = router;