import Booking from '../models/Booking.js';
import Bike from '../models/Bike.js';
import Store from '../models/Store.js';

export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body);
    
    try {
        const savedBooking = await newBooking.save();
        const updatedBikes = await Promise.all(
            savedBooking.bikes.map(async (bike) => {
                const bikeToUpdate = await Bike.findById(bike);
                const startDate = new Date(savedBooking.startDate);
                const endDate = new Date(savedBooking.endDate);
                const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)); // get the total number of days between start and end date
                const bookedDays = [];

                // add all the dates between start and end date to the bookedDays array
                for (let i = 0; i <= days; i++) {
                    const date = new Date(startDate);
                    date.setDate(startDate.getDate() + i);
                    bookedDays.push(date);
                }

                bikeToUpdate.bookedDays.push(...bookedDays);
                return await bikeToUpdate.save();
            })
        );
        res.status(200).json(savedBooking);
    } catch (err) {
        next(err);
    }
};

export const updateBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        await Promise.all(
            updatedBooking.bikes.map(async (bike) => {
                const bikeToUpdate = await Bike.findById(bike);
                const daysToAdd = getDatesBetween(updatedBooking.startDate, updatedBooking.endDate);
                const daysToDelete = getDatesBetween(booking.startDate, booking.endDate);
                bikeToUpdate.bookedDays = bikeToUpdate.bookedDays.filter((date) => {
                    return !daysToDelete.some((dayToDelete) => {
                        return date.getTime() === dayToDelete.getTime();
                    });
                });
                bikeToUpdate.bookedDays.push(...daysToAdd);
                await bikeToUpdate.save();
            })
        );

        res.status(200).json(updatedBooking);
    } catch (err) {
        next(err);
    }
};  

export const deleteBooking = async (req, res, next) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        
        await Promise.all(
            deletedBooking.bikes.map(async (bike) => {
                const bikeToUpdate = await Bike.findById(bike);
                const daysToDelete = getDatesBetween(deletedBooking.startDate, deletedBooking.endDate);
                bikeToUpdate.bookedDays = bikeToUpdate.bookedDays.filter((date) => {
                    return !daysToDelete.some((dayToDelete) => {
                        return date.getTime() === dayToDelete.getTime();
                    });
                });
                await bikeToUpdate.save();
            })
        );
        res.status(200).json('Booking has been deleted.');
    } catch (err) {
        next(err);
    }
};

function getDatesBetween(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

  

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

