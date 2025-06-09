import express from "express";
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import bestSellerRoute from "./routes/bestSellerRoute.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//cors
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/bestseller", bestSellerRoute);

app.listen(port, () => {
    connectDB();
    console.log(`Example app listening on port ${port}`);
  });