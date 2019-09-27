const express = require('express');
const app = express();

app.use('/', (req ,res ,next)=> res.send('Hello docker'));

app.listen(3000 , function(){
    console.log("app running on port 3000");
});