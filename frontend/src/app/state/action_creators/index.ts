import { ActionType } from '../action_types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';
import { Bike } from '../reducers/bikeReducer';

export const setStartDate = (startDate: Date) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_START_DATE,
            payload: startDate
        });
    }
};

export const setReturnDate = (returnDate: Date) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_RETURN_DATE,
            payload: returnDate
        });
    }
};

export const setStore = (storeId: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_STORE,
            payload: storeId
        });
    }
};

export const setUserInfo = (userInfo: {
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zip: string;
    country: string
    }) => {     
        return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_USER_INFO,
            payload: userInfo
        });
    }
};

export const setImageUrls = (urls: string[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_IMAGE_URLS,
            payload: urls
        });
    }
}

export const setSelectedIndex = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SELECTED_INDEX,
            payload: index
        });
    }
}



export const setCityBikes = (bike: Bike) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_CITYBIKES,
            payload: bike
        });
    }
}

export const setMountainBikes = (bike: Bike) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_MOUNTAINBIKES,
            payload: bike
        });
    }
}

export const setRacingBikes = (bike: Bike) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_RACINGBIKES,
            payload: bike
        });
    }
}
