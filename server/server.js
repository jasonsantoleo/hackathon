const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const authRouter=require('./routes/auth/auth-route')
require('dotenv').config()
const serviceRouter=require('./routes/service')

const app=express()

app.use(
    cors({
        origin:'http://localhost:5173',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "content-Type",
            'Authorization',
            'cache-control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)

mongoose.connect('mongodb+srv://leonjasonsanto:ui07ZE3FxT6Sdzu9@cluster0.axrdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>{
        console.log(err)
    })
app.use(express.json())

app.get('/health',(req,res)=>{
    res.json({status:'ok',timestamp:new Date().toISOString()})
})
app.use('/service',serviceRouter)
app.use('/auth',authRouter)

app.listen(process.env.PORT || 3000,console.log(`app is listinging on ${process.env.PORT || 3000}`))