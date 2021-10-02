const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const {User} = require('./models/user')


mongoose.connect('mongodb+srv://srUser:password@srUser@searchrate.vumee.mongodb.net/SRdb?retryWrites=true&w=majority',
                    { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('Database connected')).catch(er => console.log(er))


app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cookieParser());

app.post('/api/users/register',(req,res)=>{
   const user = User(req.body);
   user.save((err, user)=>{
       if(err) return res.json({success:false,err})
    return res.status(200).json({success:true});
   })
})

app.get('/', (req,res)=>{
    console.log('server on!')
    res.send('started!')
})

// mongodb+srv://srUser:<password>@searchrate.vumee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(5000)