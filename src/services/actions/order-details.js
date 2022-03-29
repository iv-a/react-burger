import {placeOrder} from "../../utils/api";
import {clearConstructor} from "./burger-constructor";
import {clearQuantity} from "./burger-ingredients";

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILED = 'PLACE_ORDER_FAILED';

export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_ORDER_DETAILS_MODAL = 'CLOSE_ORDER_DETAILS_MODAL';

export function placeOrderAction(order) {
  return function (dispatch) {
    dispatch({
      type: PLACE_ORDER_REQUEST,
    });
    placeOrder({ ingredients: order })
      .then((res) => {
        dispatch({
          type: PLACE_ORDER_SUCCESS,
          orderId: res.order.number.toString(),
        });
        dispatch({
          type: OPEN_ORDER_DETAILS_MODAL,
        });
        dispatch(clearConstructor());
        dispatch(clearQuantity());
      })
      .catch(() => {
        dispatch({
          type: PLACE_ORDER_FAILED,
        })
      })
  }
}

export function openOrderDetailsModal() {
  return {
    type: OPEN_ORDER_DETAILS_MODAL,
  }
}

export function closeOrderDetailsModal() {
  return {
    type: CLOSE_ORDER_DETAILS_MODAL,
  }
}