import {asynceHandaler} from "../utils/asyncHandaler.js";

const registerUser = asynceHandaler(async(req,res)=>{
    res.status(200).json({
        message : "OK"
    })
})

export {registerUser}