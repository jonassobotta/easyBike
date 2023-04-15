import { ActionType } from "../action_types";
import { Action } from "../actions/index";

const count: number = 0;

const initialState = {
    citybikeCount: count,
    mountainbikeCount: count,
    racingbikeCount: count,
};

const bikeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_CITYBIKE_COUNT:
            return { ...state, citybikeCount: action.payload };
        case ActionType.SET_MOUNTAINBIKE_COUNT:
            return { ...state, mountainbikeCount: action.payload };
        case ActionType.SET_RACINGBIKE_COUNT:
            return { ...state, racingbikeCount: action.payload };
        default:
            return state;
    }
}

export default bikeReducer;