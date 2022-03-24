import mongoose, { Document } from "mongoose";
import { ShortURL } from "./shortUrl.model";


 interface Analytics extends Document {
    slug: ShortURL;
}

const schema = new mongoose.Schema(
    {
        slug: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "shortUrl",
            required: true,
        },
    },
    { timestamps: true },
);

const analytics = mongoose.model<Analytics>("analytics", schema);

export default analytics;