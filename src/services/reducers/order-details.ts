import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  OPEN_ORDER_DETAILS_MODAL,
  CLOSE_ORDER_DETAILS_MODAL,
} from "../constants";
import {TOrderDetailsActions} from "../actions/order-details";

type TOrderDetailsState = {
  orderId: string;
  placeOrderRequest: boolean;
  placeOrderFailed: boolean;
  modalIsOpen: boolean;
}

export const initialState: TOrderDetailsState = {
  orderId: '',
  placeOrderRequest: false,
  placeOrderFailed: false,
  modalIsOpen: false,
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions): TOrderDetailsState => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST: {
      return {
        ...state,
        placeOrderRequest: true,
      }
    }
    case PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        placeOrderRequest: false,
        placeOrderFailed: false,
        orderId: action.orderId,
      }
    }
    case PLACE_ORDER_FAILED: {
      return {
        ...state,
        placeOrderRequest: false,
        placeOrderFailed: true,
        orderId: '',
      }
    }
    case OPEN_ORDER_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
      }
    }
    case CLOSE_ORDER_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: false,
      }
    }
    default: {
      return state;
    }
  }
};