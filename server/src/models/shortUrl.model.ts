import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

// Generates random slug for URL -- 5 chars long
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890", 5)

export interface ShortURL extends Document {
    slug: string;
    destination: string;
}

const schema = new mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        required: true,
        default: () => nanoid(),
    },
    destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;