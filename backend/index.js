import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import storesRoute from "./routes/stores.js";
import usersRoute from "./routes/users.js";
import bikesRoute from "./routes/bikes.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
});

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/stores", storesRoute);
app.use("/api/bikes", bikesRoute);

app.listen(3001, () => {
    connect();
  console.log("Server is running on port 3000");
})