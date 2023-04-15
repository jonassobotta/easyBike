import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import imageReducer from "./imageReducer";
import bikeReducer from "./bikeReducer";

const rootReducer = combineReducers({
    booking: bookingReducer,
    images: imageReducer,
    bikes: bikeReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;