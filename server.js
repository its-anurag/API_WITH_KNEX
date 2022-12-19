const express = require("express")
const app = express()
const controller = require('./controller/index')
const port = 5000

app.use(express.json())

app.post("/data",controller.insertApidata)
app.post("/insert",controller.insertdata)
app.get("/userdata/:id",controller.getdatabyid)
app.put("/updateById/:id",controller.updatebyid)
app.delete("/deletebyid/:id",controller.deletebyid)



app.listen(port,()=>{
    console.log(`server connecting on ${port}`)
})