const express = require('express')

const InvoiceRouter = express.Router()
const InvoiceModel = require('../Models/Invioce.model')

InvoiceRouter.post('/',async(req,res)=>{
    try{
        const Invoice = await InvoiceModel.create(req.body)
        Invoice.save()
        res.status(200).send(Invoice)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

InvoiceRouter.get('/',async(req,res)=>{
    try{
        const Invoice = await InvoiceModel.find()
        res.status(200).send(Invoice)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


InvoiceRouter.delete('/:id',async(req,res)=>{
    try{
         const Invoice = await InvoiceModel.findByIdAndDelete(req.params.id)
         res.status(200).send(Invoice)
    }    
    catch(err){
        res.status(500).send({message:err.message})
    }
})


InvoiceRouter.patch('/:id',async(req,res)=>{
    try{
        const Invoice = await InvoiceModel.findByIdAndUpdate(req.params.id,req.body)
        Invoice.save()
        res.status(200).send(Invoice)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


module.exports = InvoiceRouter