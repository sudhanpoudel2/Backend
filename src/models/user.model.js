import mongoose ,{Schema} from "mongoose";

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
       fulname : {
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
    }
    {
        timestamps: true
    }
);

export const User = model.Schema("User",userSchema);