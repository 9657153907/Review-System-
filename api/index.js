import express from "express";
import dotenv from "dotenv";
import dbConnect from "../Review System/config/database.js";
import router from "../Review System/routes/FeedbackRoutes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

//mounting api routes
app.use("/api/v1",router)

dotenv.config();

dbConnect();



app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});
