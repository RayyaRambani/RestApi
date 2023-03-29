const express = require('express');

const app= express();
app.use(()=>{
    console.log("Rayya Cerdas")
})
app.listen(4000);