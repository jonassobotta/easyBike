import { ActionType } from '../action_types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const setDates = (dates: {startDate: Date; returnDate: Date}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_DATES,
            payload: dates
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