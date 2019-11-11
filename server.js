var express = require('express')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb+srv://test:test@cluster0-2emxt.mongodb.net/test?retryWrites=true&w=majority',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Sudah Bisa Jalan")
    }
})




app.get('/', function(req, res, next){
    res.json("Hallo selamat datang")
})

app.get('/:name', function(req, res, name){
    res.json(req.params.name)
})




app.listen(3000, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("app ke port 3000")
    }
})