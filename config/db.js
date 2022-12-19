const knex = require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        database:"API",
        password:"Anurag@123"
    }
})

knex.schema.createTable("data",(table)=>{
    table.increments("id"),
    table.string("course_name"),
    table.string("type"),
    table.string("logo"),
    table.string("short_discription")
}).then(()=>{
    console.log("table created....")
}).catch((err)=>{
    console.log("table already exist")
})


module.exports = knex