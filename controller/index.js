const fs = require("fs")
const knex = require("../config/db")
var read = fs.readFileSync("data.json", "utf-8")
var objRead = JSON.parse(read)["availableCourses"]

exports.insertApidata = (req, res) => {
    for (i of objRead) {
        knex("data").insert({ id: i.id, course_name: i.course_name, type: i.type, short_discription: i.short_discription, logo: i.logo }).then((data) => {
            res.send({ message: "data inserted successfully in database" })
        }).catch((err) => {
            res.send({ err: err.message })
        })
    }
}

exports.insertdata = (req, res) => {
    console.log(req.body);
    knex("data").insert({
        id: req.body.id,
        course_name: req.body.course_name,
        type: req.body.type,
        logo:req.body.logo,
        short_discription: req.body.short_discription,
        
    }).then(()=>{
        res.send("data inserted in db")
    }).catch((err)=>{
        res.send("data not inserted")
    })
}

exports.getdatabyid = (req, res) => {
    knex.select("*").from("data").where({id:req.params.id}).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send({ err: err.message })
    })
}


exports.updatebyid= async(req,res)=>{
   try {
    const {course_name,type,logo}=req.body
    const data = await knex("data").where({id:req.params.id}).update({course_name,type,logo})
    res.send({message:'data updated successfully...'})
   } catch (error) {
    res.send(error.message)
   }
}


exports.deletebyid = async(req,res)=>{
    try{
        const userdata = await knex("data").where({id:req.params.id}).delete()
        res.send({"data deleted successfully ": userdata})
    }catch(error){
        res.send(error.message)
    }
}



