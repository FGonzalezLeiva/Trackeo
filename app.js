const express = require('express');
const path = require('path');
const app = express()
app.get('/',(req,res)=>{
    //console.log('solicitud')
    //console.log(path.join(__dirname, '/trackeo.html'))
    res.sendFile(path.join(__dirname, '/trackeo.html'));
})

app.listen(3000,()=>{
    console.log('server on port',3000)
})