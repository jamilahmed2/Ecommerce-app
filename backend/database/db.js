import mongoose from "mongoose";
import colors from "colors";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;