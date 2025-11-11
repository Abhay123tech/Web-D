
const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log(err));

    async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    }

    let allChats = [
    { from: "neha", to: "priya", message: "send me your exam sheets" },
    { from: "abhay", to: "narayan", message: "send me your tute" },
    { from: "mohit", to: "preeti", message: "teach me express" },
    ];

    Chat.insertMany(allChats)
    .then(() => console.log("✅ Chats inserted"))
    .catch((err) => console.log(err));
