const Clientlogger = (req,res,next) =>{
    const {clientusername, clientfullname,clientemail,tags} = req.body;

    if(clientusername && clientfullname && clientemail && tags){
        next()
    }
    else{
        return res.status(500).send('All fields are required')
    }

}

module.exports = Clientlogger