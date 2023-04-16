import { ActionType } from "../action_types";
import { Action } from "../actions";
import CityBike from '../../assets/citybike.jpg';
import MountainBike from '../../assets/mountainbike.jpg';
import RacingBike from '../../assets/racingbike.jpg';

interface ImagesState {
    urls: string[];
    selectedIndex: number;
}

const initialState = {
    urls: [
        CityBike,
        MountainBike,
        RacingBike
    ],
    selectedIndex: 0,
};

const imageReducer = (state: ImagesState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_IMAGE_URLS:
            return { ...state, urls: action.payload };
        case ActionType.SET_SELECTED_INDEX:
            return { ...state, selectedIndex: action.payload };
        default:
            return state;
    }
}

export default imageReducer;
