import app from "./app.js";
import cloudinary from "cloudinary";


import dotenv from "dotenv";
dotenv.config();
//configuring the cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT||3000, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

