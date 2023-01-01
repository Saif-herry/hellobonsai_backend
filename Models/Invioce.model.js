const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    issuedon : {type:String,required:true},
    duedate:{type:String,required:true},
    project:{type:String,required:true},
    client:{type:String,required:true},
    total:{type:String,required:true},
    paid:{type:String,required:true},
    userid:{type:String,required:true}
})

const InvoiceModel = mongoose.model('Invoice',InvoiceSchema)

module.exports = InvoiceModel