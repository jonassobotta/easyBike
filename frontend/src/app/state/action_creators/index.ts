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