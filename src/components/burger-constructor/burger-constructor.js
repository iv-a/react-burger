import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "../constructor-list/constructor-list";
import styles from "./burger-constructor.module.css"
import {BUN_TYPE, DND_TYPES, INGREDIENT_TYPE, PATH} from "../../utils/constants";
import Bun from "../bun/bun";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT, DELETE_INGREDIENT, SET_BUNS} from "../../services/actions/burger-constructor";
import {CHANGE_BUNS, DECREASE_INGREDIENT, INCREASE_INGREDIENT} from "../../services/actions/burger-ingredients";
import {placeOrderAction} from "../../services/actions/order-details";
import {v4 as uuid} from "uuid";
import {useHistory} from "react-router-dom";


export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.access);

  const history = useHistory();

  const [, dropTargetRef] = useDrop({
    accept: DND_TYPES.CARD_FROM_INGREDIENTS,
    drop(ingredient) {
      handleOnDrop(ingredient);
    }
  });

  const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients);
  const { bun } = useSelector(state => state.burgerConstructor);

  const totalCost = React.useMemo(() => {
    return constructorIngredients.reduce((acc, cur) => {
      if (cur.price) {
        return acc + cur.price;
      }
      return acc;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [constructorIngredients, bun]);


  function handleDeleteClick(uuid, _id) {
    dispatch({
      type: DELETE_INGREDIENT,
      uuid: uuid,
    });
    dispatch({
      type: DECREASE_INGREDIENT,
      _id: _id,
    })
  }

  function handlePlaceOrderButtonClick() {
    if (isAuthenticated) {
      const order = [bun._id, ...constructorIngredients.map((ingredient) => ingredient._id), bun._id];
      dispatch(placeOrderAction(order));
    } else {
      history.replace({
        pathname: PATH.LOGIN,
      })
    }
  }

  function handleOnDrop(ingredient) {
    const { _id, type } = ingredient;

    switch (type) {
      case INGREDIENT_TYPE.BUN: {
        dispatch({
          type: CHANGE_BUNS,
          _id: _id,
        });
        dispatch({
          type: SET_BUNS,
          bun: ingredient,
        });
        break;
      }
      default: {
        dispatch({
          type: INCREASE_INGREDIENT,
          _id: _id,
        });
        dispatch({
          type: ADD_INGREDIENT,
          ingredient: { ...ingredient, uuid: uuid() },
        });
        break;
      }
    }
  }

  return (
    <section className={`${styles.section} mt-25`} ref={dropTargetRef}>
      <ul className={`${styles.list}`}>

        {<Bun type={BUN_TYPE.TOP} />}
        <ConstructorList onDelete={handleDeleteClick} />
        {<Bun type={BUN_TYPE.BOTTOM} />}

      </ul>
      <div className={`${styles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">{totalCost} <CurrencyIcon type="primary" /></span>

        <Button type="primary" size="large" onClick={handlePlaceOrderButtonClick} disabled={!bun}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
