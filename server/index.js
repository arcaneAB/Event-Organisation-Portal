const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://srUser:password@srUser@searchrate.vumee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                    {useNewUrlParser: true}).then(()=>console.log('Database connected')).catch(er => console.log(er))

app.get('/', (req,res)=>{
    console.log('on!')
    res.send('started!')
})

// mongodb+srv://srUser:<password>@searchrate.vumee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(5000)