const axios= require("axios")
const fs = require("fs")
axios("https://saral.navgurukul.org/api/courses").then((res)=>{
    fs.writeFileSync("data.json", JSON.stringify(res.data, null,4))
})

