import express from "express";
import { config } from "dotenv";

import imageRoute from "./routes/imageRoutes.js";

import authRoute from "./routes/authRoutes.js";
import cors from "cors";
import path from "path";
config({ path: "./config/config.env" });

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const _dirname = path.dirname("");
const distpath = path.join(_dirname, "../Galaxy3G/dist");
app.use(express.static(distpath));

app.use(
  cors({
    origin: "*",
  })
);
// Routes
app.use("/", async(req,res)=>{
    res.send("Server Working")
})
app.use("/api/users",authRoute);
app.use("/api", imageRoute)
