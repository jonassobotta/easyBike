import Store from "../models/Store.js";
import Bike from "../models/Bike.js";

export const createStore = async (req, res, next) => {
  const newStore = new Store(req.body);

  try {
    const savedStore = await newStore.save();
    res.status(200).json(savedStore);
  } catch (err) {
    next(err);
  }
};
export const updateStore = async (req, res, next) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedStore);
  } catch (err) {
    next(err);
  }
};
export const deleteStore = async (req, res, next) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
    res.status(200).json("Store has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getStore = async (req, res, next) => {
  try {
    const store = await Store.findById(req.params.id);
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};
export const getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (err) {
        next(err);
    }
};
export const getStoreBikes = async (req, res, next) => {
  try {
    const store = await Store.findById(req.params.id);
    const list = await Promise.all(
      store.bikes.map((bike) => {
        return Bike.findById(bike);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};