const express = require('express')

const ProjectRouter = express.Router()
const ProjectModel = require('../Models/Project.model')

ProjectRouter.post('/',async(req,res)=>{
    try{
        const project = await ProjectModel.create(req.body)
        project.save()
        res.status(200).send(project)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

ProjectRouter.get('/',async(req,res)=>{
    try{
        const project = await ProjectModel.find()
        res.status(200).send(project)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

ProjectRouter.delete('/:id',async(req,res)=>{
    try{
        const project = await ProjectModel.findByIdAndDelete(req.params.id)
        res.status(200).send(project)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


ProjectRouter.patch('/:id',async(req,res)=>{
    try{
        const project = await ProjectModel.findByIdAndUpdate(req.params.id,req.body)
        project.save()
        res.status(200).send(project)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

module.exports = ProjectRouter