// const { Debug } = require("./index")

// const d = new Debug()
// d.title = 'mew mew'

// d.debug_console("hello world")


// let data = d.xss_detect("<script>");

// if (data == true) {
//     console.log("attack detected...")
// }


const express = require("express")
const app = express()

app.listen(8000, () => console.log("running successfuly..."))