const mongoose = require("mongoose");

const DBConcction = callback => { mongoose.connect("mongodb+srv://abdelrahmanawzy98:abdo571998@cluster0.bpdihnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then( ()=> {
         console.log("DB Connected!!")
         callback()
    }).catch(err => {
        console.log(err);
    })
}

exports.DBConcction = DBConcction;