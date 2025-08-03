import mongoose from "mongoose";

export const connectDB = async () => {
    const db = "mongodb+srv://ishang974:tNRQQJvGTXg1mmKV@cluster0.yxbze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // MongoDB connection string
    // const db = "mongodb+srv://ishan97:tNRQQJvGTXg1mmKV@cluster0.hb1tg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {
        const { connection } = await mongoose.connect(db); // No need for options
        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process if connection fails
    }
};
