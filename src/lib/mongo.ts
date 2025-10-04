import mongoose from "mongoose";

export async function dbConnect() {
    try {
        return await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    } catch (err) {
        console.error(err);
    }
}
