import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const BikeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        bookedDays: {
            type: [Date],
            required: true,
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: 'Store',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Bike', BikeSchema);