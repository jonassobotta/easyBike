import { ActionType } from "../action_types";
import { Action } from "../actions/index";

export type Bike = {
    name: string;
    type: string;
    price: number;
    description: string;
    image: string;
    bookedDates: Date[];
    store: string;
}

const initialState = {
    cityBikes: [],
    mountainBikes: [],
    racingBikes: []
};

const bikeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_CITYBIKES:
            return { ...state, cityBikes: action.payload };
        case ActionType.SET_MOUNTAINBIKES:
            return { ...state, mountainBikes: action.payload };
        case ActionType.SET_RACINGBIKES:
            return { ...state, racingBikes: action.payload };
        default:
            return state;
    }   
}

export default bikeReducer;