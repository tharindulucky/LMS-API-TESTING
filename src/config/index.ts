import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

const configs = {
    DB: {
        uri: process.env["DB_URI"] ?? "mongodb://localhost:27017",
        mongooseConfig: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions
    }
}

export default configs;