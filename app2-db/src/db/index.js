import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `mongodb connected Db HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("mongodb problem", error);
    process.exit(1);
    // proces is a method of node js. all methods run on a perticular process so this "process can terminate the proces of the current function by the exit function"
  }
};
export default connectDB;
