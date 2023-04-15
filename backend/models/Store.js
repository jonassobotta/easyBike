import mongoose from "mongoose";
const { Schema } = mongoose;

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    bikes: {
        type: [Schema.Types.ObjectId],
        ref: "Bike",
    }
});

export default mongoose.model("Store", StoreSchema);