const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const {User} = require('./models/user')
const {auth} = require('./middleware/auth')

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected')).catch(er => console.log(er))


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser());

app.get('/api/users/auth', auth,(req,res)=>{
    res.status(200).json({
        _id: req.user._id,
        isAuth: true,
        name: req.user.name,
        lastname: req.user.lastname,
        email: req.user.email,
        role: req.user.role
    })    
})

app.post('/api/users/register', (req, res) => {
    const user = User(req.body);
    user.save((err, user) => {
        if (err) return res.json({
            success: false,
            err
        })
        return res.status(200).json({
            success: true
        });
    })
})

app.post('/api/users/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (!user) return res.json({
            loginSuccess: false,
            message: "Auth failed, email not found"
        });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                loginSuccess: false,
                message: "Auth failed, incorrect password"
            })
        })

        user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess: true
                })
        })
    })
})

app.get('/api/users/logout', auth,(req,res) => {
    User.findOneAndUpdate({_id:req.user._id},{token:""},(err,doc) => {
        if (err) return res.json({success:false,err})
        return res.status(200).send({success:true})
    })
})

app.get('/', (req, res) => {
    console.log('server on!')
    res.send('started!')
})


const port = process.env.PORT || 5000;

app.listen(port , ()=>{
    console.log(`server listening at ${port}`)
})