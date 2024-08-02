const mongoose = require('mongoose');

const connectDatabase = () => {
    // console.log(process.env.DB_LOCAL_URL)
    mongoose.connect(process.env.DB_LOCAL_URL,{
    })
    .then(con => {
        console.log("connected successfully");
    }).catch(err => {
        console.log("mongodb error",err);
    })
}

module.exports = connectDatabase;