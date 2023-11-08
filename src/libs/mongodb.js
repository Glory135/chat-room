import mongoose from "mongoose";

// connecting mongo DB
const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB