import mongoose, { Schema } from "mongoose";

// mongoDB modal
const chatSchema = new Schema(
    {
        message: String,
        user: String
    },
    {
        timestamps: true
    }
)

const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema)

export default Chat