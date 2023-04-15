import Bike from "../models/Bike.js";
import Store from "../models/Store.js";
import { createError } from "../utils/error.js";

export const createBike = async (req, res, next) => {
  const storeId = req.params.storeid;
  const newBike = new Bike(req.body);

  try {
    const savedBike = await newBike.save();
    try {
      await Store.findByIdAndUpdate(storeId, {
        $push: { bikes: savedBike._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBike);
  } catch (err) {
    next(err);
  }
};

export const updateBike = async (req, res, next) => {
  try {
    const updatedBike = await Bike.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBike);
  } catch (err) {
    next(err);
  }
};
export const updateBikeAvailability = async (req, res, next) => {
  try {
    await Bike.updateOne(
      {"_id" : req.params.id },
      {
        $push: {
          "bookedDays": req.body.bookedDays
        },
      }
    );
    res.status(200).json("Bike status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteBike = async (req, res, next) => {
  const storeId = req.params.Storeid;
  try {
    await Bike.findByIdAndDelete(req.params.id);
    try {
      await Store.findByIdAndUpdate(storeId, {
        $pull: { Bikes: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Bike has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBike = async (req, res, next) => {
  try {
    const bike = await Bike.findById(req.params.id);
    res.status(200).json(bike);
  } catch (err) {
    next(err);
  }
};
export const getBikes = async (req, res, next) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (err) {
    next(err);
  }
};

// GET BIKES in available dates
export const getBikesInAvailableDates = async (req, res, next) => {
  const startDate = new Date(req.body.startDate);
  const returnDate = new Date(req.body.returnDate);
  const bookedDays = getDatesBetween(startDate, returnDate);
  
  try {
    const bikes = await Bike.find({
      store: req.params.store,
      bookedDays: { $nin: bookedDays },
    });
    res.status(200).json(bikes);
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
