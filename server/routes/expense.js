const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Expense = require('../../models/expenses');

router.get('/', function(req, res){
    res.render('index');
});

router.get('/findall', function(req, res){
    Expense.find()
    .exec()
    .then(rslt => {
        res.send(rslt);
    })
    .catch(err => {
        res.send(err);
    }) 
});

router.get('/find/:expenseId', function(req, res){
    const findId = req.params.expenseId;
    Expense.findById({ _id: findId})
    .exec()
    .then(rslt => {
        res.json({rslt, message: "Expense with id " + findId + " successfully found"});
    })
    .catch(err => {
        res.json(err);
    })
});

router.post('/insert', function(req, res){
    const expense = new Expense({
        _id: new mongoose.Types.ObjectId(),
        description: req.body.desc,
        amount: req.body.amount,
        month: req.body.month,
        year: req.body.year
    }).save(function(err, rslt){
        if(err){
            res.send(err);
        }
        else{
            res.send(rslt);
        }
    });
});

router.patch('/update/:expenseId', function(req,res){
    const updateId = req.params.expenseId;
    const doc = {
        description: req.body.desc,
        amount: req.body.amount,
        month: req.body.month,
        year: req.body.year
    };
    Expense.update({_id: updateId}, {$set : doc})
    .exec()
    .then(rslt => {
        res.json({rslt, message: "Expense with id " + updateId + " Successfully updated"});
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete('/delete/:expenseId', function(req,res){
    const deleteId = req.params.expenseId;
    Expense.remove({ _id: deleteId })
    .exec()
    .then(rslt => {
        res.json({rslt, message: "Expense with " + deleteId + " Successfully deleted"});
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;