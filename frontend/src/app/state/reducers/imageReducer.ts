import { ActionType } from "../action_types";
import { Action } from "../actions";
import StandardBikeImg from '../../assets/standard-bike.png';

interface ImagesState {
    urls: string[];
    selectedIndex: number;
}

const initialState = {
    urls: [
        StandardBikeImg,
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
