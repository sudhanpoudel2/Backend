import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
  try {
    if(!localFilePath) return null;
    //upload the file in cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type : 'auto'
    })
    //filed has been successfully uploaded
    console.log("Filed has been uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally save temporary files as the upload operation got failed
    return null;
  }
}

export {uploadOnCloudinary}







/*cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });*/