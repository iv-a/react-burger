import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import {ingredientDetailsReducer} from "./ingredient-details";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderDetailsReducer} from "./order-details";
import {accessReducer} from "./access";
import {wsReducer} from "./ws";
import {feedReducer} from "./feed";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  access: accessReducer,
  ws: wsReducer,
  feed: feedReducer,
});