const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/',logger,(req, res)=>{
    console.log("Here")
    res.render('index',{title: 'hey', message: "gtfo"})
});


const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
 