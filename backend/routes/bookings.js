import express from 'express';
import { 
    createBooking, 
    deleteBooking,
    getBooking, 
    getBookings, 
    updateBooking,
    getBookingBikes,
} from '../controllers/booking.js';
import Booking from '../models/Booking.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", createBooking);

//UPDATE
router.put("/:id", verifyUser, updateBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteBooking);

//GET
router.get("/find/:id", getBooking);

//GET ALL
router.get("/", getBookings);

//GET BIKES
router.get("/:id/bikes", getBookingBikes);

export default router;