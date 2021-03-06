import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


const app = express();
dotenv.config();

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB Disconnected!");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB Connected!");
})

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.get("/", (req, res)=>{
    res.send("This root for Hotel Booking Backend!")
})

app.listen(8088, () => {
    connect();
    console.log("Connected to backend");
})