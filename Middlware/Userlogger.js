const Userlogger = (req,res,next) =>{
    const {email,fullname,password,country,currency} = req.body;
    
    if(email && fullname && password && country && currency){
        next()
    }
    else{
        return res.status(400).send('All fields are required')
    }
}

module.exports = Userlogger