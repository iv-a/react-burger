import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import listStyles from "./constructor-list.module.css"

export default function ConstructorList({ ingredients }) {
  return (
    <div className={`${listStyles.container} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient) => {
          const { name, price, image, _id } = ingredient;
          return (
            <li className={`${listStyles.item}`}>
              <DragIcon type={"primary"} />
              <ConstructorElement text={name} thumbnail={image} price={price} key={_id} />
            </li>
          )
        })
      }
    </div>
  );
}