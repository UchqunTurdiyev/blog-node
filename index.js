const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")


dotenv.config()

const apis = 
"mongodb+srv://Uchqun:LC6-zFy-Nca-KcX@cluster0.szqhzlj.mongodb.net/blog?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(apis)
        console.log("Connect to MongoDB");
    } catch (error) {
        console.error(error);
        
    }
}
connect()

// mongoose.connect(process.env.MONGO_URL, {
//     useMewUrlPrarser: true,
//     useUnifiedTopology: true,
//     userCreateIndex: true
// }).then(console.log("connected to Mongo")).catch(err => console.log(err))

app.use("/", (req, res) => {
    console.log("hey this is main url");
})

app.listen("5000", () => {
    console.log("Backent is Running..");
})

// LC6-zFy-Nca-KcX

// mongodb+srv://Uchqun:Uchqun@cluster0.szqhzlj.mongodb.net/blog?retryWrites=true&w=majority