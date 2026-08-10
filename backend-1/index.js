const express = require('express');

const app = express();

app.use(express.json());

app.get('/home', (req,res) =>{
    res.send("Welcom to homepage")
    console.log("Welcome to homepage");
})


// app.listen(5000, () =>{
//     console.log("Port is running")
// })

module.exports = app;