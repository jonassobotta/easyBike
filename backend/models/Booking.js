import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
    bikes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Bike",
            required: true,
        },
    ],
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
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
    totalPrice: {
        type: Number,
        required: true,
    },
    },
    { timestamps: true}
);

export default mongoose.model("Booking", BookingSchema);