
const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// MongoDB connection
main()
    .then(() => console.log("✅ MongoDB connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    }

    // Home route
    app.get("/", (req, res) => {
    res.send("Server running...");
    });

    // Chats page
    app.get("/chats", async (req, res) => {
    const allChats = await Chat.find({});
    console.log(allChats); // 👈 for debugging
    res.render("chats.ejs", { allChats });
    });

    app.listen(8080, () => {
    console.log("✅ Server is running on http://localhost:8080");
});
