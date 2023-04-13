import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
    booking: bookingReducer,
    images: imageReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;