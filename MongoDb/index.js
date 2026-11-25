import express from "express";
import "dotenv/config";
import connectDB from "./DataBase/db.js";
import User from "./Models/user.model.js";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/createuser", async (req, res) => {
    let { email, password, name } = req.body
    if(!email || !password || !name){
        return res.status(400).send("Required Parameters Are Missing")
    }
    try {
        await User.create({ email, password, name })
        res.status(201).send("User Created")
    } catch (error) {
        console.log(error);
        if(error.code === 11000){
            return res.status(409).send("Email is already registered")
        }
        res.status(500).send("Internal Server Error")
    }
});

app.get("/getUsers", async (req, res) => {
    try {
        let allUsers = await User.find()
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
});

app.get("/getUser/:email", async (req, res) => {
    let userEmail = req.params.email
    try {
        let userDetail = await User.findOne({ email:userEmail })
        res.status(200).json(userDetail)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
});

app.listen(3000, () => {
    connectDB()
    console.log("Server is running on port 3000");
});
