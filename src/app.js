import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; 

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))

app.use(express.json({limit  : "16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser)

//import router

import userrouters from "../src/routes/user.routers.js"

//router Decleration

app.use("/user",userrouters)    //connect with router so , localhost::2000/user/register

export { app }