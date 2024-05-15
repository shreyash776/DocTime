import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = () => {
  const dbUri = process.env.MONGO_URI ?? "hello";
//  console.log("this is db string",dbUri)
  mongoose.connect(dbUri, {
    dbName: "DocTime",
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Some error occurred while connecting to database:", err);
  });
};
