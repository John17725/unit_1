const express = require("express")
const app  = express()
const PORT = 8080
var path=require("path") //assuming express is installed 


app.use(express.static(path.join(__dirname, '../')))

app.get('/',(req,res,next)=>{
	console.log("HOla")
})

app.listen(PORT,()=>{
	console.log("SERVER AS RUNNING :" + PORT)
}) 