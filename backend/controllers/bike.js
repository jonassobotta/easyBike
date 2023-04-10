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
      { "BikeNumbers._id": req.params.id },
      {
        $push: {
          "BikeNumbers.$.unavailableDates": req.body.dates
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