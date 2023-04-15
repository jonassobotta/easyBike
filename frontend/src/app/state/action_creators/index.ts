import { ActionType } from '../action_types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

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

export const setCitybikeCount = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_CITYBIKE_COUNT,
            payload: count
        });
    }
}

export const setMountainbikeCount = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_MOUNTAINBIKE_COUNT,
            payload: count
        });
    }
}

export const setRacingbikeCount = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_RACINGBIKE_COUNT,
            payload: count
        });
    }
}
