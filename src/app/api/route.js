import connectMongoDB from "@/libs/mongodb";
import Chat from "@/models/chat";
import { NextResponse } from "next/server";

// API to get all the messages
export const GET = async () => {
    await connectMongoDB();
    const chats = await Chat.find();
    return NextResponse.json(chats)
}

// API to post message
export const POST = async (req) => {
    const { message, user } = await req.json();
    await connectMongoDB();
    await Chat.create({ message, user });
    return NextResponse.json({ msg: 'Chat Post!!' })
}