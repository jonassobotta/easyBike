import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    },
    userInfo: {
        type: {
            name: String,
            email: String,
            country: String,
            city: String,
            zip: String,
            street: String,
            phone: String,
        },
        required: true,
    },
    bike: {
        type: Schema.Types.ObjectId,
        ref: "Bike",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
});