const express = require ('express')

const app  = express()
const date = new Date().getHours()
console.log(date)
const check = ()=> (date > 8 && date < 17 ) ? true :false

app.use(isOpen = (req,res,next)=>
{
    check() ? next()  : res.send("<h1>only open from 8h and 17h<h1>")
} )

app.use(express.static(__dirname + '/public/'))
   


app.listen(3000,(err)=>{
   if(err) 
   console.log(("erro server not running "))
   else
   console.log("running well ")
})