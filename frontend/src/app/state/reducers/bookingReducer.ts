import { ActionType } from '../action_types';
import { Action } from '../actions/index';

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
  startDate: new Date(),
  returnDate: new Date(),
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

const bookingReducer = (state: {startDate: Date; returnDate: Date; storeId: string; userInfo: UserInfo} = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_START_DATE:
      return { ...state, startDate: action.payload };
    case ActionType.SET_RETURN_DATE:
        return { ...state, returnDate: action.payload };
    case ActionType.SET_STORE:
      return { ...state, storeId: action.payload };
    case ActionType.SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;
