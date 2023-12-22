// import {asynceHandaler} from "../utils/asyncHandaler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"


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

    // if(fullname === ""){
    //     throw new ApiError(400, "fullname is required");
    // }
   
    if([fullname , email , username , password].some((field)=>field?.trim() === "")){
        throw new ApiError(400, "all filed are required")
    }

   const existedUser =  User.findOne({
      $or:[{ username },{ email }]
    })

    if ( existedUser ) {
        throw new ApiError(409,"User with username or email already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (avatarLocalPath) {
        throw new ApiError(400, " avater file is required")
    }
})

export {registerUser}