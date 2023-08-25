const { BadRequestError } = require('../errors')

const jwt=require('jsonwebtoken')
const login=async(req,res)=>{

    const {username,password}=req.body
    // This validation can be done in three ways:-

    // 1) Moongoose validation if we are connected to database
    //2) JOI
    //3)Check in controller. What we are doing here actually
    if(!username || !password){
        throw new BadRequestError('Please provide email and password')
    }

    // Just for demo Normally provided by DB
    const id=new Date().getDate()

    //try to keep palyload small, better user experience
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:`User created`,token})

    
}

const dashboard=async(req,res)=>{
    const luckyNumber = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  })
}

module.exports={login,dashboard}