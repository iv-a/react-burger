export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UNSELECT_INGREDIENT = 'UNSELECT_INGREDIENT';

export const OPEN_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL = 'CLOSE_INGREDIENT_DETAILS_MODAL';

export function selectIngredient(ingredient) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}

export function unselectIngredient() {
  return {
    type: UNSELECT_INGREDIENT,
  };
}

export function openIngredientDetailsModal() {
  return {
    type: OPEN_INGREDIENT_DETAILS_MODAL,
  }
}

export function closeIngredientDetailsModal() {
  return {
    type: CLOSE_INGREDIENT_DETAILS_MODAL,
  }
}
