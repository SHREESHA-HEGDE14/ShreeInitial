const mongoose = require('mongoose');const mongoURI = "mongodb+srv://SHREESHAHEGDE:12345678S@cluster0.of3uqld.mongodb.net/nammaproject2";
// const mongoURI = "mongodb+srv://Shreesha:123456789S@cluster0.kezdbmr.mongodb.net/Testfornotebook";
// const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = ()=>{

        mongoose.connect(mongoURI, ()=>{
            console.log("Connected Successfully To Mongo");
        })
}
// const userr = require('./modulesss/User');
// const ur = require('./routesss/auth');
// ur.save();
module.exports = connectToMongo;