const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../../models/User')
//registetr 
const registerUser = async(req,res)=>{
    const {username,email,password}=req.body
    try{
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const hashPassword= await bcrypt.hash(password,12)
        const newUser=new User({
            username,email,
            password:hashPassword
        })
        await newUser.save()
        console.log(newUser)
        res.status(200).json({
            success:true,
            message:"register is sucessful"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"some error has occured"
        })
    }
}
//login 
const loginUser=async (req,res)=>{
    const {email,password}=req.body
    try{
        const checkUser=await User.findOne({ email })
        if(!checkUser){
            return res.json({
                success:false,
                message:"invalid email or password"
            })
        }
        const checkPasswordMatch=await bcrypt.compare(password,checkUser.password)
        if(!checkPasswordMatch){
            return res.json({
                success:false,
                message:"password is incorrect for the given email"
            })
        }
        const token=jwt.sign({
            id:checkUser._id,
            role:checkUser.role,
            email:checkUser.email,
            userName:checkUser.username
        },'CLIENT_SECRET_KEY',{expiresIn:'60m'})
        console.log('checkUser :', checkUser );
        res.cookie('token',token,{httpOnly:true,secure:false}).json({
            success:true,
            message:"Logged sucessfully",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
                userName: checkUser.username,
            }
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"some errror has occured",
        })
    }
}
//logout
const logoutUser=(req,res)=>{
    res.clearCookie('token').json({
        success:true,
        message:"succesfully logged out"
    })
}

module.exports ={registerUser,loginUser,logoutUser} 