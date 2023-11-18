import mongoose  from "mongoose";
import { DB_NAME } from "./constants";

/*function connectDB(){};
connectDB()*/ 
// for write code porfectional we use another function

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("Error:", error)
    }
})();