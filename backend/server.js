import express from "express";
import dotenv from "dotenv";

//routes
import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows you to parse the body of the request

//authentication
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);

    connectDB();
})

