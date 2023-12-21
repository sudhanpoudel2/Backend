// import {asynceHandaler} from "../utils/asyncHandaler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


const registerUser = asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists : username , email
    // check for image, check for avatar
    // upload them to cloudinary, avatar
    // create user object-create entry in db
    // remove password and refresh token field from response 
    // check from user creation 
    // return res

    const {fullname ,email ,username , password}= req.body
    console.log("email",email);

    if(fullname === ""){
        throw new ApiError(400, "fullname is required");
    }
   
    if([fullname , email , username , password].some((field)=>field?.trim() === "")){
        throw new ApiError(400, "all filed are required")
    }
})

export {registerUser}