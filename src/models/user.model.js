import mongoose ,{Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";

// import bcrypt form "bcrypt";  //for encrypt password





const userSchema = new Schema(
    {
       username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
       },
       email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
       },
       fullName : {
        type : String,
        required : true,
        trim : true,
        index : true
       },
       avatar : {
        type : String, //cloudinary url
        required : true
       },
       coverimage : {
        type : String, //cloudinary url
       },
       watchHistory : [
        {
            type : Schema.Type.ObjectId,
            ref :"Video"
        }
       ],
       password : {
        type : String,
        required : [true, 'password is required']
       },
       refereshToken : {
        type : String
       }
    },
    {
        timestamps: true
    }
);

// userSchema.pre("save" async function (next) {
    // if(this.isModified("password")){
//     this.password = bcrypt(this.password, 10)
// next()
// }})

// userSchema.methods.isPasswordCorrect = async function (password){
//     return await bcrypt.compare(password.this.password)
// }

userSchema.method.generateAccessToken = function(){
   return jwt.sign({
    _id : thid._id,
    email : this.email,
    username : this.username,
    fullName : this.fullName
   },
   process.env.ACCESS_TOKEN_SECRET,
   {
    expiresIn : process.env.ACCESS_TOKEN_EXPIRY
   })
}

userSchema.method.generateRefreshToken = function(){
    return jwt.sign({
        _id : thid._id,
       },
       process.env.REFRESH_TOKEN_SECRET,
       {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
       })
}



export const User = model.Schema("User",userSchema);