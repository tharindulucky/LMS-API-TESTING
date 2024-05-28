import express from "express";
import authRoutes from "./routes/auth";
import cors from "cors"
import * as mongoose from "mongoose";
import configs from "../src/config"
import {config} from "dotenv";

const app = express();

app.use(cors());
app.use('/', authRoutes);

const connectToDB = async () => {
  try{
      await mongoose.connect(configs.DB.uri, configs.DB.mongooseConfig);
      console.log("DB Connection successful!")
  }catch (e) {
      console.log("DB Connection unsuccessful!");
      process.exit(1);
  }
}

(async () => {
    await connectToDB();
})();

export default app;