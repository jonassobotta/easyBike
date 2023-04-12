import { ActionType } from "../action_types"

interface SetDatesAction {
    type: ActionType.SET_DATES,
    payload: {
        startDate: Date,
        returnDate: Date
    }
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

export type Action = SetDatesAction | SetStoreAction | SetUserInfoAction;