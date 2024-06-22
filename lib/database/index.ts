import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };
let MONGODB_URI = process.env.MONGODB_URI;

// In this function, the DB connection is cached so the connection is only created once
export const connectToDatabase = async () => {
    // Check if a connection already exists
    if (cached.conn) {
        return cached.conn;
    }

    // Check if MONGODB_URI is defined
    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }

    // Connect to the MongoDB database
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "eventGuru",
        bufferCommands: false,
    });

    // Store the connection promise
    cached.conn = await cached.promise;

    // Return the database connection
    return cached.conn;
};
