import mongoose from "mongoose"
import dotenv from 'dotenv';
import enums from "../constant/enums.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(enums.SUCCESS_ON_DB_CONNECTION);
        
    } catch (error) {
        console.log(enums.FAILED_ON_DB_CONNECTION, error.message);
        
    }
};

export default dbConnection;