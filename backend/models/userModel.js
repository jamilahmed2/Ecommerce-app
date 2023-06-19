import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide unique Username"],
            unique: [true, "Username Exists"]
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            unique: false,
        },
        email: {
            type: String,
            required: [true, "Please provide a email"],
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: {},
            required: true,
        },
        answer: {
            type: String,
            required: true,
          },
        role: {
            type: Number,
            default: 0,
        },
        timestamp: { type: Date, default: Date.now }
    },
);

export default mongoose.model("users", userSchema);