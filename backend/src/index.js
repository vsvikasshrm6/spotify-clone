import express from "express";
import dotenv from "dotenv";
import songRoutes from "./routes/songs.routes.js";
import albumRoutes from "./routes/album.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./utils/db.js";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";

import  path  from 'path';
dotenv.config();

const __dirname = path.resolve();



const PORT = process.env.PORT;
const app = express();

app.use(
  fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 },
    useTempFiles: true,
    createParentPath : true,
    tempFileDir: path.join(__dirname, "tmp")
  })
);
app.use(express.json());

app.use(clerkMiddleware());

app.use("/api/song", songRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at Port" + PORT);
});
