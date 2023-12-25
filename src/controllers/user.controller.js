// import {asynceHandaler} from "../utils/asyncHandaler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js";


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
    console.log("hello I am pawan");
   res.send("Hello I am tester ");

    // const {fullname ,email ,username , password}= req.body
    // console.log("email",email);

    // if(fullname === ""){
    //     throw new ApiError(400, "fullname is required");
    // }
   
    if([fullname , email , username , password].some((field)=>field?.trim() === "")){
        throw new ApiError(400, "all filed are required")
    }

   const existedUser =  await User.findOne({
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

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, " avater file is required")
    }


    const user = await User.create({
        fullname,
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()
    })

    const createdUser = User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(400, "somthing went wrong while regestring the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser , "User register successfully")
    )
    
})



export {registerUser}