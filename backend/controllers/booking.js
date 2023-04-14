import Booking from '../models/Booking.js';
import Bike from '../models/Bike.js';
import Store from '../models/Store.js';

export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    } catch (err) {
        next(err);
    }
};

export const updateBooking = async (req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedBooking);
    } catch (err) {
        next(err);
    }
};

export const deleteBooking = async (req, res, next) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json('Booking has been deleted.');
    } catch (err) {
        next(err);
    }
};

export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
};

export const getBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};

export const getBookingBikes = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        const list = await Promise.all(
            booking.bikes.map((bike) => {
                return Bike.findById(bike);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const getBookingStores = async (req, res, next) => {
    try{
        const booking = await Booking.findById(req.params.id);
        const list = await Promise.all(
            booking.stores.map((store) => {
                return Store.findById(store);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

