import { ActionType } from "../action_types"
import { Bike } from "../reducers/bikeReducer";

interface SetStartDateAction {
    type: ActionType.SET_START_DATE, 
    payload: Date
};

interface SetReturnDateAction {
    type: ActionType.SET_RETURN_DATE,
    payload: Date
};
interface SetStoreAction {
    type: ActionType.SET_STORE,
    payload: string
};

interface SetUserInfoAction {
    type: ActionType.SET_USER_INFO,
    payload: {
        name: string,
        email: string,
        phone: string,
        street: string,
        city: string,
        zip: string,
        country: string
    }
};

interface SetImageUrlsAction {
    type: ActionType.SET_IMAGE_URLS,
    payload: string[]
};

interface SetSelectedIndexAction {
    type: ActionType.SET_SELECTED_INDEX,
    payload: number
};

interface SetCitybikeCountAction {
    type: ActionType.SET_CITYBIKES,
    payload: Bike
};

interface SetMountainbikeCountAction {
    type: ActionType.SET_MOUNTAINBIKES,
    payload: Bike
};

interface SetRacingbikeCountAction {
    type: ActionType.SET_RACINGBIKES,
    payload: Bike
};

export type Action = SetStartDateAction | 
                     SetReturnDateAction | 
                     SetStoreAction | 
                     SetUserInfoAction |
                     SetImageUrlsAction |
                     SetSelectedIndexAction |
                     SetCitybikeCountAction |
                     SetMountainbikeCountAction |
                     SetRacingbikeCountAction;