import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_API).then(() => console.log("db connected"));
}
