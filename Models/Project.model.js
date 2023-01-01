const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    client:{type:String,required:true},
    startdate:{type:String,required:true},
    due:{type:String,required:true},
    paid:{type:String,required:true},
    userId:{type:String,required:true},
})

const ProjectModel = mongoose.model('project',ProjectSchema)

module.exports = ProjectModel