// require('dotenv').config({path : './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()








/*
import express from "excpress";

const app = express();

// function connectDB(){};
// connectDB()
// for write code porfectional we use another function

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error;
        });

        app.listen(process.env.PORT, ()=>{
         console.log(`App is listining on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:", error)
    }
})();

*/