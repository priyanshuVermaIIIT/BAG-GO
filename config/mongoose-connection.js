const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://Priyanshuverma:Priyanshu014@cluster0.b24w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( function (){
    console.log("database connected");
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection;