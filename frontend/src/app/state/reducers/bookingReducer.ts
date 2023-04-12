import { ActionType } from '../action_types';
import { Action } from '../actions/index';

type Dates = {
  startDate: Date;
  returnDate: Date;
};

type UserInfo = {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  country: string;
};

const initialState = {
  dates: { startDate: new Date(), returnDate: new Date() },
  storeId: "",
  userInfo: {
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    },
};

const bookingReducer = (state: {dates: { startDate: Date, returnDate: Date }; storeId: string; userInfo: UserInfo} = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_DATES:
      return { ...state, dates: action.payload };
    case ActionType.SET_STORE:
      return { ...state, storeId: action.payload };
    case ActionType.SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;
