import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
    booking: bookingReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;