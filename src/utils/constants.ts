import {
  TBunType,
  TIngredientTypeBun,
  TIngredientTypeMain,
  TIngredientTypeSauce,
  TInput,
  TString
} from "../types";

export const BUN: TIngredientTypeBun = 'Булки';
export const SAUCE: TIngredientTypeSauce = 'Соусы';
export const MAIN: TIngredientTypeMain = 'Начинки';

export const INGREDIENTS_TITLES = {
  BUN,
  SAUCE,
  MAIN,
};

export const BASE_URL: string = 'https://norma.nomoreparties.space/api';
export const WS_ALL_ORDERS_URL: string = 'wss://norma.nomoreparties.space/orders/all';
export const WS_USER_ORDERS_URL: string = 'wss://norma.nomoreparties.space/orders';

export const ENDPOINT: TString = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/password-reset',
  RESET_PASSWORD: '/password-reset/reset',
  USER: '/auth/user',
  REFRESH_TOKEN: '/auth/token',
  LOGOUT: '/auth/logout',
  GET_INGREDIENTS: '/ingredients',
  PLACE_ORDER: '/orders',
};

export const INGREDIENT_TYPE: TString = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main',
  NOT_BUN: 'ingredient',
};

export const KEY: String = 'Escape';

export const BUN_TYPE: TBunType = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

export const BUN_TITLE: TString = {
  TOP: '(верх)',
  BOTTOM: '(низ)',
};

export const SCROLL_PARAMS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start'
};

export const DND_TYPES: TString = {
  CARD_FROM_INGREDIENTS: 'CARD_FROM_INGREDIENTS',
  CARD_FROM_CONSTRUCTOR: 'CARD_FROM_CONSTRUCTOR',
};

export const INPUT: TInput = {
  TYPE: {
    EMAIL: 'email',
    TEXT: 'text',
    PASSWORD: 'password',
  },
  NAME: {
    EMAIL: 'email',
    NAME: 'name',
    PASSWORD: 'password',
    CODE: 'token',
  },
  PLACEHOLDER: {
    EMAIL: 'E-mail',
    PASSWORD: 'Пароль',
    NAME: 'Имя',
    RESTORE: 'Укажите e-mail',
    NEW_PASS: 'Введите новый пароль',
    CODE: 'Введите код из письма',
  },
};

export const TOKEN: TString = {
  REFRESH: 'refreshToken',
  ACCESS: 'accessToken',
};

export const ERROR: TString = {
  JWT_EXPIRED: 'jwt expired',
};

export const PATH: TString = {
  REGISTER: '/register',
  LOGIN: '/login',
  HOME: '/',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  ORDERS: '/orders',
  INGREDIENT: '/ingredients/:id',
  INGREDIENTS: '/ingredients',
  FEED: '/feed',
  ORDER: '/feed/:id',
  USER_ORDERS: '/profile/orders',
  USER_ORDER: '/profile/orders/:id',
  REACT_BURGER: '/react-burger',
};

export const STATUS = {
  CREATED: 'Создан',
  PENDING: 'Готовится',
  DONE: 'Выполнен',
};

export const EXPIRES = {
  expires: 1200
};