const express = require('express')

const ClientRouter = express.Router()

const ClientModel = require('../Models/Client.model')
const Clientlogger = require('../Middlware/Clientlogger')

ClientRouter.post('/',Clientlogger,async(req,res)=>{
     try{
         const client = await ClientModel.create(req.body)
         client.save();
         res.status(200).send(client)
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
})

ClientRouter.get('/',async(req,res)=>{
    try{
         const client = await ClientModel.find()
         res.status(200).send(client)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


ClientRouter.delete('/:id',async(req,res)=>{
    try{
        const client = await ClientModel.findByIdAndDelete(req.params.id)
        res.status(200).send(client)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


ClientRouter.patch('/:id',async(req,res)=>{
    try{
         const client = await ClientModel.findByIdAndUpdate(req.params.id,req.body)
         client.save()
         res.status(200).send(client)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = ClientRouter